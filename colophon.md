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

This site is set in _Alegreya_ by Huerta Tipográfica and _Montserrat_ by Julieta
Ulanovsky.  Monospaced text is set in _PT Mono_ by Paratype.

Icons originate from _Font Awesome_ by Dave Gandy and contributors.

## Tools

My primary computer is a 2009 Intel Xeon-based workstation running
Slackware Linux 14.2.

My primary laptop is a 2013 Chromebook Pixel LTE running the latest
release of Chrome OS.

My smartphone is a 2015 Samsung Galaxy S5 Active on the AT&T network.

My software toolset consists of:

<ul class='chain-columnar2'>
  <li>Developer Tools
    <ul class='chain-columnar2'>
      <li>Vim
      <li>Konsole
      <li>Z Shell
      <li>Git
      <li>Jekyll
      <li>Gulp
      <li>Rake
      <li>GCC
      <li>GDB
      <li>Valgrind
    </ul>
  </li>
  <li>Languages
    <ul class='chain-columnar2'>
      <li>Ruby
      <li>C++
      <li>JavaScript
      <li>Bash
      <li>Sass
      <li>Haml
      <li>Markdown
    </ul>
  </li>
  <li>Email and Internet
    <ul>
      <li>Claws-Mail
      <li>Google Chrome
      <li><tt>wget</tt>
    </ul>
  </li>
  <li>Privacy and Security
    <ul>
      <li>VeraCrypt
      <li>GnuPG
      <li>Kleopatra
    </ul>
  </li>
  <li>Online Services
    <ul>
      <li>GitHub
      <li>Gmail
      <li>Google Drive
      <li>Google Play Music
    </ul>
  </li>
  <li>Multimedia
    <ul>
      <li>GIMP
      <li>Audacity
    </ul>
  </li>
  <li>System
    <ul>
      <li><tt>rsync</tt>
      <li>SlackBuild
    </ul>
  </li>
</ul>

I also have several other computers, including a ThinkPad I use for work
and an iBook G4 I use for writing.

## Server Software

`vsdev.org` is hosted on a Linode virtual private server with Ubuntu Linux,
Apache, and MariaDB.  Other sites on this server are built on WordPress, but
this one is built with the Jekyll site generator.

## Production Notes

`vsdev.org` is prepared on my various computers, using Slackware Linux and a
cloud-based virtual server running Debian, with working state synchronized via
Git.  I upload changes to the site via `rsync`.

My Jekyll environment includes:

* Markdown: RDiscount
* Highlighting: Rouge
* Asset pipeline: External through Gulp.js
* Templates: Haml compiled to HTML via Gulp
* Scripts: CoffeeScript compiled by Gulp
* Stylesheets: Sass compiled by Gulp

The theme is based on a framework called _The Chain_, which is a Sass theme
framework I wrote for this site.  It uses the latest CSS technologies such as
flexbox and hyphenation to achieve a simple, yet sophisticated, appearance.

### Web standards

Web standards are vitally important.  If this site looks like crap in your
chosen browser, choose a different browser.
