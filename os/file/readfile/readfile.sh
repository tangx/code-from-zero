#!/bin/bash

fileName="README.md"

## read all lines
echo "read all content as the same time"
cat README.md

## read content by line
echo "read content by line"
OLDIFS=$IFS

## * set delimeter to new line
IFS=$'\n'

count=0
for line in $(cat $fileName); do
    {
        count=$((count + 1))
        echo "${count} : ${line}"
    }
done

IFS=$OLDIFS
