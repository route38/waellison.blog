#!/bin/bash

rsync -avz --chown=wae:webauthors _site/* wae@vsdev.org:/var/www/tnwae.us

