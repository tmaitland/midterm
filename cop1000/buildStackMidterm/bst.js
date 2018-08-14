//variables
var getTheTree = document.querySelector(".getTheTree");
var tree = document.querySelector(".tree");

///ES6 Binary Search Tree/////

class Node {
    constructor(id, value){
        this.id = id;
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 0;
        this.duplicate = 0;
        this.capacity = 20;
    }

    insert(node){
        if(node.value < this.value){
            this.height--;
            if(this.left){
                return this.left.insert(node);
            }
        this.left = node;    
        }

        if(node.value > this.value){
            this.height++;
            if(this.right){
                this.right.insert(node)
            }
        this.right = node;    
        }

        if(node.value === this.value){
            this.duplicate++; 
        }
    }

    inOrderTraversal(callback = (node) => (console.log(node))){
        if(this.left){
            this.left.inOrderTraversal(callback);
        }
        
        (callback(this));

        if(this.right){
            this.right.inOrderTraversal(callback);
        }

        callback(this);
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
        this.length = 0;
        this.nid = 0;
    }

    insert(value){
        
        if(!value) return;

        let node = new Node(this.nid++, value);
        this.length++;

        if(this.root === null){
            this.root = node;
            return this.length;
        }
        this.root.insert(node);

        if(this.length && this.nid >= this.capacity){
            // this.remove();
            return alert("Stack Size Exceed");
        }
    }

    search(value){
        let node = this.root;

        while(node){
            if(value > node.value){
                return node = node.right;
            }
            else if(value < node.value){
                return node = node.left;
            }
            else {
                return node;
            }
        }

        console.log('Value Was Not Found');
    }

    inOrderTraversal(callback){
        let node = this.root
        if(node && !node.left && !node.right){
            return callback(node.value);
        }

        node.inOrderTraversal(callback);
    }

    // remove(value){
    //     let node = this.root
        
    //     while(node){
            
    //     }
    // }
}

let bst = new BinarySearchTree();
let bst1 = new BinarySearchTree();
let bst2 = new BinarySearchTree();

//1st set of values
bst.insert(35);
bst.insert(25);
bst.insert(40);
bst.insert(15);
bst.insert(5);
bst.insert(45);
bst.insert(30);
bst.insert(10);
bst.insert(20);
bst.insert(50);
bst.insert(55);
bst.insert(60);
bst.insert(65);
bst.insert(70);
bst.insert(75);
bst.insert(80);
bst.insert(85);
bst.insert(90);
bst.insert(95);
bst.insert(100);

//2nd set of values
bst1.insert(3);
bst1.insert(6);
bst1.insert(9);
bst1.insert(12);
bst1.insert(15);
bst1.insert(18);
bst1.insert(21);
bst1.insert(24);
bst1.insert(27);
bst1.insert(30);
bst1.insert(33);
bst1.insert(36);
bst1.insert(39);
bst1.insert(42);
bst1.insert(45);
bst1.insert(48);
bst1.insert(51);
bst1.insert(54);
bst1.insert(57);
bst1.insert(60);
bst1.insert(63);

//3rd set of values
bst2.insert(2);
bst2.insert(4);
bst2.insert(6);
bst2.insert(8);
bst2.insert(10);
bst2.insert(12);
bst2.insert(14);
bst2.insert(16);
bst2.insert(18);
bst2.insert(20);
bst2.insert(22);
bst2.insert(24);
bst2.insert(26);
bst2.insert(28);
bst2.insert(30);
bst2.insert(32);
bst2.insert(34);
bst2.insert(36);
bst2.insert(38);
bst2.insert(40);
bst2.insert(42);

bst.inOrderTraversal(callback = node => console.log(node))
//bst.root.value
///Set Up Functions
function displayTree(){
  let value = bst;
    tree.innerHTML += `
    <div class="treeValuesR">${value}</div>
    <div class="treeValuesR">${value}</div>
    
    `
    
}

///Event Listener
getTheTree.addEventListener("click", function(){
   displayTree();
})