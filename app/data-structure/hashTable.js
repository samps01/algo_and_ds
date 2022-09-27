/**
 * @class
 * Simple Hashtable class
 */
class HashTable {
    #buckets = [];
    constructor() {
        this.#buckets = Array(100).fill(null);
    }

    /**
     * 
     * @param {string | number} key 
     * @returns {number}
     */
    #hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }

        return hash % this.#buckets.length
    }

    /**
     * 
     * @param {string | number} key 
     * @param {string | number} value 
     */
    set(key, value) {
        const hashKey = this.#hash(key);
        this.#buckets[hashKey] = [key, value];
    }

    /**
     * 
     * @param {string | number} key 
     * @returns {string | number | undefined}
     */
    get(key) {
        const keyHash = this.#hash(key);
        const result = this.#buckets[keyHash];
        return result ? result[1] : undefined;
    }
}