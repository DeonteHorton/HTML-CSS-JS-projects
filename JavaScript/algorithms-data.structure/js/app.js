let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
//let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function bubble(nums) {
//     do {
//         var swapped = false;
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i + 1] < nums[i]) { 5 < 10
//                 let temp = nums[i];
//                 nums[i] = nums[i +1];
//                 nums[i + 1] = temp;
//                 swapped = true
//             }
            
//         }
//     } while (swapped);
//     console.log(nums);
// }
// bubble(nums);

 let data = ['yogurtA', 'yogurtC', 'yogurtE', 'yogurtB', 'yogurtD']
// function insertSort(data) {
//     for (let i = 1; i < data.length; i++) {
//        for (let j = 0; j < data.length; j++) {
//         if (data[i] < data[j]) {
//             const spliced = data.splice(i, 1);
//             data.splice(j, 0, spliced[0])
//         }
//        };
        
//     };
//     console.log(data);
    
// };
// insertSort(data)

// const mergeSort = (nums) =>{
//     if (nums.length < 2 ) {
//         return nums;
//     }
//     const length = nums.length;
//     const middle = Math.floor(length / 2 );
//     const left = nums.slice(0 , middle);
//     const right = nums.slice(middle, length);

//     const sortLeft = mergeSort(left);
//     const sortRight = mergeSort(right);

//     return stitch(sortLeft, sortRight)
// }
//      const stitch = (left, right) => { 
//          const result = [];
//          while (left.length  && right.length) {
//              if (left[0] <= right[0]) {
//                  result.push(left.shift());
//              } else {
//                  result.push(right.shift());
//              }
//          }
//          while (left.length) {
//              result.push(left.shift())
//          }
//          while (right.length) {
//              result.push(right.shift())
//          }
//          return result
//      };
// let mergeSortResult = mergeSort(nums);
// console.log(nums, "mergeSortResult", mergeSortResult);

    //  function mergeSort2(data) {
    //      if (data.length < 2) {
    //          return data;
    //      }
    //      let length = data.length;
    //      let middle = Math.floor(length / 2)
    //      let left = data.slice(0, middle)
    //      let right = data.slice(middle, length)

    //      let sortedLeft = mergeSort2(left)
    //      let sortedRight = mergeSort2(right)
    //      return stit
    //  }

    // const quickSort = (nums) => {
    //     if (nums.length <= 1) return nums 
            
    //     const pivot = nums[nums.length - 1];
    //     const left = [];
    //     const right = [];

    //     for (let i = 0; i , nums.length-1; i++)
    //         if (nums[i] < pivot ) {
    //             left.push(nums[i])
    //         } else {
    //             right.push(nums[i])
    //         }
    //         return [...quickSort(left),pivot,...quickSort(right)];
    //         //return quickSort(left).concat(pivot,quickSort(right));
    // }
   // console.log(quickSort);

   // Data Structures
    
     //Map
     //Stacks
     //FIFO- First in - First out
     //interface
     //Implementations
        //array list
class Arraylist{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(value){
        this.data[this.length] = value;
        this.length++;
    }
    pop(){
        return this.delete(this.length-1);
    }
    get(index){
        return this.data[index];
    }
    delete(index){
        const ans = this.data[index];
        this._collapseTo(index);
        return ans
    }
    _collapseTo(index){
        for (let i = index; i < this.length; i++) {
            this.data[i]  = this.data[i + 1];
            
        }
        delete this.data[this.length-1];
        this.length--;
    }
    print(){
        console.log(this.data);
        
    }

}
let arrayList = new Arraylist();
arrayList.push(2);
arrayList.push(5);
arrayList.push(7);

arrayList.print();

let temp = arrayList.pop()

console.log(temp);

arrayList.print();

arrayList.push(9);
arrayList.push(12);
arrayList.push(15);
arrayList.print();

let temp2 = arrayList.get(2);
console.log(temp2);
arrayList.print();
arrayList.delete(2);
arrayList.print();

