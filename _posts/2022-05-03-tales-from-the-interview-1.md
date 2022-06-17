---
layout: post
title: "Tales from the Interview 1: Overwriting"
category: Careers
---

We all love dumb interview stories, don't we?  I think we've all been
there, on one side or the other.  This is one of my favorites to tell,
and rarely it's a story better told in writing than in speech.

## Context

The year is 2012.  I was fresh out of college, eager to break into the
tech industry, and I had gotten into the interview process with a
prominent manufacturer of navigational equipment.  The opening was for a
junior firmware developer, and for a C++ nerd who loved systems
programming in college, they had firm grasp of my attention from the
opening word of the job description.  This company didn't know me from
Adam, mind you, so it's not like they wrote a job listing just for me.
So, there I was, sitting at my desk, on the phone with some lady in
Kansas, whom I assume to be a part of the firm's HR department.  She was
asking me basic questions to ascertain my level of understanding, and I
was doing alright.  I was trying to explain Sanskrit to a fish, but I
was doing alright.

And friends, believe me when I say that I wish I were making this shit
up.  What I heard, and what the interviewer asked, were two different
things.

My ears hear her ask: "Are you familiar with function overwriting?"

Just like a recently felled tree, I'm stumped.

"No, ma'am," my response began.  The interview proceeded as normal, and
just like the boiled frog, I didn't realize the extent of the damage
until later.

My parents and I went to dinner at a local pizzeria after the interview.
I got in the car, fastened my seatbelt, and as we rode out to the
restaurant, it hit me, as though I'd been [walloped in the face with a
frying pan](https://www.youtube.com/watch?v=cBirE_eglz4), that I had
misheard my interviewer.

For you see, esteemed reader, the interviewer wasn't asking me about
overwriting a function, in the sense of permanently replacing its
functionality (unless you use Git, obviously).  Oh, sure, self-modifying
code overwrites functions, but three kinds of people write
self-modifying code: malware authors, showboating turbo-nerds, and
programmers from the 1960s.

No, she was asking about the much more common action of _overriding_ a
function, which is to replace a given function's behavior with your own.
This is a very common thing to do with certain programming languages
(including C#, C++, and Java, to name but a few).

```java
// Foo.java
class Foo {
  public void saySomething() {
    System.out.println("foo");
  }
}

// Bar.java
class Bar extends Foo {
  @Override
  public void saySomething() {
    System.out.println("bar");
  }
}

// Program.java
class Program {
  public static void main(String[] args) {
    Foo foo = new Foo();
    Bar bar = new Bar();

    foo.saySomething(); // prints foo
    bar.saySomething(); // prints bar
  }
}
```

The above is a canonical example in Java.  Class `Bar` subclasses `Foo`
and its implementation of method `saySomething` overrides the behavior
of the `saySomething` method in its parent class.

I could've explained that with absolutely no issues whatsoever if I'd
heard her correctly.

Needless to say, I didn't get the job.  I just hope I gave some
technical manager out in Kansas a chuckle.

