class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return console.log(this.first);
    }
    enqueue(value){
       const node = new Node(value);
       if(this.length === 0){
         this.first = node;
         this.last = node;
       }else{
           this.last.next = node;
           this.last = node;
       }
       this.length++;
    }
    dequeue(){
       if(!this.first){
            return null;
       }
       if(this.first === this.last){
           this.last = null;
       }
       this.first = this.first.next; 
       this.length--;
       return console.log(this);
    }
}

const queue = new Queue();
queue.enqueue('Noname');
queue.enqueue('Gigachad');
queue.enqueue('Testuser');
queue.enqueue('Admin');
queue.peek();
queue.dequeue();

