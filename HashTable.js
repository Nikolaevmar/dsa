//each lookup is O(1), could be O(n) if theres a hash collision

class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){ // basically a hash function
        let hash = 0;
        for(let i =0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value){
        const address = this._hash(key); //where we store the pair
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        const address = this._hash(key);
        const currentItems = this.data[address];
        if(currentItems){
            for(let i = 0; i < currentItems.length; i++){
                if(currentItems[i][0] === key){
                    return currentItems[i][1];
                }
            }
        }
        return undefined
    }

    keys(){
        const keys = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keys.push(this.data[i][0][0]);
            }
        }
        return console.log(keys); 
    }

    values(){
        const values = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                values.push(this.data[i][0][1]);
            }
        }
        return console.log(values); 
    }
}

const table = new HashTable(50);
table.set('grapes', 10000);
table.get('grapes');
table.set('apples', 9)
table.get('apples');
table.keys();
table.values();