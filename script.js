// Ejercicio 1 b
function changeStyle(){
    let _head = document.getElementsByTagName('head')[0];
    let _link = document.createElement('link');
    let _a1 = document.getElementsByTagName('a')[0];
    let _a2 = document.getElementsByTagName('a')[1];

    _link.type = 'text/css';

    _link.href = 

    _link.rel = 'stylesheet';

    _head.appendChild(_link);
}