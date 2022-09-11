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

let ll = new LinkedList();

["Sam", "Ben", "Sam", "Christy"].forEach(name => ll.append(name));

ll.prepend("USA");

ll.prepend("India");

ll.delete("Christy");

console.log(ll.toArray());
console.log(ll.tail);