# Code Challenge - Multi-bracket Validation
[![Build Status](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms)
[PR]()


## Features
Write a function, `multiBracketValidation()` that takes a string as its only argument, it should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}
Example
Input	Output
{}	TRUE
{}(){}	TRUE
()[[Extra Characters]]	TRUE
(){}[[]]	TRUE
{}{Code}[Fellows](())	TRUE
[({}]	FALSE
(](	FALSE
{(})	FALSE

