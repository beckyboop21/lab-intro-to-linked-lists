const { nums, words } = require("./data/data.js");
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(data) {
    let node = this.head;
    let count = 0;
    while (node.data !== data && node.next) {
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  getKth(key) {
    let node = this.head;
    let count = 1;
    while (node !== null && count < key) {
      node = node.next;
      count++;
    }
    return node;
  }

  getKthToLast(key) {
    if (key < 1) {
      return null;
    }

    let pointer1 = this.head;
    let pointer2 = this.head;
    for (let i = 0; i < key; i++) {
      if (!pointer2) {
        return null;
      }
      pointer2 = pointer2.next;
    }
    while (pointer2.next) {
      pointer2 = pointer2.next;

      pointer1 = pointer1.next;
    }
    return pointer1;
  }

  isEmpty() {
    if (!this.head) {
      return true;
    } else {
      return false;
    }
  }

  toArray() {
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr.reverse(); 
    // Reverse the array to match the expected output
  }

  clear() {
    this.head = null;
  }

  containsDuplicates() {
    let arr = [];
    let node = this.head;
    while (node) {
      if (arr.includes(node.data)) {
        return true;
      }
      arr.push(node.data);
      node = node.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
