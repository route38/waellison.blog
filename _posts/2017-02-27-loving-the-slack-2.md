---
layout: post
title: "Loving the Slack, Part Two: Moving"
image: "/art/heroes/tbird.jpg"
description: "Still not as much of a pain in the ass as email."
music: "Ingrid Michaelson &mdash; “Soldier”"
mood: relieved
category: Linux

permalink: "/archives/292"
---

I'd recently installed Ubuntu 16.04 LTS on [Sagarmatha](/computers#sagarmatha),
my IdeaPad, in the hope that a commercially backed, squeaky-clean, highly
refined desktop experience might be a big enough carrot to keep me in the world
of the technical nightmare that is systemd.  Unity isn't that desktop experience
(it's still dumber than a sack of hammers) and the answer to that question,
shock of shocks, is a resounding "no."  Ubuntu doesn't stop at holding your
hand; it insists on picking your fat ass up and carrying you.  I'd rather have a
Linux system that walks off and leaves me, by way of comparison.

That left me with an unused 512 GB solid-state drive, a Slackware installation
that I needed to do something with (and fast!), and a ThinkPad that I was moving
away from systemd by dicking around with OpenBSD, Slackware, and other good
Unixen.  It was relatively easy to move Slack from one SSD to another, it didn't
take all that long, and all I needed was a hard drive enclosure.  As long as
you're moving to a drive of the same size, or a bigger size, you don't even have
to resize any partitions.

<!--more-->

## Phase Zero: Housekeeping

The first step was getting Windows 7 off of my 1 TB laptop drive and onto an
SSD.  I used EaseUS Todo Backup Free for this task, and it took about a minute
per gigabyte to move my fresh Windows 7 installation over to a 128 GB SSD.  The
transfer would assuredly have been faster had I been able to use USB 3.0, but my
expansion card doesn't supply enough power to external hard drives on the bus.
After that, my drive was free and I was ready to proceed.

(I ended up trashing this install by accident while experimenting with OpenBSD.
No big loss.)

## Phase One: Packing

To start, I burned a Debian installation ISO onto a spare hard drive using Rufus
from within Windows 7.  (I keep an 8.5 image on my file server for such
occasions.)  I keep a couple of 60's around for just such a purpose, since
they're faster than my old USB flash drives, even over USB 2.0, and they go at
their full song of 1.5 Gbps over USB 3.0.  (They're a couple of ancient 60 GB
SATA laptop drives, one harvested from a MacBook and the other from a Gateway
convertible.)  Even if it's unlikely that I'll ever use Debian outside of a
server environment ever again, and probably not even then, it's still a strong
environment for my needs.

I fitted the 1 TB drive into the adapter in the optical drive bay (something
else I love about this laptop -- the ability to use two internal hard drives),
hooked up the 120 GB Slackware SSD, and booted into the Debian installer,
loading files from the "CD" and then dropping into a command shell with Alt+F2.
I had four hard drives available: /dev/sda (internal SSD), /dev/sdb (internal
hard drive), /dev/sdc (Debian installer), and /dev/sdd (Slackware SSD).  I
differentiated drives by using fdisk on each to look at the partition tables.  I
knew just by looking at the internal hard drive that it had my old Windows 7
image on it (two NTFS partitions, one labeled "System Reserved"), and I also
knew that the Slackware SSD was on /dev/sdd because of its two Linux partitions,
one typed for a swap partition and the other marked bootable.

I therefore set about giving /dev/sda a new partition table in fdisk just to
make sure the old boot block was wiped clean.  (The command `dd if=/dev/zero
of=/dev/sda bs=1 count=512` would've sufficed if I really just needed to blow
out the boot block, but I wasn't thinking.)  I deleted the swap partition from
the Slackware SSD, also in fdisk, so that a full copy of the drive wouldn't drag
a swap partition along with it, one that I could easily reconstruct after the
copy operation.[^1]

Once I'd finished mucking about with partition tables, I needed to perform the
actual copy.  This led to using `dd if=/dev/sdd of=/dev/sda bs=1M`, which
reduces I/O overhead by copying in 1,048,576-byte blocks until the operation is
done.  I knew the number of bytes copied would be somewhere in the neighborhood
of 115,000 megabytes, so I used that as my reference figure.  With a peak
bandwidth of 3.2 Gbps, I was topping out at 400 megabytes per second, and it
took somewhere around five minutes to complete the copy.

That was the hard part.  I revisited fdisk on the internal SSD and expanded the
first partition out to 500 GB, and then used `resize2fs` to move the file system
out to the end of the partition boundary.  Then I created the swap partition in
fdisk (type `0x82`) and ran `mkswap` on `/dev/sda2` to create it, and as always,
I crossed my fingers and rebooted.  Slackware came right up on the internal SSD,
indicating a job well done.  I took the system down to single-user, edited
`/etc/HOSTNAME`, and rebooted.

This was significant for two reasons: first, the copy operation went off without
a hitch; second, it indicated that my IdeaPad has a sufficiently good BIOS
emulation that I didn't need to fuss with the boot loader.

Now it was time for phase two.

## Phase Two: Moving House

The whole idea of the second hard drive was to have plenty of space for my home
partition as well as plenty of room on the SSD to enable a dual-boot
configuration at some point.  So I got started with moving home partitions.
I've done this before, so it was familiar ground.  You can even do it without
rebooting the system!  Here we go:

0. Take the system down into single-user, `init 1` as the superuser.  (Log out,
   dumbass!)
   
1. Set up the drive where you want to keep your home directories: partition and
   format it accordingly.  It may not be a bad idea to mount an external drive
   of sufficient size and back up your home directories.
   
2. Mount the second drive at a temporary mount point, e.g. `/mnt`.

3. `rsync` the `/home` directory to this drive: `rsync -av /home /mnt`.

4. Unmount the second hard drive.

5. Clean out `/home` on the first hard drive: `rm -rf /home/*`.

6. Edit `/etc/fstab` to add the new home partition as the source of the `/home`
   mount point.
   
7. Now mount the home partition at `/home`, e.g. `mount /dev/sdb1 /home`.

8. Take the system back up to graphical login (`init 4` on Slackware) and try
   logging in.
   
9. If you succeeded: Congratulations.  If you failed:

	* Make sure you mounted the correct drive as the home volume.  If you mount
      it at `/mnt`, you should see a list of usernames with home directories off
      `/home` in the ordinary system if you do `ls /mnt`.
	  
	* Make sure the correct disk partition is referenced in `/etc/fstab`.
	
	* Make sure that, without the new home partition mounted, that `/home` is
      empty.  Any Unix system worth using, Linux included, will refuse to mount
      a volume into a mount point that has files in it.  If you do `ls -a /home`
      without the volume mounted, you should only see `.` and `..`, the current
      and parent directories.

I now have tons of free space, and I could even revisit fdisk and add an exFAT
partition to share with other operating systems if I ever chose to install any
in a multi-boot scenario.  (FreeBSD has `exfat-utils`, same as Linux, with
support for the file system provided as a FUSE module, `fuse-exfat`.)

[^1]: Before you crucify me, fellow nerds, I know it's a bad idea to have a swap partition on an SSD.  I'm running the IdeaPad as hard as I can to determine if I'll ever need it, and I suspect that I won't with 16 GB of RAM.
