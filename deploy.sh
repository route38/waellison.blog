#!/bin/bash

#rsync -avz _site/* wae@vsdev.org:/var/www/tnwae.us
aws s3 sync _site s3://rt38.net/

