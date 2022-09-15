class Stack {
    #item = [];
    #size = 0;
    constructor() {
    }

    /**
     * Inserts item to the end of the stack
     * @param {*} value 
     */
    push(value) {
        this.#item.push(value);
        this.#size++;
    }

    /**
     * pops last item in the stack
     * @returns item
     */
    pop() {
        if (this.#size > 0) {
            this.#size--;
        }
        return this.#item.pop();
    }

    isEmpty() {
        return this.#item.length === 0;
    }

    toArray() {
        return [...this.#item];
    }

    get size() {
        return this.#size;
    }
}