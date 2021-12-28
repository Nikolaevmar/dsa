const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// O(n^2) Naive approach
function hasCommon(arr1, arr2){
for(let i=0 ; i< arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] === arr2[j]){
            return true;
        }
    }
 }
 return false;
}
hasCommon(array1, array2)

//O(n)
function hasCommon(arr1, arr2){
    let map = {};
    for(let i =0; i< arr1.length; i++){
        if(!map[i]){
            let prop = arr1[i];
            map[prop] = true;
        }
    }
    for(let j = 0; j< arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
}
hasCommon(array1, array2)

