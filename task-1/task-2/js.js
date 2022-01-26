// упр-1

let line = 'ddd@bbb@ccc';
document.write(line.replace(/@/g, "!"));

// упр-2

let upperText = 'js';
document.write(`<br>` + upperText.toUpperCase());

// упр-3

let lowerText = 'JS';
document.write(`<br>` + lowerText.toLowerCase());

// упр-4

let text = 'I am a hero!';
console.log(text.length);

// упр-5

let userCard = prompt("Введите номер вашей карты");
document.write(`<br>` + "Номер вашей карты: " + userCard.replace(userCard.slice(0, -4), "************"));