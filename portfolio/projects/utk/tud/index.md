---
layout: portfolio
title: "Tuesday Daemon"
image: "/art/perkins.jpg"
---
The Tuesday Daemon or `tud` (the name is a slight misnomer; it is not
actually a daemon) was a program designed to accept questions from users
and show them to a specified administrator.  The program made use of
certain facilities of the Unix operating system including processes,
pipes, and `setuid`.

## Fast Facts

Collaborators
: Myself

When
: Spring 2009, throughout the semester

Brief description
: A computer program designed to aggregate questions for class using the facilities of the UNIX operating system.

Scope
: Following a specification and writing a computer program (later to be a series of programs) that fit the specifications.

Lessons Learned
: Exercising the abilities gained on homework assignments and taking advantage of Unix's system-level facilities.

## About the project

My systems course was held on Tuesdays and Thursdays, with time set
aside on Tuesday lectures for answering student questions.  The nominal
purpose of the `tud` program was to replace using email for gathering
these questions, and to ensure that only the professor of the course
could view them.  This design required the use of the facilities offered
by the Unix operating system for hiding information, namely the `setuid`
bit that runs a program as its owner rather than as the current user and
checking user IDs for viewing the log file containing the questions.

## Scope of the work

`tud` was supposed to have been delivered in three increments, but the
instructor only assigned two due to time shortage.  In the first
increment, one monolithic program performed all functionality: reading
from and writing to the database, which was simply a flat file
containing questions along with the name of the user who asked them.
The program was written in standard C and compiled with the standard GNU
toolchain, including `make` and `gcc`.

In the second increment, the program was broken into separate
subprograms in the style of Subversion or Git, which are actually
collections of utilities invoked by one superutility, namely the `svn`
or `git` commands.  In this style, I wrote `tud` in such fashion as to
be invokable via `tud ask` to enter questions and `tud view`, only
executable by the owner of the log file, to view questions that had been
entered.  To write to the database, `tud_ask` was made to be `setuid` as
the owner of the log.  `tud_view` checked the id of the user that
invoked it and compared it to the owner of the log file; if these did
not match, then the user could not view the log file.

For both increments, a manpage was expected such that one could
conceivably type `man tud` at the command prompt and receive a manpage
formatted as required.  This manpage was written using standard GNU
`troff` along with the standard `man` macros.

## Result

More than any other, this assignment cemented my status as a serious
software crafter.  The code was well written, concise, elegant, and --
it must be said -- a beauty to behold.  For the first time, I used
standard operations such as include guards, extensive commenting for
documentation, and the standard layout of a software distribution for
open source in terms of directories and file names.
