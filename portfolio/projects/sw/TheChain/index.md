---
layout: portfolio
title: "The Chain"
summary: "Between the templates and your eyes are the CSS directives, helpfully gathered into a reusable collection called _The Chain_."
description: "I discuss my CSS framework."
toc: true
github: tnwae/TheChain
---
<div class='factbox col-md-4 col-xs-12 pull-right'>
  <p class='h4'>
    Fast Facts
  </p>
  <table class='col-xs-12'>
    <tbody>
      <tr>
        <td>Language</td><td>Sass</td>
      </tr>
      <tr>
        <td><abbr title='source lines of code'>SLOC</abbr></td><td>928</td>
      </tr>
      <tr>
        <td>Libraries</td><td>Bourbon</td>
      </tr>
      <tr>
        <td>OS</td><td>N/A</td>
      </tr>
    </tbody>
  </table>
  <p class='vs'>SLOC count was generated using <code>wc -l</code>.</p>
</div>

## About

_The Chain_ is a collection of CSS directives that facilitates the
appearance of [Route 38](/) and [vsdev](//vsdev.org).  It includes 14
modules for various aspects of site appearance.

## The Modules

0. `breakpoints` includes four breakpoints mapped to the device size
   breakpoints within Bootstrap.

1. `colors` defines the colors used throughout the site.  The site owner
   indicates site-specific shades of black, white, grey, and six "primary"
   colors: orange, purple, green, red, blue, and yellow.  This module
   also includes colors for social networking sites like Facebook and
   Twitter.

2. `columnar` defines a set of columns for use in columnar layouts.  A
   good example of this is the progrmaming language listing on my
   [resume](/resume).

3. `customizations` defines site-specific customizations for elements
   such as `div`, `a`, and `table`.

4. `gh-ribbon` defines the GitHub ribbon in pure CSS and HTML.  As _The
   Chain_ is oriented to use with Jekyll sites, it is invoked by including
   a directive with the Jekyll input file.  On Route 38, this directive
   indicates the URL to which the ribbon should link when clicked on,
   and directs the Liquid template for the page to include the Haml file
   defining the ribbon's markup.

5. `icons` defines the appearance of social media icons such as those in
   the site footer.

6. `mixins` defines code mixins used throughout the rest of the project.
   A _mixin_, in Sass parlance, refers to a code snippet that is
   included in the destination file when it is invoked.  Examples of
   mixins I use in this module include `noselect`, which disallows
   selection of a DOM element, and `chain-aspect-ratio`, which gives the
   appropriate height of an element to satisfy a given aspect ratio
   (e.g. for including YouTube videos in a responsive fashion).

7. `post-hero` is a module that defines the appearance of _hero images_
   for posts and pages.  The featured image in a WordPress site is an
   equivalent concept.  See the post "[Some Gathered
   Reflections...](/2014/04/reflections)" for an example of this in
   action, featuring the datacenter of the Dallas Cowboys NFL team.  As
   with `gh-ribbon`, `post-hero` is invoked via the use of directives in
   a Jekyll page's preamble.

8. `post-styles` includes styles unique to blog posts and like objects.

9. `site-color` includes only one directive, germane only to me: the
   predefined color of the website.  Route 38 Orange (`#EC7600` in HTML
   RGB) is the official color of this site.

10. `site-header` defines the styles for the site header.

11. `sticky-footer` makes the footer stick to the bottom on pages too
    short to push it to the bottom.  See [this blank page](blank.html) for
    an example.

12. `type` defines the typefaces and sizes used throughout the site.  I
    define the size, spacing, and alignment of text.

13. `utils` defines several utility classes for element-granluar
   styling, including <span class='chain-textsc'>small caps</span>,
   floated images, different text alignments, and pulling elements about
   the page to either the left or right margins.

## Dependencies

_The Chain_ includes one dependency: the excellent _Bourbon_ library,
also for Sass.  Bourbon isn't used very extensively throughout the
library, primarily for the `prefixer` mixin and a few other small bits.

## Licensing

_The Chain_ is licensed under the GPLv3 in the hope that someone will
find it useful.
