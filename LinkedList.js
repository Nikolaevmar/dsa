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
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1; //optional
    }

    append(value){ //O(1)
        const node = {
            value,
            next: null,
            prev: null
        };
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return console.log(this)
    }

    prepend(value){ //O(1)
        const node = {
            value,
            next: null,
            prev: null
        }
        node.next = this.head;
        this.head.prev = node;
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

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value){
        if(index >= this.length){
            return console.log('Invalid index')
        }
        const node = {
            value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = node;
        node.prev = leader;
        node.next = follower;
        follower.prev = node;
        this.length++;
    }

    remove(index){
        if(index >= this.length){
            return console.log('Invalid index')
        }
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }
}

const newList = new LinkedList(10);
newList.append(5);
newList.append(16);
newList.prepend(2);
newList.insert(2, 99)
newList.returnList()
newList.remove(3);
newList.returnList();