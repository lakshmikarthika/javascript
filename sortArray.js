let arr = [4, 32, 2, 5, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];           // swapping elements
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Sorted array=>", arr);         // or simply use arr.sort();

let arr = [4, 32, 2, 5, 8];

console.log("Sorted array=>", arr.sort((a,b)=> a-b);    
