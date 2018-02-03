---
layout: portfolio
description: "A chat server.  Written in an afternoon."
image: "//files.tnwae.us/heroes/photogdesk.jpg"
title: "jtalk_server"
---
## Fast Facts

Collaborators
: Myself

When
: Spring 2009, class project

Brief description
: A threaded multiuser chat server.

Scope
: Implementing the server according to specifications provided by the instructor.

Result
: A grade of A on the assignment, and of B in the course.

Lessons Learned
: Using the right programming model makes things a lot easier.

## About the project

The final assignment of Computer Science 360, "Systems Programming," was
to implement a chat server using Unix sockets and POSIX threads to
enable multiuser communication over standard TCP/IP connections.  The
server accepted a potentially unlimited number of connections, but to
enable quick implementation, we assumed a small number of users.  The
client was provided by the instructor of the course.

## Scope of the work

The `jtalk_server` program ran a main thread with a supervisor console
used to accept commands designed to show information about connected
users, a service thread that accepted connections and set them up, and
one thread for each client connected to the server.  Each client thread
listened for chat messages from its respective socket, and broadcast the
message to all the other users.  Use of the facilities provided by
threaded programming, including mutexes, was required to prevent race
conditions and allow users to chat coherently (i.e., without messages
intruding upon each other).  As an example, the output might look like:

    rach: sup
    tom: hi rach.  wu?
    rach: not much. is wae around?
    wae: yo
    wae: how's tricks?
    rach: we're rolling out ws2016 at work tomorrow :-(
    wae: ughck
    tom: ughck
    ted: ughck
    mike: ughck
    rach: ikr?
    wae: reddit.com/r/linuxmasterrace
    rach: lol
    rach: hey, wae, next time you see erw, tell her I said hi
    wae: will do

Input and output were over standard Unix terminals, but didn't take
advantage of any facilities offered such as colored text, the GNU
`readline` library, or anything else.  I was able to write the entire
program, including all required functionality, in about 5 hours one
afternoon, not including breaks for coffee and lunch.

## Result

I got an A on the assignment, as best I can recollect, and ultimately
achieved a B in the course.  Together with
[`tud`](/portfolio/projects/utk/tud), I think this project made me
keenly aware that I could do great things with the tools offered me by
being conversant in C programming.

