---
layout: portfolio
title: "PYSFR"
summary: "I wrote a C++ program to read ancient video game save files."
description: "I discuss a program to decipher old video game data."
toc: true
image: '//files.tnwae.us/heroes/photogdesk.jpg'
---
<div class='factbox chain-wide-3 chain-right'>
  <h4>
    Fast Facts
  </h4>
  <table>
    <tbody>
      <tr>
        <td>Languages</td><td>C++, Markdown</td>
      </tr>
      <tr>
        <td><abbr title='source lines of code'>SLOC</abbr></td><td>1528</td>
      </tr>
      <tr>
        <td>Libraries</td><td>None</td>
      </tr>
      <tr>
        <td>OS</td><td>Any little-endian OS</td>
      </tr>
      <tr>
        <td>Site</td><td><a href='//github.com/tnwae/pysfr'>GitHub</a></td>
      </tr>
      <tr>
        <td>License</td><td>Unlicense (Public domain)</td>
      </tr>
    </tbody>
  </table>
  <p class='vs'>SLOC count was generated using David A.
  Wheeler's 'SLOCCount' and is accurate as of August 12, 2017.
</div>

## Overview

As a boy, I was an avid player of the Game Boy classic _Pokémon Red
Version_.  This game captured my imagination and I've held a minor
fascination for the game ever since.  That fascination returned in the
form of the PYSFR, or the "Pokemon Yellow Save File Reader."  My goal
initially was simply to write a proof-of-concept program for reading
save files; now, I hope to crowdsource as many saves as I can from
points within the game and use them to help me fully understand the save
format and generate arbitrary save files.  There's no real motivation
aside from "because I can."

## History

PYSFR started life during a Gentoo experiment where I endeavored to stay
on the console for an afternoon and not use any X11 programs.  (I was
also busy compiling X11 and MATE, as I recall.)  I decided to use the
documentation written and maintained by the community to write a program
that made use of it by reading certain parts of the save file.

I started off working with the _Yellow Version_, but soon I discovered
that the other two games of the first generation had the exact same save
data structure.  The name lingers as an artifact of my original efforts.
PYSFR started life as a C program, but I started adding a thin veneer of
C++ to make further work easier, and to continue my mid-2013 effort at
reviving my C++ skills.  It still reads very much like a C program,
however.

I'm also working on a C# version of the program to increase my skills
with C# and with .NET.  PYSFR# has actually shown me that C# is a
remarkably pleasant language to work in, and that .NET isn't so bad as
far as class libraries go.

## On the Web

The GitHub page is [tnwae/pysfr](https://github.com/tnwae/pysfr).

I wrote a series of five blog posts about this program's workings, which
you can read via the links below:

* Part 1: [Intro](/2013/12/pysfr-part-1)

* Part 2: [Charset](/2013/12/pysfr-part-2)

* Part 3: [Decoders](/2013/12/pysfr-part-3)

* Part 4: [Interpreting party data](/2013/12/pysfr-part-4)

* Part 5: [Interpreting party data, part 2](/2013/12/pysfr-part-5)

The [manual][pysfr-manual] is also reasonably informative, albeit still incomplete.

[pysfr-manual]: https://github.com/tnwae/pysfr/blob/master/doc/Manual.md
