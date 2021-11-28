---
layout: portfolio
title: "Colophon"
description: "How tnwae.us was made, from server to surfer and from film grains to written posts. (Photo: Me)"
permalink: "/colophon/"
image: "/art/heroes/desk.jpg"
---

## Type

This site is set in _Montserrat_ by Julieta Ulanovsky.

Icons originate from _Font Awesome_ by Dave Gandy and contributors.

## Tools

Since returning to the tech world, I have revamped my usual tech stack.
I am currently running Fedora Linux 34 as my main development OS and Windows
10 as my secondary home OS.  My file server runs Debian Linux via Hyper-V
on top of a Windows 2016 host.

As far as hardware goes, I run a custom-built desktop and server, two Apple
laptops, and two Lenovo laptops.  There's more information about my
[computers](/computers) elsewhere on the site.

My toolchain is larger than I thought it to be and consists of a mix of
proprietary and free tools.

<ul class='chain-columnar2'>
  <li>Operating Systems
    <ul>
      <li>Microsoft Windows 10</li>
      <li>Microsoft Windows Server 2016</li>
      <li>Fedora Linux 34</li>
      <li>Debian Linux 11</li>
    </ul>
  </li>
  <li>Developer Tools
    <ul>
      <li>Microsoft Visual Studio Code</li>
      <li>JetBrains PyCharm</li>
      <li>Z Shell</li>
      <li>Git</li>
      <li>Jekyll</li>
      <li>Gulp</li>
      <li>Rake</li>
      <li><code>pip</code></li>
      <li><code>venv</code></li>
    </ul>
  </li>
  <li>Email, Office, and Internet
    <ul>
      <li>Mozilla Firefox</li>
      <li>Mozilla Thunderbird</li>
      <li>Google Drive</li>
    </ul>
  </li>
  <li>Cloud Services
    <ul>
      <li>GitHub</li>
      <li>Gmail</li>
      <li>MEGA</li>
      <li>Apple Music</li>
    </ul>
  </li>
</ul>

## Server Software

_Route 38_ is hosted by Amazon Cloudfront.  I build the site using AWS Amplify,
which is by far the easiest way I've yet found to deploy a Jekyll site to the
cloud using continuous integration.

## Production Notes

_Route 38_ is prepared on my Fedora laptop using the remnants of my former
asset pipeline.  I use plain old HTML and CSS for the styling and layout
of the site, meaning that there are no nettlesome external dependencies like
there used to be.  The toolchain is thus condensible into just two major
dependencies: Ruby and Jekyll.

This workflow long predates my involvement with the Python language, but it
works (and quite well at that), so I've no intention of changing it solely in
the name of using a different language.

### Web standards

Web standards are vitally important.  If this site looks like crap in your
chosen browser, choose a different browser.
