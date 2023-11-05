document.addEventListener('DOMContentLoaded', function() {
    normal();
});

function normal(){
    const desaparece = document.querySelector('#desaparece');
    desaparece.style.display = "block";

    const todos = document.querySelectorAll('*');
    todos.forEach(elemento => {
        elemento.style.margin = '0';
        elemento.style.padding = '0';
        elemento.style.boxSizing = 'border-box';
    });

    const html = document.querySelector('html');
    html.style.height = '100%';

    const body = document.querySelector('body');
    body.style.display = 'flex';
    body.style.height = '100%';

    const principal = document.querySelector('.principal');
    principal.style.height = '100%';
    principal.style.width = '100%';
    principal.style.backgroundColor = 'beige';
    principal.style.paddingLeft = '30px';
    principal.style.paddingRight = '200px';

    const aside = document.querySelector('aside');
    aside.style.backgroundColor = 'aqua';
    aside.style.width = '300px';

    const header = document.querySelector('header');
    header.style.backgroundColor = 'azure';
    header.style.marginTop = '15px';
    header.style.padding = '7.5px';
    header.style.border = '1px black solid';

    const a = document.querySelectorAll('a');
    a.forEach(enlace => {
        enlace.style.textDecoration = 'none';
        enlace.style.fontWeight = 'bold';
    });

    const h1 = document.querySelectorAll('h1');
    h1.forEach(encabezado => {
        encabezado.style.margin = '30px 0';
    });

    const p = document.querySelectorAll('p');
    p.forEach(parrafo => {
        parrafo.style.marginBottom = '25px';
    });

    const mainDiv = document.querySelectorAll('main div');
    mainDiv.forEach(div => {
        div.style.padding = '10px';
        div.style.backgroundColor = 'yellow';
        div.style.border = '1px black solid';
    });
}

function minimalista() {
    const todos = document.querySelectorAll('*');
    todos.forEach(elemento => {
        elemento.style = '';
    });

    const html = document.querySelector('html');
    html.style = '';

    const body = document.querySelector('body');
    body.style = '';

    const principal = document.querySelector('.principal');
    principal.style = '';

    const aside = document.querySelector('aside');
    aside.style = '';

    const header = document.querySelector('header');
    header.style = '';

    const a = document.querySelectorAll('a');
    a.forEach(enlace => {
        enlace.style = '';
    });

    const h1 = document.querySelectorAll('h1');
    h1.forEach(encabezado => {
        encabezado.style = '';
    });

    const p = document.querySelectorAll('p');
    p.forEach(parrafo => {
        parrafo.style = '';
    });

    const mainDiv = document.querySelectorAll('main div');
    mainDiv.forEach(div => {
        div.style = '';
    });

    const desaparece = document.querySelector('#desaparece');
    desaparece.style.display = "none";
}