let arr = [4, 32, 2, 5, 8];

let rev = [];
for(var i=arr.length-1;i>=0;i--){
    rev.push(arr[i]);
}
console.log("Sorted array=>", rev);  

// or use arr.reverse()
