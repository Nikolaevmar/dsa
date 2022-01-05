class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value);
        if(!this.root){
            this.root = node
        } else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = node;
                        return console.log(this);
                    }
                    currentNode = currentNode.left
                } else {
                    if(!currentNode.right){
                        currentNode.right = node;
                        return console.log(this);
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                currentNode = currentNode.right;
            } else if (currentNode.value === value){
                return console.log(currentNode);
            }
        }
        return false;
    }
}

//    9
// 4      20
//1  6  15   170

const tree = new BinarySearchTree(9)
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(1)
tree.lookup(9)
tree.lookup(20)
tree.lookup(13)
