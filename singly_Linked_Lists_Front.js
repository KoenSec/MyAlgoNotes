
class Node {
    constructor(data) {
        this.value = data; // Value being held inside the node
        this.next = null; // .next is a pointer connecting to another node - but by default, we'll not connect it, hence the value null
    }
}
class SLLNode {
    constructor(data){
        this.head = null;
    }
    addFront(val) {
       var newNode = new Node(val);   //Creating new node with this value
       newNode.next = this.head; //Connecting new node to List
       this.head = newNode; // Moving the head of the list to the new node
       return this; // To allow for chaining 
   }
   removeFront(){
        tempval = this.head; // Setting tempval to head 
        this.head = this.head.next; //set next nodes value to equal this head of list
        tempval = null; // Sets head value to null
   }
   front(){
       var currentNode = this.head;
       while(currentNode){
           console.log(`Node value is equal to ${currentNode.value}`)
        return this;
       }
   }
}
var mySLLNode = new SLLNode();
mySLLNode.addFront(20);
mySLLNode.addFront(25);
mySLLNode.addFront(30);
console.log(mySLLNode);
mySLLNode.front()
