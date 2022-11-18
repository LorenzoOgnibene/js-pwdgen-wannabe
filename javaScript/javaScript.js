
const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('Inserisci il tuo cognome');
const favouriteColor = prompt ('Inserisci il tuo colore preferito');

console.log(userName);
console.log(userSurname);
console.log(favouriteColor);

document.getElementById('pwdgen').innerHTML = 'You can use this password:' + " " + userName + userSurname + favouriteColor + '22';