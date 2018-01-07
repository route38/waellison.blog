---
layout: portfolio
title: "Colophon"
description: "How tnwae.us was made, from server to surfer and from film grains to written posts. (Photo: tnwae.us)"
permalink: "/colophon/"
image: "/art/heroes/desk.jpg"
---

This site is written and produced by W. Anthony Ellison.  I do my own
~~stunts~~ code and take my own photos (for the most part).  Photos not
mine are attributed where they lie, unless their usage terms permit me
to get away with ~~being lazy~~ not doing so.

## Type

This site is set in _Alegreya_ by Huerta Tipográfica and _Montserrat_ by
Julieta Ulanovsky.  Monospaced text is set in _PT Mono_ by Paratype.

Icons originate from _Font Awesome_ by Dave Gandy and contributors.

## Tools

I have gone to great pains as of early 2018 to simplify my computing
environment, though my work in this area is forever ongoing.  For legacy
software, I run three legacy operating systems, while for day-to-day
computing, I run two more, and I run two different server OSes as well.

My usual client OSes are Microsoft Windows 10 and Arch Linux.  Legacy systems
I use include Mac OS 9.2.2, Mac OS X 10.7.5, and Microsoft Windows 2000 SP4.
And on the server, I run Debian and Ubuntu Server.  I also use an iPhone that
runs the latest version of iOS 11.

As far as hardware goes, I run a custom-built desktop and server, two Apple
laptops, and two Lenovo laptops.  There's more information about my
[computers](/computers) elsewhere on the site.

My toolchain is larger than I thought it to be and consists of a mix of
proprietary and free tools.

<ul class='chain-columnar2'>
  <li>Operating Systems
    <ul>
      <li>Microsoft Windows 10
      <li>Microsoft Windows 2000
      <li>Debian Linux
      <li>macOS 10.7.5 "Lion"
      <li>Arch Linux
    </ul>
  </li>
  <li>Developer Tools
    <ul>
      <li>Sublime Text
      <li>NetBeans
      <li>Z Shell
      <li>Git
      <li>Jekyll
      <li>Gulp
      <li>Rake
      <li>gcc/gdb
    </ul>
  </li>
  <li>Email, Office, and Internet
    <ul>
      <li>Google Chrome
      <li>Microsoft Word 2016
      <li>Microsoft Excel 2016
      <li>Microsoft Outlook 2016
    </ul>
  </li>
  <li>Cloud Services
    <ul>
      <li>GitHub
      <li>Gmail
      <li>Microsoft OneDrive
      <li>Dropbox
      <li>Apple Music
    </ul>
  </li>
  <li>Multimedia
    <ul>
      <li>iTunes
      <li>CCCP
    </ul>
  </li>
  <li>3D and Photo
    <ul>
      <li>Adobe Photoshop CC
      <li>Adobe Lightroom CC
      <li>Adobe Illustrator CS2
      <li>Adobe DNG Converter
      <li>VueScan
      <li>DAZ Studio
      <li>DAZ Hexagon
      <li>DAZ Bryce
      <li>LuxRender
      <li>Luxus for Studio
      <li>NVIDIA Iray
    </ul>
  </li>
  <li>Mobile Apps
    <ul>
      <li>Apple Music
      <li>Simplenote
      <li>Safari
      <li>Strava
      <li>Microsoft Outlook
    </ul>
  </li>
  <li>Chrome Extensions
    <ul>
      <li>uBlock Origin
      <li>LastPass
    </ul>
  </li>
</ul>

## Server Software

VSDev is hosted by [Linode](https://linode.com) at their datacenter in
Dallas, Texas, centrally located for most of North America.  It is powered
by Ubuntu Server with Apache, MariaDB, and PHP7 though this site only needs
an HTTP server since it is built with Jekyll rather than WordPress.

## Production Notes

VSDev is prepared on a virtual machine running Debian, with working state
stored backed up to GitHub and my local file server.  Jekyll is the engine
powering the site, though I use an asset pipeline external to Jekyll via
the Gulp library for Node.  Most operations only require the use of Rake,
via [a custom Rakefile](https://github.com/tnwae/vsdev.org/blob/master/Rakefile),
to perform.  Deployment is performed through a shell script that only requires
`rsync` to run.

My Jekyll/Gulp environment includes the following libraries and conventions:

* Markdown: RDiscount
* Highlighting: Rouge
* Asset pipeline: External (via Gulp)
* Templates: Haml compiled to HTML5
* Scripts: CoffeeScript compiled to JavaScript
* Stylesheets: Sass compiled to CSS3

The theme is based on a framework called _The Chain_, which is a Sass theme
framework I wrote for this site.  It uses the latest CSS technologies such as
flexbox and hyphenation to achieve a simple, yet sophisticated, appearance.

### Web standards

Web standards are vitally important.  If this site looks like crap in your
chosen browser, choose a different browser.  (Seriously, they're all at
least decent these days, even Microsoft Edge.  There's no excuse not to
use a good browser.)  If you still use Internet Explorer, I will laugh
at you.
