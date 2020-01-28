let userName = prompt("USERNAME");
let age = prompt('HOW OLD ARE YOU?');
// if (age > 12 && age < 22);
{
    alert('perfect age, continue')
}
// prompt('you are welcome');
// else if (age < 12 && age > 22){
//     prompt('You are not ready!')
// };
let num = 10;
let userNum = Number(prompt("Guess The Right Number..."))

while (num !== userNum) {
    userNum = Number(prompt('Sorry love, Try again'))
}
alert('Great Brainstorm, Muaaaahhh...' + num)