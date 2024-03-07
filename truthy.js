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


// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = null ?? 10 ?? 20
 console.log(val1);


 // Treniry Operator

 //condition ? true : false

 const iceTeaprice = 100;

 iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80");;



