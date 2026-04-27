//Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.
const checkNestedArray = (arr) =>{
    if(!Array.isArray(arr)) return 0;
    
    let maxDepth = 0;
    for(let item of arr){
        if(Array.isArray(item))
        maxDepth = Math.max(maxDepth, checkNestedArray(item));
    }
    return maxDepth + 1;
}
const arr = [1, [2, [3, 4], 5], 6];
console.log(checkNestedArray(arr));

let maxDepth = checkNestedArray(arr)
let flattened = arr.flat(maxDepth)
console.log(flattened)
