// HASH MAP 

// In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.


// Hashing is a technique to convert a range of key values into a range of indexes of an array.

// Basic Operations
// Following are the basic primary operations of a hash table.

// Search − Searches an element in a hash table.

// Insert − Inserts an element in a hash table.

// Delete − Deletes an element from a hash table.

// Update: Overwrite the value of a key that already exists.


// HashMaps are ideal for scenarios where fast lookups are essential, such as:
// Caching
// Counting the frequency of elements
// Implementing dictionaries


let hashmap = {}

// Insertion
hashmap["apple"] = 5;
hashmap["banana"] = 3;

console.log("Initial HashMap:", hashmap);


// Search
console.log("Value of apple:", hashmap["apple"]); // Output: 5

// Update
hashmap["apple"] = 10;
console.log("Updated value of apple:", hashmap["apple"]); // Output: 10

// Deletion
delete hashmap["banana"];
console.log("After deletion:", hashmap); // Output: { apple: 10 }

// Checking if a key exists
if ("apple" in hashmap) {
  console.log("Apple exists in the map.");
} else {
  console.log("Apple does not exist in the map.");
}

// ALGORITHM


// 1. Two Sum Problem
// Problem:
// Given an array of numbers and a target, find two numbers that add up to the target.

// Algorithm:
// Use a HashMap to store each number’s index as you traverse the array.
// For each number, check if target - number exists in the HashMap.


const twoSum = (arr, target) => {
    const hashMap = new Map(); // create a new map
    const result  = [] // create an empty array to store the indices
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]; // target = 9, arr[i] = 2, complement = 7
        console.log("complement" , complement , "arr[i]"  , arr[i], "i" ,i);
   console.log("hashMap", hashMap);
        if (hashMap.has(complement)) { // if 7 exists in the map
            console.log("complement", hashMap.get(complement));
            result.push(i, hashMap.get(complement)) // push the index of 7 and the current index
        }
        console.log(result)
        hashMap.set(arr[i], i) // store the current number and its index in the map
     
    }
    return result
}
// console.log(twoSum([2, 7, 11, 3 , 6, 15], 9));

// 2. Group Anagrams
// Problem:
// Group words that are anagrams together.

// Algorithm:
// Sort the string to create a key.
// Store the original strings in a HashMap where the key is the sorted string.


function groupAnagrams(arr) {
    let hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        // Sort the characters of the string to create a key
        const key = arr[i].split('').sort().join('');

        // If the key exists, push the original string to the array
        if (hashMap.has(key)) {
            hashMap.get(key).push(arr[i]);
        } else {
            // If key doesn't exist, create a new array with the string
            hashMap.set(key, [arr[i]]);
        }
    }

    // Return the values of the hashMap (which will be arrays of anagrams)
    return Array.from(hashMap.values());
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


// Find First Non-Repeating Character
// Problem:
// Find the first non-repeating character in a stream of characters.

function firstNonRepeating(string){
    string = string.split('');
    console.log(string)
    let hashMap= new Map();
    let arr = []
    for (let i = 0 ; i < string.length ; i++){
        if(string[i] in hashMap){
            hashMap[string[i]] += 1
        }else {
            hashMap[string[i]] = 1
        }
    

    }


    for(let i in hashMap){
        if(hashMap[i] == 1){
            arr.push(i)
        }
    }

    return arr;
}





console.log(firstNonRepeating('swiss')); 



