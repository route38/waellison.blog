---
layout: portfolio
title: "Nochos"
description: "An OS for vintage computers, not a plate of nachos."
image: '/art/pbg3-desk.jpg'
toc: true
---
## Fast Facts

Collaborators
: Myself

When
: Spring 2011, class project

Brief description
: A proposed design for an operating system targeted at legacy computers.

Scope
: Documenting the proposed design of the operating system.

Result
: A grade of A in the course.

Lessons Learned
: English is just another programming language.

## About the project

The final project of the Technical Writing course, English 360, was to
write a longform paper about something relevant to our discipline.  I
decided to write about the process monitor and memory manager of an
operating system designed for older hardware, in particular for old
Macintosh computers running the PowerPC 750 processor.  This project's
goals were fourfold:

0. Earn a high grade in the technical writing course.

1. Learn about OS design, a topic that had been of interest.

2. Inject new life into vintage Macs, which I love.

3. Get better at technical writing.

_Nochos_ is an acronym for _New Old Computer Hardware OS_, and yes, it
is pronounced like "nachos."

## Scope of the work

The Nochos process monitor is designed to use a very simple round-robin
algorithm for preemptively multitasking up to 63 processes.
Multithreading was not considered a priority in the initial revision of
the design.  Five priorities are supported, ranging from background
(Batch) to real-time (System).  Processes can address up to 2 GB of
memory.  The kernel (process ID 0), message arbiter (process ID 1),
network arbiter (process ID 2), file-system monitor (process ID 3), and
graphical interface (process ID 4) each consume a reserved process ID,
allowing for 58 user processes.  Nochos is a single-user system.

Inter-process communication is realized by message-passing, with
messages sent to and received by the message arbiter.

Stop
: Halt execution gracefully, prompting the user to save data.  The
  source process ID is the process being stopped; the destination is the
  process monitor, which is a component of the kernel (PID 0).

Wait
: Suspend execution of the process, to be resumed later by a **Proceed**
  signal.  The source process ID is the process being suspended; the
  destination is the kernel.

Proceed
: Resume execution of a **Wait**ing process.  The source process ID is
  the kernel, with the destination being the resumed process.

Abort
: Accompanied by an error code, halts execution without prompting for
  saving data.  Equivalent to `SIGKILL` in Unix.  The source is the kernel
  in this case, with the destination being the aborted process.

Open
: Accompanied by a file handle, device port, or network socket; directs
  the FS monitor to open the attached object.  The source is the process
  opening the item; the destination is the file-system monitor (PID 3).
  The FS monitor handles Open and Close requests for all types of openable
  and closable objects, redirecting as necessary to the kernel (for
  devices) and the network arbiter (for network sockets).

Close
: Accompanied by a file handle, device port, or network socket; directs
  the FS monitor to close the attached object.  The source is the process
  opening the item; the destination is the file-system monitor (PID 3).

Read
: Accompanied by a read order (object, buffer, and size); directs the FS
  monitor to read from the attached object the specified number of bytes
  into the buffer.

Write
: Accompanied by a write order (object, data, and size); directs the FS
  monitor to write the attached data to the attached object. 

User
: Accompanied by any action item, and performing any user-defined
  action, as indicated by a function pointer.  Maximum of 24 user signals
  per process, minimum of zero.

Each message object includes an action item, which minimally includes
destination and target process IDs.  The action item is simply a list of
pointers to objects, with a hard limit of four action items including
the PID.

The memory manager's design takes advantage of the presence of an <abbr
title='memory management unit'>MMU</abbr> on the 750 processor.  Like
all modern operating systems, Nochos has dynamically linked libraries
and position-independent binaries using the Portable Executable format
for holding code and data.  In keeping with the architecturally-defined
page size for the PPC 750, the kernel doles out pages to the process in
4 KB quantities; page segments are 128 bytes each and the process
manager honors requests for memory in 128-byte segments.  Virtual
addresses are 31 bits, with the 32nd bit used to mark pages valid or
invalid.  Memory is accessed by translating the virtual address into a
real one by way of the MMU, checking the bounds of the attempted access,
and returning the information to the program or sending a Stop message
if the address is invalid or empty.  In addition to the physical memory,
Nochos stores a swap file on the root directory of the boot partition
and swaps stale pages out to that file.

To fight fragmentation of the memory arena, a simple algorithm is used
during kernel housekeeping; during this algorithm's execution,
little-used blocks are moved around while adjacent entries on the free
list are coalesced.

## Result

I got an A in the course, which was nice.  I also more importantly
acquired a great amount of respect for the technical writers of the
world, and ever since then I have sought to continually improve my
abilities as a writer of code and documentation.

Someday, I'd quite like to pick up the Nochos project and see if I can't
execute the vision I had laid out; it will require further research into
the other components not discussed in the paper, namely the file system,
hardware abstraction layer, message arbiter, and graphical interface.
Any hypothetical new-Nochos project would have fewer limitations and be
x86- or ARM-based, running on standard PC hardware or on a 64-bit ARM
evaluation board.  (I'd probably use 56-bit addressing with the high
qword of each address used for flags, for one thing.  That allows
processes to address 72 million gigabytes of memory, which should be
enough.  As far as scheduling goes, I'd probably look into a lot of
Linux' scheduling algorithms.)

I like the sound of using the Be File System, with its rich metadata
support, as the basis for the Nochos File System.  I'd write the system
in C++ from the ground up, outside of the requisite assembly code to
bootstrap the system and a scripting bridge into Lua or JS for
application programs.

