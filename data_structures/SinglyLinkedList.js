class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // method to push a value to the end of the list
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // method to pop a value from the end of the list
  pop() {
    if (!this.head) return;
    let node = this.head;
    let nextNode = node.next;
    while (nextNode) {
      node = nextNode;
      nextNode = node.next;
    }
    this.tail = node;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return nextNode;
  }

  // method to remove the first element in the list
  shift() {
    if (!this.head) return;
    let head = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return head;
  }

  // method to add an element to the beginning of the list
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // method to fetch the element at a given index
  get(index) {
    if (index < 0 || index > this.length || this.length === 0) return;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // method to update the value at the given index
  set(index, value) {
    let node = this.get(index);
    if (!node) return;
    node.value = value;
    return node;
  }

  // method to insert value at a given index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let node = new Node(value);
    let previousNode = this.get(index - 1);
    node.next = previousNode.next;
    previousNode.next = node;
    this.length++;
    return true;
  }

  // method to remove a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length || this.length === 0) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // method ro reverse a singly linked list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  // method to determine if the list has a loop
  // using Floyd's cycle detection algorithm
  loopDetected() {
    let slowPointer = this.head;
    let fastPointer = this.head;
    let loopFound = false;

    while (slowPointer && fastPointer) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      loopFound = slowPointer === fastPointer;
      if (loopFound) break;
    }

    return loopFound;
  }
}

var list = new SinglyLinkedList();
list.push(5);
list.push(10);
// list.tail.next = list.head;
console.log(list.loopDetected());
console.log(list.head.next);
console.log(list.tail.next);
// list.unshift(50);
// list.set(0, 30);
// list.shift();
