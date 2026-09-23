let firstName="Jenis"
let lastName="Kinyua"
let email="jeniskinyua@example.com"
let phoneNumber="254705249226"
let adress="Nairobi, Kenya"
let password="securePassword123"

let typedemail="jeniskinyua@example.com"
let typedpassword="securePassword123"

function login(){
    if (email === typedemail){

     if (password === typedpassword){
        console.log("Proceed to homepage");
    } else {
             console.log("Password is incorrect");
             }
     } else {
             console.log("Email is incorrect")
     }
}
login();//calling the function

//Arrays
var studentNames=["John", "Jane", "Bob", "Alice", "Tom"];

//add item to array
studentNames.push("Jerry");
console.log(studentNames);

//get item from array
let student =studentNames[2];//index
let message=`Hi ${student}`;//string interpolation
let message2="Hi " + student;//string concatenation

console.log(message);
console.log(message2);

let scores=[90, 85, 78, 92, 88];
console.log(scores);

//objects
let student1 = {
    firstName: "Jenis",
    lastName: "Kinyua",
    email: "jeniskinyua@example.com",
    phoneNumber: "254705249226",
    address: "Nairobi, Kenya",
    password: "securePassword123",
    score: 90
}
//get item in object, using dot and key
let student1Name=student1.firstName+ ' ' +student1.lastName;
console.log(student1Name);