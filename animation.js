function animate(obj, initVal, lastVal, duration) {

    let startTime = null;

    //pegue o registro de tempo atual e atribua el3 para a variável de tempo atual

    let currentTime = Date.now();

    //passe o registro de tempo atual para a "step function"
    
const step = (currentTime ) => {

    //Se o tempo de início é nulo, atribua o valor do tempo atual para "startTime"

        if (!startTime) {
            startTime = currentTime ;
        }

    //Calcule o valor que vai ser utilizado no cálculo de número que vai ser exibido

    const progress = Math.min((currentTime - startTime) / duration, 1);

    //calcule o valor que deve ser exibido utilizando o valor obtido acima

    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    //Verificando para garantir que o contador não excede o último valor (lastVal)

    if (progress < 1) {
        window.requestAnimationFrame(step);
    }
};
//iniciando a animação
window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');

const load = () =>{
animate(text1, 0, 10, 900);
animate(text2, 0, 314, 900);
animate(text3, 0, 12, 900);
}