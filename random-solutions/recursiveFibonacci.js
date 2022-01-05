 function fibonacci(){
    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n];
        } else {
            if(n < 2){
                return n;
            } else {
               cache[n] = fib(n-1) + fib(n-2); //storing the result in the cache
               return cache[n];
            }
        }
    }
 }
 
const fasterFibonacci = fibonacci();
console.log(fasterFibonacci(10));
