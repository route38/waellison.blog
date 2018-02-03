---
layout: portfolio
description: "A 3D rendering program."
title: "The Render Thing"
image: "/art/perkins.jpg"
toc: true
---
<div class='factbox chain-wide-3 chain-right'>
  <h4>
    Fast Facts
  </h4>
  <table>
    <tbody>
      <tr>
        <td>Language</td><td>C</td>
      </tr>
      <tr>
        <td><abbr title='source lines of code'>SLOC</abbr></td><td>1,811</td>
      </tr>
      <tr>
        <td>Libraries</td><td>Mesa OpenGL, FreeGLUT</td>
      </tr>
      <tr>
        <td>OS</td><td>Linux</td>
      </tr>
    </tbody>
  </table>
  <p class='chain-vs'>SLOC count was generated using David A. Wheeler's 'SLOCCount'.</p>
</div>

## About the project

The mission of the course was to teach graphical programming by
providing examples and setting goals such as getting a blank screen up
(harder than it looks; it takes using a few OpenGL calls), rendering a
wireframe, and gradually adding rendering features to the program.

## Scope of the work

Part of this mission was learning and using the GL Shading Language to
do lighting, texturing, and other effects instead of using the OpenGL
fixed functionality pipeline.  The GLSL is rather like C in terms of
syntax, but instead of the CPU, it executes upon the GPU.

Shader programs run directly on the GPU and as such, they provide
greater control over rendering performance than using the
fixed-functionality components of OpenGL.  As an example, to map a
texture to an object, one could use a `glTexture` call, which has
several option flags that govern its operation.  However, any
functionality or appearance changes not included in those option flags
are unavailable unless a shader is written.  When you opt to write a
shader, though, you have to provide _all_ the functionality; shader
programs subvert completely the OpenGL fixed-functionality pipeline.
It's rather like the difference between buying a modular home and buying
lumber from Lowe's.

## Result

Some of the lessons I learned at the time:

0.  String handling in C is positively atrocious.

1.  I really should have approached the program in a test-driven manner where appropriate.

2.  GDB is mighty nice unless you're debugging a shader program.  Then it's mighty useless.

Upon closer inspection, though, the takeaways were a little less obvious.

Language choice may seem like a minor matter, but it's actually vitally
important to the success or failure of a project.  I spent probably half
the project writing things in C that would have been more easily done in
C++ in a third of the time if not less; the other half of the time, I
was wrapping my head around complex data structures when a network of
classes would've been easier to reason about.  Those realizations
jointly motivated me to start up the Bearded Axe project in early 2013.

More importantly, the code felt bloated and inefficient, and it was
difficult near the end to add new features.  In the rush to get done
with the final project, I threw caution and prudent engineering to the
four winds and slapped on layer after layer of gross hacks.  Some of the
gross hacks were needed due to the awkward geometry of the meshes
provided to us (in particular, one mesh used a left-hand coordinate
system instead of a right-hand one); others were needed due to my
relative inability as a graphics programmer.  Reading _The Pragmatic
Programmer_ should have been part of my extracurricular readings, but it
wasn't.

To continue my analogy about wood and houses, I bought my lumber from a
lumber yard (doing most things myself) but devised the house plans as I
went along.  For example, I wrote a series of directives in a file,
stopping short of creating a full language, to describe the elements of
the scene (textures, objects, lighting, etc.) and really should have
used a parser generator of some sort to read it in.  Instead, I wrote my
own parser, which was yucky hack piled upon yucky hack.  The time I
spent delousing the parser I rolled could have been better spent
learning the intracacies of Yacc.

