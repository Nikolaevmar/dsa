function recurringChar(arr){
for(let i = 0; i < arr.length; i++){ //O(n^2)
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            return console.log(arr[i]);
        }
    }
}
return undefined;
}
recurringChar([2,3,4,5,2])

function recurringCharHash(arr){ // O(n);
    let hashmap = {};
    for(let i = 0; i< arr.length; i++){
        if(hashmap[arr[i]] !== undefined){
           return console.log(arr[i])
        }else{
            hashmap[arr[i]] = i;
        }
    }
return undefined
}
recurringCharHash([2,3,4,5,2]);

