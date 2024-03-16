
const Wilder = require (`./informations`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `My name is ${Wilder.nom} and I study in ${Wilder.campus}`
}));
