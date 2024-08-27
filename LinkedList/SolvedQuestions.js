// Insert Node at the Beginning

// Input: head = [1, 2, 3], newData = 0
// Output: [0, 1, 2, 3]

class Node {
  constructor(data) {
    this.data = data; // the data
    this.next = null;
  }
}

let head = new Node(1); // This will be the head node
let second = new Node(2); // Creating another node
let third = new Node(3); // creating another

// Link the nodes together
head.next = second;
second.next = third;

// function printList()

function insertAtFront(data) {
  let newNode = new Node(data); // newNode data will be 0
  console.log(newNode);
  newNode.next = head; // make the new node point to the head node
  console.log("newNode", newNode, "head", head);
  head = newNode; // set the head node to newNode
}

function printList() {
  let n = head;
  while (n != null) {
    // if n is not equal to null
    console.log(n.data); // console.log n.data series of data for n
    n = n.next; // switch to next node
  }
}

// insertAtFront(0)
// printList()

// Insert Node at the End

// Input: head = [1, 2, 3], newData = 4
// Output: [1, 2, 3, 4]

function insertAtEnd(data) {
  // Create a new node with the given data
  let newNode = new Node(data);

  // If the list is empty, the new node becomes the head
  if (head == null) {
    head = newNode;
    return; // Exit the function as we've already inserted the node
  }

  // Start from the head and find the last node
  let current = head;
  while (current.next != null) {
    current = current.next;
  }

  // Now, current is the last node, so set its next to the new node
  current.next = newNode;
}

// insertAtEnd(4)
// printList()

// Delete a Node by Value

// Input: head = [1, 2, 3, 4], value = 3
// Output: [1, 2, 4]

// To delete a node by value from a singly linked list, you need to:

// Traverse the list: Find the node that has the value you want to delete.
// Handle edge cases: These include deleting the head node or a node not being found in the list.
// Relink the nodes: Adjust the next pointers to remove the node from the list.

function deleteNode(target) {
  let current = head;
  if (current == null) {
    return;
  }

  if (current.data == target) {
    head = current.next;
    return;
  }

  while (current.next != null) {
    if (current.next.data == target) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
}
// deleteNode(2);
// printList();

// Start Traversing: The loop runs as long as current.next is not null, meaning it stops before reaching the last node.

// Check for Target Value: The condition if (current.next.data == target) checks whether the next node contains the value we want to delete.

// Delete the Node:

// When the node with the target value is found, current.next = current.next.next skips the node by pointing current.next to the node after the one to be deleted. This effectively removes the node from the list.
// Exit After Deletion: The return ensures the function exits once the node is deleted, preventing further traversal.

// Continue Traversing: If the target value is not found, the loop moves the current pointer to the next node with current = current.next.



// Find Length of the Linked List

// Input: head = [1, 2, 3, 4, 5]
// Output: 5


function findLength() {
  let current = head; // initializing head 
  let count = 0; // count set to zero 
  while (current != null) { // traverse until the current is not equal to null 
    count++; // increment 
    current = current.next; // set next 
   }
  console.log("count",count); 
  return count; // return count
}

// printList();
// findLength()


// Search an Element

// Input: head = [1, 2, 3, 4], value = 3

// Output: true

// Input: head = [1, 2, 3, 4], value = 5

// Output: false


function searchElement(value) {
  let current = head; // initialize 
  while (current != null) {
    if (current.data == value) { 
        console.log(true);
      return true;
    }
    current = current.next;
  }
  console.log(false)
  return false;
}


printList() 
searchElement(3)