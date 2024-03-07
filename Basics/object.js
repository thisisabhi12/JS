// obj literal

const mySym = Symbol("key1")

const juser = {
    name: "abhi",
    age: 21,
    location: "vadodara",
    [mySym]:  "mykey1",
    email : "abhishekgalfade@google.com",
    isLoggedIN: false,
    lastLoginDays : ["Monday","Tuesdays","Wednesday","Thursday","Friday","Saturday","Sunday"]
}

console.log(juser["email"])
console.log(juser.name)
console.log(juser.location)
console.log(juser.isLoggedIN)
console.log(juser.lastLoginDays)
console.log(juser[mySym])

juser.email = "abhishek@chatgpt.com"
Object.freeze(juser)
juser.email = "abhishek@chatgp.com"
console.log(juser)