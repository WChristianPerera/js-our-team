// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!



const myArr = [
    {
        name : 'Wayne Barnett',
        profession : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name : 'Angela Caroll',
        profession : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg',
    },

    {
        name : 'Walter Gordon',
        profession : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg',
    },

    {
        name : 'Angela Lopez',
        profession : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg',
    },

    {
        name : 'Scott Estrada',
        profession : 'Developer',
        img : 'scott-estrada-developer.jpg',
    },

    {
        name : 'Barbara Ramos',
        profession : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]);

let ceoManager = document.querySelector('.first').innerHTML = myArr[0].name
let chiefEdit = document.querySelector('.second').innerHTML = myArr[1].name
let officeMng = document.querySelector('.third').innerHTML = myArr[2].name
let socialMng = document.querySelector('.fourth').innerHTML = myArr[3].name
let developer = document.querySelector('.fifth').innerHTML = myArr[4].name
let graphicDesign = document.querySelector('.sixth').innerHTML = myArr[5].name