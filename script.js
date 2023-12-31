const dinosauri = [
    { nome: "Tyrannosaurus Rex", indizi: ["Carnivoro bipede", "Viveva nel Cretaceo", "Cresta ossea sulla testa"] },
    { nome: "Velociraptor", indizi: ["Carnivoro bipede", "Viveva nel Cretaceo", "Noti per la velocità e gli artigli"] },
    { nome: "Triceratops", indizi: ["Erbivoro quadrupede", "Viveva nel Cretaceo", "Tre corna sul cranio"] },
    { nome: "Plesiosaurus", indizi: ["Piscivoro acquatico", "Viveva nel Giurassico", "Lungo collo e corpo"] },
    { nome: "Stegosaurus", indizi: ["Erbivoro quadrupede", "Viveva nel Giurassico", "Piastre ossee sulla schiena e lunghe spine sulla coda"] },
    { nome: "Pteranodon", indizi: ["Volante", "Viveva nel Cretaceo", "Enorme apertura alare"] },
    { nome: "Brontosaurus", indizi: ["Erbivoro quadrupede", "Viveva nel Giurassico", "Lungo collo e coda"] },
    { nome: "Allosaurus", indizi: ["Carnivoro bipede", "Viveva nel Giurassico", "Testa grande e braccia corte"] },
    { nome: "Ankylosaurus", indizi: ["Erbivoro quadrupede", "Viveva nel Cretaceo", "Corazza di piastre ossee e una mazza sulla coda"] },
    { nome: "Parasaurolophus", indizi: ["Erbivoro bipede", "Viveva nel Cretaceo", "Cresta a forma di tubo sulla testa"] },
    { nome: "Spinosaurus", indizi: ["Carnivoro semiacquatico", "Viveva nel Cretaceo", "Lungo muso simile a quello di un pesce"] },
];

let indiceCorrente = 0;
let dinosauroCorrente = dinosauri[indiceCorrente];

document.getElementById("hint").textContent = dinosauroCorrente.indizi[0];

function controllaIndovinello() {
    const selezionato = document.getElementById("dinosaurSelector");
    const indovinelloUtente = dinosauri[selezionato.value].nome.toLowerCase();

    if (indovinelloUtente === dinosauroCorrente.nome.toLowerCase()) {

        let stampaImg = `<img src="Immagine_contenta.jpg">`;
        document.getElementById("risultato").innerHTML = stampaImg;
    } else {
        let stampaImg = `<img src="Immagine_scontenta.jpg"> `
        document.getElementById("risultato").innerHTML = stampaImg;
    }
}


function nuovoDinosauro() {
    indiceCorrente = (indiceCorrente + 1) % dinosauri.length;
    dinosauroCorrente = dinosauri[indiceCorrente];

    // Seleziona un suggerimento casuale
    const indizioCasualeIndex = Math.floor(Math.random() * dinosauroCorrente.indizi.length);
    const indizioCasuale = dinosauroCorrente.indizi[indizioCasualeIndex];

    document.getElementById("hint").textContent = indizioCasuale;
    document.getElementById("risultato").textContent = "";
    document.getElementById("guessInput").value = "";
}


function popolaSelettore() {
    const selettore = document.getElementById("dinosaurSelector");

    for (let i = 0; i < dinosauri.length; i++) {
        const dinosauro = dinosauri[i];
        const opzione = document.createElement("option");
        opzione.value = i;
        opzione.textContent = dinosauro.nome;
        selettore.appendChild(opzione);
    }
}


popolaSelettore();

function selezionaDinosauro() {
    indiceCorrente = document.getElementById("dinosaurSelector").value;
    dinosauroCorrente = dinosauri[indiceCorrente];
    document.getElementById("hint").textContent = dinosauroCorrente.indizi[0];
    document.getElementById("risultato").textContent = "";
    document.getElementById("guessInput").value = "";
}