---
layout: post
title: "Farewell, Linux?"
image: "/art/heroes/got_my_bag.jpg"
description: "It's over between us, systemd!  <strong>Over, I tell you!</strong>"
music: "AC/DC &mdash; Goodbye and Good Riddance to Bad Luck"
coffee: None
mood: frustrated
category: Linux

permalink: "/archives/274"
---

Ten-and-a-half years ago, back in August 2006, I started using Linux.
Debian, more specifically.  I liked it.  It was as easy to use as
Windows was, but it performed better on the same hardware.  It also
seemed to better suit the way I thought, even as a neophyte and relative
computer layperson.  In the months that followed that first install, I
fell in love with Linux.  Hard.  I've distro-hopped, explored, tested,
wandered, and wavered, but never have I faltered -- and I always came
back to my first Linux-related love, Debian.

Until I [didn't](/archives/214).

<!--more-->

I've spent a significant proportion of the past ten years in Linux.  My
evaluation of a computer's merit for my use begins and ends with its
amenability to running Linux.  (Well, at least in most cases.  I buy my
old Macs for running Mac software.)  [My recent ThinkPad
restoration](/archives/194) was primarily meant to turn it into a
delivery platform for my now-favorite Linux distribution,
[Slackware](/archives/214).  I like Slackware for a variety of reasons:
it's fast, it's lean, and most importantly, it's Unix-like, much more so
than other modern Linux distributions.  And although he made the
decision in 2005, 12 years later, the decision on the part of Patrick
Volkerding to switch from GNOME to KDE has been vindicated.  How does
this have anything at all to do with Slackware?  Keep reading and you'll
see.

Note: Nerdy content ahead.

## What we're dealing with here

The root process on a Linux box is called `init` (located at
`/sbin/init` in the filesystem), and the `init` process is responsible
for one task: initiating other processes, hence the name.  To accomplish
this, `init` controls the runlevel, which is a shorthand way of saying
what the system is capable of doing at any given moment.  In runlevel 0,
for example, the system is halted and you can only power it down.
Runlevel 6, conversely, makes the system reboot.  Typical multi-user
text login is enabled at runlevel 3, with its graphical counterpart at
runlevel 4.  Runlevel 1 is for single-user login, such as during system
recovery or maintenance.  (Runlevels 2 and 5 are unused in Slackware
Linux.)  Only SysV init systems have runlevels; BSD init, among others,
does not.

As developer Jorgen Schäfer explains [at his
weblog](http://blog.jorgenschaefer.de/2014/07/why-systemd.html), the
boot process on a Linux machine goes very roughly like this:

1. Power on the machine.
2. The system's firmware (BIOS, Open Firmware, UEFI, etc.) loads the
boot loader from a bootable medium (hard drive, CD-ROM, USB, etc.).
3. The boot loader loads the operating system kernel, in our case the
Linux kernel.
4. The kernel initializes the computer's hardware to a known starting
state, loads required drivers, and starts one process: `init`.
5. `init` is then responsible for loading the various services that the
computer uses, everything from networking to MariaDB and from your
desktop manager (e.g. `kdm` on my Slack box) to your laptop's ACPI
management programs.

A good init system allows you to practice separation of concerns, for
example by running your HTTP server as a non-root user (e.g. `www-data`
on Debian-like systems) or binding your database server to run only on
CPUs 2 and 3, saving CPUs 0 and 1 for the HTTP server and 4 and 5 for
FastCGI.  (A six-core Web server.  Hey, a man can dream, right?)  The
kernel keeps the system together by managing system-level things such as
device abstraction and interrupt management, allowing init to handle the
task of deciding how to service interrupts[^1].  A better init system
also allows you to monitor the status of services and to start, stop,
and restart them at will.  An excellent init system does this and also
monitors services to restart them automatically if they fail.

To put it simply, an init system is a _service manager_, no more and no
less.

There are currently five styles of inits in use on various Unix-like
systems.  This list is not exhaustive, becuase there are several
different types of each init system.

1. SysV-style init, as originated on System V Unix (many older Linux
distros, but also AIX, HP-UX, older Solaris releases, and UnixWare).
2. BSD-style init, as originated on BSD Unix (primarily BSD systems,
obviously).
3. `launchd`, used by Apple's macOS.
4. Service Management Facility, used by Oracle Solaris.
4. `systemd`, used by many Linux distributions.

## Microsoft Linux

It may seem like an oxymoronic statement.  It may seem like an
improbable idea, if not an out-and-out impossible one.  But the
tentacles of `systemd` run deep into your Linux system, and the
impressively dumbed-down GNOME environment (which I quit using when
version 3 hit) now has it as a requirement.  What gives?

`systemd` sure is a service manager.  And on the face, it's a rather
sophisticated one.  I can say `systemctl restart apache2` on my server,
for instance, and restart the Web server after editing a config file.
`systemd` lets you run services in response to interrupts, such as when
a device is plugged in or when a particular mount point becomes
available.  This is all well and good, I guess, but the arrow of
progress leads in only one direction on the desktop, and I don't much
care for the result.  If I wanted a stupidly integrated system, with
dependencies and so forth wound up into one huge ball of twine, I'd put
on my dunce cap, pop down to the shops, and buy a Macintosh.  I wouldn't
even dignify Microsoft by buying a copy of their operating system or a
computer that comes with one.  (Not that the Apple pill would be much
easier to swallow, mind.)  I left Windows behind as a primary OS
specifically because of the headache-inducing stupidity of which it was
capable, stupidity arising in part from the tight integration of the
operating system.  (Ever want to view a log file to see why a program is
failing?  Meet `eventvwr.msc`, the graphical way of doing that.  Event
Viewer can go suck a lemon.)

The problem with `systemd` is not that it's an enhanced `init`.  The
standard, canonical `init` system, either SysV- or BSD-style, isn't
really tenable on modern systems.  No, the problem is that the tendrils
of `systemd` are seeking to supersede every part of your Linux box, from
the `cron` task scheduler to network configuration, from mounting
network shares (and local drives) to performing user authentication.
Even at a collection of 69 binaries, `systemd` violates the one thing
that drove me to Linux in the first place:

**Do one thing, and do it well, to the exclusion of all other things.**

That is the essence of the Unix philosophy.  When a Unix programmer
writes a program, she writes it to do one thing, to do it well, and to
do it to the exclusion of other things.  She doesn't program a text
editor to fetch email, unless it's the lifestyle choice with text editor
that is Emacs.  She doesn't program an OS kernel with a built-in HTML
renderer.  If she were instead in a machine shop or a smithy, she
wouldn't fabricate a shovel that doubled as a rake.  `systemd` has, in
principle, one closely related set of jobs: to start, monitor, stop, and
restart services on a Unix system.  Even starting services in response
to interrupts, such as when you insert an SD card or a flash drive,
wouldn't be a terrible idea, especially on laptops.  Instead, `systemd`
is morphing into a free-software implementation of `svchost.exe`, the
worst part of Windows NT.

If I wanted that, [ReactOS](//reactos.org) isn't that far away from
beta.

## What's next?

The overarching idea of all Unix-like systems is technical merit backed
by simplicity of implementation.  As far as I can tell, `systemd` has
neither technical merit nor simplicity of implementation.  Combine the
two concepts and you get elegance.  Ignore both of them and you get
projects like Windows and `systemd`.  There's an important cultural
thread here, too: Red Hat is the primary backer of `systemd`, and as we
all know, that's a double-edged sword.  Yes, Red Hat have done a lot
over the years in contributing back to the Linux project as well as to
major parts of the system like `glibc`.  However, they are not a
collective of hackers, but rather a corporation beholden to its
shareholders.  (At $83.75 a share, no less.)  And Red Hat have a vested
interest not only in getting as many companies as possible to
standardize on their Linux distribution, but in spreading their ideas
far and wide within the Linux community.  Most insidious among these is
`systemd`.  Rather like Intel and the x86 processor architecture in
silicon, and very much like Microsoft with that other OS, Red Hat wants
to standardize Linux, to make it more broadly similar, and to beat some
of the differences out of it, differences that make Linux _Linux_.
`systemd` is a response, and as of right now the most insidious one in
my eyes, to the balkanization of the Linux community.  The wonderful
diversity of systems and concepts is what makes the community and its
hundreds of distros so damn great.  Even if those concepts are
ultimately traceable to a handful of progenitors[^2], it's still a broad
and diverse array of answers to fundamentally the same kinds of
questions.  To me, [this family
tree](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
is not a bug, but a feature, of being a Linux user.

I'll keep using Slackware for as long as it remains unsoiled by
`systemd`.  On servers, where much of its stupidity is kept at bay by
the restricted functionality of a server environment, I'll keep using
something more turnkey like Ubuntu or Debian, but only until I can find
an agreeable alternative.  But in the meantime, I'm making serious stabs
at using non-Linux systems.  My forays into NetBSD and OpenBSD have been
quite promising.  I can't see either of those projects succumbing to the
pressures of running `systemd`.  Honestly, I can't see FreeBSD going
that way either, but I can at least install Net or Open from USB media.

[^1]: Example: you strike a key on your keyboard, which generates an interrupt from the keyboard controller.  This raises an interrupt line on the processor, which the kernel services once it is raised.  The interrupt amounts to saying, "Hey, this thing just happened, what do you want to do about it?"  In the keystroke case, the keystroke is routed to the currently running process, which handles it accordingly by adding (or removing) text in a buffer and updating the screen display as necessary.

[^2]: The five primary flavors of Linux are Slackware, Red Hat, Debian, Ubuntu, and Gentoo.  While there are dozens of other styles, these are the most influential.  Ubuntu is a Debian derivative, but is now idiosyncratic enough that I consider it a fifth flavor.
