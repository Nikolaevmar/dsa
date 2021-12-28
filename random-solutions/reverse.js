function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Invalid input'
    }

    let arr = str.split('');
    const reversed = [];
   
   for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
   }
  return reversed.join('');
}
reverse('Mario')