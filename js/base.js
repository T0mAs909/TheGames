console.log("Usando JavaScript");

const heroi = "Thor";
let forca = 95;
let velocidade = 78;
let vilao = false;
console.log(heroi, forca, velocidade, vilao);

forca = 60;
//heroi = "Batman"
console.log(heroi, forca, velocidade, vilao);

forca = 95;
console.log(forca);

const herois = ["Batman", "Superman", "Capitão América", "Homem-Aranha", "Sonic", "Mulher Maravilha"];
console.log(herois);
console.log(herois[1]);
console.log(herois[3]);
console.log(herois[10]);

const objetoHeroi = {
    nome: "Homem de Ferro",
    forca: 75,
    velocidade: 90,
    inteligencia: 99,
    voar: true
}
console.log(objetoHeroi);
console.table(objetoHeroi);
console.log(objetoHeroi.nome);

document.getElementById("nomeHeroi").textContent = `Herói: ${objetoHeroi.nome}`;
document.getElementById("forcaHeroi").textContent = `Força: ${objetoHeroi.forca}`;
document.getElementById("velocidadeHeroi").textContent = `Velocidade: ${objetoHeroi.velocidade}`;
document.getElementById("inteligenciaHeroi").textContent = `Inteligência: ${objetoHeroi.inteligencia}`
document.getElementById("voarHeroi").textContent = `Pode voar: ${objetoHeroi.voar}`;