The Chain
=========

_The Chain_ is a Sass theme framework built on Bootstrap and using Font Awesome to make my
websites look amazing.

It's 100% Sass, 100% of the time.

Requirements
------------

* Bootstrap 2.3.2
* Font Awesome 3.2.1
* Sass
* Bourbon

I recommend [Prepros](//github.com/sbspk/prepros) (Mac/Windows) for processing Sass, since it includes Bourbon.  I further recommend using BootstrapCDN to include Bootstrap and Font Awesome:

```html
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet">
```

If you need to pull in the Bootstrap scripts, you can do it through BootstrapCDN as well, at the end
of your `<body>`:

```html
<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js" type="text/javascript"></script>
```

Then just let The Chain pull your site along:

```html
<link rel='stylesheet' href='/css/the-chain.css' type='text/css'>
```

For examples of The Chain in action, visit <http://rt38.net> or <http://rt38.org>.

Attributions
------------

The Chain includes the syntax CSS originally written by Jekyll creator Tom Preston-Warner for his
website.  
