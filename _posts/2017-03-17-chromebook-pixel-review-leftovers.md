---
layout: post
title: "Bits I forgot from the Chromebook review"
image: "/art/heroes/thinkpad-chromebook.jpg"
description: "Still nicer than a ThinkPad."
music: "The Beatles &mdash; I Want to Tell You"
coffee: Dark roast
mood: connected
category: Hardware

permalink: "/archives/337"
---

I was so caught up in trying to understand the Chromebook Pixel and its
unusual place in the computing landscape that I just plain forgot to
cover a few parts of this laptop's unconventional operation in [my
recent review of the thing](/archives/323).

## Why bother?

I realize that Google positioned the Pixel laptops (both the 2013 and
2015 editions) as extreme machines for developers, hence the
no-compromise design and little flourishes like the light bar (hold your
horses, I'm getting there) and the touch screen.  The latter is what has
me confused.  Chrome OS is so poorly touch-optimized in its current
state that it may as well not even be touch-enabled at all, and the
touch screen -- while it blows away most of the ones I've ever used --
just doesn't make sense.  I like being able, at random times, to reach
out and touch my next YouTube video or to navigate the Google Play Music
site with touch, but broadly speaking, touch just doesn't make much
sense as a feature to include in a laptop.

Google did do a nice job of making the screen good and thin, though --
it's on par with my non-touch-enabled ThinkPad's screen from 2008.

## From the weird features department...

The light bar on the back can't be controlled through recent Chrome OS
revisions, even in developer mode.  It's a shame, too, because that
could be a potentially neat feature that Google has rather permitted to
languish.  The blue light on the back of the screen doesn't symbolize
much, though it does turn red when your battery dips below a certain
threshold, and if you enter the legendary Konami code, it'll do a little
dance for you.  And when you close the laptop, it will glow briefly in
the four Chrome colors: blue, red, yellow, and green, in that order.  On
the newer Pixel, if you touch the light bar, you can see the battery
charge level; the 2013 Pixel lacks this feature and I consider that a
shame.

## Hang-ups for the penguin crowd

The Chromebook Pixel does not use standard ACPI sleep and wake when
running an alternative OS.  This proves to be a massive pain in the
posterior when trying to use a laptop in the way I've done for ten
years: by putting it to sleep when I don't need to use it, or when I
need to move it.  Instead of standard sleep/wake, both distros I've
tried get _fully shut down_ instead of put to sleep, and not even
suspend-to-disk works to preserve my working state.  This makes Linux,
outside of a chroot, completely useless for me without burning a new
firmware to this laptop.  (For the record: I've tried the latest
versions of GalliumOS and Slackware.)

## Other assorted sweepings

Chrome OS also has a built-in, offline, audio player.  Said audio player
can reproduce FLAC audio, as I tested with a vinyl rip from the
excellent album, _Bridge over Troubled Water_, by Simon & Garfunkel.  I
assume it can also reproduce more common formats like MP3 and AAC, but I
didn't have any on hand to test with.

The processor throttles down enough while on battery that the Pixel is
usable as a traditional laptop, without running too hot, and it stays
pretty quiet for the most part, if not outright silent.

Chrome OS had no trouble whatsoever reading FAT32, NTFS, or ext4 file
systems.  I didn't have any media handy that was formatted to exFAT, but
since I have to install the appropriate FUSE drivers on other
Linux-based systems of mine, I have my doubts as to whether it'll work
with the Chromebook.  I also don't have any other file systems handy on
removable media to test out.

The only cooling available to the Chromebook is through a thin slit,
about 2 mm high, under the rear screen hinge.  While this makes the
Chromebook look very sleek indeed, it's a bad design, and I'm not
looking forward to cleaning the dust out of that area when the time
comes.  As narrow as the passage is, that time will come sooner than you
think.

At just 15 mm thin, the Pixel is a little awkward to carry, considering
that I'm used to much thicker laptops.  At 1.5 kg, however, it is, by
turns, pleasingly light and satisfyingly dense, which is to say that I
don't feel like I'm carrying a toy.  (Part of me wants to investigate a
KDE Slimbook instead, but only because I'd put Slackware on it.)

## Chrome OS itself, a week in

Last night, I needed to upload an image to my web server.  This calls
for `sftp`, and without enabling developer mode, Chrome OS doesn't offer
`sftp` support.  Then I remembered that I installed a program called
_Network File Share_ so I could access my local SMB share, and that got
me thinking that I could look and see if there was an SFTP client
available for Chrome OS.  To my delight, there is [such an
app](https://chrome.google.com/webstore/detail/sftp-file-system/gbheifiifcfekkamhepkeogobihicgmn?utm_source=chrome-app-launcher-info-dialog),
by a Japanese developer named Yoichiro Tanaka.  Mr. Tanaka wrote his app
in such a way that your SFTP share appears as a file system within the
Files app, meaning that you can -- with appropriate amounts of latency,
of course -- copy directly from Google Drive to your remote server.
Very, very cool indeed.

Only a few tasks remain unsolved for me with regard to using Chrome OS
as my daily driver operating system:

* Audio recording and editing (e.g. vinyl rips)
* Printing
* Photo editing (sorry, Pixlr probably isn't what I need)
* Local software development (mostly C/C++, but also Ruby, shell, and a
  little JS)
* Video recording, editing, and manipulation (e.g. using Handbrake to
  rip DVDs, then using appropriate manipulation programs to get them
  into a more amenable format)
* Virtual machines
* 3D modeling and rendering
* Film scanning
* Gaming

All of these tasks, except for printing, are ones that I shall have to
delegate to other, more capable, machines.  For 3D modeling, I like to
use DAZ Studio 3D as a virtual photo studio.  So it would appear that
I'm going to have to keep using mainstream desktop OSes (Linux for
everything but DAZ and gaming, Windows otherwise) for the foreseeable
future.

## Overall

I'm torn.  I mean that sincerely: I'm conflicted on how much Chrome OS
will alter how I use a computer (the answer, manifestly, is "not much")
and I'm also torn as to how much I will have to alter my workflow to
accommodate having a large chunk of it in the cloud.

Part of me wants to ship the Chromebook back to the seller.  The other
part of me is infatuated with the beautiful hardware and delightfully
utilitarian operating system.

My inner utilitarian is winning out.  The Pixel is growing on me.
