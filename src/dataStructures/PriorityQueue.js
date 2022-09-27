// class PriorityQueue {
//     constructor() {
//         this.arr = [];
//     }

//     left(i) {
//         return (2 * i + 1);
//     }

//     right(i) {
//         return (2 * i + 2);
//     }

//     parent(i) {
//         return parseInt((i - 1) / 2);
//     }

//     heapify(i) {
//         let smallest = i;

//         let l = this.left(i);
//         let r = this.right(i);

//         let n = this.arr.length;
//         if (l < n && this.arr[l].distance < this.arr[i].distance) {
//             smallest = l;
//         }

//         if (r < n && this.arr[r].distance < this.arr[smallest].distance) {
//             smallest = r;
//         }

//         console.log(arr , )

//         // SWAP
//         let temp = this.arr[i];
//         this.arr[i] = this.arr[smallest];
//         this.arr[smallest] = temp;

//         if (smallest !== i) {
//             this.heapify(smallest);
//         }
//     }

//     insert(ele) {
//         let n = this.arr.length;
//         console.log(n, ele);
//         n = this.arr.push(ele);
//         console.log(n, this.arr);

//         let i = this.arr.length - 1;
//         let parent = this.parent(i);
//         console.log(i, 'parent is', parent);
//         while (i !== 0 && this.arr[i].distance < this.arr[this.parent(i)].distance) {
//             let temp = this.arr[i];
//             this.arr[i] = this.arr[this.parent(i)];
//             this.arr[this.parent(i)] = temp;

//             i = this.parent(i);
//         }


//         // const size = this.arr.length;
//         // if (size === 0) {
//         //     this.arr.push(ele);
//         // } else {
//         //     this.arr.push(ele);

//         //     for (let i = parseInt(this.arr.length / 2 - 1); i >= 0; i--) {
//         //         this.heapify(0);
//         //     }
//         // }
//     }

//     top() {
//         if (!this.arr.length !== 0) {
//             return this.arr[0];
//         }
//     }

//     pop() {
//         if (this.arr.length === 0) {
//             return;
//         }
//         else if (this.arr.length === 1) {
//             this.arr.pop();
//         }

//         let n = this.arr.length;

//         let temp = this.arr[0];
//         this.arr[n - 1] = temp;
//         this.arr[0] = temp;

//         this.arr.pop();
//         this.heapify(0);

//         console.log('after pop', this.arr);
//     }

//     isEmpty() {
//         return this.arr.length === 0;
//     }

//     len() {
//         return this.arr.length;
//     }

//     print() {
//         // this is just for test
//         console.log(this.arr);
//     }
// }

// export default PriorityQueue;

class PriorityQueue {
    constructor() {
        this.list = [];
    }

    //Heapify
    minHeapify = (arr, n, i) => {
        let smallest = i;
        let l = 2 * i + 1; //left child index
        let r = 2 * i + 2; //right child index

        //If left child is smaller than root
        if (l < n && arr[l].distance < arr[smallest].distance) {
            smallest = l;
        }

        // If right child is smaller than smallest so far 
        if (r < n && arr[r].distance < arr[smallest].distance) {
            smallest = r;
        }

        // If smallest is not root 
        if (smallest !== i) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;

            // Recursively heapify the affected sub-tree 
            this.minHeapify(arr, n, smallest);
        }
    }

    //Insert Value
    insert = (num) => {
        const size = this.list.length;

        if (size === 0) {
            this.list.push(num);
        } else {
            this.list.push(num);

            //Heapify
            for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
                this.minHeapify(this.list, this.list.length, i);
            }
        }
    }

    //Remove value
    delete = (num) => {
        const size = this.list.length;

        //Get the index of the number to be removed
        let i;
        for (i = 0; i < size; i++) {
            if (this.list[i] === num) {
                break;
            }
        }

        //Swap the number with last element
        [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];

        //Remove the last element
        this.list.splice(size - 1);

        //Heapify the this.list again
        for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
            this.minHeapify(this.list, this.list.length, i);
        }
    }

    //Return min value
    findMin = () => this.list[0];

    //Remove min val
    deleteMin = () => {
        this.delete(this.list[0]);
    }

    //Remove and return min value
    extractMin = () => {
        const min = this.list[0];
        this.delete(min);
        return min;
    }

    //Size
    len = () => this.list.length;

    //IsEmpty
    isEmpty = () => this.list.length === 0;

    //Return head
    getLlist = () => this.list;
}

export default PriorityQueue;