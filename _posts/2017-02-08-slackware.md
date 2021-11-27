---
layout: post
title: "A Linux man's rite of passage"
image: "/art/heroes/tpoint.jpg"
description: "No TrackPoints were harmed in the making of this post."
music: "ThinkPad fan noise and my own groaning"
coffee: Instant
mood: empowered
category: Linux

permalink: "/archives/214"
---

Debian is a fine Linux distribution, and I use it or something based on
it for the majority of my computing.  It's computing in all-caps, a
light and spry OS compared to the leviathan that is Windows, but it does
too much for you.  At least that's the opinion of a small minority of
Linux and other Unix-like OS enthusiasts.  Enter Slackware Linux, the
oldest extant Linux distro.

<img src="https://vsdev.org/wp-content/uploads/2016/09/elbrus-desktop.png" class="img-responsive" />

[Slackware](http://www.slackware.com) is the work of Patrick Volkerding
and a small team of contributors, as compared to the massive community
surrounding Debian.  (Even one of my professors from college has a
program in the Debian repositories, although he isn't that program's
Debian maintainer.)  I've used Linux for 10-1/2 years, and while I've
grown very fond of (and comfortable with) Debian, sometimes it just
doesn't excite me the way it used to.  It's grown easier to install,
easier to maintain, and easier to administrate.  How much of this is
down to changes in the Debian base tools (particularly `apt` and
`dpkg`), and how much of it is down to my own experience with Debian, is
open to debate.  I've used other distros both on the desktop and the
server, and this very site is served from a server running the Debian
derivative, Ubuntu, primarily because I'm too lazy to compile PHP7 from
source on Debian.  My non-Debianoid experience is primarily with Fedora
(about 20 releases ago, mind you), although I've used CentOS, Gentoo,
and -- the subject of this post -- Slackware.

## Why Slackware?

This is a list (certainly not a complete one) of the things that Debian
has, things that Slackware lacks.

* More than 20,000 precompiled packages for several CPU architectures,
  including 32- and 64-bit Intel, PowerPC, ARM, and Sparc
* A sophisticated, best-of-breed package manager with sensational
  dependency resolution, incredible speed, and multilib capabilities on
  x86
* A wonderful `alternatives` system that allows admins to select
  preferred programs for various tasks, including text editing, paging
  long files, browsing the Internet, and the command shell
* Broad support on the part of ISVs and hardware vendors alike (more an
  advantage of Ubuntu than Debian, but many Ubuntu packages also work on
  Debian)
* One of the largest subcommunities within the broader Linux community;
  by some measures, Debian is the most-used Linux distribution on earth
* Precompiled MATE binaries

If someone asked me why I use Debian to the preference of other distros,
my answer would begin and end with `apt`, the Advanced Packaging Tool.
There are a few things I have to download from outside of the Debian
repositories (namely, the latest Owncloud client, Google Chrome, and the
Canon UFR printer drivers), but having to download those few packages
for my idiosyncratic setup hardly constitutes the end of the world.  I
can configure Debian exactly how I want it from the installation
program, down to my preferred desktop environment and manager (MATE with
LightDM).

So why would I pick an OS that has none of these features?  Slackware
has very limited package management facilities, no `alternatives`
system, virtually no support from ISVs, a tiny user community, and if
you want MATE, I hope you're willing to wait.  Truly, the experience is
closer to that of Gentoo than that of Debian -- at the very least,
you're compiling more stuff from sources than you would do otherwise.
There's a part of me that likes this measure of control, that
appreciates the ability -- and the necessity -- of resolving
dependencies myself, of controlling to the last byte what goes into my
system.  I think this is something I'd more fully appreciate on the
server, but it's nice for standard workstation applications too.

The primary reason I decided to start using Slackware full-time -- or
nearly so, since I'm only using it on my ThinkPad for now -- is that I
want to learn more about Linux, the underlying concepts, as opposed to
any given distro.  Slackware aids in that process because it's pure,
clean Linux, with only the thinnest of veneers of abstraction above the
system itself.  If you want to change some aspect of the system's
behavior, there's no package for that -- you have to delve into `/etc`
and find the relevant file, edit it, and reboot the system if needed.
It's no picnic, to be sure, but you get used to it quickly.  As a very
simple example, enabling graphical login (like any other Linux distro)
requires changing the runlevel Linux runs at, via the `init` task, after
completing the boot process.  Slackware, like most Linux systems, has
seven (documented) runlevels: runlevel 0 halts the system, 1 is for
single-user mode, 2 and 5 are unused (and aliased to runlevel 3), 3 is
for text login, 4 is for graphical login, and 6 is for rebooting the
system.  So to enable graphical login, you edit `/etc/inittab`, changing
the default runlevel of the system accordingly.  And to change your
login manager, you edit `/etc/rc.d/rc.4`, the shell script that is run
when runlevel 4 is started via `init`.  (`init` is very, very roughly
analogous to `ntoskrnl.exe` in Windows NT.  In Debian and many other
modern Linux distros, the `init` process is now part of the system
daemon, `systemd`, rather than being more like the classical System V
Unix style of `init`.)

The result of this thinner layer of abstraction is an operating system
that is familiar to my Linux-based heritage (it is, after all, the
standard Linux kernel with a GNU userland), but more Unix-like than most
modern Linux systems.  In OpenBSD, say, you're also responsible for
resolving your packages' dependencies, but OpenBSD at least has a
collection of binary packages available, and the `pkg_tool` used in
OpenBSD does perform dependency resolution.  The problem I personally
have with the BSD way, at least in Open and Net, is that the packages
are horribly out of date even in the latest releases.  KDE 3.5.10 is the
standard release of the environment in NetBSD 7.2, for example, although
at least Firefox is up-to-date with the same ESR version I use in Debian
and Slackware.  (There is no Chrome for BSD, unless you run the Linux
binaries through the compatibility layer.  I'd just as soon use the
Linux I know and love, thanks.)  I get the advantages of Linux,
including `sysfs` and `procfs`, incredibly broad hardware support, and
excellent performance, along with the elegance of pure Unix.  Slackware
is the best of both worlds.

## About managing software, though...

You build it from source or acquire the binaries, just like any other
Linux, and enrich your PATH to compensate.  I hang my builds off of
`/opt/local/$PROGRAM_NAME`, so for Vim 8.0 (not in the Slackware
repositories), I use `/opt/local/vim`; when I get Ruby installed (not
through RVM, which chokes on Slackware), I'll use `/opt/local/ruby`.  A
few precompiled things live in my personal `bin` directory at
`/home/wae/bin/$PROGRAM_NAME`, like Microsoft's Visual Studio Code text
editor.  There is a way, however, to build some software using a method
specific to Slackware: the SlackBuild.

A SlackBuild is a shell script that takes the normally available source
code of whatever program you wish to install, enriches the build
environment so the compilation system knows where the libraries are, and
generates a Slackware package with your program inside, ready to be
installed with `installpkg`, the (rough) Slackware equivalent to `dpkg
-i` on Debian.  My sole gripe with SlackBuilds is that they're compiled
as root, which is less than ideal for security purposes.  (If you're
smart, or paranoid, you look at the SlackBuild beforehand, to verify
that it won't beam your cat into space or eat all the mayonnaise in your
refrigerator.)  Instead of an idiosyncratic package format like a `deb`
or an `rpm`, and in place of `apt`, `yum`, `pacman`, or `emerge`, you
get `slackpkg`, `installpkg` and friends, and the aforementioned
SlackBuild system.  (You also have `pkgtool`, which is similar to
Aptitude on Debian.)  These tools are how you install outside software
the "Slackware way" and keep your system up-to-date.  There's a [page in
the
documentation](http://docs.slackware.com/slackbook:package_management)
about how to manage packages under Slackware.  In my humble opinion,
this method of managing software isn't quite as good (read: as
laziness-enabling) as `apt` and `dpkg` are.  This advantage, if you
choose to see it as one, is that this does require more attentiveness on
your part; it's far from a plug-and-play type of setup.

## So what do I really think?

It's better than OpenBSD or NetBSD, at least as far as the user
experience is concerned, particularly for use on a laptop.  I can say
the same of my limited experience with Gentoo (compile all the things? I
don't think so!!) and Arch (which was just a pain in the ass all
around).  Slack is closer to black coffee than most distros, but even
with `slapt-get` (which I've yet to try) it's not as easy to
administrate as Debian is.  And in the same way as any other Linux or
BSD system, it's loads better than macOS or Windows.

From within KDE, the user experience is fine, just the same as under any
system where KDE runs.  I have no real, strenuous objections to
Slackware and will keep using it as a learning tool.  I can't yet say
that I love Slackware, but I sure do like it a lot better than most
Linux distros I've ever used.
