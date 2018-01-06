---
layout: post
title: "Content has bugs too"
mood: cheesed
description: "Content is the most important part of your site, and it too can be riddled with bugs."
music: "Corinne Bailey Rae: Another Rainy Day"
---
Content is the whole _raison d'être_ for the existence of your website.  If it's good, then people will come to your site.  If it's bad, they won't; it's that simple.  As programmers, I think it's important that we recognize and understand the importance of bad content so that we can do our part to help kill it.  Poor quality of content is a bug, just like any other bug.  It's up to us to kill the bug, just as we'd fix any logic error in a program.

Copy for a website is a different beast to copy for print.  Just like the journalistic writing in a newspaper is different to the more-florid writing of a lifestyle magazine, so too must web writing differ from dead-tree writing:

* The attention span is _even shorter_, as though such a thing were possible.

* The device might be a huge screen or a tiny phone, with recent trends making it more likely that it's a phone.

* In many reaches of the world, internet connectivity is still slow, and so long content takes longer to download.  Slow broadband is a first-world problem -- think about the people using dial-up in the middle of nowhere.

* The Web is a scanned medium: people don't read websites fully, no matter what you may think after hours of fascinated clicking on Wikipedia.

* Even on a phone, reading from screens causes eyestrain.

* Even if you're reading the most interesting thing ever, you'll probably find it more boring and less credible than if it were printed.

Rachel McAlpine, in _Write me a web page, Elsie!_, even has a unique term for this kind of writing: F-writing, after the F-shaped pattern that science has proven we use to browse website content with.  If your writing isn't friendly to F-reading, then there'd better be a good and convincing reason as to why.  One reason may be because your niche is very narrow and the five or six other people reading it will read every word, regardless of whether it's on your website or published in a scholarly journal.  Another might be if your content is very technical and the reader needs all the details, such as in writing documentation.  Regardless, the text you put up is the core of your message:

> Although the Web has become a highly visual, multi-media channel, text is still at the core of most information and transaction websites.  In other words, people come to a website for its content...
>
> As a result [of user expectations] poorly written website copy puts visitors off and ultimately loses business.
>
> -- From [Writing effective and accessible web content][bristol-webwriting] at the University of Bristol

[bristol-webwriting]: http://www.bristol.ac.uk/it-services/learning/documentation/webwriting-1/webwriting-1t.pdf

## The sorts of bugs content can have

Content can have a variety of bugs, since there's a variety of antipatterns into which content may fall.  Some examples follow.

### Inaccuracies

Let's say you write a blog post about this sweet new static site generator you've heard about, called Jekyll.  There's a teeny problem: you wrote the post while on vacation on Jekyll Island, and the beach where you wrote the post doesn't have Wi-Fi.  You mistakenly recall that Jekyll is written in Python, so that's what you post.  When you get home from the beach, you forget to check your facts before you send the post to WordPress, and the inaccuracy makes its way into your post.

> I heard about this sweet new static site generator from a friend of mine.  It's called Jekyll, and I think he said it was written in Python.  Good news for all of us in the community, for sure.  That means it'll be easy to add syntax highlighting with the fantastic Pygments library...

Before you know it, one of two things has happened, with one much likelier than the other:

0. The blogosphere takes you to task for your inaccuracy; or,

1. You get confused emails from people unable to find `jekyll.py`.

So this means that you have three responsibilities as a blogger:

0. Check your sources.

1. Check your facts.

2. Follow rules 0 and 1 _before you post anything_.

Fact-checking needs to be a part of your editorial workflow, as indispensable as beckoning your cat to lay in your lap while you write or turning on _SportsCenter_ before you open your post editor.

### Being too advanced (thesaurus syndrome)

Compare these two sentences and tell me which you'd rather read:

A: It is a matter of substantiality that persons of letters writing for sites on  the World Wide Web may entertain a distinct phraseology and a rhetorical style all their own when selecting manners of elocution for their authorial pursuits.

B: It's a fact that people who write for the Web have their own diction and style when selecting how to say things they write.

Chances are, since sentence B has shorter words and is 15 words shorter than sentence A, that you'd choose B in a heartbeat.  Unless you need to discuss really hairy things like [ribulose-1,5-bisphosphate carboxylase/oxygenase][rubisco], stick to shorter words and sentences.  This tendency to be too advanced is my own worst habit as a writer.  It stems from high school and college literature courses where the expectation was to write in an exceptionally florid style with words one doesn't ordinarily use in conversation.  Varied sentence structure is certainly a good thing, and a combination of long and short sentences, intelligently applied, will lend your writing an air of sophistication and consistency.

That doesn't mean, however, that you should proceed blindly into the jungle of needlessly long words or sentences, when shorter ones will do nicely.  Consider the body text of [one of my portfolio pages][af480].  The page, when tested at <http://read-able.com>, has a Flesch-Kincaid Reading Ease index of 35.9, on par with the _Harvard Law Review_, and a F--K grade level of 16.2 -- on par with someone who has a bachelor's degree.  I must have a very keen sense of irony -- the paper the page describes is actually _easier_ to read, according to the metrics, than the page describing it!

Flesch reading ease is calculated by a quite simple formula detailed [at the relevant Wikipedia page][flesch], with polysyllabic words impacting the score far more significantly than sentence length.  The grade level formula converts this score into a US grade level, allowing for a crude approximation of how easy the text is for a student to understand.  Web writers should aim for a grade level between 6 and 10, outside of specialized niches, to reach the maximum number of readers.  Content readability, in fact, is an important part of making the web accessible to those with reading difficulties and intellectual disabilities, and to those for whom the language of the content is not their first language.

Therefore, unless you have considerable reason to prove otherwise, unreadable content constitutes a content bug.

[rubisco]: http://en.wikipedia.org/wiki/RuBisCO
[flesch]: http://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests

### Grammatical imperfections

Bad grammar makes things harder to read.  This is especially true for those who do not speak your language as their first, since their minds might not be as attuned to variations in the constructs of the language as used, not as learned.  As much as precise diction can make things easier to read, bad grammar can undo all those good intentions with just the simplest errors.  Dust off your style guide from college English -- if you didn't test out of the course or sell the book for alcohol -- and use it.  Learn how to use the pieces of punctuation that the English language makes available, from full stops and question marks to commas and semicolons.  I think the semicolon must be the most misused punctuation on the planet, at least in English, and it baffles me that people seem so unwilling to learn how to use language effectively.  Language is a tool, and just like Ruby or C# or macro assembly, English is used for programming.

If it's been a while since you last had an English class, brush up.  Go to the bookstore and buy a style guide, and use the thing if you're unsure about how to use punctuation or the rich array of grammatical words like prepositions and conjunctions.  Not only will this enhance your ability to write and read English, but it'll also make it a lot easier when someone comes knocking with an offer to translate an article of yours into their language.

Bad grammar is also easily fixed, making it an especially egregious content bug.

### Mispelled wrods

Including jargon and scientific terms, estimates peg the number of words in English at between 500,000 and 1,000,000.  The OED, or Oxford English Dictionary, lists 616,500 word-forms as of the 1989 edition, per the [Hypertextbook][hypertextbook].  The number of unique words any one person knows depends on a panoply of variables, including but not limited to languages known, level of education, field of study, and general intellectual curiosity.  _BBC News Magazine_ estimates that a reasonably educated person knows [about 75,000 words][bbcnewsmag].

I'm throwing numbers out because counting archaic words, unusual words, and uncommon words, it's easy to misspell something and end up with a completely different word that's completely unrelated to what was intended -- but one that is valid English.  Consider the word _were_, simple past plural form of _be_, as well as simple imperfect subjunctive of _be_ in all persons.  If you're in a hurry, and you instead type _weer_, then you are using a technically correct word in English, which is the comparative form of the adjective _wee_ as in _a wee lad_.  Said lad's baby brother is a _a weer lad_ by way of comparison.  Both are perfectly valid English words.  My copy of LibreOffice knows both words.  Part of this is the danger of having an overly encyclopedic spell-check dictionary, but the point stands: spell check is **not** the be-all-end-all.

Misspelling words leads nonnative speakers to confusion, since their ability -- if their fluency is only recently established -- to recognize words even with different spellings is limited.

So, the writer must add two new tools to her repertoire: a dictionary and common sense, both equally lacking in today's content writers.  Bad spelling, just like bad grammar, causes the author's credibility to evaporate before one's eyes, and since it's probably the easiest bug of all to fix, it's the most egregious content bug of all.

[hypertextbook]: http://hypertextbook.com/facts/2001/JohnnyLing.shtml
[bbcnewsmag]: http://news.bbc.co.uk/2/hi/uk_news/magazine/8013859.stm

## As bad as code bugs, but more easily fixed

In blogging, we have a fairly standardized workflow to manage the task of writing articles.  We draft posts, then we edit the drafts until they shine, and publish the results.  Drafts must be iteratively improved by fixing grammar, spelling, and factual errors before going to publication, something of particular importance in today's facts-obsessed, perpetually-connected culture.  This is the essence of fixing content bugs, and just as buggy code is bad code, buggy content is bad content.

Today's content writer needs a dictionary, a grammar guide, skepticism, and highly developed common sense.  Is that too much to ask for?