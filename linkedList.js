class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

function appendElement() {
  let exampleNode = new ListNode(6);
  exampleNode.next = list.head;
  list.head = exampleNode;
}
appendElement();

function prependElement(_list = list, data = 7) {
  let exampleNode = new ListNode(data);
  let node = _list.head;
  while (true) {
    if (node == null) {
        _list.head = exampleNode;
      break;
    }
    if (node.next == null) {
      node.next = exampleNode;
      break;
    }
    node = node.next;
  }
}
prependElement();
function itrateList(_list = list) {
  let node = _list.head;
  while (node) {
    console.log("list data", node.data);
    node = node.next;
  }
}

function addElemntToSepcificPos(data) {
  let node = list.head;
  console.log(node);
  let prev,
    next = null;
  while (true) {
    if (node && node.data == data) {
      prev = node;
      next = node.next;
      let newNode = new ListNode(3);
      newNode.next = next;
      prev.next = newNode;
      break;
    } else {
      prev = node;
      next = node.next;
      node = node.next;
    }
    if (node.next == null) break;
  }
}

addElemntToSepcificPos(2);
itrateList();

function getLast() {
  let node = list.head;
  while (node.next) {
    node = node.next;
  }
  console.log(node);
}
getLast();

function size(_list = list) {
  let node = _list.head;
  let count = 0;
  while (node != null) {
    count++;
    node = node.next;
  }
  console.log("size of list is ", count);
  return count;
}
size();

function node_at_index(list, index) {
  let node = list.head;
  let position = 0;
  while (position < index) {
    position++;
    node = node.next;
  }
  console.log("at position ", index, "= ", position, "= ", node.data);
  return node;
}
node_at_index(list, 3);

function splitList(list) {
  let leftHalf, rightHalf;
  if (list == null || list.head == null) {
    leftHalf = list;
    rightHalf = null;
    return [leftHalf, rightHalf];
  } else {
    let _size = size();
    let mid = Math.floor(_size / 2);
    let midNode = node_at_index(list, mid);
    let leftHalf = list;
    let rightHalf = new LinkedList();
    rightHalf.head = midNode.next;
    midNode.next = null;
    return [leftHalf, rightHalf];
  }
}
const [left, right] = splitList(list);
console.log("left", size(left), "right", size(right));
module.exports = { LinkedList, list, size, prependElement, node_at_index, prependElement, itrateList };
