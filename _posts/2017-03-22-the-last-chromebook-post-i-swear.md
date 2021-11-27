---
layout: post
title: "The last Chromebook post for a while, I swear!"
image: "/art/heroes/thinkpad-chromebook.jpg"
description: "Yes, my beloved ThinkPad has been dethroned."
music: "Tove Lo &mdash; Got Love"
coffee: "Iced, with Irish creme flavoring"
mood: "itching to move"
category: Linux
---

Chrome OS has grown significantly on me, which doesn't much surprise me
given that I'm always, of late, on a journey to simplify my computing
life as much as I can.  Chrome OS represents the logical conclusion of
that path, giving me a work environment that I can literally reproduce
on any device capable of connecting to the Internet.  I could buy a $200
Chromebook and take it on vacation with me, getting substantially the
same experience that I get on my Pixel, and still have the brilliance of
the Pixel awaiting me when I got back to Knoxville.  Because my
development environment is now in the cloud as well, I have the
advantages of using Jekyll combined with the simplicity of using Chrome
OS and the familiarity of all my favorite software.  For context, check
out [the review](/archives/323) and [the extra bits](/archives/337).

I've already written 3,600 words about this laptop.  What's a couple
thousand more between friends?

## It is, at its core, really good hardware

I like good, well-built hardware above all else.  Lenovo nailed this
with the ThinkPad X200.  That laptop is one of the most solidly built
portables I've ever used.  I've been inside several laptop brands, and
the ThinkPad compares favorably with my 2000-model PowerBook G3 with
respect to its indulgently overbuilt, expandable, and high-quality
internals.  It's just that the ThinkPad is several dozen times more
powerful, can run Chrome, and isn't older than fucking dirt.

To put it plainly, Lenovo got a lot right with the original Penryn and
Arrandale X200 laptops.  The keyboard is still exemplary, the expansion
options plentiful, and the performance still serviceable even seven to
nine years hence.  And it's very hard indeed to argue with lengthy
battery life and a user-replaceable battery.  Seven hours in Linux is
short, but only by modern standards.  It's still much more than
sufficient for me.

But Lenovo also got a lot wrong with the X200 laptops.  As much as I
_admire_ the incredibly utilitarian looks of the X200 series, I also
have to admit that they're pretty ugly pieces of hardware, with holes
and vents and such everywhere.  I never liked the tapered profile, or
the protruding 9-cell battery, or the scattershot placement of I/O
ports, or the extortionate price of bits and pieces directly from
Lenovo.  (I swear, it looks like Lenovo applied the ports to the machine
with a shotgun!)  Apple did better in the looks department in __1997__
with the original PowerBook G3.

The Chromebook Pixel is much more carefully designed.  The only oddity
is the placement of the headphone port about 5 cm away from the USB
ports, but even with that, I see the logic.  The USB ports are placed
for those few anachronistic loons who still use wired mice, right next
to the Mini DisplayPort and the charge port, while the headphone port is
closer to the user so it's less likely to tug on your headphone cable.
Everything that can accommodate a cable, in fact, is on the left side of
the laptop, a convention I haven't enjoyed on my main machine since I
used a MacBook from 2006 to 2009.  Lenovo cannot get this right, or at
least they can't get it right on the two laptops I've bought from them.
The SIM tray and SD card slot are both on the right-hand side of the
laptop, which also makes sense -- I can access the SIM slot with my free
hand.

## But the software is still kinda limited -- so is the hardware, though

The built-in image viewer can't view TIFF files or camera raw files.
Neither of these particularly surprises me, though the omission of TIFF
files is baffling since it's an open format.  It's also a big letdown
for me, since I scan film negatives into TIFF for subsequent editing and
conversion to compressed and lossy formats.  It's not anything I can't
do on Denali, but having to have a chroot just to view a file format is
too much to ask for, Google.  (For the record, I don't run a chroot on
this machine.  If I need a Linux environment, I've got my IdeaPad.
Warts and all.)

As brilliantly designed as this laptop is -- and it's a gorgeous
machine, that much is certain -- the cooling is a concern.  With the
processor at full song, this laptop has no trouble hitting the low-70s
in terms of temps.  I have to try very hard to get my quad-core IdeaPad
to the mid-60s, creating four threads' worth of synthetic load in a warm
room, and it rebounds right back down to where it should be in the low
to mid-40s.  The Chromebook seems to idle in the mid-50s.  Now part of
me does wonder whether this machine, having sat in a warehouse or on a
shelf for the past four years, needs a break-in period on the current
thermal paste, if not an application of new, better, thermal paste.
With this computer's warranty status uncertain, and my knowledge of its
innards and disassembly just as uncertain, I'm reticent to tear into it
and see how good a job the assembly line workers did with the thermal
paste.[^paste]

Even with more effective thermal material between the heatsink and the
CPU die, that does nothing to change my opinion of the rather limited
cooling system in the Pixel.  As I alluded to in the review, the only
air entrance and exit appears to be through a 2mm slit that runs much of
the length of the rear of the laptop, just below the rear screen hinge.
One of the reasons my old MacBook ran hot was because of its own limited
cooling setup: the MacBook took in air through the middle of the
keyboard and expelled it around the screen hinge.  Now since Apple
decided it'd be a good idea to counter-sink the hinge, iBook-style, on
the MacBook line, that meant impaired breathing all around.  Even
applying new thermal paste to the MacBook's processor dies (one for the
CPU, one for what I seem to remember as the northbridge or GPU) wasn't
enough to increase cooling efficiency enough to make the laptop run
cooler.

## Tangent time!

The comparisons to a MacBook Pro are inevitable.  The Pixel loses the
battle.  Consider its anemic 64 GB SSD, limited 4 GB of RAM, and
low-voltage Core i5 processor, and compare those to the discrete
graphics, upgradable SSD, and sky-high RAM ceiling (16 GB) of the MBP.
Even the original Retina MacBook Pro has better specs.  Is macOS a
better match to how I use a computer?  Well...

NO.

I bought my MacBook in November 2006.  That was the first laptop I used
for running Windows Vista in 2007, and that thing ended up spending more
time in Linux than it ever did in macOS.  Even after buying a desktop
Mac (a Power Mac G4 for just $80 plus shipping), I tried my hand with
various operating systems on the MacBook, at times running Windows XP,
Debian, Fedora, and of course macOS.  Even at times when I was running
macOS on both of my Macs, I still had access to a PC that I owned: in my
case, an old, crusty Dell OptiPlex that, by all rights, should've been
fertilizing the earth from below.  (I used it to great effect as an x86
Linux box.  That thing was amazing in mid-aughts versions of Ubuntu,
e.g. Feisty, Jaunty.  I swear it didn't feel like a 2003 computer, even
with only 512 MB of RAM.)

Now, in fairness, I'm not a 100% Chrome OS user, nor could I be.  I need
access to Microsoft Office (or LibreOffice) for work, and the online
versions simply won't cut it.  I need access to Audacity for digitizing
vinyl records, and I need a very recent Linux kernel to support the
external sound card I have to use to get stereo audio.  (And guess what!
The kernel that would run under a chroot is too old!)  Hell, to edit
this very website, I have to have access to an external server that runs
my development environment, with every nettlesome dependency that
implies: Ruby, Rake, Jekyll, Node, Gulp, the list only seems to
lengthen.  And to store 500+ GB of files, including 200 GB of digital
photos, I have to have access to online storage, which I do with my
Linux server.  I could use whatever OSes I wanted to use, as long as
they have support for SFTP, SSH, SMB, a Web browser, and possibly an RDP
client (keep your RSS readers tuned to this frequency, ladies and
gents).  That I've rather painlessly moved as much of my workflow to the
cloud speaks to the remarkably fast achievement on the part of industry
of mature cloud technologies.

But the cloud, as Google exposes it to you through a Chromebook, doesn't
interface neatly with workstation tasks.  You can't run VueScan on one,
for example, outside of a chroot.  Likewise with Audacity.  The
Chromebook is a brilliant idea, and the first-gen Chromebook Pixel is a
brilliant piece of hardware.  I adore it, both because it's eminently
well-built and yet cheekily impractical, the perfect Google-style mix of
function, form, and irreverence.

The screen ghosting on this IPS panel is weird.  Perfectly normal, which
is to say within the parameters of the panel, but weird no less.  At
maximum brightness, it's a retina-popper -- even plugged in, I have to
run this screen at half brightness, if not a touch less, to keep my
vision somewhat sane.

The Chromebook Pixel was made for two kinds of people: Googlers, and
alpha nerds outside the Valley.

I've been the alpha nerd in every pack of nerds I've ever run with.
Guess which one applies to me.

[^paste]: Re-pasting my Lenovos worked wonders.  The old 45nm Penryn C2D in my work ThinkPad idles in the high 30s, while the 32nm Ivy Bridge Ci7 in my IdeaPad idles in the low 40s.  I used Arctic Silver 5 in the ThinkPad and C&eacute;ramique 2 in the IdeaPad.  I'll use one or the other, depending on what I've got on hand.)

