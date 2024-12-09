/*
===========================
Desafio Classificador de Nível de Heroi

Crie uma variável para armazenar o nome e a qtde de experiência(XP) de um heroi, 
depois utilize uma estritura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 22.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata Ouro
Se XP for entre 5.001 e 8.000 = Platina Diamente
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
========================================================
*/
let nomeHeroi = "SuperMan";
let xpHeroi = 1999;

let nivelHeroi = "";

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";

} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";

} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";

} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";

} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";

} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";

} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";

} else if (xpHeroi >= 10001) {
    nivelHeroi = "Radiante";
}
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

