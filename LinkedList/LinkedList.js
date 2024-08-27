// Types of Linked List
// Singly Linked List
// Singly linked list is a linear data structure in which the elements are not stored in contiguous memory locations and each element is connected only to its next element using a pointer.

// /Basic Terminologies of Linked List
// Head: The Head of a linked list is a pointer to the first node or reference of the first node of linked list. This pointer marks the beginning of the linked list.
// Node: Linked List consists of a series of nodes where each node has two parts: data and next pointer.
// Data: Data is the part of node which stores the information in the linked list.
// Next pointer: Next pointer is the part of the node which points to the next node of the linked list.


// In a singly linked list, each node contains a reference to the next node in the sequence. Traversing a singly linked list is done in a forward direction.


// Importance of Linked List
// Here are a few advantages of a linked list that is listed below, it will help you understand why it is necessary to know.

// Dynamic Data structure: The size of memory can be allocated or de-allocated at run time based on the operation insertion or deletion.
// Ease of Insertion/Deletion: The insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion and deletion, Just the address needed to be updated.
// Efficient Memory Utilization: As we know Linked List is a dynamic data structure the size increases or decreases as per the requirement so this avoids the wastage of memory. 
// Implementation: Various advanced data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc.

// Define the Node class
class Node {
    // Constructor to initialize a new node with data
    constructor(new_data) {
        this.data = new_data; // Assign data to the node
        this.next = null; // The next node pointer is initially null
    }
}

// Function to insert a new node at the front of the linked list
function insertAtFront(head, newData) {
    // Create a new node with the given data
    const newNode = new Node(newData);

    // Make the next of the new node point to the current head
    newNode.next = head;

    // Return the new node as the new head of the list
    return newNode;
}

// Function to print the linked list
function printList(head) {
    let curr = head;
    let result = "";

    // Traverse the list and build a string with the data
    while (curr !== null) {
        result += curr.data + " "; // Add the data of the current node to result
        curr = curr.next; // Move to the next node
    }
    console.log(result); // Print the final list
}

// Function to add nodes to the linked list with values from 0 to n-1
function addNRangeLinkList(n) {
    let head = null; // Start with an empty list (head is null)

    // Loop to insert numbers from 0 to n-1
    for (let i = 0; i < n; i++) {
        head = insertAtFront(head, i); // Insert each number at the front
    }

    return head; // Return the new head of the linked list
}

// Main program
let head = addNRangeLinkList(10); // Create a linked list with numbers from 0 to 9

// Print the updated linked list
console.log("Updated Linked List:");
printList(head);


// Doubly Linked List
// Circular Linked List
// Circular Doubly Linked List
// Header Linked List