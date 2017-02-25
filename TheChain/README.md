The Chain
=========

Version 2.0 "Leaves That Are Green"

_The Chain_ is a Sass theming framework ~~built on Bootstrap~~ built on
flexbox and using Font Awesome, Bourbon, and Neat to make things look
their best.

It's 100% Sass.

Requirements
------------

* Font Awesome 3.x/4.x
* Sass 3.x
* Bourbon 4.x+
* Neat 3.x+
* An asset pipeline of some sort

Make a directory called `vendor` in the Chain root, and `cd` to it.
Then run `bourbon install` and `neat install` to install the Bourbon and
Neat dependencies.

You'll need an asset pipeline of some kind to run Chain through Sass.  I
recommend [Gulp](http://gulpjs.com) (requires Node) and the Gulpfile
located in the root of [the tnwae.us Jekyll sources](https://github.com/tnwae/tnwae.us) is a
decent example of one.  I suppose you could just run Sass on the base
file, _like a caveman_, `TheChain.sass`, but what fun is that?

I recommend using BootstrapCDN to pull in Font Awesome:

```haml
%link{href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet", type: "text/css"}
```

Then just let The Chain pull your site along:

```haml
%link{href: "/TheChain/TheChain.css", rel: "stylesheet", type: "text/css"}
```

For examples of The Chain in action, visit <https://tnwae.us>.


Documentation
-------------

The documentation is mostly in the source comments.  I've never really
need much, but I'll probably write some at some point.  Probably a good
way to kill an afternoon.


Attributions & Licensing
------------------------

The Chain includes the syntax CSS originally written by Jekyll creator
Tom Preston-Warner for his website.  This came with 1.x releases of
Jekyll, FWIW.

The Chain is licensed under the terms of the GNU General Public License,
version 3 or later.
