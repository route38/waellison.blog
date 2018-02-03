---
layout: portfolio
title: "We Clean It CJS Website"
summary: "My first commercial website is for an area small business with a very personal connection: I am its first employee, and my parents run the thing."
description: "I discuss my first commercial website."
toc: true
---
[We Clean It Commercial Janitorial Services][wcicjs] is a janitorial company  based in Knoxville, TN, that provides office cleaning and floor care & maintenance services to clients in Knox and Blount Counties.  We Clean It CJS has been in business since 2006 and continues to provide the best service to Knoxville's most discerning clients.

I had the opportunity, as employee #1 of We Clean It CJS, to design the company's website, which went online in March 2014.  The website uses a variety of modern design methods and tools for fast development and compatibility with all of today's diverse array of devices.

[wcicjs]: http://excellentfloorcare.com

## Technologies

A variety of open source technologies made this website come to life:

* Jekyll with custom Sass and sitemap generator plugins
* Textile by RedCloth
* Haml with Textile content blocks for site content, compiled into HTML5
* Sass for abstracting markup, using CSS-style syntax, compiled into CSS3
* Content written by me, along with videos shot by company staff and photos taken by myself and other company staff
* Maintenance to be performed by me
* Hosting is through a combination of traditional web hosting and CDN:
  * DreamHost for the site
  * BootstrapCDN for Bootstrap and Font Awesome
  * Google Web Fonts for the font used throughout the site
* `jpegtran` and ImageMagick for optimizing JPEG images

The WCI CJS website was built using the Jekyll site generator for fitting each page to the overall template, and for simplifying development by allowing site content to be written in a combination of Textile and Haml.  The style sheets were written in SCSS, a variant of Sass, for the same reason.

I store the source code and live assets for the We Clean It site in a private Git repository hosted on Bitbucket, and I make extensive use of Bitbucket's issue tracker for storing and acting upon issues with the site.  I host the videos on YouTube to save bandwidth.

## Methods

Responsive web design was the cornerstone of this project.  I designed the site in such fashion as to look great on any device at any size.  Bootstrap made it particularly easy to use responsive principles since it includes features for mobile and a grid-based layout system that adapts to four different viewport sizes.  Media queries enable template-based design that transcends what was possible even just a few years ago, and that allowed me in this case to make the site in such fashion that it displayed all content intelligently and efficiently.  The content on the site includes text, images, and videos hosted through YouTube.

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