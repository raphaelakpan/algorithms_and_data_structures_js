class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.length = 0;
  }

  // method to push to the end of the stack
  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.last = node;
    } else {
      node.next = this.last;
      this.last = node;
    }
    return ++this.length;
  }

  // method to remove from the end of the stack
  pop() {
    if (this.length === 0) return;
    let removedNode = this.last;
    this.last = removedNode.next;
    this.length--;
    return removedNode.value;
  }
}

let stack = new Stack();
stack.push(5);
stack.push(15);
stack.push(25);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
