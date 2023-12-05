// let userName = prompt('Your name', 'Anouma');
// let isBunWanted = confirm('Do you want the bun');

// alert('Visitor:', userName);
// alert('Want Bun', isBunWanted);

// function checkName(username) {
//   if (username.length < 5) {
//     return "Username is too short.";
//   } else if (username.length > 15) {
//     return "Username is to longht.";
//   } else {
//     return "Username length is just right.";
//   }
// }

// console.log(checkName("John"));
// console.log(checkName("AliceJohnson"));
// console.log(checkName("Bob"));

// function calculateGrade(checkfigure) {
//   if (checkfigure >= 90) {
//     return "A";
//   } else if (checkfigure >= 80) {
//     return "B";
//   } else if (checkfigure >= 70) {
//     return "C";
//   } else if (checkfigure >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// console.log(calculateGrade(95));
// console.log(calculateGrade(82));
// console.log(calculateGrade(75));
// console.log(calculateGrade(68));
// console.log(calculateGrade(50));

// const message = "daddy want too eat";
// console.log(message.toUpperCase());

// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// let result = "Mango" || "Apple";
// console.log(result);

// const userName = prompt("Enter your name");

// let min = 10;
// let max = 20;

// let result = 0;

// for (min = -500; min <= max; min++) {
//   result = result + min;
// }

// console.log(result);

// let bablo = 1000;
// while (bablo < 10000) {
//   console.log("die");
//   bablo += 50;
// }

// const courses = ["HTML", "Css", "JavaScript", "React", "NodeJs"];
// console.table(courses);

// function myFun() {
//   let total = 0;
//   const args = Array.from(arguments);
//   const firstElem = args[0];
//   for (const hooy of args) {
//     total += hooy;
//   }

//   return total / firstElem;
// }

// myFun(5, 10, 15, 20);

//

function LogItems(items) {
  for (let i = 0; i < items.lenght; i += 1) {
    console.log(i, items[i]);
  }
}

LogItems(["a", "b", "c", "d", "i"]);
