// Push Front
arr = [2,3,4]
pushednum = 1

function pushfront(arr,pushednum){
    for(var i = arr.length - 1; i >= 0; i--){
        arr[ i + 1] = arr[i];

    }
    arr[0] = pushednum;
    return arr
};

console.log(pushfront(arr,pushednum))

// Pop Front

popArr = [1,2,3,4]

function popFront(popArr){
    returnNum = popArr[0];
    for(var i = 1; i < popArr.length ; i++){
        popArr[i] = popArr[i + 1];
    }
    popArr[popArr.length - 1] = returnNum;
    return popArr.pop()
}
console.log(popFront(popArr))


// Insert At

insertArr = [2,3,4]

let len = insertArr.length
function insertFunc(arr,num,idx){
    for(var i = len ; i > idx; i--){
        arr[i] = arr[i - 1];

    }
    arr[idx] = num
    return arr
};
console.log(insertFunc(insertArr,1.5,1))




