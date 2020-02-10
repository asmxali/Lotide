# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @asmxali/lotide`

**Require it:**

`const _ = require('@asmxali/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head : obtains an array and returns the first value in the array
* tail : obtains an array and returns the last value in the array
* middle : obtains an array, then sorts it and returns the values located in the middle, if an even number of elements is present it will return the middle
* assertArraysEqual : obtains and compares two arrays and returns true if the same
* assertEqual : obtains and compares 2 values and returns true if the same, it is a test case
* assertObjectEquals : obtains and compares 2 objects and returns true if the same, it is a test case
* countLetters : obtains a string and counts the number of times each letter occurs
* countOnly : obtains a value and an array, then returns the number of times the value occurs
* eqArrays : obtains two arrays are given, it compares them and returns true if both arrays are the same
* eqObjects : obtains an array, then sorts it and returns the values in it
