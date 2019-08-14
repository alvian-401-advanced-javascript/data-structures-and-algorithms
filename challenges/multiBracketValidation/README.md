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

## Implementation
I implemented my solution using a single stack.
Given that the the function paramater is a valid string
I traverse through the string and `push()` my openers onto a stack
If I reach a string that's equal to a closing bracket,
I pop off the last item on my stack and compare it to the current string index
If the brackets match, I continue matching until I reach the end of the string
Or until I get a bad match, which returns false
if there are any remaining brackets after the traversal completes, we also return false
Otherwise return true

![whiteboard]()
