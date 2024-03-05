// obj using a singleton

//const user = new Object() // singleton obj

const user = {}

user.id = "123"
user.name="Abhi"
user.isloggedIn= false

const regularuser = {

    email : "user@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Abhi",
            lastname : "Shah"
        }
    }
}
 // console.log(user) // obj

//console.log(regularuser.fullname);


const o1 = {1:"a", 2: "b"}
const o2=  {3:"w", 4:"c"}
const o3=  {5:"e", 6: "r"}

// const obj3 = Object.assign({},o1,o2,o3)

// console.log(obj3)

//const obj3 = {...o1,...o2}
//console.log(obj3);

const users = [
    {
        id :1,
        email: "a@gmail.com"
    },
    {   
        id :2,
        email: "d@gmail.com"
    }

]

let user2Email=users[1].email
console.log(user2Email);


console.log(Object.keys(users));