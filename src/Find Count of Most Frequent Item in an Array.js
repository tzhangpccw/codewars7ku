/* 
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times. */

function mostFrequentItemCount(collection) {
    // Do your magic. :)
    if (collection.length === 0) {
        return 0;
    }

    const frequencyMap = {}; // Object to store frequencies
    let maxFrequency = 1; // Initialize the maximum frequency to 1 (minimum possible value)

    // Count the frequencies of numbers in the array
    for (let num of collection) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]); // Update maxFrequency if necessary
    }

    return maxFrequency;
}
function mostFrequentItemCount1(collection) {
    // Do your magic. :)
    if (collection.length === 0) {
        return 0;
    }

    const frequencyMap = {}; // Object to store frequencies
    let maxFrequency = 1; // Initialize the maximum frequency to 1 (minimum possible value)

    // Count the frequencies of numbers in the array
    for (let num of collection) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]); // Update maxFrequency if necessary
    }

    return maxFrequency;
}

module.exports = mostFrequentItemCount