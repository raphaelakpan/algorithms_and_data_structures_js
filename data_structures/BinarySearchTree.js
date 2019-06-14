class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // method to isert a node to the tree
  insert(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return;

        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
    return this;
  }

  // method to find a node in a tree
  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return current;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }
  }

  BFS() {
    let queue = [];
    let data = [];
    let node;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(5);
tree.insert(15);
tree.insert(12);
console.log(tree.DFSInOrder());
