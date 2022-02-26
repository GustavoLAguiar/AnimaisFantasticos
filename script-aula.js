// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copyright = document.querySelector('.copyright');
const cloneMenu = menu.cloneNode(true);

copyright.appendChild(cloneMenu);

console.log(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('dl');
primeiroDt = dl.children[0];

console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
primeiroDd = dl.children[1];

console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');

faq.innerHTML = animais.innerHTML;
