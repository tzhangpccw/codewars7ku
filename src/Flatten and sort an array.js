/* 

Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well 

*/


function flattenAndSort(array) {
    // Good luck, brave code warrior!
    const arr1 = [...array]
    if ([...arr1].every(i => i.length === 0)) return []
    return [...arr1].filter(i => i.length !== 0).reduce((acc, cur) => acc.concat(cur), []).sort((a, b) => a - b)
}

module.exports = flattenAndSort


/* 
what’s wrong with this function ?


function flattenAndSort(array) {
  // Good luck, brave code warrior!
  const arr1=[...array]
  console.log(111,arr1)
  if ([...arr1].every(i=>i.length===0)) return []
  return [...arr1].filter(i=>i.length!==0).reduce((acc,cur)=> acc.push(cur),[])
}

The issue with this function lies in the reduce method usage. 
The push method modifies the original array and returns the new length of the array. 
It does not return the modified array itself, which means that acc.push(cur) 
inside the reduce method will result in acc becoming 
an array of lengths, not the flattened and sorted 
array as intended.

To fix this, we can use the concat method instead, 
which concatenates the arrays and returns 
a new array without modifying the original arrays.
 Here's the corrected version of your function:

function flattenAndSort(array) {
  const flattenedArray = [].concat(...array); // Flatten the array
  return flattenedArray.sort((a, b) => a - b); // Sort the flattened array in ascending order
}
*/