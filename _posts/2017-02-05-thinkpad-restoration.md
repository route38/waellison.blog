---
layout: post
title: "Restoring my ThinkPad X200"
image: "/art/heroes/tpoint.jpg"
description: "Wherein the old and worn become less worn."
music: "Radiohead &mdash; Paranoid Android"
coffee: Great Value French Roast
mood: technical
category: Hardware

permalink: "/archives/194"
---

This little laptop has been my faithful companion since February 2009,
when I bought it for $1100 brand-new from Lenovo.  It's been through
hell and before the refurbishment, it looked the part, with missing
rubber feet, banged-up paint, flaking plastic, and a(n impressively)
heavily used keyboard.  But $20, an hour of my time, and a fresh Debian
installation got it back in the world of the pretty, and it's ready for
Part Three of its journey.

## Parts One and Two

I picked this laptop out after looking for one that satisfied four major
requirements.

1. Not an Apple Mac.
2. Netbook-sized, but with real laptop performance.
3. Good candidate for Linux.
4. At least 6 hours of battery life.

The X200 ticked all of these boxes.

1. Aside from the PowerBook/MacBook Pro line, the ThinkPad is _the_
   professional laptop of choice.
2. The 12.1" screen and full-blown Penryn processor meant that I got
   full laptop performance with 2 GB of RAM.
3. Even when it was brand-new, the X200 was a fantastic candidate for
   Linux, particularly Ubuntu.  (Yes, there was a time when I preferred
   Ubuntu.)
4. In Linux, with a brand-new 9-cell battery, if I really coaxed the
   life out of it, I could pull 7-8 hours on the extended battery.  In
   Windows, with its better power-management drivers, I could get 8-9
   hours.  Power adapter?  What power adapter?

At the time of purchase, these were the specs:

* CPU: Intel Core 2 Duo P8400 (2.26 GHz, 2c/2t, 3M cache)
* GPU: Intel GMA 4500MHD
* Storage: 160 GB Fujitsu hard drive
* OS: Microsoft Windows Vista Business x64, with XP Pro x86 installed
  via downgrade rights
* Wireless: Intel WiFi Link 5100AGN
* Memory: 2 GB DDR3-1066
* Power: 9-cell battery and 65W power adapter
* Screen: 12.1" WXGA CCFL

Part One of this story takes us back to the old Claxton Complex, at the
corner of Volunteer and Andy Holt, where computer science was located at
the University of Tennessee until 2012, when it moved to the shiny new
Min H. Kao building (Min Kao being half of the foundership of Garmin) at
the corner of Cumberland and Estabrook.  I was a CS student there, and
the ThinkPad let me go to lectures, shoot the shit with my classmates,
and go out for coffee and sandwiches in the adjoining business building
(where I could also ogle the cute coeds, which we didn't have many of in
the comp sci program), which had an Einstein Bros. mini-restaurant in
its main concourse.  (Their coffee is amazing.  Seriously, that shit
will blow your mind.)  I did a lot of programming on this machine,
primarily using Ubuntu, Emacs, GCC, and usually a custom-made
environment with Fluxbox and a few extras.  I graduated in 2011, and I
have this machine to thank for some of my finest moments as a
programmer.  In 2010, I put RAM and a hard drive in it, running a 500 GB
hard drive (at 7200 rpm) and 4 GB of RAM.

After graduating, the ThinkPad continued to serve me, getting loads of
battery life right until the bitter end of the first battery.  That came
in 2013 (I think) when, after more than 600 charge cycles, the stock
Sanyo battery stubbornly refused to charge any more.  I replaced it with
the baby 4-cell battery, eventually caving and getting another 9-cell
unit in 2015.  (They go cheap on eBay, far more reasonable than what
Lenovo wanted for it.)  Even though I'd moved most of my computing to a
Lenovo IdeaPad in August of 2013, I kept the ThinkPad both as a reminder
of my college days and as a backup in case I needed to service the
IdeaPad.  I also used it to experiment with various alternative OSes --
the ThinkPad, as it happens, makes a superb test rig for Haiku (the
free-software re-creation of the BeOS), (probably) ReactOS (if you have
an UltraBase docking station, since the installer freaks out with USB CD
drives), and -- if you replace the wireless card -- Windows 2000.
Indeed, the X200 enjoys a broad base of general OS compatibility (these
being OSes I've personally tried):

* All Linux distributions based on a 2.6.27 kernel or later (I've run
  various versions of Mint, Debian, Ubuntu, Fedora, Scientific, and
  Gentoo at various points)
* Windows 2000, XP, Vista, 7, 8, and 10 (mine came with XP via downgrade
  rights from Vista)
* Haiku alpha 4 and nightlies (use an Atheros wireless card and you can
  get it online!)
* OpenBSD
* NetBSD
* Chromium OS
* Android-x86 (I tried JB and L; I see no reason why M or even N
  wouldn't work, pending an x86 release of N)
* Mac OS X (after a fashion; I tried an iATKOS distro of 10.5, and it
  kinda worked, but the GMA 4000MHD graphics board didn't work)

The X200 probably can handle any x86 or x86_64 operating system there
is, providing that there are drivers for the hardware.  I've never
tested FreeBSD, DragonflyBSD, or PC-BSD, among others (this being mostly
a Linux household, natch), but I see no reason why they wouldn't work
aside from firmware-dependent Intel wireless cards.  (You can swap in
something more amenable to the needs of your OS, like an Atheros card,
if you'd rather not deal with proprietary firmware.  You have to hack
the BIOS or use the WWAN slot.  I use the WWAN slot.)  In 2015, I added
a 128 GB SSD in place of the hard drive, and in 2016, I put a USB 3.0
card in the ExpressCard slot.  (I had to remove it for Slackware to go
to sleep, but I don't use it too often anyway.)

## Part Three

Which brings us to the present day.  I decided to refurbish the ThinkPad
and allow it to live out the last few years of its useful life -- which
I expect to last until at least 2020 -- in relative peace and comfort.
To this end, I needed to put the parts -- or some subset of the parts --
into a new case.  Luckily, I found a mostly-complete ThinkPad on eBay
for just $20 -- all it needed was a display panel, a hard drive caddy, a
new battery, and some RAM -- all of which I had on hand!  I spent about
45 minutes putting in the new display panel (it's harder than it looks,
but not by much) and about 30 minutes installing a new OS on an unused
SSD I had laying around.  I got a modest speed bump and an obscure piece
of hardware out of the deal.

* CPU: Intel Core 2 Duo P8600 (2.4 GHz, 2c/2t, 3M cache)
* GPU: Same
* Storage: 120 GB Toshiba TR150 SSD
* OS: Kubuntu 16.04 LTS (x64)
* Wireless: Atheros AR5418 wireless (ex AirPort Extreme)
* Memory: 4 GB DDR3-1066
* Power: Same, plus a close-to-dead 6-cell battery
* Screen: Same
* Other: Intel Turbo Memory 2GB

Turbo Memory was an odd piece of hardware.  It was an early stab, by
Intel, at a hybrid storage medium, essentially a flash-based cache that
lived between Windows (on the hard drive) and the main RAM.  It
purported, if I recall the marketing copy correctly, to make Windows
boot faster and to improve Windows' performance.  In practice, the only
significant improvement was about five seconds in boot times -- and as
any good nerd who lived through the transition can tell you, even the
earliest solid-state drives did more than that for boot times.  Of
course, the earliest SSDs also had an obscenely high price per gigabyte,
and Turbo Memory was Intel's attempt at a compromise.  As obscure
hardware goes, the Turbo Memory is rather poorly supported outside of
exactly two operating systems: Windows 7 and Windows Vista.  (There is,
purportedly, support in subsequent versions of Windows.)  My hope when I
first saw that this machine had a Turbo Memory chip was that I could use
it as a second layer of RAM, basically a swap partition not on my SSD.
Here's the problem, though: With Linux, right now, I'm using about 2.7
GB of RAM to run KDE and Mozilla Firefox.  That's enough to run 285
processes and provide ample cache and buffer space to my programs.  I
have 1.3 GB of RAM just laying around doing a whole bunch of nothing,
and that's on a laptop with just 4 GB of RAM.  My 4.8GB swap partition
is _only_ used for suspend-to-disk.  Even under heavy memory usage, I
hardly ever use a swap partition for its intended purpose of virtual
memory.  That's just how Linux is.  On my desktop, with its 24 GB of
RAM, I don't even run a swap partition.  My server is running 8 GB of
RAM and while it uses the lion's share of it, most of the used memory is
allocated for caching.  Again, there's zero swap usage.  None.  Nada.
Zilch.  Perhaps back in 2008, when some customers still bought computers
with "only" one gigabyte of RAM in them, there might've been a niche for
Turbo Memory.  Nowadays, though, with memory prices laughably low, with
laptops having ridiculous memory ceilings (32 GB, anyone?), and with the
vast majority of users not needing more than 4 to 8 GB of RAM (depending
on OS and application load, anyway), that niche is gone.  Turbo Memory
is a solution without a problem, so I guess it's just as well that Linux
offers little support for it.  A Wireless-USB module can also
(supposedly) go in this PCIe slot, and while that technology is also a
solution without a problem, at least it would be more interesting than
Turbo Memory, and at least Linux offers driver support for Wireless-USB.

There's still a few things I'd like to do to this machine.  A hacked
BIOS, or an upgrade to Libreboot, would be fantastic.  (And with two
boards to try it with, I have double the chances to get it right.)  A
Wireless-AC card would be nice, as would an IPS panel and a 3G card.  A
larger SSD may be nice down the road if I go back to doing a lot with
the ThinkPad.  (Let's say I sell the IdeaPad.  The 512 GB SSD sure as
hell isn't going with it.)  An extra battery or two wouldn't be a bad
idea.  And, perhaps, I might yet drop in the motherboard from an X201
(with the concomitant BIOS hacks) and drink in the hyperthreaded
brilliance.  Eight gigabytes of RAM would be overkill for Linux unless I
get hit by an asteroid and decide that grad school for CS is a brilliant
idea.  (Not bloody likely, as they'd say in the UK.)

The X200 ThinkPad line is my favorite computer design ever.  I'd keep
using these for the rest of my life if the technology would stay
up-to-date.  Unfortunately, Lenovo pissed all over the quintessential
widescreen ultraportable when they refreshed the line with the X220,
X230, and so on.  This being said, I still consider my life as a
computer user to be all the fuller because I used this machine as a part
of my lineup.
