---
layout: post
title: "The blogger tribe"
description: "On how being a blogger includes you in a unique group of people."
---
So I had a job interview on 5 June, and I was struck when my prospective manager told me that he read my blog prior to the interview.  Frankly, I was flattered -- it's nice to know that you have readers, especially when the pairs of eyeballs pointing at your words are people who can
give you paying work.  I have always found the act of blogging to be particularly therapeutic when I need to think about something (at least since I started doing so), and I think I will continue to find it even more so now. It got me thinking, every bit of it, about how blogging brings people together.

I can, as I did Wednesday, sit in a room of Web guys and utter the words, "[Daring Fireball]," and ears perk up, even if they're Apple-bashers.  I like Gruber's style and enjoy his longer posts.  Even though I'm not a Microsoft guy, I still read and enjoy [Coding Horror], mostly because Jeff Atwood doesn't feel the need to apologetically pontificate about the greatness of Microsoft the company; he likes their technologies, which is just as well since it's my understanding that .NET isn't that bad.  (It still is a Microsoft product though.  Remember -- that's the same company that brought you Windows 8 and [Bob].) All bloggers, in my view, are important.  It makes no difference if they are old ladies writing about their knitting circle or Hemant Mehta [writing about atheism][friendly atheist], or some guy from Tennessee [writing about what's on his mind](http://rt38.org).   What blogging does is democratize the very notion of being heard.  The Internet itself did it in the 1990s, by way of early services like Geocities, Tripod, and Angelfire (any of those bring back memories?), but it took the ease of use of services like Blogger and LiveJournal to really make it accessible to the common person.  The answer, as with so many other things, lies in the technology itself.

[daring fireball]: http://daringfireball.net
[coding horror]: http://codinghorror.com
[bob]: http://toastytech.com/guis/bob.html
[friendly atheist]: http://patheos.com/blogs/friendly-atheist

### The old way

In the traditional workflow, you edit a raw HTML page and upload it to your Web server via FTP.  Take your pick of editors -- Netscape Composer, Microsoft FrontPage, and Adobe Dreamweaver are all period-appropriate.  (Yes, this is a dig at Dreamweaver, a product I particularly despise.) Now this is great if you're a Web developer -- you can write your raw HTML and have total control.  But you run into dissues.  Among them:

-   Maintaining even a remotely consistent site appearance was, to be frank, a pain in the ass unless you used frames or had a server that offered server-side includes or a similar feature. SSI is, to quote [the Lighttpd documentation](http://redmine.lighttpd.net/projects/1/wiki/docs_modssi), "a very old and cheap way" to do dynamic content.  Remember, you're on Geocities or Tripod, so you won't even have that.
-   You could've used frames, which used to be commonplace, but frameset compatibility between browsers was (to say the least) spotty, not to mention that you have to use a frameset doctype.  Also, nothing brands your site as 1999-vintage more quickly than frames.
-   Managing content was tricky too, as it was all too easy to create a rat's nest of tangled-up links and split hairs, not to mention getting a link wrong or something like that.  (In a site with 1000 pages, if each page links to each other page (a pathological case), that's 999x1000 = 999,000 links.  Assuming each link is 45 characters long, that's 44,955,000 characters.  A typist with a 3% error rate will, over the life of the website, mistype 1,348,650 of those characters, or 29,970 of the links.  That's a lot of lost productivity.)

Static sites (or dynamically generated static sites) are, ironically, making a comeback to address the issues of performance and concurrency, not to mention that you can basically write an entire web app in the browser and do everything in JavaScript.  Put plainly, it's a lot easier to solve the C10M problem (that's not a misprint; it's not difficult to envisage a top website having ten million concurrent users) if you only have to solve it for HTTP and not also for databases and a server-side scripting language.

### The new way

The "new" way (now in its teenage years) is to use a scripting language on the server side and bolt everything together with a database.  Relational databases operate on mathematical set theory, so they're very powerful and allow for much greater complexity than you ever imagined.  Naïvely, we could conceive of a blog using just seven database tables. ((WordPress uses many more, and it's not difficult to envision a CMS that uses the same structure presented below with sets of tables for different post types -- or taxonomies in WordPress-speak.))

1.  A user table, obviously to hold user information, indexed by user name
2.  A table of posts, cross-referenced[^xref] to user name (for authorship) and indexed by post id
3.  A table of tags, indexed by numerical id
4.  A table of categories, indexed by numerical id
5.  A table of comments, indexed by numerical id and cross-referenced to post ids
6.  A category-to-post normalization table, with each relationship indexed by a numerical id
7.  A tag-to-post normalization table, with each relationship indexed by a numerical id

You can insert records into a database using standard SQL, and you can interact with a database server over standard TCP/IP (MySQL uses port 3389 by default, in case you might have been wondering.) just like any service on the Internet.  This means you can interact with a database programmatically instead of having to key in queries yourself.  (Can you imagine -- "INSERT INTO ..." every time you wanted to write a new post?) So the technology is there on the server side, obviously.  Websites like Amazon and eBay had been using it for years to support the earliest ecommerce services.  But what about on the client side?  Well, as it happens, the features are there, too.  HTTP, the protocol that makes the modern Web possible, has features built in to make it very possible indeed to dynamically manage content, and the Common Gateway Interface -- CGI -- means that any language implementing it can take advantage.  First, the HTTP background.  There are four basic types of HTTP requests: GET, POST, PUT, and DELETE.  These map naturally to the four CRUD operations all databases support:

-   **create** = POST
-   **read** = GET
-   **update** = PUT
-   **delete** = DELETE

This is something of an oversimplification and you should probably read [the relevant RFC][rfc 2616] regarding the HTTP/1.1 standard, especially since HTTP offers more verbs than those listed here.  However, the mapping to CRUD operations is good enough for our needs.  We can use forms in HTML 4 (yes, good old HTML 4) to achieve the desired result of editing content on the client and saving it on the server.  It all begins the same way: with `<form action="post" ...>`. In reality, that form -- a text area with a submit button -- is all you need on the client side.  You'd want more than that, so you can categorize and tag your posts, save drafts, include images, provide a WYSIWYG editor, and other neat features.  Add enough features to something like that and you end up snowballing into a piece of software like WordPress.

[rfc 2616]: http://www.w3.org/Protocols/rfc2616/rfc2616.html

#### Postscript

I find it very funny that the Web has come full circle and many large sites serve static HTML for the purpose of raw speed.  It was, indeed, speed that motivated me to switch to Jekyll and cancel my hosting account.

### A natural evolution for the Web?

HTTP was obviously made for manipulating data on the server; if it weren't there'd be no verbs mapping to the CRUD operations.  So it seems natural in retrospect that smart developers would come up with smarter ways of manipulating data in the client-server relationship we know and love.  For many technical users, and the majority of nontechnical ones, using a CMS is second nature.  Wikis, in particular, are a style of CMS enabled by this very model; it makes no sense to have a static wiki, as that is a contradiction in terms.  While wikis, particularly Wikipedia and Wikileaks, attract [controversy] and [criticism], they are indisputably a big part of the fabric weaving the Web into what it is today.  In the game of Web publishing, GeoCities was first on the block in 1994, but Blogger [in 1999] made it vastly easier; no longer did one have to know HTML just to make a website.  Blogger proved good enough for Google to take ownership, and it was there that I myself began blogging in 2009.  Other web publishers are now gaining currency, like the billion-dollar company Tumblr (now a subsidiary of Yahoo) and the smaller SquareSpace.  LiveJournal is a shadow of the juggernaut it used to be, but a small and dedicated community keeps it going.  (I used to maintain a journal there.)  The discerning and savvy blogger has several options available to her, ranging from traditional CMSes like WordPress and Movable Type (tried 'em both, they both suck) to paid options like TypePad (used by, among others, Seth Godin and Greta Christina).  Then there are the more-exotic options like Jekyll and its forked partner in crime, Octopress.

[controversy]: http://en.wikipedia.org/wiki/WikiLeaks
[criticism]: http://en.wikipedia.org/wiki/Criticism_of_Wikipedia
[in 1999]: http://web.archive.org/web/19991012022531/http://blogger.com/

### Tribalism?

It may seem strange to think of bloggers as being a tribe.  It's a diverse enough hobby -- and paying job -- that lumping all bloggers into one category is enormously unfair to all involved.  Even the broad categories, like photobloggers and vloggers, is unfair to the tremendously nuanced fields of photoblogging and vlogging, not to mention all the different kinds of text blogs there are. But I think bloggers generally are a tribe, one of modern storytellers.

We write from our minds, or our hearts, or both.  For those of us who speak the language of exposure, focal length, and aperture, phlogging is the art form whereby we use a camera as our pen, letting our pictures speak for us.  For those who favor the spoken word, there's vlogging and podcasting, two art forms more akin to television and radio than photography revues or magazines.  Most importantly for me, though, is the fact that being a strong introvert makes it exhausting (though less difficult than it used to be) to deal with flesh-and-blood humans.  For us, writing is the best medium because it gives us the on-demand lucidity that extroverts enjoy when they speak.  I never really "got" vlogging, and I suspect that that's the reason why.  Before I started doing it, I didn't really understand blogging, either.  When I started, though, I found my voice, and that voice has been beneficial ever since.

It's hard to pin down exactly what my voice is, at least for me as the person generating it.  I drill down, with the same intellectual precision I use in all endeavors, to talk about what's on my mind.  I write it down, both for my own edification and so I can take questions after the lecture.  That's how I present, how I program, and how I write.  Writing is the first derivative of a person's thought process -- and my thought process is hard to pin down in the absence of something like writing to make the ideas calm down enough.

### Notes

[^xref]: Using the usual foreign key constraint and joins.
