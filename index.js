// let count=0;
// console.log(count);

// let myAge= 21;
// console.log(myAge);
// let humanDogRatio=7;
// let myDogAge= myAge*humanDogRatio
// console.log(myDogAge)


// function Number(a){
//     console.log(a)
// }
// Number(21)
// Number(43)
// Number(100)

// let lap1=34
// let lap2=55
// let lap3=33

// function sum() {
//     console.log(lap1+lap2+lap3)
// }

// sum()


// let lapCompleted= 0

// function increase() {
//     lapCompleted++
// }

// increase()
// increase()
// increase()
// console.log(`the laps completed are ${lapCompleted}`)
// console.log('he laps completed are'. lapCompleted + 'congratulations')
let countEl = document.getElementById("count-el")
let count=0

function increment() {
    count++
    countEl.innerText= count
}


// let welcomeEl= document.getElementById("welcome-el")

// let na= "Chanchal"
// let greeting= "Hello There! Hope you have a nice day "

// welcomeEl.innerText = greeting + na

let saveEl = document.getElementById("save-el")

function save() {
    saveEl.textContent += (" - " + count)
    count=0
    countEl.textContent= count
} 