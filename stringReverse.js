//reverse string without using built-in

let str = 'jav'
let s = '';
for(var i= str.length-1; i>=0;i--){
    s+= str[i];
}
console.log(s)

//reverse string 

let str = 'java'
console.log(str.split('').reverse().join(''))
