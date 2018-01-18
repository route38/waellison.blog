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

As far as software goes, I install this minimal base on every computer I
use on a regular basis, irrespective of OS:

* GNU Emacs (24.3 or later)
* LibreOffice (Linux) or Microsoft Office (Windows/Mac)
* Mozilla Thunderbird
* Google Chrome
* iTunes (Windows/Mac)
* f.lux
* GnuPG
* PuTTY (Windows only)
* GIMP
* Inkscape

In addition, some other tools I use include the Ruby scripting language,
`zsh` interactive shell, the usual Unix command line tools, and -- only
on my development server -- Jekyll and Gulp.

My primary computer is a 2009 Intel X58 workstation with the Intel Xeon
X5650 processor and 24 GB of RAM, running Slackware Linux 14.2 and
Windows 10 Pro.  Having tried it, I rather like the Windows Subsystem
for Linux, though I still prefer running Linux directly rather than
using a compatibility layer.  The ample memory makes editing large
images and working with virtual machines a breeze.

My primary laptop is a Google Chromebook Pixel, the 2013 one, running
Arch Linux.  It has an Intel Core i5-3427U processor and 4 GB of RAM.

My vinyl ripping station and LaTeX toaster is a 2008 MacBook, running an
Intel Core 2 Duo T8100 processor and 4 GB of RAM with Mac OS X 10.7.5
"Lion."

My dedicated Windows box (for MS Office, Edge, MSIE, and iTunes) is a
Lenovo ThinkPad X200 based on the Intel Core 2 Duo P8600 and running
Windows 10.

Lastly, my file server is a Q77-based mini-ITX computer based on the
Intel Core i3-2100 processor and running Debian Linux 8.7 with
`netatalk` and Samba file sharing.

My toys include several PowerPC and 68k Macs, all of them running old
versions of OS X and pre-OS X operating systems.

## Mobile Stuff

My cell phone is an Apple iPhone 6S running the beta of iOS 11.

My usual tablet is a Nextbook Flexx 10.1 running Windows 10.  I also
have a 2013 Nexus 7 running Android 6, and I occasionally carry a
Nintendo 3DS XL.

I also have way too many cameras.

## Server Software

`tnwae.us` is hosted on a Linode virtual private server.  I use Ubuntu
Linux and Apache to host my sites, and MariaDB as my backing store for
WordPress.

## Production Notes

`tnwae.us` is prepared on my cloud development server.  I test for rendering
performance in Chrome and Firefox, and in Mobile Safari on iOS 11.

My Jekyll environment:

* Markdown: RDiscount
* Highlighting: Rouge
* Asset pipeline: A Gulpfile external to Jekyll
* Templates: Haml
* Scripts: CoffeeScript
* Stylesheets: Sass
* Deployment: `rsync`
* Build system (such as it is): Rake

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
