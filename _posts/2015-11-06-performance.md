---
layout: post
title: "A Faster Route 38"
description: "Speeding up a small blog and making things load as fast as possible."
summary: "When one second is too slow, that's how you know the goal is pretty ambitious."
mood: speedy
music: "Slayer: War Ensemble"
---
If Route 38 had a Latin motto, it might very well be _Ambitiose sed ineptum_, a loose translation of _Top Gear_ motto "Ambitious but Rubbish."  That applies to the content, certainly, but it also applies to my former approach to performance.  Well, I'm fixing that today.

## Out with the old...

I saw with a combination of pride and dismay that Route 38 took about three seconds to load here at the house on Comcrap cable internet.  That was fine -- faster than Twitter, about as fast as Wikipedia, and faster than most of the SB Nation sites I read regularly.  Twitter, Wikimedia, and Vox all have dedicated performance teams and sites rich with multimedia and interactive assets.  Route 38 doesn't have either one, so three seconds felt a touch bloated.

I decided to start things off by shuffling the design around a little bit and removing some dead wood in the CSS, both by removing unnecessary Sass directives and by enabling compressed output via my `_config.yml`.  I unfortunately don't have hard numbers to go by, but `the-chain.css` only weighs 12 KB in the current site iteration -- a very small piece of a much smaller pie than the site used to be.  Shifting from a two-font design to only one font made a difference, too, since loading three fonts (Raleway 400, 700, and 400 italic) is faster and lighter than loading four or five.  Slimming down on icon fonts -- shrinking the truly encyclopedic _Font Awesome_ from more than 400 glyphs to about 30 -- saved a ton of bandwidth too, even if Font Awesome is loaded off a CDN.

I tried switching to a smaller subset of the wonderful jQuery library called _ZeptoJS_.  Unfortunately, it's not compatible with Bootstrap, as I discovered when testing the site on mobile.

Removing the faux-Windows-8 appearance from the code snippets took away about a kilobyte of style sheet and saved me an extra HTTP request on pages with code snippets.  I was also able to remove some scripts, which obviated the need for the Underscore library and its string plugin.  Voilà -- two more HTTP requests bite the dust.

By using `jpegoptim`, `pngcrush`, and ImageMagick to optimize and resize my images, I was able to get capable performance even on pages with images.

The Twitter feed in the new sidebar, neat though it was, required too much time to load, so out it went.

## Stuff that didn't change

I couldn't stop using Bootstrap, so it stayed in its hefty entirety, JavaScript and all.  Zepto and Bootstrap don't play well together, so I also had to keep jQuery.

## On the server side

By using .htaccess, I was able to add caching and compression to get content to the user even faster.  I'm using Apache because even though DreamHost offers nginx, I'm also running WordPress sites on this VPS and I'm too lazy to make nginx and WordPress play well together.

<script src="https://gist.github.com/tnwae/d2b16eb64b5e413b7e75.js"></script>

This is the `.htaccess` file I use at the site root.  Every file that's even remotely compressible is sent with Deflate compression, giving a very coarse average of 25% compression overall.  Stuff that isn't compressible isn't sent with compression.  To save on my own bandwidth, I discourage hotlinking by
instead sending [a funny picture of our former president](/art/hotlinking.jpg).

More important than compression is caching.  To put this simply: cached content loads faster, since there's less actual loading to be done, and the browser only has to load content for cache misses.  Since Apache sends entity tags with every response, any cache misses are obvious to the browser.  I expire JavaScript and CSS files after one month to make sure users always have the freshest versions of these, and I expire HTML after two months.  Everything else -- images, primarily -- expires after one year.  I do it this way for development and editorial reasons:  if I must correct a post for new information or to correct inaccuracies, it's prudent for the HTML to expire whether by reload or automatically, and given how quickly content goes stale on the modern Web, I think 2 months is a reasonable half-life for much of what I (plan to) write.  Scripts and style sheets expire after a month to enable rapid fixing of bugs and unintended behavior.

## Final tallies

My goal was to get the page to load in fewer than 1,000 milliseconds.  I tested this using the Pingdom Website Speed Test, which provides six testing sites in America, Europe, and Australia.  Melbourne was unavailable when I tested, but the results were as follows when I tested on October 19:

* Stockholm, Sweden: 870 ms
* San Jose, California: 1440 ms
* Dallas, Texas: 899 ms
* New York City, New York: 2040 ms
* Amsterdam, Netherlands: 1000 ms
* Knoxville, Tennessee (via Firebug): 670 ms!

Now I don't care who you are, that's impressive, right there.  The main index loads in less than 250 KB, another statistic I'm quite pleased with.