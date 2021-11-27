---
layout: portfolio
title: "A Hacker Hikes the Smokies"
summary: "With blogging a familiar art form to me, I established a hiking blog in spring 2014 as a way of chronicling my adventures on the trails.  My favorite place to hike is the Great Smoky Mountains National Park, hence the name of the site."
description: "I discuss my hiking and camping blog."
toc: true
---
[A Hacker Hikes the Smokies][ahhts] is my hiking and camping blog, where I discuss my adventures on the trails of East Tennessee, in particular at the Great Smoky Mountains National Park.  I took up the time-honored hobby in early 2014, and I've been enamored with the idea of blogging about basically since I started doing it.

The use of the word "hacker" in the site name comes from the definition in RFC 1392:

> A person who delights in having an intimate understanding of the internal workings of a system, computers, and computer networks in particular.
>
> -- [RFC1392], The Internet Users' Glossary

I find sense 7 of the definition in the Jargon File to be quite applicable to outdoor hobbies:

> One who enjoys the intellectual challenge of creatively overcoming or circumventing limitations.
>
> -- [jargon file: hacker], sense 7

[ahhts]: http://ahackerhikesthesmokies.com
[rfc1392]: http://tools.ietf.org/html/rfc1392
[jargon file: hacker]: http://www.catb.org/jargon/html/H/hacker.html

## Technologies

I reverted to an older workflow in making AHHTS a reality:

* WordPress with a long list of plugins
* Disqus comments
* Someday soon, a custom theme
* Content written by me, along with photographs and videos taken by me
* Maintenance to be performed by me
* Hosting exclusively through DreamHost, until I configure the jsDelivr plugin and my custom theme for dependencies
* `jpegtran` and ImageMagick for optimizing JPEG images

I opted to use WordPress for the simplicity it offers; with Jekyll, I must use version control, an editor, and a litany of other software.  There is no such requirement with WordPress; I can blog from any computer with a Web browser, or even from my mobile phone.

There's an ulterior technical motive here, too: using WordPress, combined with my proclivity to customize and program, will enable me to add that competency to my resume.

## Methods

When I design my custom theme, responsive design will be the cornerstone, as it is with all my frontend projects.  I'll be using Bootstrap 3 and Font Awesome 4 along with what PHP I'll need to write, but I'll forego the use of any CSS preprocessors (unless I find a good way to cache compiled Sass) or advanced template systems (e.g. Haml).

Outside of this, there's not a whole lot of ground-shattering things going on technically here: my focus is on going out into the mountains to generate content, then chronicle it.
