---
layout: portfolio
summary: "My first office job was to work in the dean's office of the College of Engineering at the University of Tennessee.  I accomplished several smaller tasks there while I worked during the summers of 2008 and 2009, from May to August."
description: "Time I spent working for the University of Tennessee"
title: "Job: University of Tennessee"
image: "/art/perkins.jpg"
image_description: "Where I worked in 2008 and 2009."
toc: true
---
## Name tags

<img src='/art/name_tag_sample.png' class='img-responsive col-xs-12 col-sm-4 pull-right'>

One of my final tasks at UT was to create a batch of name tags for a large event.  My supervisor gave me a specimen from the previous year's event, and directed me to make something similar.  I said, "OK," and went back to my workstation to come up with something I figured would work.  After a few minutes in Word spent doing up a design (representative sample at right) and setting up a mail merge, I ran off a proof sheet for her approval.  She said to run with it, so I did.  There were 75 or 80 names in the merge, which is only of import because of a strange limitation I ran upon in Word 2003: that mail-merged table cells can't have drawing objects in them[^1], so the mail-merged document wouldn't have the inset borders.  I had a better idea after running off to deliver some interoffice mail:

0. Create one Word document with six of the desired inset border, positioned correctly with respect to the table cells.

1. Save it as a PDF using the Acrobat PDF printer.

2. Save the "mail-merged" labels as another PDF file.

3. Using Acrobat, superimpose the inset borders on the name tags.

4. Inspect the output, including running off one grayscale proof sheet so as not to waste precious colored toner.

5. Print all the nametags, and cut them out using the "guillotine" paper cutter for stuffing into the holders.

Sometimes, the best feedback is no feedback; my boss was happy and I'm led to believe that so were the attendees to the event, who provided no negative feedback regarding the tags.

## University-wide phone tag

I once received a caller who had been bounced all around the university's phone system in search of the department of audiology.  Now you have to realize that not only is audiology not in the College of Engineering, but that it's halfway across campus (housed as it is inside Neyland Stadium) and nowhere near the dean's office physically.  Quite why the previous recipient of the man's call sent him to us is still beyond my comprehension, but I put his fears and frustration at ease, pulled out my paper directory, and quickly found the correct number to dial.  I gave him the number in case the transfer should fail (they do invariably fall through the cracks occasionally) and called over there, briefly explaining the man's predicament.  They confirmed that they were most likely who I needed to refer him to, and so the deed was done.

Sometimes, all you really want to hear as a caller is that you're being routed to the correct destination by someone who gives a damn.  Those situations don't come across often, if only because most people seem to have that ability to route a call correctly, but I put an end to that caller's frustration and finally ended the circle of incompetence.

[^1]: Confusingly, images appeared to be A-OK; I was able to include the university logo in the mail-merged table cells without issue.

## The taming of the regex

I discovered regular expressions and their incredible power in 2007, and ever since, I have approached text-handling problems using them.  When given an Excel sheet with some data to transform in various ways, my mind naturally went to regexen.  The problem was rather simple: Student Affairs sent me a sheet with some information, including names of students in one cell, formatted as Firstname Lastname.  They wanted the names transposed (`s/(.*) (.*)/\2 \1/` if you use `sed`) and placed into separate columns.  I decided to seek out a VBA macro that parsed regexes, since I hadn't the time or inclination to write my own regex parser.  I then threw together a couple of longish Excel formulae to pull out the data in the required format.  I wanted the regex macro to pull out first names, since I didn't want to use Excel's built-in string handling, nor did I exactly feel the need to do so.

## When documents are measured by centimeters

<figure class='col-md-4 col-xs-12 pull-right'>
  <img src='/art/man_climbing_papers.jpg' alt='A man climbs a stack of papers.' class='img-responsive'>
  <figcaption class='col-xs-12'>
    <p>It wasn't quite so bad, although at rare moments I felt rather like this guy.  Image credit: iStockPhoto.
  </figcaption>
</figure>

About five minutes after I got into the business of working for UT, I was introduced to the research proposal, a long document with a cover sheet detailing who's soliciting money, from whom they're soliciting money, and for what project they're soliciting money.  Academic research is financed by private industry, government agencies, and nonprofit organizations such as the National Science Foundation; professors pitch ideas at these agencies to seek out funding to conduct their research.  I was shown an example cover sheet as well as the spreadsheet used by the research department to collect the information, and directed to go through the <abbr title='6 inches'>15 cm</abbr> stack of papers, entering the information from each cover sheet.  I entered a few to start off, getting a feel for the layout of the sheet and the order of the columns in the spreadsheet, and after checking my work, I entered the rest of them, only stopping for my lunch break.  After each batch, I filed the hard copies away for easy access by the research department and the associate dean in charge of research.  After the deluge each summer I worked there, I was mostly able to stay on top of the queue, only losing track if another enormous batch came through.

For my part, it required great diligence to ensure that all data was correctly entered in a timely fashion, and that it was filed away correctly.
