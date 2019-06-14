class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // method to add to the end of the queue
  enqueue(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.length;
  }

  // method to remove from the beginning of the queue
  dequeue() {
    if (this.length === 0) return;
    let removedNode = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = removedNode.next;
    this.length--;
    return removedNode.value;
  }
}

let queue = new Queue();
queue.enqueue(50);
queue.enqueue(10);
queue.enqueue(5);
queue.dequeue();
console.log(queue);
