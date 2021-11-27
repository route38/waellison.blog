---
layout: portfolio
title: "coderwall.rb"
summary: "Coderwall is social networking for techy types.  I wrote a program to digest profile information from the site in Ruby."
description: "I discuss my badge display program for Coderwall."
toc: false
---
<div class='factbox col-md-4 col-xs-12 pull-right'>
  <p class='h4'>
    Fast Facts
  </p>
  <table class='col-xs-12'>
    <tbody>
      <tr>
        <td>Language</td><td>Ruby</td>
      </tr>
      <tr>
        <td><abbr title='source lines of code'>SLOC</abbr></td><td>75</td>
      </tr>
      <tr>
        <td>Libraries</td><td>CGI</td>
      </tr>
      <tr>
        <td>OS</td><td>N/A</td>
      </tr>
    </tbody>
  </table>
  <p class='vs'>SLOC count was generated using David A. Wheeler's 'SLOCCount' and is accurate as of revision <code>b072892</code>.</p>
</div>

## Overview

[Coderwall][coderwall] is a social network for programmers and other techy types, and I maintain a profile there as [user tnwae](http://coderwall.com/tnwae).  Profile information is available in JSON format, making it very easy to parse and use in whatever projects strike one's fancy.

[coderwall]: http://coderwall.com

## Synopsis

I wrote a program in Ruby that uses plain CGI to get the information from Coderwall and display it to the user.  As far as quick hacks go, this one's actually all right: you access `coderwall.rb` on a standard web server, provide one GET parameter in `user`, and watch the sparks fly.  [My badge case](http://work.rt38.net/coderwall.php?user=tnwae) is a case in point, although the badges are slightly off since it fails to account for the fact that I moved most of my work from GitHub to Bitbucket.  The `describe` GET parameter displays the badges' descriptions.  See it below in an iframe, showing off jQuery creator John Resig's badges.  (Loading may take some time; it's on shared hosting, running off my personal RVM, and so it's quite slow.)

<iframe class='col-xs-12' src='http://work.rt38.net/coderwall-rb/coderwall.rb?user=jeresig'></iframe>

I've also written this simple program in PHP and with Ajax.