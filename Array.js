class Arr {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++
        return this.length
    }

    pop(){
        const item = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return item;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index){ // O(n)
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArr = new Arr()
newArr.push('item')
newArr.push('item2')
console.log(newArr);
newArr.pop();
console.log(newArr);
newArr.push('item3')
console.log(newArr);
newArr.delete(1);
console.log(newArr);
newArr.get(0);
