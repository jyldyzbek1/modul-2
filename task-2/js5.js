// упр-5

let userCard = prompt("Введите номер вашей карты");
document.write(`<br>` + "Номер вашей карты: " + userCard.replace(userCard.slice(0, -4), "************"));