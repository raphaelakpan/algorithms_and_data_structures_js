class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // method to add a value to the end of the list
  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // method ro remove a node from the end of the list
  pop() {
    if (this.length === 0) return;
    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  // method to remove a node from the beginnig of the list
  shift() {
    if (this.length === 0) return;
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;
    return node;
  }

  // method to add a node to the beginning of the list
  unshift(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // method to return a node at the given index
  get(index) {
    if (index < 0 || index >= this.length) return;
    const midPoint = Math.round(this.length / 2);
    let node, counter;
    if (index >= midPoint) {
      // start from tail
      counter = this.length - 1;
      node = this.tail;
      while (counter !== index) {
        node = node.prev;
        counter--;
      }
    } else {
      // start from head
      node = this.head;
      counter = 0;
      while (counter !== index) {
        node = node.next;
        counter++;
      }
    }
    return node;
  }

  // method to set a value at the given index
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  // method to insert a new node at a given index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);

    let node = new Node(value);
    let currentNode = this.get(index);
    let previousNode = currentNode.prev;
    node.prev = previousNode;
    previousNode.next = node;
    node.next = currentNode;
    currentNode.prev = node;
    this.length++;
    return true;
  }

  // method to remove a node from a given index
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let previous = removedNode.prev;
    let next = removedNode.next;

    previous.next = next;
    next.prev = previous;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  // method to reverse the list
  reverse() {
    if (this.length === 0) return;
    let node = this.head;
    // swap head and tail
    this.head = this.tail;
    this.tail = node;

    let next, prev;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new DoublyLinkedList();
list.push(5);
list.push(15);
list.push(20);
list.remove(1);
// list.push(20);
// console.log(list);
console.log(list);
