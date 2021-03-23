// Code your solutions in this file

const names = ["Lisa", "Kaitlin", "Jan"];
const event = 'surprise'
function writeCards(names, event) {
    const newArr= [];
    for (let f = 0; f < names.length; f++) {
       newArr.push(`Thank you, ${names[f]}, for the wonderful ${event} gift!`);
    debugger;
    }
    return newArr
}

const num = 10;
function countDown() {
let num = 10; 
while (num >= 0) {
    console.log (num--);
}
}


