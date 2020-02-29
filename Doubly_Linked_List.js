class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        if (!this.head)
            return undefined;
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }

    shift() {
        let oldHead = this.head
        if (this.length === 0)
            return undefined;
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;

    }
    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index < this.length / 2) {
            let current = this.head;
            for (let i = 0; i != index; i++) {
                current = current.next
            }
            return current;
        } else {
            let current = this.tail;
            for (let i = this.length - 1; i != index; i--) {
                current = current.prev
            }
            return current
        }
    }

    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        } else {
            return false
        }
    }
    insert(index, val) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0) {
            return this.unshift(val)
        }
        if (index === this.length) {
            return this.push(val)
        }
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode
        newNode.next = afterNode;
        afterNode.prev = newNode
        this.length++;
        return this;

    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift(index);
        if (index === this.length-1) return this.pop(index);
        let indexTBRemoved = this.get(index);
        let beforeNode = indexTBRemoved.prev;
        let afterNode = indexTBRemoved.next;
         beforeNode.next = afterNode
         afterNode.prev = beforeNode;
         this.length--;
         return indexTBRemoved;

    }
    

}

let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
