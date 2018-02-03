---
layout: portfolio
title: "Bearded Axe"
summary: "The continuation of an old college project leads to rekindling my love of C++ programming."
description: "I discuss a reboot of an old college project."
toc: true
github: tnwae/bearded-axe
---
<div class='factbox col-md-4 col-xs-12 pull-right'>
  <p class='h4'>
    Fast Facts
  </p>
  <table>
    <tbody>
      <tr>
        <td>Language</td><td>C++</td>
      </tr>
      <tr>
        <td><abbr title='source lines of code'>SLOC</abbr></td><td>1,129</td>
      </tr>
      <tr>
        <td>Libraries</td><td>Mesa, FreeGLUT</td>
      </tr>
      <tr>
        <td>OS</td><td>Linux</td>
      </tr>
    </tbody>
  </table>
  <p class='vs'>SLOC count was generated using David A. Wheeler's 'SLOCCount' and is accurate as of revision <code>219b2aa</code>.</p>
</div>

## Overview

Bearded Axe is the object-oriented continuation of [The Render Thing][trt], the rendering thingy I wrote in college.  Bearded Axe is written in C++ and is designed to use the features the language provides to make programming easier.  In particular, I make use of C++'s rich class system, templates, operator overloading, and backward compatibility with older C code.

[trt]: /portfolio/projects/utk/trt

## Pertinent Parts

The component I'm proudest of is the 3D vector library, `BA::Vector3`, which is a templatized vector library that takes advantage of operator overloading to make vector mathematics in three dimensions very easily accessible.

Bearded Axe is essentially a rendering engine that rides on top of OpenGL.  It offers the programmer several rendering primitives and will soon offer mesh files read from disk as well.  At present, Bearded Axe only supports fixed-functionality rendering, which is to say that it doesn't yet support using shaders to program the GPU.  This support is easy to add, however, and will be in a future revision.

## Future Directions

I'd like BA to be the basis of an engine that can be scripted using an embeddable language like Lua, JavaScript, Ruby, Tcl, or Python.  (Ruby would obviously be my first choice.)

I want BA to do the things I couldn't make my college renderer do; without the time pressure of college, this should prove easier.

I still have yet to add mesh support to BA.  I'm after a good library that'll do the heavy lifting in a better format than OFF.

## On the Web

Bearded Axe's homepage is [its GitHub project page](https://github.com/tnwae/bearded-axe), where I maintain documentation and code.