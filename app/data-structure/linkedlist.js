class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Appends the value to the end of the LinkedList
     * @param {*} value 
     */
    append(value) {
        let node = new Node(value);

        if (this.tail) {
            this.tail.next = node;
        }

        this.tail = node;

        if (!this.head) {
            this.head = node;
        }
    }

    /**
     * Prepends the value to the start of the LinikedList
     * @param {*} value 
     */
    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }


    /**
     * Delete a node in the Linkedlist
     * @param {*} value 
     * @returns 
     */
    delete(value) {
        if (this.head) {
            if (this.head.data === value) {
                this.head = this.head.next;
            } else {
                let current = this.head;
                while (current.next) {
                    if (current.next.data === value) {
                        current.next = current.next.next;
                    } else {
                        current = current.next;
                    }
                }

                if (this.tail.data === value) {
                    this.tail = current;
                }
            }


        }
        return;
    }

    /**
     * Find the element in Linkedlist if present 
     * @param {*} value 
     * @returns 
     */
    find(value) {
        if (this.head) {
            let current = this.head;

            while (current) {
                if (current.data === value) {
                    return current;
                }
                current = current.next;
            }
        }
        return;
    }

    /**
     * Insert new node after the specified node
     * @param {*} value 
     * @param {*} afterValue 
     */
    insertAfter(value, afterValue) {
        let node = this.find(afterValue);
        let newNode = new Node(value);
        if (node) {
            newNode.next = node.next;
            node.next = newNode;
        }
    }

    /**
     * Returns an Array for all the elements in the LinkedList
     * @returns Array
     */
    toArray() {
        let element = [];
        let current = this.head;
        while (current) {
            element.push(current.data);

            current = current.next;
        }

        return element;
    }
}