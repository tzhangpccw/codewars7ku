/*
Task
You are given a binary string (a string consisting of only '1' and '0'). The only operation that can be performed on it is a Flip operation.
It flips any binary character ( '0' to '1' and vice versa) and all characters to the right of it.
For example, applying the Flip operation to the 4th character of string "1001010" produces the "1000101" string, since all characters from the 4th to the 7th are flipped.
Your task is to find the minimum number of flips required to convert the binary string to string consisting of all '0'.
Example
For s = "0101", the output should be 3.
It's possible to convert the string in three steps:
"0101" -> "0010"
   ^^^
"0010" -> "0001"
    ^^
"0001" -> "0000"
     ^
Input/Output
[input] string s
A binary string.
[output] an integer
The minimum number of flips required.
*/

function binStr(s) {
  //coding and coding..
  let flips =0 ;
  let current ='0'
    
  for (let char of s){

    if(char!== current){
      flips++;
      current = current === '0' ? '1' :'0'
     } 
  }
  return flips
}


/*
Here's a step-by-step approach:

Initialize a variable to keep track of the expected character, starting with '0', since we want to end up with a string of all '0's.
Iterate through the string from left to right.
Each time the current character does not match the expected character, it indicates a flip is needed:
Increment a counter for the number of flips.
Flip the expected character ('0' to '1' or '1' to '0') because after the flip operation, the next character you would want to match changes.
Return the counter value at the end of the iteration, which represents the minimum number of flips required.
Let's apply this logic to the example "0101":

Start: expected = '0', flips = 0
At index 0: matches expected ('0'), no flip.
At index 1: does not match (expected '0', got '1'), flip. Now expected = '1', flips = 1.
At index 2: does not match (expected '1', got '0'), flip. Now expected = '0', flips = 2.
At index 3: does not match (expected '0', got '1'), flip. Now expected = '1', flips = 3.
Since we've reached the end of the string, the total number of flips required is 3.

*/

