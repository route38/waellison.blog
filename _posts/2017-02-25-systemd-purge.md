---
layout: post
title: "The systemd purge continues!"
type: update
image: "/art/ideapad-keyboard.jpg"
---

The great systemd purge of 2017 continues.  I'm moving away from Linux
distros that use it, little by little, and I'm migrating to any system
that doesn't use systemd: Slackware Linux, MS Windows, Mac OS X,
OpenBSD, you name it.  systemd is a pimple on the ass of free software,
and it deserves no less than annihilation -- or, at the very least,
wholesale abandonment.

For laptop and workstation use, I expect to keep using Slackware or
Windows depending on the task at hand, and my Macs will continue to run
OS 9 or OS X as they always have.

For server use, I'm still unsure.  Slackware is a fine server OS, but I
really prefer something with more automated updating mechanisms.
FreeBSD provides automated updating via `freebsd-update`, but it takes
some [doing][fbsd-linode] to install it on a Linode instance.  Free
strikes me as a better server BSD, for the first letter of a \_AMP
server, than either Net or Open.  It may also be that I have to maintain
the damn thing myself, quit being such a lazy git, and run my own NEMP
server (NetBSD, `nginx`, MariaDB, and PHP).  The problem is that I have
10 years of Linux experience, including dozens of system installations,
to fall back on.  I don't have that degree of experience with NetBSD.

I may just keep running Ubuntu Server for the foreseeable future,
systemd or no, for the websites.  (I will almost certainly keep doing
this for OwnCloud unless I decide to jettison that and go back to
Dropbox, or host OwnCloud at home.)  At home, I am probably going to go
ahead and try NetBSD on my file server.  (Yes, it boots on EFI.  No, it
can't read IBM's JFS, not even through `puffs` or `fuse`, which I'm
using under Debian on this server.  And no, I'm not about to try to
write a FUSE driver for JFS.  I'm mostly an admin dude; my programming
skills, such as they are, are rather limited.)

[fbsd-linode]: https://www.linode.com/docs/tools-reference/custom-kernels-distros/install-freebsd-on-linode
