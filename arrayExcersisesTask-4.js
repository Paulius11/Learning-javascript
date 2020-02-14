"use strict"


var languages = ["java", "javascript", "python", "C#", "cobalt"]

console.log("\n1.1 Using loop, iterate through this array");
for (let index = 0; index < languages.length; index++) {
    const element = languages[index];
    console.log(element);
}

languages.forEach(x => console.log(x))

console.log("\n1.2. Write the command to remove first element");
languages.filter(v => v != "cobalt").forEach(x => console.log(x))
console.log(languages)
languages.pop()
console.log(languages)

console.log("\n1.3. Write the command to remove last element");
console.log(languages)
languages.shift()
console.log(languages)

console.log("\n1.4 Write command to add 'Kotlin' front of array")
languages.unshift("Kotlin")
console.log(languages)

console.log("\n1.5 Write command to add 'Julia' to end of array.")
languages.push("Julia")
console.log(languages)

console.log("\n1.6 Using a loop, itterate through this array and after console-loging 'python' exit loop ");
for (let index = 0; index < languages.length; index++) {
    const element = languages[index];
    console.log(element);
    if (element == "python")
        break;

}
console.log("\n1.7 Write the command to make copy of the array using slice. The copy shold NOT inclute 'javascript' and 'cotlin;");
console.log(languages);
console.log(languages.slice(2));

console.log("\n1.8 Write the command that give the indexOf Where 'python' is located");
console.log(languages.indexOf("python"));

console.log("\n1.9 Write the command that give the indexOf 'python2' is located");
console.log(languages.indexOf("python2"));

console.log("\n1.10 Using splice command remove python and add java");
languages.splice(2, 1, "java")
console.log(languages);

console.log("\n1.11 Create new variable called and set it equal to `languages` array concatenated with the string");
console.log(languages + ",Go");

console.log("\n2.1 Using map() multiply all array elements by 10");
let tenElArray = [...Array(10).keys()]
console.log(tenElArray.map(x => x * 10));

console.log("\n2.2 Using map() square all elements");
console.log(tenElArray.map(x => Math.pow(x, 2)));

console.log("\n3. Duotas objektų masyvas");
console.log("Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll")

let persons = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }]

function namesOnly(arr) {
    arr.map(x => console.log(x.name))
}
console.log(namesOnly(persons));

console.log("\n3.2. Parašykite funkciją, kuri sukurtų masyvą, kuriame būtų asmens vardas ir atsakymas ar gali eiti į filmą “Matrica” U18.");

function isAbleToGoToMovie(arr) {
    arr.forEach(x => {
        if(x.age > 18)
            console.log(`${x.name} can go do The Matrix`);
        else
            console.log(`${x.name} is under age!!`);
    })
}
isAbleToGoToMovie(persons)

console.log("3.3. Parašykite vardus žymėse <h1>, o amžius žymėse <h2> ir išveskite į interneto puslapį.");


// let h = document.createElement("H1")
// let t = document.createTextNode("Hello World")
// h.appendChild(t);