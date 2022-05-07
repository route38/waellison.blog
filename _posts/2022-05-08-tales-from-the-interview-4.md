---
layout: post
title: "Tales from the Interview, Part 4: Whiteboard Follies"
category: Careers
---

The year is 2013, and I’m interviewing with a television station that
needs a PHP, JavaScript, and HTML/CSS developer (a full-stack web
developer in all but name; this is, after all, when dinosaurs still
walked the earth and jQuery was still close to bleeding-edge) to work on
their website.  I knew enough PHP and JS to get by at the time, so I
decided to attend their career fair and see how far I could get in their
process.  I passed a quick vetting interview with the tech lead at the
job fair, and the phone screen that followed, and so I was back on-site
for a second-level technical interview, following a take-home assignment
that saw me writing some simple HTML and CSS.  After the nerd-ass
bullshit session (truly, the best part of programmer interviews is just
talking shop), we got to the meat of the interview.

There were five dudes in the room aside from myself, so I had ten eyes
on me when the tech lead said something along the lines of, “Alright,
William, now we’re going to walk through some whiteboard exercises.”
That was at least eight eyes too many.

I was fond of using the whiteboard in college to help illustrate points
I made in explaining algorithms to my classmates.  So, fool that I was,
I thought I had this particular assignment firmly in the bag.  And, fool
that I was, I figured I’d be making crude sketches of data structures,
perhaps explaining some code projected from an overhead (lookit how
old-fashioned I am!), something like that.  But, nope, I couldn’t get so
lucky.

“Let’s write a simple sorting algorithm.  Do you know insertion sort?”

Well, yeah, that was one of the first sorting algorithms I learned,
surely to $DEITY I know it.

Waitaminnit.  I haven’t written a sort algorithm by hand since I did so
for a grade in my algorithms class, and that was in 2008, five years ago
by the time this interview rolled around.  Well, shit.

“Can you write insertion sort?”

Call someone and get a busy signal, and you’ll get an idea of how I felt
at that moment.

“Well, do you know bubble sort?”

“Yeah, kinda.”

And so, marker pen in hand, I had to be walked through writing bubble
sort on the whiteboard, in syntactically correct JavaScript (with
semicolons; I prefer to write JS and TS both without semicolons), while
being watched by five software developers who have probably never
written a sort algorithm for pay in their entire careers.  I had several
brain-farts throughout the process and I know that my apparent inability
to write one of the simplest sorting algorithms did little for my
chances.  I have a lot to say about the practice of the whiteboard
interview, none of it flattering and even less of it terribly original,
so I’m going to refer you instead to [a blog post][scc] at the excellent
site _She Can Code_.


[scc]: https://shecancode.io/blog/its-time-to-end-whiteboard-interviews-for-software-engineers

I’m a full-stack developer, slinging JavaScript and TypeScript on the
frontend and Python and JavaScript on the backend.  Never, in my
projects as an amateur, have I ever faced such suboptimal performance
from those languages’ built-in sorting libraries that I had to roll my
own.  I’ve programmed in C++, C, Java, PHP, Ruby, Python, JavaScript,
TypeScript, Perl, and C# -- and every single one of those languages has
sorting in its standard library.  Witness the brilliance of sorting a
collection in C:

```c
#import <stdlib.h>

static int compare(void *a, void *b) {
  int a_int = (int) (*a);
  int b_int = (int) (*b);
  return a_int - b_int;
}

void sort_something(int *ary, size_t count) {
  qsort(ary, count, sizeof(int), compare);
}
```

Yes, children, even C has a sort routine in its standard library!  If
sorting things is too slow for you in C, then I don’t know what to tell
you, other than to hand you the programmer’s manual for your processor
and tell you to have fun.

So, esteemed colleagues, I ask you: how many of you have ever had to
write a sorting algorithm for pay in your careers?  I can’t imagine many
hands will go up.  Perhaps some embedded systems nerd is reading this
and thinking to herself, “Yeah, I wrote quicksort in ARM assembly
yesterday,” but that’s a completely different discipline to what we do
in Web development.

_But William_, I hear you protest, _I need to see you write a coding
algorithm so I can determine your mastery of basic computer science
principles!_

No, you don’t.

You need to approach me as a fellow professional and talk shop with me,
not treat me like I’m a pupil and you’re my professor.  No language in
serious use today is so lacking in its standard library that there’s not
a searching or sorting algorithm on deck.  Even languages I
unconditionally despise, such as Java, Visual Basic.NET, and PHP,
furnish search and sort algorithms prepackaged with their development
kits.  Every language runtime uses one of the known-optimal sorting
algorithms out there, whether it’s mergesort (Mozilla JS), quicksort
(GNU C), Timsort (Python), or something else entirely.  The time we
could spend talking about the shortcomings of a back-of-the-envelope
implementation of quicksort could and should be spent instead
discussing:

- Data structures

- Time and space complexity (which will likely lead to sketching some
  algorithms on a whiteboard, satisfying your whiteboard fetish)

- Software architecture

- Testing

- Design patterns and concepts

- System design

- Programming paradigms, e.g. OOP vs. functional, static vs. dynamic or
  strong vs. weak typing, etc.

Those conversations will be far more informative, and equitable, than
watching me sweat while I blunder my way through a simple sorting
algorithm on a whiteboard, a performance style and context that is in no
way indicative of my ability to do the job you’re hiring for.

If it truly were about equality, whiteboard interviews would’ve died
with Friendster a long fucking time ago.

Takeaways:

🚩 Refuse to interview with any company that uses the
outdated-when-it-was-introduced hazing ritual known as the whiteboard
interview, and urge your colleagues to do the same.  Humankind has
managed to eradicate smallpox and poliovirus from the wild; surely we as
technologists can ensure that whiteboard interviews meet with the same
fate.

🚩 If that’s not an option for you (some companies will never lift that
requirement), spend some time working on your algorithms and your
presentation skills, for you will need both in equal doses to do well at
whiteboard interviews.  I’d even go as far as suggesting that you
purchase your own whiteboard and practice in front of a camera if you
think it would help.  You will need to cultivate your abilities to
present and to speak extemporaneously as well as programming without a
computer (but, as a software engineer you only need two of those).

