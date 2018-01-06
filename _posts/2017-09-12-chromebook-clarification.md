---
layout: post
title: "Liberating the Chromebook Pixel: A few clarifications"
image: "https://files.tnwae.us/annapurna.jpg"
description: "Some oopsies and some observations."
music: "Pro Football Talk Live with Mike Florio"
coffee: "Iced"
mood: "Confessional"
category: Linux
---

A while back, I wrote about [liberating my Chromebook Pixel][1] by
installing the open-source Coreboot firmware and installing Arch Linux.
That post, while certainly useful (most of all to myself, since I've used
it to redo the installation), had a couple of inaccuracies and there are
some points that could stand refining.

[1]: /2017/04/liberating-the-chromebook

## Virtualization software and hardware support

A reader recently emailed me asking about the Pixel 2013's support for
Intel's virtualization technologies, VT-x and VT-d.  Most of Intel's
processor line for several generations back has supported VT-x, also
known under its former codename of Vanderpool.  The Vanderpool
extensions allow virtualized operating systems to run in ring 0 as if
they were running on bare metal, simplifying implementation of
virtualization software and maintaining security on the host, but
offering little in the way of speed benefits.  The Pixel's Core i5
processor, based on the Ivy Bridge microarchitecture, supports
Vanderpool just like most other server, desktop, and mobile boards.

The reader who emailed me was confused because they weren't sure about
the 2013 Pixel's support for VT-d.  VT-d is an entirely different set of
technologies that allows guest operating systems in virtual machines to
access devices on the host -- the Ethernet NIC, say, or the graphics
accelerator, essentially passing requests for PCI devices (including,
e.g. 1394 and USB devices) from the guest OS directly to hardware
through the I/O MMU.  VT-d is only supported on higher-end Intel
chipsets and processors, e.g. the old X58 line like in my desktop, or
the QM77 variant of Panther Point.  When I wrote the original article in
April, I erroneously believed that the Pixel boasted a full QM77
chipset.  It doesn't, and some evidence from `lspci` shows that it runs
the feature-reduced (but more power-efficient) HM75 chipset.  HM75 [does
not support VT-d][2].

Not that VT-x support will get you very far: with just 4 GB of RAM and
the slow internal bus, virtualization software (e.g. VirtualBox) won't
run terribly well anyway, especially with modern versions of Windows.

[2]: http://ark.intel.com/products/64348/Mobile-Intel-HM75-Express-Chipset

## Kernel revision madness

The 4.12 kernel revision broke sleep on my Pixel.  I could put the
laptop to sleep once but never again, and that just won't do.  I
installed `downgrade` from AUR and switched back to 4.11.9-1-ARCH as my
installed kernel.  At a later time, I may try a newer kernel, but the
4.11.9 revision seems to work the best for thermal management,
suspend-to-RAM (what I call "sleep"), and general use.  Trackpad support
also seemed to have degraded with the 4.12 kernel revisions.

## Performance issues

In an effort to improve Pixel's performance, I tried making Linux use
more aggressive caching, in order to keep things out of the swap
partition as much as possible.  I succeeded at this endeavor with these
lines in `/etc/sysctl.d/99-sysctl.conf`:

```
vm.swappiness=1
vm.vfs_cache_pressure=50
vm.dirty_background_bytes=16777216
vm.dirty_bytes=50331648
```

And checking in `/proc/sys/vm` verifies that these settings do in fact
hold.  I'm still experiencing some pretty poor performance from
memory-intensive programs, and it may just be that 4 GB of RAM isn't
really enough to cope with the demands of running NetBeans and Chrome
side-by-side in 2017.  With nothing but a KDE session and two Xterm
windows open, I'm using almost a third of available memory, though much
of it is buffers and cache rather than straight-up used memory.  I could
run a slimmer environment, but KDE has really good HiDPI support and the
skinnier environments generally don't.

It's strange because when I'm running NetBeans or some other large
program, the computer will lock up for several minutes, only accepting
mouse input slowly and not accepting keyboard input at all unless I
press and hold a key.  Then, once it's finished with whatever weird
ritual it's doing, it'll snap back into usability for a little while.
The effect seems to be amplified when I Alt+Tab between programs.  No
other Linux box I've ever used, no matter how much or how little memory
it has, has ever behaved in this manner; this behavior is, as far as I
can tell, completely idiosyncratic to the Pixel.  For this reason, I'm
very strongly considering moving it back to Chrome OS and using this
machine for its intended purpose of running Google Chrome and nothing
more.

## That other OS

On a lark, I dumped the internal SSD to a disk image and tried running
Windows 10 on the Chromebook one night.  It did install and boot
successfully, and I was able to set the proper screen resolution and
even raise the DPI setting so I could see what I was doing.  But Windows
10 lacks a driver for the Google EC ("[Embedded Controller][3]") that is
responsible for handling input from the keyboard, power management
(including battery charging), and verified booting into Chrome OS, among
other things.  There is a community driver [at GitHub][4], but I have
not tried it, and at any rate it only lets you use the keyboard -- you
still need an external mouse.  (There's also no audio driver support.
If you must have Windows on an oddball laptop, buy a Pixel 2.  For that
matter, if you must have Linux on an oddball laptop, buy a Pixel 2.  It
has more memory and USB-C, neither of which feature on the Pixel 1.))

[3]: https://www.chromium.org/chromium-os/ec-development
[4]: https://github.com/coolstar/croskeyboard3

## Last thoughts

I love the hardware, I really do.  It's gorgeous, the hi-density screen
is a marvel, and battery life is somewhere between decent and great.  I
enjoy the performance most of the time, though it's not really suited to
the higher demands of running a full-fat IDE or doing anything heavier
than having five or six Chrome windows open.  The keyboard is amazing
for blogging, writing, and the other things I do that require me to use
a keyboard.  It's light, and it's well-built.  And for the most part,
it's easy to keep running.  But I don't recommend it.  If you want to
run Chrome OS on it, that's fine.  If you want to run Linux on it,
that's OK.  But don't say I didn't warn you.

