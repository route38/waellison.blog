#!/bin/bash

echo -n "Cleaning /var/www/html..."
rm -rf /var/www/html/*
if [ "$?" == 0 ] ; then
  echo "done."
else
  echo "failed."
fi
