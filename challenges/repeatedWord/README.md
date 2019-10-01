

## Challenge
* Write a function that accepts a lengthy string parameter.
* Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency

* Create a Hashtable
* Split the input string into an array of words
* Loop through the array
* During each iteration, check if current word is stored 
* If the word is stored, return it
* If not, add it to the table.
* If no words repeat, return null.


![Whiteboard](https://i.imgur.com/nQRwG1e.jpg)
