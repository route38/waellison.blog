---
title: Something I wrote a while ago
layout: post
description: "I discuss the cleanroom method for engineering fault-tolerant software.  All software people should consider the method even if it's only to learn lessons from it."
---
I wrote the following observations about cleanroom software engineering shortly after finishing college, and I figured they'd be worthwhile to post here.  The description follows from a project I did in my last year of college.  I kinda trailed off into talking about Cleanroom itself, and I consider that a good thing.

* * *

Cycle Computer was a practicum in collaborative software engineering using the Cleanroom method to quantify a system’s requirements, specifications, system boundaries, input stimuli, outputs, and valid state transitions. Cleanroom models a software system as a collection of state machines, which are expressed in computer code via structured programming techniques. The project was designed to teach the Cleanroom method by example and used techniques such as code reading, peer review, sequence enumeration, and statistical testing to verify the correctness and completeness of a computer program.

On the face, Cleanroom sounds like other software engineering methods.  However, there are other ways in which Cleanroom differs greatly.

* *Requirements and specifications* in Cleanroom are defined as for other engineering models, e.g. Waterfall or Agile; however, Cleanroom specs and reqs have the tendency to be more verbose, as they must completely describe the desired behavior of the system.  Furthermore, requirements are divided into *base* and *derived*; *base* requirements have no dependencies, but *derived requirements* depend on one or more base or other derived requirements.  Both are tagged, usually with a number; derived requirements are typically tagged by a D before the number.

* *System boundaries* are interfaces along which input enters the system and output leaves it; for example, a computer video card has as input signals from the system bus, and has as output the video signals to send to the display(s).

* *Input stimuli* are enumerated as a set with each stimulus having a unique name and description.

* *Output stimuli* are enumerated as a set with each output having a unique name. Outputs can be grouped into named responses.

* Each boundary, stimulus, output, and named response must be *traced* to a requirement of the system.

In the early stages of a Cleanroom project, the individual components of the system are considered to be *black boxes*; that is, they are considered only for their inputs and outputs, not for the algorithms inside.

*Sequence enumeration* is simply enumerating the valid sequences of state transitions the program may undertake, and aggregating this into a set of sets.

We can condense the sequence enumeration into a tiny subset called the *canonical sequence*; to do this, we construct a list of valid state transitions and begin to look for long transition sequences that repeat themselves, then remove any repetitions.  (The repetition must itself be a canonical sequence for this to work.)  This is called *canonical sequence analysis*, and it gives the canonical sequence three very important properties:

*   The set of canonical sequences must be *complete*; that is, it must include every state of the system.

*   The set of canonical sequences must be *disjoint*; that it, it must not include any sequence or overlap of sequences twice.

*   Each canonical sequence must be traceable to a requirement of the system.

In particular, CSA condenses loops into single executions, which are far easier to verify.  We can use the theory of mathematical induction to say that if a loop executes correctly one time, then it will execute correctly an arbitrary number of times -- with the stipulation, of course, that the looping condition is correct.  In turning a set of states into a set of state transitions, canonical sequence analysis decomposes the program into subroutines, and each subroutine can be decomposed into prime programs, which are the smallest meaningful operations a program can perform.  There are three classes of prime program:

1.  Assignments (variable *A* receives value *B*)
2.  If-then (if predicate *A* is true, perform action *B*)
3.  While-do (while predicate *A* is true, perform action *B*)

Any program can be expressed in terms of these three primes, and any other constructs in a programming language are just syntactic sugar for these three or encapsulate data structures in meaningful terms.  In particular, subroutines represent state machines, and calling these subroutines represents state transitions.  In object-oriented systems, objects take the place of subroutines, and either passing messages amongst objects or calling methods on objects takes the place of calling subroutines.

(An aside: Multi-paradigm languages like C++ allow both, making them a poor choice for Cleanroom implementations unless an agreed-upon subset of the language is used.  But if you're using Cleanroom, chances are you're probably coding in Ada or *maybe* C if you are very, very smart (or very, very, stupid). We used C in CS 340, mostly because everybody and their brother and their brother's cat uses C at UTK.)

While canonical sequence analysis does not aim to decompose program text into prime programs, the notion of prime programming is extremely powerful to divide very large programs into very small pieces, each of which can be verified for correctness and for adherence to the canonical sequences.

Given the canonical sequence analysis, as well as the plaintext descriptions of the requirements and specifications, the system can be implemented using standard structured or object-oriented programming techniques. The authors of the source text *Cleanroom Software Engineering* explain that state machines can map neatly to instances of classes in an object oriented system, provided that the facilities of object orientation are used prudently. During the implementation phase of a Cleanroom project, the system’s components are viewed as *clear boxes* whose input, output, and internal operation are plainly visible.

Cleanroom discourages unit testing since the philosophy is that while a component may work well in isolation, such testing is useless when the component is integrated into the system. Therefore, Cleanroom opts instead to use statistical testing, where the whole system is tested under a large number of inputs, both valid and invalid, to determine if the system will function correctly under a fairly large subset of possible inputs. The aim of statistical testing is to test all valid code paths and to verify that illegal code paths cannot be entered. A system can thus be certified to operate at a certain level of reliability by using a statistical model like ISO 9001.

The aim of Cleanroom is to introduce mathematical rigor into software engineering for projects where it is necessary to have a very high degree of reliability, specifically without the insistence upon writing mathematical proofs for each stage of the project. More plainly put, Cleanroom aims to expose the power of discrete mathematics without requiring the user to have highly advanced knowledge of the subject. As a discipline, Cleanroom renders explicit many of the things any software engineer should know and be able to do:

1.  Depict a system as a set of specifications and requirements meeting said specifications;

2.  Model a system as a set of state machines connected by clean, modular interfaces, which can be represented as procedures, classes, or functions;

3.  Create a way by which specifications and requirements can be correctly, completely, and consistently be turned into such state machines;

4.  Provide a model by which the system can be tested to verify if it meets the specifications and requirements initially set forth.

Cleanroom should be interoperable with standard visual representations of programming logic such as ANSI flowcharting and the UML.  As far as I can ascertain, the phase-driven approach is incompatible with newer approaches to software engineering such as Scrum and XP; however, certain XP practices (such as continuous integration and pair programming) are highly useful during the implementation phase, and CI may obviate the need for a dedicated testing phase.  However, I couldn't recommend that in good conscience since the whole idea of Cleanroom is to achieve statistical levels of reliability.
