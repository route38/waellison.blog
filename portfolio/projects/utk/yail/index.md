---
layout: portfolio
title: "Yail: Another Instructional Language"
image: "//files.tnwae.us/heroes/photogdesk.jpg"
---

Yail was a proposed computer programming language designed for
instructing people in the art of programming.  Yail's design inherited
partly from Ada and partly from modern scripting languages.  The project
constituted a paper and a Yacc grammer, both submitted in completion of
the requirements of Computer Science 494, Compilers, during Spring 2009.

## Fast Facts

Collaborators
: Myself

When
: Spring 2009, throughout the semester

Brief description
: A descriptive paper and primitive Yacc grammar detailing the intended
  design of a programming language designed for instructional and general
  use.

Scope
: Designing a computer programming language and implementing a very
  basic parser for it using the Yacc compiler-compiler, and writing a
  paper detailing the design of the language.

Result
: A grade of A in the course.

Lessons Learned
: The design and implementation of a computer programming language, and
  how to describe them in the form of a written paper.

## About the project

The abstract of the paper:

> Yail is a programming language designed for instructional pruposes.
> It is designed specifically for teaching non-programmers how to
> program, and it is a suitable language to use before introducing more
> complex languages such as C++ and C.
>
> Yail includes many characteristics from disparate languages, primarily
> from Ada, Pascal, and C.  It borrows from Lisp the notion of optional
> and rest parameters, as well as the notion of records and packages
> from Ada.  Like many other high-level languages, Yail is
> garbage-collected.
>
> Yail aims to be the small language escaping from the vast bulk of Ada.

## Scope of the work

The language and its runtime were described, including the simple type
system, operator precedence, subroutines, lambdas, procedures, argument
lists, passing conventions, control structures, program structure, and
aggregate data types.

The first program to write is the same in all languages:

    use yail'io.

    proc hello is
    begin
      printLine["Hello World!"].
    end hello.

We compute the Fibonacci sequence, too:

    use yail'io.

    proc Main has args
      var argv as string array.
    begin
      var n as integer.

      print["Go how far? "].
      read[n].

      printLine[fibo[n]].
    end Main.

    fxn fibo return integer has args
      var n as integer.
    begin
      if n == 1 or n == 0 then
        return n.
      end if.

      return n + fibo[n - 1].
    end fibo.

My sole regret about the proposed design is that I used square brackets
for demarcating parameter lists instead of parentheses.  

## Result

I got an A in the course, and I was quite happy to leave language design
to the experts.  While it's easy to come up with a syntax and write a
grammar to parse it, as long as you know the theory, it's much harder to
create something even remotely pleasant to use for day-to-day
programming.

Looking back on this work in 2017, it is hideously ugly and if I needed
to teach a bunch of kids how to program, I'd break out some Python or
some Ruby and let that be that.

