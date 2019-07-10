class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return newNode;
    };

    includes(value) {
        let currentNode = this.head;
        let isInList = false;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                isInList = true;
            };
            currentNode = currentNode.next;
        };
        return isInList;
    }

    toString() {
        while (currentNode !== null) {
            console.log(currentNode.toString())
        }

    }
}

module.exports = LinkedList;