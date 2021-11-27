---
layout: post
title: "Liberating the Chromebook Pixel"
image: "https://files.tnwae.us/annapurna.jpg"
description: "Why hamstring a good laptop with a bad OS?"
music: "Michelle Branch &mdash; Hopeless Romantic"
coffee: "Tall and dark with just a shot of cream"
mood: free
category: Linux
---

Between a newly released Michelle Branch album (something I've awaited
for _years_), and the Red Sox apparently finding their bats in
yesterday's victory over the Orioles, this has been a good week so far.
Finishing the burn-in period with my shiny new Arch Linux installation
on my Chromebook Pixel capped it off.  Getting the old girl up and
running with a proper Linux environment, complete with HiDPI graphics,
has ~~required me~~ encouraged me to learn a new distro, and I got
things running with only a few compromises and one new toy above and
beyond the laptop.

First things first, behold:

<figure>
  <img class='img-responsive' src='/art/huge-sd-card.jpg'>
  <caption>
    No, your eyes don't deceive you.  That's a 128 GB SD card.
  </caption>
</figure>

The very first hard drive purchased for the Ellison household was
probably in 1998, an 8 GB Western Digital Caviar drive.  This little
card could hold the contents of sixteen of those drives, in a space
about the size of a cat's ear.  Mind = blown.  (Nothing new under the
sun, but I've been at this long enough that I can still find wonder in
new stuff like 128 GB SD cards.  Anyway, this Class 10 SD card boosts my
Chromebook's storage capacity to 192 GB, which will be enough to tote
around my music and other files without issue.  I wrote a new partition
table to the card and formatted it ext4 so it'll work with all of my
Linux machines.

## Ahem...

Ah, yes, getting the Chromebook to a useful point.  This will,
obviously, require you to jettison Chrome OS, and as it happens, it will
also require you to void any potentially-remaining warranty still on
your machine.  This guide applies only to the 2013 Chromebook Pixel (the
Ivy Bridge one) and has been tested with a handful of Linux distros
including the latest Arch, Slackware 14.2, Ubuntu 16.04, and Fedora 25.
I had the best results with Arch, so that's what we will use here.

### Installing Coreboot

The first step to take is to remove the stock Google firmware.  The
Chromium OS project has a brief guide on [how to get to the firmware
write-protect screw][1], which is between the ribbon cable for the
headphone jack and the forward USB port on the left side of the laptop
(right side if you're looking at it with the cover off).  [This huge
photograph][2] shows the bottom of the case after you've opened it.
Just make sure the hinge-side clips actually go in first; I didn't, the
first time I tried to close my Pixel back.  Rather than being safe and
putting the screw back in once I got Coreboot installed, I did the lazy
thing and just left it out, putting it in a little envelope with an SD
card containing a backup of the stock firmware and a version of
`flashrom` that will work with this machine.  (I won't fault you if you
take the opportunity to remove the LTE card while you're in here, if you
worry about the privacy implications of leaving it in.)

You have to put Chrome OS into developer mode before you can write
Coreboot to the firmware, which requires you to hold Esc and Refresh
(really F3) while pressing Power.  You'll lose anything on the computer,
so if there's something you wish to back up, do so before you put the
machine in developer mode.  Once you're in dev mode, get connected to
the Internet and [download John Lewis's script][3] to burn Coreboot to
your firmware.  Ctrl+Alt+T gets you a terminal emulator; type `shell` to
get a standard command shell, then `cd` to somewhere on the stateful
partition or to a mounted external storage device.  __Back up the stock
ROM in case you need it__ by running `flashrom -r backup.rom`, then
storing that file someplace safe.

Then switch to a virtual console (Ctrl+Alt+Back/F2) and run the script,
choosing option 5 to burn a full ROM to the computer.  After you're
done, __assuming no errors__, you can reboot to the rather spartan SeaBIOS
boot screen.

I assume no liability if you brick your Chromebook by not creating a
backup of its ROM.

#### A stern warning

__IF YOU HAVE ANY ERRORS FROM `flashrom`, DO NOT CONTINUE.  REWRITE THE
STOCK ROM TO YOUR FIRMWARE, IF POSSIBLE, AND SEEK FURTHER AID FROM THE
RELEVANT USER COMMUNITY.  I REPEAT: _IF YOU REBOOT NOW, YOU WILL HAVE A
BRICK,_ ONE THAT YOU CANNOT RESTORE TO WORKING ORDER WITHOUT THE AID OF
AN SOIC CLIP AND A RASPBERRY PI.__

### Why Coreboot?

We want to install Coreboot for four primary reasons:

1.  It enables ordinary ACPI behavior, essentially turning your
    Chromebook into an ordinary x86 laptop.  You could, if you really
    wanted to, install Windows.  (But don't.  Please.  Don't.)

2.  It enables you to boot directly into Linux without having to press
    Ctrl+L at boot as with the stock Google ROM.

3.  If your battery runs completely down, all you have to do to get your
    laptop working again is plug it into a charger.

4.  Lastly, installing Coreboot enables VT-x, enabling you to
    run virtualization software with near-native performance.

### Running Coreboot yet?

If you had no errors from `flashrom`, go ahead and reboot.  Prepare your
preferred Linux install media (SD card etc.) from another computer, and
boot the Chromebook from it.  For this guide, I'm using the latest
version of Arch Linux, as booted from an old SanDisk flash drive I had
laying around.  I blasted this onto my SD card as follows, from my
Slackware-powered IdeaPad:

```
$ sudo dd if=arch.iso of=/dev/sdb bs=4M
```

The Arch Linux ISO, like many available today, is a hybrid ISO that can
be burned to a DVD or written to a storage device (i.e. a hard drive or
a flash drive).  Using a 4MB block with `dd` makes the write operation
much faster.

You can run `setfont` from the Arch ISO to set the console font; I
highly recommend using something more legible for now, like `sun12x22`:

```
  # setfont sun12x22
```

A 22px font is still small -- a little more than 2.25 mm high -- but
it's better than the default 16px font.  We'll get a bigger font later,
I promise.

The Arch installation process isn't too hard if you know your way around
Linux.  It boils down to five major steps:

1. Getting the system on the Internet

2. Partitioning the disks

3. Downloading and installing the core system

4. Entering a chroot to perform configuration tasks and install
   additional software

5. Installing the boot loader

The Arch wiki is, justifiably, the envy of the Linux community and a
large part of why I'm an Arch user.  To read their much-more-detailed
account of how to install Arch, go [to the relevant page][aw:install] on
the wiki and read how to do what you're doing.  If you have a second
machine to test on, whether in a VM or on bare metal, DO SO before
installing on the Chromebook.  (The installation process is superficially
similar to that of Gentoo Linux, minus all that compilation.)

[aw:install]: https://wiki.archlinux.org/index.php/Installation_guide

I partitioned and formatted the drive as follows:

* `/dev/sda1`: 512 MiB ext3 at `/boot`
* `/dev/sda2`: 4 GiB swap (for suspend-to-disk, mostly)
* `/dev/sda3`: 55.1 GiB btrfs at `/`
* I'll address the SD card later

I probably doubled the duration of a typical Arch install because I
insisted on blogging about it as I did it, while it was freshest in my
memory.  Without banging on another keyboard in the interim, you're
probably 30-45 minutes into this your first time around.

If you use btrfs, make sure to add btrfs-tools, be it via `pacstrap` or
inside of the chroot.  Likewise for XFS or your other filesystem of
choice.

The first things we need to address with Arch on the Pixel are:

* Basic preferred programs
* Console font
* X11 setup
* Adding a user

These are important enough that I'm doing them from within the chroot
before rebooting.

#### Bedrock programs

These include Vim, zsh, OpenSSH, Ruby, and `btrfs-progs`.  From within
the chroot:

```
# pacman -Syu vim zsh openssh btrfs-progs \
              ruby dialog iw wpa_supplicant
```

The `dialog` package enables me to use the `wifi-menu` command to
connect to a Wi-Fi network; it's just a frontend for `iw` and
`wpa_supplicant`.

#### Console font

We install `terminus-font` first, then pick out a font:

```
# pacman -Syu terminus-font
# setfont ter-u28n
```

This is the 28px Terminus Unicode font.  To make this change permanent,
we edit `vconsole.conf` accordingly:

```
# File: /etc/vconsole.conf
FONT=ter-u28n
```

If you use a foreign keyboard layout, it gets set here, too, for the
console.  Add the `consolefont` hook to `/etc/mkinitcpio.conf`, then run
`mkinitcpio -p linux` again, so that you'll have the console font in
early userspace.  The only place where my huge font isn't enabled is in
GRUB, and for me, that's OK.

#### Adding a user

The `useradd` command does the trick here, obviously from within the
chroot:

```
# useradd -m -G wheel -s /bin/zsh wae
# passwd wae
```

The `-m` flag loads the defaults, while `-G wheel` adds me to the
administrative group and `-s /bin/zsh` sets me up with the gods' honest
shell, ZSH.  Make sure to install `sudo` and enable the `wheel` group to
make your life vastly easier on the reboot.

#### X11 setup

I'm installing KDE Plasma as my desktop environment.  First, X11:

```
# pacman -Sy xorg-server xorg-server-utils xorg-apps
```

Then, KDE.  While we're at it, let's pull in Gimp and LibreOffice, and
enable SDDM (the Plasma 5 display manager):

```
# pacman -Sy plasma-meta gimp libreoffice
# systemctl enable sddm
```

This pulls in what amounts to a little more than a gigabyte of packages,
but it's a full Plasma 5 environment, which will behave like good ol'
KDE but give us the best HiDPI support outside of GNOME 3.

Full-blown Google Chrome is available via AUR.  You have to enable your
user account to do sudo things via `visudo`, then substitute as that
user and run `makepkg`:

```
# pacman -Sy git
# su $SOME_NON_ROOT_USER
$ git clone https://aur.archlinux.org/google-chrome.git
$ cd google-chrome
$ makepkg -si
```

Let's make sure to set the screen size, since X11 is stupid about that.
Edit `/etc/X11/xorg.conf.d/90-monitor.conf`:

```
Section "Monitor"
  Identifier "<default monitor>"
  DisplaySize 270 180
EndSection
```

The display size is quoted in millimeters, with the horizontal first.

Now it's time to install the boot loader.  (Finally!)

```
  # pacman -Sy grub
  # grub-install --target=i386-pc /dev/sda
  # grub-mkconfig -o /boot/grub/grub.cfg
```

And now we reboot.  I installed the `linux-zen` kernel beforehand; you
don't have to, but I recommend it for desktop use.

### The Graphical Side

HiDPI support in Plasma 5 is awesome, especially with all the legwork we
did in the chroot before restarting.  I installed `ttf-fira-sans` and
`ttf-anonymous` for the utmost appearance with code editing and general
appearance.  All it took to make Plasma look like anything was setting
the display scaling to 2.0 (visit Display and Monitor within System
Settings) and make sure the font DPI was set to a sane value (it was, at
192 dpi).  Then, of course, I set my fonts.

### Fixing the keyboard

This is a combination of my own techniques and some stuff from the
Debian wiki.  Your mileage *will* vary, particularly if you are using a
newer X11 server or Wayland.  (If you don't object to it on technical
grounds (it is Ubuntu-based, after all), GalliumOS may be your best
bet here, since it comes with a pretty good keyboard driver already
installed.)  `xkb` makes my head hurt and my eyes twitch, so we're
sticking with good ol' `xmodmap`.

```
keycode 105 = Mode_switch

keycode 111 = Up Up Prior
keycode 116 = Down Down Next
keycode 113 = Left Left Home
keycode 114 = Right Right End

keycode 22 = BackSpace BackSpace Delete

keycode 67 = XF86Back              NoSymbol F1  F11
keycode 68 = XF86Forward           NoSymbol F2  F12
keycode 69 = XF86Refresh           NoSymbol F3  F13
keycode 70 = XF86Launch0           NoSymbol F4  F14
keycode 71 = XF86Terminal          NoSymbol F5  F15
keycode 72 = XF86MonBrightnessDown NoSymbol F6  F16
keycode 73 = XF86MonBrightnessUp   NoSymbol F7  F17
keycode 74 = XF86AudioMute         NoSymbol F8  F18
keycode 75 = XF86AudioLowerVolume  NoSymbol F9  F19
keycode 76 = XF86AudioRaiseVolume  NoSymbol F10 F20
```

In the Plasma 5 keyboard settings, I swap Left Super and Left Control,
putting the Control key where I've had it for the last ten years: to the
left of the A key, but still keeping the Super key around to work the
Plasma menu and some other things.  Right Control is essentially my _fn_
key, like you'd see on a regular laptop, and it gives me the PC keys
that the Chromebook lacks.  Mapped, Macintosh-style, to the arrow keys
are Home/End and PgUp/PgDn (Prior/Next in X11 jargon), and mapped to the
Backspace key -- again, Macintosh-style -- is forward-Delete, or just
Delete.  For the function keys, I was able to assign the functions I
wanted to the bulk of them, and I used the fourth and fifth keys as
launch buttons for `xterm` and Chrome, as configured via the Shortcuts
panel in KDE.

### Terminal woes

Konsole, for reasons I still don't fully understand, hates the Search
key, even after being remapped, and is no big fan of the screen density
either.  I had much better luck with plain, old-school Xterm, the
terminal emulator that has never done me wrong in 10 years of being a
Linux user.  Here's how I set up my Xterm for eye-popping results:

```
    ! File: $HOME/.Xresources
    Xft.dpi: 192
    Xft.autohint: 0
    Xft.lcdfilter: lcddefault
    Xft.hintstyle: hintnone
    Xft.hinting: 0
    Xft.antialias: 1

    XTerm*background: black
    XTerm*foreground: green
    XTerm*renderFont: true
    XTerm*faceName: xft:Anonymous Pro:size=9:antialias=true
    XTerm*locale: true
    XTerm*metaSendsEscape: true
    XTerm*eightBitInput: false
    XTerm*backarrowKey: false
    XTerm*ttyModes: erase ^?
    XTerm*saveLines: 4096
    XTerm*VT100.geometry: 132x44
```

The trick is to set the Xft DPI to the same value as what you're using
in KDE.  This makes the font look exactly the same as what you'd use in
Konsole.  I prefer the look of text on-screen with font hinting
disabled, though I suspect that part of this is because some of my fonts
are actually files I pulled off of my iBook's macOS Leopard installation
and converted to TrueType format.

You can see the results for yourself in this screenshot:

<figure>
  <img class='img-responsive' src='/art/arch-cbook.jpg'>
  <caption>
    The end result.
  </caption>
</figure>

Here, I'm using Fira Sans and Anonymous Pro.  The wallpaper was bundled
with KDE 5.

<figure>
  <img class='img-responsive' src='/art/arch-inboxzero.jpg'>
  <caption>
    Look Ma, no email!
  </caption>
</figure>

And here I am after taming my angry inbox and achieving that coveted
status of [inbox zero][iz].  Come back next time when I share my wicked
zsh prompt and Mutt configuration.

[1]: http://goo.gl/tbomdM
[2]: http://goo.gl/UVm6Y6
[3]: http://goo.gl/Ag1jSH
[iz]: http://whatis.techtarget.com/definition/inbox-zero

[^1]: Thanks to reader Huimin Zhang for noting that VT-d is not a part of this machine’s platform.
