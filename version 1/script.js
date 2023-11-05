// Ejercicio 1 b
function normal(){
    const head = document.querySelector('head');
    const existe = document.querySelector('link');
    const a1 = document.querySelector('A');
    const desaparece = document.querySelector('#desaparece');

    if(!existe){
        const css = document.createElement('link');
        css.type = 'text/css';
        css.href = 'temaNormal.css'
        css.rel = 'stylesheet';
        desaparece.style.display = "block";
        head.appendChild(css);
    }
}

function minimalista(){
    const link = document.querySelector('link');
    const desaparece = document.querySelector('#desaparece');

    if (link) {
        link.remove();
    }

    desaparece.style.display = "none";
}