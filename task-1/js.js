// упр-1

let firstMessage = "Hello World ";
document.write(firstMessage);
// упр-2
firstMessage = "A new message"
document.write(firstMessage);

// упр-3

let userName = "Jyldyzbek";
let userMail = "jyldyzbek.shatmanov.kk@gmail.com";
document.write(`<br>Имя пользователя: ${userName} <br> Почта пользователя: ${userMail}`);

// упр-4 

let quantitySouvenir = prompt("Cколько сувениров вы хотите?");
let souvenirWeight = 75;
let quantityToy = prompt("Cколько игрушек вы хотите?");
let toyWeight = 112;
document.write(`<br> Общий вес: 
    ${quantitySouvenir * souvenirWeight + quantityToy * toyWeight} kg / 
    ${quantitySouvenir * souvenirWeight + quantityToy * toyWeight} gr <br>`)

// упр-5

let a = Number(prompt("Введите число а"));
let b = Number(prompt("Введите число b"));

document.write("Cумма: " + (a + b) + `<br>`);
document.write("Pазница: " + (a - b) + `<br>`);
document.write("Произведение: " + (a * b) + `<br>`);
document.write("Частное от деления: " + (a / b) + `<br>`);
document.write("Остаток от деления: " + (a % b) + `<br>`);
document.write("Вtозведения в степень: " + a ** b + `<br>`);