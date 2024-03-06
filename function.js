function addTwoNumber(numer1, numer2){
    console.log(numer1 + numer2);
}

addTwoNumber(3, "a")
 
function calculateCartPrice(val1,val2,...num1){ // Rest operator

    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username : "Abhi",
    price : 199

}

function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
handelObject(user)

const mynewarray = [200,400,600,6500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewarray));

