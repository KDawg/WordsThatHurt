
One Time Setup
=================

Begin by executing `npm install` bringing down the single dependency. This utility
uses the `pseudoloc` module. Read its [repository](https://github.com/bunkat/pseudoloc)
if you want to learn more about it.

Example Using This Tool
=======================

This is a CLI and you run it inside Terminal.

`./translate.js en.json`

The idea is that you have everything that your app says to your users inside
a string table. It's a simple data structure accumulating a series of key-value
pairs lined up inside of a hash table. Easily accomplished as a JavaScript object.

Hard-coded strings are forbidden. Translate reads in the file you tell it about,
converts each string, and writes out a processed one. Use that one to stress-test
the app's user interface. See how localizable your design constraints have made it.

Read the Article
================

You should read this companion article that I wrote explaining all the junk going
on inside this little command line utility. It illuminates lots of interesting logical
bits. Also builds up context surrounding why I wrote this tool and how you can
put it to work for your project.

Reference
=========
Reading the [wikipedia entry](https://en.wikipedia.org/wiki/Pseudolocalization)
gains an overview of the topic.

I've learned that this debugging technique was invented at Microsoft during
Vista development.
