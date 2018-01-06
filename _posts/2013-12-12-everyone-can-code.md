---
layout: post
title: Everyone Can Code
music: Led Zeppelin
mood: encouraged
---
In honor of the Google doodle from Monday, honoring Adm. Grace Hopper (history's first compiler writer, first female US Navy admiral, and co-designer of Cobol), today's post during C season is all about the shocking lack of computer literacy in today's society.  I contend that everyone can learn how to code, and moreover that everyone should have a grasp of the basics.

I return, as I usually do, to the world of driving to draw up my analogies.  You have to know a little about cars to be able to drive one safely; it pays to know about tires, brakes, the engine, and handling.  For example, knowing that tires have a finite lifespan helps you to realize why it's important to replace them; knowing how oil helps protect your engine makes a convincing case for regular oil changes; knowing why keeping the engine cool is important makes a good case for having the radiator flushed every other year.

Computers are just like cars in that regard.  You have to understand at least a little bit about how a computer operates in order to operate it effectively, never mind efficiently.  Computers might seem limitless in what they can do, but programming in its purest form is about establishing limitations about what sort of data a program can process.  Hence, validly formatted data is very important to a program, and garbage data going in generates only garbage output coming out.  As low as the entry barrier is for using a computer, though, programming one seems to have a mystique all its own.  People view programming as an incredibly glamorous profession (it's anything but) and one that confers mythical powers.  While advanced programming is beyond the reach of many (there'd be no need to specialize otherwise), the basics can be learned by anybody with a reasonable amount of abstract reasoning skills[^1].

### The case against

Others in my trade would probably tell you, based on typical [Daily WTF](http://thedailywtf.com) submissions, that only those with the 'geek gene' should bother learning to program, and that half of those probably aren't capable of mastering even the basics.  Hell, Jeff Atwood wants to know [why programmers can't ... program][noprog].  The main thrust of that argument is that a lot of people go through computer science programs and come out with a piece of paper and yet no real programming skills.  Another counterpoint is common knowledge among teachers of computer science: that [most people can't learn to program][noprog2].

[noprog]: http://www.codinghorror.com/blog/2007/02/why-cant-programmers-program.html
[noprog2]: http://www.codinghorror.com/blog/2006/07/separating-programming-sheep-from-non-programming-goats.html

And that's completely fine.  It's just fine that most people can't learn to program.  Again, if a random man on the street could learn to do it with the skill and grace of Linus Torvalds or DHH, there'd be no need for people to specialize.  However, I think that everyone who can learn to code should.  And I think it'd be worthwhile to at least take a crack at teaching the rest of them the basics.

### The case for

Let me begin this section with a brief look into my own past.  In high school, I loved four things:

0. The French language

1. _Age of Empires 2_

2. Accounting

3. History class

Of these, learning French was the most fun and easiest for me.  Learning foreign languages has always been a strong skill; I'm good at memorizing and constructing mental maps between things, so learning and expanding my vocabulary was always easy.  More importantly, I had a strong ability to slog through lots of seemingly meaningless lessons in conjugating verbs and memorizing grammar rules so that I could emerge on the other side thinking in the language and finding the same expressiveness in it that I find in my native English.  My _AoE 2_ addiction was neither here nor there; after a long homework session, it was a good way of blowing off steam.

Accounting is a game of variables just like computing, and I think that my passion for abstraction, pointed at the business school instead of the engineering one, would have led me to a career as a CPA.  At the secondary school level, accounting principles are fairly easy, centering around the notion of double-entry systems: an addition somewhere leads to a deletion elsewhere.  The easy example is buying a business asset, like a new truck.  When you buy the truck, you debit against cash on hand for the amount of the purchase, and credit the relevant asset account -- in this case, the company vehicle account.  (The asset receives an identifier in the form of a tag, so that you can later apply depreciation.)

Accounting by hand is relatively easy: all the math you need is available on a four-function calculator, outside of continuously compounded interest, and for the hairy stuff they make financial calculators.  It's easier on a computer: just enter the right numbers in the right places.  Learning the accounting package (e.g., QuickBooks, Sage, Peachtree) is sometimes harder than learning the accounting behind it.

So it's not that people can't learn the principles of abstraction or apparently meaningless rules needed to become a programmer; accountants, lawyers, physicians, surgeons, event planners, and many other people in many other trades learn those principles and more.  Consider the insane amount of complexity in long legal documents.  I think those people need to be the ones who learn the basics of programming, both to make it easier to do their jobs and to give them appreciation for those of us who specialize in computers.

### But why is it so hard?

Consider this snippet of Python:

{% highlight python %}
you = raw_input("What is your name? ")
print "Hello, %s.  Nice to meet you." % you
{% endhighlight %}

In two lines, I have demonstrated five things about programming languages:

0.  The syntax is unfamiliar to nonprogrammers.

1.  Programming languages' interpreters and compilers are very picky about syntax.

2.  Programming requires juggling multiple layers of abstraction at once.  This rears its head in all languages, but is especially insidious in C, where implementation details cloud a novice's understanding of the problem being solved.

3.  Programming also requires thinking in at least two languages: the language of the programmer (e.g., English, German) and the language of the machine (e.g., Ruby, Python).

4.  Programming requires following seemingly meaningless rules.  Python is a good example of this because whitespace is significant in that language.

Now let's see it in the language I champion for instructional use, C:

{% highlight c++ %}
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
  char *buf = malloc(BUFSIZ);
  if(buf == NULL) {
    perror(__func__);
	exit(EXIT_FAILURE);
  }
  printf("What is your name? ");
  fgets(buf, BUFSIZ, stdin);
  buf[strlen(buf) - 1] = '\0';
  printf("Hello, %s.  Nice to meet you.", buf);
  free(buf);
  return EXIT_SUCCESS;
}
{% endhighlight %}

This example illustrates four additional aspects of programming:

0.  Traditional compiled languages (like C) add yet another layer on top of languages like Python.

1.  Programming requires great explicitness on part of the programmer.  This is related to points 1 and 4 above.

2.  Controlling the machine includes controlling all aspects of its execution.  (This is mostly a C/C++ issue, but you still have to create `new` instances of objects in Ruby/Python/...)

3.  Programming requires you to be attuned to the idioms of the underlying language.

Learning to _program_ is one thing; any person with strong abstract reasoning skills can suss out enough particulars about conditionals, loops, and method calls to be decent at simple programming tasks.  A language like Ruby or Python is sufficient to understand those absolute basics; Python is more traditional in that regard, but you can do it in Ruby too (even if it does feel unidiomatic to an experienced Rubyist).

### Quite another thing

Learning to _debug_ code is quite another skill altogether, one that requires equal doses patience, persistence, and tolerance.  You have to be able to tolerate focusing on one problem, in one part of a program, for hours on end.  For the rookie especially, debugging is like going down a twisty maze of little passages, all alike.  Experienced programmers can suss out simple bugs before the compiler even spins up, but less obvious problems are harder to discern and hence harder to debug.  I have tracked problems down to off-by-one errors, failing to initialize variables and/or memory, misusing a variable name, logic errors, failing to account for leap years, failing to account for processor endianness, programming while half-asleep, and more.

It's the ability to debug that separates true programmers from non-programmers, I think, and that's an ability that's exquisitely difficult to teach.  When I debugged C in college, I seemed to have a natural feel for where things were in memory; I could chase pointers and generally understand how and why the machine did what it did.  The art of debugging is partially a game of persistence and patience, but it also requires pattern recognition and a sharp understanding of what's going on under the hood.  Part of the reason I didn't really start exploring non-C languages until after college was that I felt that strong connection to the machine and was able to harness it.[^2]

### Effective and efficient

When you know how to program, you approach using a computer differently.  Understanding how to harness the power placed before you grants you a new perspective, and you see the computer as a very powerful tool for helping you solve problems and perform repetitive actions.  Consider one of our "'Stairway to Heaven' problems," computing the Fibonacci numbers.[^3]  The Fibonacci sequence is described by a recurrence relation; informally, it's the series formed by starting with 0 and 1 and summing the previous two numbers in the sequence.  The result is the familiar 1, 1, 2, 3, 5, 8, 13, 21, ... sequence many recognize.  We can create an array full of Fibonacci numbers and then ascertain properties about that array.  For example, let's say we want to play with the first 38 Fibonacci numbers.

{% highlight ruby %}
require 'prime'

fibonacci = [0, 1]
38.times do
  fibonacci << fibonacci[-1] + fibonacci[-2]
end

puts fibonacci.select { |f| f.even? }.length
puts fibonacci.select { |f| Prime.prime? f }.length
{% endhighlight %}

Just fourteen of the first 38 Fibonacci numbers are even, and nine of them are prime.  If you used another programmable system for this, like a spreadsheet (the most commonplace programmable system used by nonprogrammers), I can guarantee it wouldn't be as readable as the Ruby code above, nor as portable.  If you found a Commodore 64 from 1985 with a very anachronistic Ruby interpreter, you could use it to run this program.  If you somehow found the wherewithal to run Ruby on your smartphone or tablet, you could use that to run this program.  (Go buy a Venue 8 Pro and put Ruby on that.  I'll wait.)

Learning to think in terms of loops and branches opens you up to the world of batch processing, and I'm going to let you in on the worst-kept secret in the trade: batch processing is as relevant now as it was in 1963.  Back in the old days, you took your punch cards to a computer operator, who would run them in batches.  Then you'd go back and get the result of your computation.

Of course, we now no longer have to write lines of code on a punch card.  (Find the gray-haired old dude in your company.  Chances are he remembers with a combination of fondness and aggravation the punch card paradigm.)  But we still do things in batches -- lots and lots of them.  When you buy a new widget and put it on your bank debit card, that transaction is queued up and processed on the bank's mainframe, along with the thousands or even millions of other transactions that bank will process.  Mainframes excel at batch processing (it's what they were designed for), which is why banks and big business love them.  Even on your desktop, though, batches are still a useful paradigm.

Consider the problem a lot of photographers have.  If you have your own website and write your own pages with HTML, then you know that it's bad form to include the whole image if only a thumbnail will do for an online image gallery.  But it's very tedious to open all the photos from your trip to Namibia (let's say) and manually resize them.  So you ponder and puzzle, and puzzle and ponder -- is there a better way?

If you've got the programmer gene, you know there's a better way and bang out a shell script similar to this one:

{% highlight bash %}
#!/bin/bash
if [ ! -d $1/.thumbs ] ; then
  mkdir $1/.thumbs
fi

for file in $1/*.* ; do
  realfile=`basename $file`
  if [ ! -f $1/.thumbs/$realfile ] ; then
    convert -scale 33% $1/$realfile $1/.thumbs/$realfile
  fi
done
{% endhighlight %}

It's for the `bash` shell on Linux, but you get the idea: I name a directory where I have images stored and then create thumbnails for images that don't already have corresponding thumbnails.  If you're on a Mac, then you can use the scream-inducing AppleScript language to create a similar script (e.g. this one from [World Wide Angle][wwa]):

[wwa]: http://www.wwangle.com/blog/2009/batch-resize-your-photos-with-apple-script/

{% highlight applescript %}
on open some_items
	repeat with this_item in some_items
		try
			rescale_and_save(this_item)
		end try
	end repeat
end open
	
to rescale_and_save(this_item)
	tell application "Image Events"
		launch
		set the target_height to 600
		-- open the image file
		set this_image to open this_item
		set typ to this_image's file type
		copy dimensions of this_image to {current_width, current_height}
		if current_height is greater than current_width then
			scale this_image to size target_height
		else
			-- figure out new height
			-- y2 = (y1 * x2) / x1
			set the new_width to (current_width * target_height) / current_height
			scale this_image to size new_width
		end if
		tell application "Finder" to set new_item to ¬
		(container of this_item as string) & "ex" & (name of this_item)
		save this_image in new_item as typ
	end tell
end rescale_and_save
{% endhighlight %}

While the increased verbosity makes it harder to read, the intent is the same: iterate over images and create thumbnails of them.  Any task you need to automate for a large number of files -- backing up, renaming, resizing, categorizing, simply generating an inventory sheet -- can be done with greater expressiveness in textual form than in any graphical form.[^4]

### Who says it has to be Turing complete?

As a Web developer, I'd be remiss if I didn't mention that learning to "code" includes things that aren't programming languages.  HTML, the most widely used markup language in the world, certainly qualifies as "code" (don't believe me?  Hit Ctrl+U and look at this page's sources!) and so does CSS, the presentational side of HTML.  Here's the thing: I've been doing HTML since I was ten years old.  You don't need a CS degree (but one certainly helps!) to understand HTML.

If you want to make text have emphasis, you simply wrap it in `<em>` tags; if you want to construct a table, you use `<tr>` for your rows, `<td>` for your cells, and you wrap the whole thing in `<table>` tags.  There's obviously more to it than that, but having the rudimentary knowledge of how to add paragraphs (`<p>`), lists (`<ul>` and friends), and headings (`<h1>` and so on) to your own sites is invaluable.

"Friendly" HTML editors, like Dreamweaver and WordPress's TinyMCE, all have one thing in common: they suck more than an Electrolux.  WYSIWYG editors have ways of messing with your content and creating a dog's breakfast of your HTML.  Nobody says you even have to worry about CSS -- leave that to the designers, gross hacks and all.  Simply understanding what your editor is doing behind the scenes will save you trouble now and down the road.  (It also makes it significantly easier to understand the "Reveal Codes" feature of WordPerfect.  Just sayin'.)

### Should everyone learn to code?

Define "everyone" as "the set of all people with strong abstract reasoning skills."  I'll assume that anybody with a college degree in accounting, law, medicine, engineering, mathematics, the sciences, or linguistics can qualify.

Then define "coding" as "the activity of writing files suitable for input to a compiler or interpreter, irrespective of whether the input permits the simulation of a Turing machine," so as to incorporate programming and using a markup language like HTML.

Then define "learning" in this context as "acquiring a basic familiarity with the subject."  I'm not saying that everyone needs to become the next great thing in computer programming -- and at the time of writing, my job prospects are significantly healthier if they didn't -- but I will say that all professionals in abstract fields with heavy computer use -- which includes all those fields I listed above -- should have at least a passing familiarity with how to code.

### Resources

While I believe C is the best instructional language there is, I believe that's only the case for programmers who have a guru within easy reach.  So my ultimate advice to those wishing to _truly_ learn the art of programming is this:

0.  Find a guru on LinkedIn or Facebook or wherever, or hit up your local junior college or university.  Make sure said guru knows C.  A comp sci professor willing to give you some of his time would be ideal.

1.  Buy a copy of _The C Programming Language_ by Brian Kernighan and Dennis Ritchie.  Read it from cover to cover until it makes sense.  Learn how to set up a development environment -- and to learn using it, do the exercises.  Install NetBSD, it'll make you reach for your big-boy trousers right away.

2.  Learn the ins and outs of your development tools: the compiler, build manager, command shell, editor, window manager, the whole bit.  `make` is the commonest build manager for Unix-like systems, and I've been a fan of the Emacs editor since 2008 and of the MATE environment since before it was MATE.

3.  Once you've become conversant in C, meaning you can be given a problem and envision how you'd use C's and Unix's facilities to solve it, move on to C++ and learn about object orientation.  Purchase a copy of _The C++ Programming Language_ by Bjarne Stroustrup, and read it from cover to cover until it makes sense.

4.  Once you've become conversant in C++, only then may you move on to high-level languages like JavaScript, Ruby, and C#.

5.  Learn about data structures -- lists, arrays, queues, stacks, trees, and heaps.  You need to know this stuff.  Likewise for basic algorithms -- binary search, quicksort, mergesort, insertion sort, and hashing.  Job interviewers especially have a fetish for hashing.  Lists force you to understand pointers.  Trees force you to think recursively.  Pointers and recursion are the biggest stumbling blocks for a novice, so understand those and you'll be doing well.

6.  Learn the basics of Big-O notation.  It's always a convenient shorthand to have.

7.  Learn the basics about finite automata, pushdown automata, and Turing machines.  Understanding state machines will advance your abilities as a programmer.

8.  Pick up at least one functional language, like Haskell, Lisp, Scheme, or ML.  Tail recursion is its own reward.

9.  Learn about how to program at the OS level of at least Unix, commonly called "systems programming."  This will inform your understanding of system-level Windows programming if you ever pursue it, and it will also help in understanding aspects of basically all serious programs.  (Also, doing things like rewriting `tar` and `malloc` make you badass.)

10. Learn yourself some math.  You don't have to go crazy, but knowing at least single-variable calculus, linear algebra, statistics, and especially discrete math will go a long way.  Some time spent doing differential equations couldn't hurt if you opt to learn multi-variable calculus.

11. Finally, learn how to deal with people.  _How to Win Friends and Influence People_ is a start, but hardly a panacea.  Software development is not, nor has it ever been, a solitary pursuit -- in the vast majority of instances, you will work with at least one other person in developing a real program.  Work in teams every chance you get; if you don't get any chances, make some.

If you don't have seven years to dedicate to learning it the hard way, then you can do it the easier way, which will make it harder to learn the fundamentals later.  The computer science articles on Wikipedia were even recommended by certain professors at my alma mater.  For those with a mathematical bent, the book _Data Structures and Algorithm Analysis_ by Mark Allen Weiss (available in C, C++, Java, or Ada) is good; I know the C and C++ versions are very good indeed.  [Codecademy] is a neat online tutorial in several popular Web languages.  I learned how to program in JavaScript, Ruby, and Python from Codecademy; for a programmer with a primarily C background, the small exercises were invaluable.  You can also learn HTML and CSS at Codecademy, setting you up for a productive life as a web developer.  You might try _Why's (Poignant) Guide to Ruby_, but I tried reading the opening chapter and the attempts at humor wore out very quickly for me.

[Code Wars] is a site containing small puzzles called _kata_.  Code Wars is really targeted toward people who already know how to program, but the kata are great ways to sharpen your skills and learn new things within the field.  You can solve kata in JavaScript, CoffeeScript, or Ruby.

[Pex For Fun] is a Microsoft Research project similar to Code Wars for the C#, Visual Basic, and F# languages.  I was actually tipped off to Pex4Fun via a job interview, where my would-have-been manager sussed out my skills.  (For the record, he said I "kicked ass" at the technical interview.  They sought someone with a better fit.)

Programming can be great fun if you've got the frame of mind for it -- and even if doesn't lead to a career change with a six-figure salary and expos with sexy booth babes, it can be a good hobby.  Give it a try; you may just be surprised.

[codecademy]: http://www.codecademy.com/
[code wars]: http://codewars.com
[pex for fun]: http://pex4fun.com/

[^1]: This is in fact the strongest prerequisite for being a good programmer.

[^2]: There was also the hammer-and-nail effect: when all you have is a hammer, all problems suspiciously resemble nails.

[^3]: Every guitar player who practices rock guitar can play "Stairway to Heaven."  Or at least they think they can.

[^4]: This is a blog for programmers by a programmer, so feel free to laugh your ass off at AppleScript.  I sure as hell do.