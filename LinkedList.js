// 10-->5-->16

// let newLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
class LinkedList {
    constructor(value){
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1; //optional
    }

    append(value){ //O(1)
        const node = {
            value,
            next: null
        };
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return console.log(this)
    }

    prepend(value){ //O(1)
        const node = {
            value,
            next: null
        }
        node.next = this.head;
        this.head = node;
        this.length++;
        return console.log(this)
    }

    returnList(){
        const list = [];
        let currentNode = this.head
        while( currentNode !== null){
        list.push(currentNode.value);
        currentNode = currentNode.next;
        }
        return console.log(list)
    }

    insert(index, value){

    }

    remove(index){

    }
}

const newList = new LinkedList(10);
newList.append(5);
newList.append(16);
newList.prepend(2);
newList.returnList()