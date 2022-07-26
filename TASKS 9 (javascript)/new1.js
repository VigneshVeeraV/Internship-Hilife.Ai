//String Methods in Javascript
var text="Hello world in Javascript";
console.log("The Length of the String is "+text.length);
console.log("Slicing Method : "+text.slice(0,6));
console.log("Replacing Method : "+text.replace("Javascript","JS"));
console.log("Substring Method : "+text.substring(6,11));
console.log("substr Method : "+text.substr(15,10));
console.log("toUpperCase Method : "+text.toUpperCase());
console.log("toLowercase Method : "+text.toLowerCase());
console.log("Concat Method : "+text.concat("Programming Language !"));
console.log("Trim Method : "+text.trim());

//Number Methods in Javascript

var number = "1000";
console.log("Number Method : "+Number(number));
var number = 572005.9999;
//coverts the number to String
console.log("toString Method : "+number.toString());
// value given in this method decides how many number need to put after the decimal point
console.log("toFixed Method : "+number.toFixed(2));
//value given here put the value times number before the e symbol
console.log("toExponential Method : "+number.toExponential(6));
// this method returns the number as the number
console.log("valueOf Method : "+number.valueOf(3));
//this fuction is used to give the length of the number
console.log("toPrecision Method : "+number.toPrecision(10));

console.log("TASK-2");
//Array

const fruits = ['apple','orange','mango','banana','pineapple','watermelon'];
console.log("Array : "+fruits);
console.log("First Element : "+fruits[0]);
console.log("Second Element : "+fruits[1]);
console.log("Third Element : "+fruits[2]);
console.log("Fourth Element : "+fruits[3]);
console.log("Fifth Element : "+fruits[4]);
console.log("Sixth Element : "+fruits[5]);
console.log("Joined Array : "+fruits.join(" and "));
console.log("Push Method : "+fruits.push("strawberry"));


//Objects

var obj = {
    name:"G.Vignesh",
    rollno:"2005",
    city:"Trichy",
    state:"Tamil Nadu",
    country:"India"
}

console.log("Object : "+obj);
console.log("Name : "+obj.name);
console.log("Roll No : "+obj.rolno);
console.log("City : "+obj.city);
console.log("State : "+obj.state);
console.log("Country : "+obj.country)