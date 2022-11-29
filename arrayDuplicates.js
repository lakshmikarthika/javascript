// Remove duplicates without using built-in


let dummyArr = [223,453, 564,567,223,678,564,453];

let clone = [];

function unique(newArr,currentEle){
    for(var i=0;i<newArr.length;i++){
        if(newArr[i] == currentEle){
            return true;
        }
    }
    return false;
}
for(var i=0; i<dummyArr.length;i++){
    if(unique(clone,dummyArr[i])){
        continue;
    }
    else{
        clone.push(dummyArr[i]);
    }
}
console.log(clone)



// Remove duplicates using built-in

let dummyArr = [223,453, 564,567,223,678,564,453,564,223,678,1];

let clone = [];

for(var i=0;i<dummyArr.length;i++){
    if(clone.includes(dummyArr[i])){
        continue;
    }
    else{
        clone.push(dummyArr[i])
    }
}
console.log(clone)
