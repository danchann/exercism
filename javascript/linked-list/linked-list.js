class Node {
    constructor (value) {
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}
class LinkedList extends Node {
    constructor () {
        super();
        this._head = null;
        this._tail = null;
        this._length = 0
    }
    push(value) { // (*insert value at back*)
        let node = new Node(value);
        if (!this._head && !this._tail) { //If it's the first node
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node; //add node to the back
            this._tail = this._tail.next; //reset tail to last node
        }
        this._length++;
    }
    pop() { // (*remove value at back*)
        var result;
        (this._tail ? result = this._tail.data : "");
        (this._length > 1 ? this._tail = this._tail.prev: (this._tail = null, this._head = null));
        (this._tail ? this._tail.next = null: "");
        this._length--;    
        return result;            
    }
    shift() { // (*remove value at front*)
        var result;
        (this._head ? result = this._head.data : "");
        //(this._head == this._tail ? this._tail = null:"")
        (this._head.next !== null ? (this._head = this._head.next, this._head.prev = null) : (this._head = null, this._tail = null));

        this._length--;
        return result;         
    }
    unshift(value) { // (*insert value at front*)
        let node = new Node(value);
        if (!this._head && !this._tail) { //If it's the first node
            this._head = node;
            this._tail = node;
        } else {
            var oldhead = this._head
            this._head.prev = node;
            this._head = node;
            this._head.next =  oldhead;
        }
        this._length++;
        return this._head.data;
    }
    count() {
        return this._length;
    }
    delete(value) {
    if (this._length > 0) {
        let node = this._head;
        for (var x = 0; x < this._length; x++) {
            if (node.data === value) {
                if (node == this._head) {  //if head then
                    if (this._length > 1) { 
                        this._head = this._head.next; // reset head to next
                        this._head.prev = null;
                    } else {
                        this._head = null;
                        this._tail = null;
                    }
                } else if (node == this._tail) { // if tail then
                    this._tail = this._tail.prev; // set tail to prev
                    this._tail.next = null;  
                } else {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }
                this._length--;
            }
        node = node.next;            
        }
        return value;
    }            
    }
}

module.exports = LinkedList;