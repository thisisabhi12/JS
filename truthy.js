const userEmail = []

if(userEmail) {
    console.log("Got User Email");
} else {
    console.log("Dont get it");
}


// falsy value 

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy value

// "0" , 'false', " ", [], function(){}

if (userEmail.length === 0){
    console.log("Array is empty");
}