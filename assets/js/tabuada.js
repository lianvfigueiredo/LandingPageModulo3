function calcular(a, b){
    // // var d = a*b
    // var c = 'O resultado é ' + (a*b)
    // document.querySelector("#result").textContent = 'A tabuada do ' + a + ' é:'
    if(b == '' || a == ''){
        alert("[ERRO] Confira os dados!")
    }else{
        result.innerHTML = 'A tabuada do ' + a + ' é: <br>';
        for(let i = 0; i <= b; i++){
            let x = a * i;
            // result.innerHTML += i + ' X ' + a + ' = ' + x + '<br>'
            // result.innerHTML += `${i} X ${a} = ${x}<br>`
            result.innerHTML += i + " X " + a + " = " + x + "<br>"
        }
    }
}