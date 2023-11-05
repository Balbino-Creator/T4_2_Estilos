window.onload = function(){
    const parrafos = document.querySelectorAll('p');
    const tamano = document.querySelector('#tamano');
    const resetear = document.querySelector('#resetear');
    const justificado = document.querySelector('#justificado');
    const izquierda = document.querySelector('#izquierda');
    const tamanoDefault = "16px";
        
    tamano.addEventListener("change", e=>{
        const valor = tamano.value;

        parrafos.forEach(parrafo => {
            parrafo.style.fontSize = valor + 'px';
        });
    });

    resetear.addEventListener("click", e=>{
        parrafos.forEach(parrafo => {
            parrafo.style.fontSize = tamanoDefault;
        });
    });

    justificado.addEventListener("click", e=> {
        parrafos.forEach(parrafo => {
            parrafo.style.textAlign = "justify";
        });
    })

    izquierda.addEventListener("click", e=>{
        parrafos.forEach(parrafo => {
            parrafo.style.textAlign = "left";
        })
    })
}
