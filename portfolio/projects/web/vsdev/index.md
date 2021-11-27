---
layout: portfolio
title: "VSDev"
description: "My tech blog, the new home of what was once Route 38."
image: "//files.tnwae.us/cowboys-datacenter.jpg"
toc: true
---
[VSDev](//vsdev.org) is my tech blog.  I write about Linux and
programming primarily.  The full name of the site is "Very Special
Developments."

## Technologies

A variety of open source technologies made this website come to life:

* Jekyll with custom Sass and sitemap generator plugins
* Markdown
* Haml
* Sass
* Content written by me
* Hosting through Linode
* BootstrapCDN for Bootstrap and Font Awesome
* Google Web Fonts for the fonts used throughout the site
* `jpegtran` and ImageMagick for optimizing JPEG images

I store the sources at GitHub.

## Methods

Responsive web design was the cornerstone of this project.  I designed
the site in such fashion as to look great on any device at any size.
Bootstrap made it particularly easy to use responsive principles since
it includes features for mobile and a grid-based layout system that
adapts to four different viewport sizes.  Media queries enable
template-based design that transcends what was possible even just a few
years ago, and that allowed me in this case to make the site in such
fashion that it displayed all content intelligently and efficiently.
The content on the site includes text, images, and videos hosted through
YouTube.

Maintaining customer contact was important throughout the project, particularly as it came time to actually get the site online and ready for visitors.  The project took about two months to realize, but this was in the midst of a significant amount of extra cleaning work during which time I didn't have a lot of time off.  I worked with some degree of agility to keep the client in the loop about design decisions that I made as well as the content I had written.

I also, for the first time, maintained an undated diary of design decisions that I made, annotated with Command Prompt output and screenshots of the site as it progressed from sketches to final product.

## Design decisions

Some of the more pertinent design decisions I made are recapitulated here:

0. I interleaved Haml and Textile deliberately, using the `:textile` helper.  This decision was motivated by my desire to maintain control over layout while getting to be a little lazy with content markup.

1. I took image optimization very seriously.  By resizing images to fit in a 1536x1536 box, and using JPEG quality 80, I saved some 90% over the original image sizes, considerably reducing the amount of overhead.  The complete list of steps I took includes:

    0. Resizing images to fit within the aforesaid box.  `convert -thumbnail` was useful for this after trying it with one image in The GIMP.

    1. Optimizing the compression algorithms and removing extraneous data (e.g. EXIF data) using `jpegtran`.

    2. Using progressive JPEG rather than the conventional format.  This is to reduce the appearance of latency on slow connections, although it adds about 3% of the original file size.

2. I started out using raw HTML, but after trying Haml templates [here on Route 38](/2014/02/haml), I decided I had to use them for this project as well.
