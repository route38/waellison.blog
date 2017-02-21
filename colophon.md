---
layout: portfolio
title: "Colophon"
description: "How tnwae.us was made, from server to surfer and from film grains to written posts. (Photo: tnwae.us)"
permalink: "/colophon/"
image: "/art/desk.jpg"
---

This site is written and produced by W. Anthony Ellison.  I do my own
~~stunts~~ code and take my own photos (for the most part).  Photos not
mine are attributed where they lie, unless their usage terms permit me
to get away with ~~being lazy~~ not doing so.

## Type

This site is set using _Cormorant Garamond_ by Christian Thalmann.
Monospaced text is set in _Source Code Pro_ by Adobe.

Icons originate from _Font Awesome_ by Dave Gandy and contributors.

## Tools

My primary computer is a 2013 Lenovo IdeaPad P400 Touch, which runs
Slackware Linux 14.2 and runs two solid-state drives, 16 GB of RAM, and
a quad-core Intel Core i7.

My workstation is a 2009 Intel X58 gaming PC with the Intel Xeon X5650
and 24 GB of RAM, featuring Slackware Linux 14.2 also.

My office's file server is a Q77 mini-ITX machine based on the Core
i3-2100 processor and running Debian Linux 8.7.

My work computer is a 2008 Lenovo ThinkPad X200 based on the Core 2 Duo
P8400 and running Windows 7 Pro SP1.

My toys include six PowerPC Macs (five of them laptops) and one 68k Mac.
They mostly run Apple operating systems, but my orange iBook G4 runs
Debian 8.7.

## Server Software

`tnwae.us` is hosted on a Linode virtual private server.  I use Ubuntu
Linux and Apache to host my sites, and MariaDB as my backing store for
WordPress.

## Production Notes

`tnwae.us` is prepared on my Slackware laptop.  I test for rendering
performance in Firefox and Chromium, which is usually enough.  I
synchronize changes via `rsync` and store my code on GitHub.

My Jekyll environment:

* Markdown: RDiscount
* Highlighting: Rouge
* Asset pipeline: External through Gulp.js
* Templates: Haml compiled to HTML via Gulp
* Scripts: CoffeeScript compiled by Gulp
* Stylesheets: Sass compiled by Gulp

I wrote the template myself, but it was, at least initially, largely
based on the default Jekyll template from the old 1.x branch.  Post text
is written in Markdown.

The theme is based on a framework called _The Chain_, which is a Sass
theme framework I wrote for this site.  It uses the latest CSS
technologies such as flexbox and hyphenation to achieve a simple, yet
sophisticated, appearance.

### Web standards

Web standards are vitally important.  If this site looks like crap in your
chosen browser, choose a different browser.
