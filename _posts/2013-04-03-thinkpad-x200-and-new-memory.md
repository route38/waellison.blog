---
title: ThinkPad X200 and new memory
layout: post
description: "I add memory to my laptop, but it doesn't go in without a fight.  The moral of the story: update your damn BIOS."
---
So I ordered [some memory][1] from Newegg to add to my ThinkPad to improve its now-anemic performance. This laptop's Penryn chipset can run up to 8 gigs, (unofficially) but the 4-gig set was cheaper and matches the stock CAS latency. Some tips if you're an original X200 owner looking to inject new life into your old ultraportable:

* [Update][2] the BIOS before installing new memory.

* Check with the BIOS, CPU-Z and the Windows System Properties to make sure your system recognizes all the new memory. CPU-Z below:

![](/art/screenshots/cpuz-thinkpad.png)

Windows won't make all your memory available. There are peculiarities when it comes to how Windows maps memory, particularly when your laptop has vampire video (which all X200 models do) -- so instead of 4096 MB available, I have just 3990. I doubt I'll miss 106 MB, but if I do, there's always my trusty workstation to fulfill my memory needs.

Windows 7 now hums along beautifully on this laptop and I suspect it will do for a long time to come. Maybe I'll wait until 2017 comes and Windows 7 isn't supported anymore.

[1]: http://www.newegg.com/Product/Product.aspx?Item=N82E16820231213
[2]: http://support.lenovo.com/en_US/detail.page?LegacyDocID=MIGR-70347
