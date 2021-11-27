---
layout: portfolio
title: "CycleComp"
description: "A brief description of a project I did in college."
toc: true
image: '/art/perkins.jpg'
---
## Fast Facts

Collaborators
: Myself and one other student.

When
: Fall semester 2010, from August to December.

Brief description
: A set of documents describing the requirements and specifications of
  the control firmware for an embedded system to measure speed and
  distance on a bicycle.

Scope of Work
: Reading and interpreting requirements, deriving new requirements, and
  writing code to satisfy the requirements.  Analyzing valid system state
  sequences using the Cleanroom method and ProtoSeq, a custom piece of
  software by the SQRL at UT.  Testing code using statistical methods and
  the JUMBL, a custom piece of software also by SQRL.  Presenting our
  findings at the end of the course.

Lessons Learned
: Essentiality of requirements; clearer understanding of the meaning of
  testing; exercise in one of the many methods of software engineering.

## About the project

For Computer Science 340, a series of documents was presented at certain
intervals throughout the course.  These documents included requirements,
specifications, and amended versions of each.  The documents described
the design of an embedded computer system that measures the speed and
odometer distance for a bicycle, commonly known as a cyclocomputer.  The
class was split into four groups with each group paired off with another
group of equal size.

## Scope of the work

Our goal was to work from these documents, using the Cleanroom method,
to quantify the boundaries, input stimuli, outputs, and valid state
transitions of the system as though it were modeled as a finite state
machine.  This state machine could then easily be converted to computer
code in C or a similar language.  We were also to write the
implementation, using plain C, so that it could be reviewed for
completeness and correctness by our paired team; we did the same with
their implementation.  Cleanroom envisions the system as being a
collection of states with transitions from state to state, just like a
finite state machine.  It is therefore easy, in principle, to verify the
completeness and correctness of the state transitions.  Some definitions
are in order:

* _Requirements and specifications_ are defined as for other
  methodologies; requirements describe what the system must do; the
  specifications describe how it is to be done.  Derived requirements, a
  term unique to Cleanroom, have base requirements as dependencies, but
  base requirements have no dependencies.

* _System boundaries_ are interfaces along which input enters the system
  and output leaves it; for example, an input boundary might be the
  signal sent by a potentiometer, while an output boundary might be the
  signal sent to a seven-segment display.

* _Input stimuli_ are a mathematical set of valid inputs, each with a
  unique name and description.

* _Output stimuli_ are a mathematical set of valid outputs, each with a
  unique name and description.  Subsets of output stimuli can be grouped
  conveniently into named responses.

* A _sequence_ is a sequential listing of state transitions.

* _Sequence enumeration_ is the process of enumerating the valid
  sequences of state transitions for the program.  This set of sequences
  is aggregated into a set of sets.  The system has a start state and an
  ending state.

While deriving the boundaries, stimuli, outputs, and responses, each
behavior of the system must be traceable to a requirement.  If it cannot
be traced, then it is either an invalid sequence or a bug in the
requirements; it is up to the project owner and implementers to decide
which it is.

After sequences have been enumerated, we establish the smallest subset
of permissible state transitions, which is called the set of canonical
sequences, and this set satisfies three important properties:

* It is complete, which is to say that it incorporates every state in
  the system.

* It is disjoint, which is to say that it does not include any sequence,
  or overlap of sequences, twice.

* Each canonical sequence in the set of canonical sequences must be
  traceable to a requirement of the system.

We can therefore examine the bodies of loops as small programs in and of
themselves, and proceed from there to build the program in a bottom-up
fashion using the three classes of prime program:

* Assignment (variable _A_ receives value _B_)
* If-then (if predicate _A_ is true, then perform action _B_)
* While-do (while predicate _A_ is true, perform action _B_)

The body of a loop is a state transition sequence; the fact that it is
encased in a loop construct simply means that it is executed more than
once.  Hence, we can prove, by the principle of induction, that if the
body of a loop is correct, without regard to the number of times it is
executed, then it must necessarily be correct for an arbitrary number of
executions.

We operate under the assumption that subroutines represent execution
states and that function calls represent state transitions.  Methods
attached to classes and messages passed between class instances are
analogous in object-oriented systems.  Hence, Cleanroom is amenable to
any programming language that permits the use of subroutines, and it is
commonly used with C, Ada, C++, Java, and other languages.

Testing Cleanroom software is done on a statistical basis, with the
whole system being tested over large numbers of  inputs to test all
possible code paths.  This is important because all state transitions
must be tested over both valid and invalid input ranges.  Unit testing
in the Agile sense is possible but discouraged; because of the
high-reliability nature of Cleanroom software (the method is primarily
used with embedded and real-time systems), testing the system _in toto_
is of much greater significance than testing the pieces.  Most Cleanroom
testing, then, is necessarily integration and regression testing.

## Result

This project had three primary outcomes.  First of all, I earned an A in
the course, thereby progressing toward graduation.  The more important
results were that I gained a very deep appreciation for the capabilities
and complexities inherent to the art and science of software
engineering.

Further to that, the third result was that I began to code in such a
fashion as to make my programs easier to prove correct.  The style I
currently espouse aims to minimize branching and to use, where I am
capable of doing, functional constructs to operate over data in a
stateless fashion, or as nearly as I can approximate one.

Libraries like Ruby's `Enumerable` object and Microsoft's LINQ
facilitate this in common languages.  I call this "database-oriented
thinking," since it is thinking about problems in terms of picking the
proper data out of a set and performing an operation on it, basically
treating arrays and hashes like tiny in-memory databases without the
cruft that loaded term implies.
