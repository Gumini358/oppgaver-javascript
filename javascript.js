console.log("Hello, JavaScript!");
let navn = "Gumini";
console.log("Mitt navn er " + navn);
let alder = 49;
console.log("Jeg er " + alder + " år gammel.");
const erStudent = true;
console.log("Er jeg student? " + erStudent);
const biler = ["Toyota", "Honda", "Ford"];
console.log(biler[0]);
let tall = 10;
let tall2 = 5;
let sum = tall + tall2;
console.log("Summen av tallene er " + sum);
let differanse = tall - tall2;
console.log("Differansen av tallene er " + differanse);
let produkt = tall * tall2;

console.log("Produktet er: " + produkt);

let divisjon = tall/ tall2;

console.log("Divisjonen er: " + divisjon);

// Øke tallet med 1

let poeng = 10;

poeng++;

console.log("Poeng: " + poeng);
poeng--;
console.log("Poeng etter å ha redusert med 1: " + poeng);

poeng += 5;
console.log("Poeng etter økning med 5: " + poeng);

poeng -= 3;
console.log("Poeng etter reduksjon med 3: " + poeng);

poeng *= 2;
console.log("Poeng etter å ha doblet: " + poeng);

poeng /= 4;
console.log("Poeng etter å ha delt på 4: " + poeng);


// Oppgave 4 - IF / ELSE

let userName = "Gumini";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
    userIsLoggedIn = true;
    goToPage = "/home";
    console.log("Velkommen, " + userName + "!");
} else {
    console.log("Feil: Innlogging mislyktes!");
}

console.log("Redirecting to: " + goToPage);

// Oppgave 5 - Ternary operator

const userMale = false;
const userTitle = userMale ? "Mr." : "Mrs.";
console.log("Brukertittel: " + userTitle);



