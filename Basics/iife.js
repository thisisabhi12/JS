// Immediately Invoked Function Expression(IIFE)
 // Global scope ke pollution se problem hoti hai iss vajah se iife use hota hai

(function chai (){
    console.log(`DB Connected`);
}) ();

( function aurcode()  {
    console.log("DB connected twwo");
})()

