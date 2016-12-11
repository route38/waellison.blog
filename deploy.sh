#!/bin/bash

rsync -4avz --chown=wae:webauthors _site/* wae@florence.marshproject.org:/srv/mpo/sites/tnwae.us

