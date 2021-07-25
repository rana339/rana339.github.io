// // queation 1
// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "10", quantity: "2", }
// ];
// console.log(itemsArray[0].price*itemsArray[0].quantity)
// console.log(itemsArray[1].price * itemsArray[1].quantity)
// console.log(itemsArray[2].price * itemsArray[2].quantity)
// console.log(itemsArray[3].price * itemsArray[3].quantity)
// // question 2
// var item = {
//     name : "rewrewr",
//     email: "adfasfs",
//     pasword: "fffsf",
//     age: "age",
// };
// if ("name" in item === true) {
//     console.log(" yes")
// }
// else{console.log("nothing")}
// if ("email" in item === true) {console.log ("u are") }
// else { console.log("u win ")}

// // question 3

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const person = new Person("John Doe", 23);

// console.log(person.name,person.age); 

// question 4
function User(Name, Gender, Address, Education, Profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}
function usersubmit() {
    var userName = document.getElementById("Name").value
    var userGender = "";
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    if (male.checked == true) {
        userGender = male
    } else if (female.checked == true) {
        userGender = female
    }
    var userAddress = document.getElementById("Address").value
    var userEducation = document.getElementById("Education").value
    var userProfession = document.getElementById("Professtion").value


    // var arr = []
    var myuser2 = new User(userName, userGender, userAddress, userEducation, userProfession);
    // arr.push(myuser2);
    console.log(myuser2)
}




















