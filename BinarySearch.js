// What is Binary Search Algorithm?
// Binary search is a search algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. The search interval is halved by comparing the target element with the middle value of the search space.


// Conditions to apply Binary Search Algorithm in a Data Structure:
// To apply Binary Search algorithm:

// The data structure must be sorted.
// Access to any element of the data structure should take constant time.

function BinarySearch(arr , target){

// The Binary Search Algorithm can be implemented in the following two ways
// ** Iterative Binary Search Algorithm
// ** Recursive Binary Search Algorithm

    console.log(arr ,target )

    let low = 0; // first index of the array
    let high = arr.length - 1; // last index of the array
    let mid;   // middle index of the array

    while(low <= high){ // low <= high 
        // console.log(low , "< " , high)
        mid = Math.floor((low + high) /2)
        console.log("mid",mid)

        if (arr[mid] === target){
            console.log("Found")
            return  true
            
        }
        console.log(arr[mid] , "> " , target)
        if (arr[mid] >target){ // arr[mid] is greater than target
            // search in the left side of the array
            // high = mid - 1
            
            high = mid - 1 
            

            console.log("high", high)
        }else{
            low = mid + 1

            console.log("low", low)
        }
    }

    return false 
}

let arr= [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
let target = 23

console.log(BinarySearch(arr, target))