const {
  LinkedList,
  list,
  size,
  node_at_index,
  prependElement,
  itrateList
} = require("./linkedList");
function mergeSort(_list = list) {
  if (size() == 1) return _list;
  else if (_list.head == null) return _list;

  const [left_half, right_half] = split(_list);
  let left = mergeSort(left_half);
  let right = mergeSort(right_half);

  return merge(left, right);
}

function split(list) {
  let leftHalf, rightHalf;
  if (list == null || list.head == null) {
    leftHalf = list;
    rightHalf = null;
    return [leftHalf, rightHalf];
  } else {
    let _size = size();
    let mid = Math.floor(_size / 2);
    let midNode = node_at_index(list, mid - 1);
    let leftHalf = list;
    let rightHalf = new LinkedList();
    rightHalf.head = midNode.next;
    midNode.next = null;
    return [leftHalf, rightHalf];
  }
}
function merge(left, right) {
  let merged = new LinkedList();
  prependElement(merged, 0);
  let current = merged.head;
  // Obtain head nodes for left and right linked lists
  let left_head = left.head;
  let right_head = right.head;

  // Iterate over left and right as long until the tail node of both
  // left and right
  while (left_head || right_head) {
    // If the head node of left is None, we're at the tail
    //Add the tail node from right to the merged linked list
    if (left_head == null) {
      current.next = right_head;
      // Call next on right to set loop condition to False
      right_head = right_head.next;
    }
    // If the head node of right is None, we're at the tail
    // Add the tail node from left to the merged linked list
    else if (right_head == null) {
      current.next = left_head;
      // Call next on right to set loop condition to False
      left_head = left_head.next;
    } else {
      // Not at either tail node
      // Obtain node data to perform comparison operations
      let left_data = left_head.data;
      let right_data = right_head.data;

      // If data on left is lesser than right set current to left node
      // Move left head to next node
      if (left_data < right_data) {
        current.next = left_head;
        left_head = left_head.next;
      }
      // If data on left is greater than right set current to right node
      // Move right head to next node
      else {
        current.next = right_head;
        right_head = right_head.next;
      }
    }
    // Move current to next node
    current = current.next;
  }
  // Discard fake head and set first merged node as head
  head = merged.head.next;
  merged.head = head;

  return merged;
}
console.log(itrateList(mergeSort(list)))
