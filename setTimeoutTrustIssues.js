function new1(){
    setTimeout(()=>{
        console.log("Timeout");
    },1000);                    // will not print timeout in 1 sec but only after whole code(GEC)(call stack is empty) is executed
}
new1();
for(let i=1;i<=50000;i++){
    console.log(i);
}

let startDate = new Date().getTime();    // engaging the main thread for 10 seconds
let endDate = startDate;
while(endDate < startDate+10000){
    endDate = new Date().getTime();
}
console.log("Hello");
