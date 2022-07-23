//string methods

console.log("TASK-2");


var text="Hello friend I am your friend";
console.log("The Length of the String is "+text.length);
console.log("Slicing Method : "+text.slice(0,6));
console.log("Replacing Method : "+text.replace("friend","enemy"));
console.log("Substring Method : "+text.substring(14,22));
console.log("substr Method : "+text.substr(22,30));
console.log("toUpperCase Method : "+text.toUpperCase());
console.log("toLowercase Method : "+text.toLowerCase());
console.log("Concat Method : "+text.concat("How are you !"));
console.log("Trim Method : "+text.trim());



var number = "1230";
console.log("Number Method : "+Number(number));
var number = 123012.1230;

console.log("toString Method : "+number.toString());

console.log("toFixed Method : "+number.toFixed(2));

console.log("toExponential Method : "+number.toExponential(6));

console.log("valueOf Method : "+number.valueOf(3));

console.log("toPrecision Method : "+number.toPrecision(10));


console.log("TASK-2");


const gang1 = ['pradeep','vignesh','babu','kishore','yuvaraj','singaraj'];
console.log("Array : "+gang1);
console.log("First Element : "+gang1[0]);
console.log("Second Element : "+gang1[1]);
console.log("Third Element : "+gang1[2]);
console.log("Fourth Element : "+gang1[3]);
console.log("Fifth Element : "+gang1[4]);
console.log("Sixth Element : "+gang1[5]);
console.log("Joined Array : "+gang1.join(" and "));
console.log("Push Method : "+gang1.push("inbathamizan"));
console.log(gang1);




var obj = {
    name:"V.Vignesh",
    rollno:1230,
    distric:"Trichy",
    state:"Tamil Nadu",
    country:"India"
};

console.log("Object : "+obj);
console.log("Name : "+obj.name);
console.log("Roll No : "+obj.rollno);
console.log("Distric : "+obj.distric);
console.log("State : "+obj.state);
console.log("Country : "+obj.country)