/* eslint-disable no-console */
class _Node {
  constructor(value = null, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.length = 0;
    this.head = null;
  }
  insertFirst(item){
    this.head = new _Node(item,this.head);
    this.length++;
  }
  insertLast(item) {
    if(this.head === null){
      this.insertLast(item);
    }
    let tempNode = this.head;
    while(tempNode.next !== null){
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item,null);
    this.length++
  }
  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    if(this.head.value === key) {
      this.head = new _Node(item,this.head)
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !==key)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = new _Node(item, currNode);
    this.length++;
  }
  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let nextNode = this.head;
    while ((currNode !== null) && (currNode.value !== key)) {
      currNode = nextNode;
      nextNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    currNode.next = new _Node(item, nextNode);
    this.length++;
  }
  insertAt(item, position){
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let nextNode = this.head;
    for(let i = 1; i < position; i++) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }
    if(currNode === null) {
      console.log('Invalid position')
      return;
    }

    currNode.next = new _Node(item, nextNode);
    this.length++;
  }

  mergeSort(node) {
    if (node == null || node.next == null) {
      return _Node(node.value, null);
    }
  
    let backward = node
    let forward = node.next;
  
    middle.next = null;
  
    let left = this.mergeSort(node);
    let right = this.mergeSort(nextOfMiddle);
    let sortedList = this.merge(left, right);
    return sortedList;
  }
  
  merge(leftNode, rightNode) {
    let result = null
  
    if (leftNode === null) {
      return rightNode
    }
    if (rightNode === null) {
      return leftNode
    }
  
    if(leftNode.value <= rightNode.value) {
      result = leftNode
      result.next = this.merge(leftNode.next, rightNode)
    }
    else {
      result = rightNode
      result.next = this.merge(leftNode, rightNode.next)
    }
  
    return result
  }

   middle(node) {
    let currentNode = node;
    let length = 1;
    let counter = 1;
  
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      length++;
    }
  
    currentNode = node;
  
    while (currentNode !== null && counter !== Math.floor(length / 2)) {
      counter++;
      currentNode = currentNode.next;
    }
  
    return currentNode;
  }

  remove(item){
    if (!this.head) {
      return null;
    }
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !==item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    this.length--;
  }
  find(item){
    let currNode = this.head;
    if(!this.head) {
      return null;
    }
    while (currNode.value !== item){
      if(currNode.next === null){
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }
}



function populateList() {
  let newList = new LinkedList;
  newList.insertFirst(1)
  newList.insertLast(4)
  newList.insertLast(15)
  newList.insertLast(7)
  newList.insertLast(3)
  newList.insertLast(9)
  newList.insertLast(25)
  newList.insertLast(30)
  newList.insertLast(40)

  let mergedList = newList.mergeSort(newList.head)
  return mergedList;
}

const list = populateList()

console.log(list);


function display(list) {
  let currentNode = list.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  return list;
}

// console.log(display(list));



// console.log(middle(list));




// console.log(display(mergedList));

module.exports = LinkedList