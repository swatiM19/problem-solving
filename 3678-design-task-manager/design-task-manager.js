class PriorityHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return result;
    }

    peek() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parent]) <= 0) {
                break;
            }

            [this.heap[index], this.heap[parent]] =
                [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    heapifyDown(index) {
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let largest = index;

            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[largest]) > 0
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[largest]) > 0
            ) {
                largest = right;
            }

            if (largest === index) {
                break;
            }

            [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }

    compare([priorityA, taskIdA], [priorityB, taskIdB]) {
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        return taskIdA - taskIdB;
    }
}

class TaskManager {
    constructor(tasks) {
        this.taskToUser = new Map();
        this.taskToPriority = new Map();
        this.maxHeap = new PriorityHeap();

        for (const [userId, taskId, priority] of tasks) {
            this.taskToUser.set(taskId, userId);
            this.taskToPriority.set(taskId, priority);
            this.maxHeap.push([priority, taskId]);
        }
    }

    add(userId, taskId, priority) {
        this.taskToUser.set(taskId, userId);
        this.taskToPriority.set(taskId, priority);
        this.maxHeap.push([priority, taskId]);
    }

    edit(taskId, newPriority) {
        this.taskToPriority.set(taskId, newPriority);
        this.maxHeap.push([newPriority, taskId]);
    }

    rmv(taskId) {
        this.taskToUser.delete(taskId);
        this.taskToPriority.delete(taskId);
    }

    execTop() {
        while (!this.maxHeap.isEmpty()) {
            const [priority, taskId] = this.maxHeap.peek();

            if (
                this.taskToPriority.has(taskId) &&
                this.taskToPriority.get(taskId) === priority
            ) {
                this.maxHeap.pop();

                const userId = this.taskToUser.get(taskId);

                this.taskToUser.delete(taskId);
                this.taskToPriority.delete(taskId);

                return userId;
            }

            this.maxHeap.pop();
        }

        return -1;
    }
}