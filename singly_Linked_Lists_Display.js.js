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
    // Using addfront to populate linked list :D
    addFront(val) {
        var newNode = new Node(val);   //Creating new node with this value
        newNode.next = this.head; //Connecting new node to List
        this.head = newNode; // Moving the head of the list to the new node
        return this; // To allow for chaining 
    }
    
    Display(){
        if(this.head){
            let runner = this.head;
            while(runner.next){
                console.log(runner.value);
                runner = runner.next;
            }
            console.log(runner.value);
        }
        else{
            console.log("No values")
        } 
    } 
}
var mySLLNode = new SLLNode();
mySLLNode.addFront(20);
mySLLNode.addFront(25);
mySLLNode.addFront(30);
console.log(mySLLNode);
mySLLNode.Display()
