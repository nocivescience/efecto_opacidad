const objectEl=document.querySelector('.object');
let contador=1;
setInterval(() => {
    contador-=.01
    if(contador<.1){
        contador=1
    }
    objectEl.style.opacity=contador;
}, 100);