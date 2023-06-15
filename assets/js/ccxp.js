const dataCCXP = new Date("20 jul 2023")

    document.addEventListener('keydown', selectedKey)
    document.getElementById("comprar").addEventListener('click', comprar)
    let ingressos = Array.from(document.querySelectorAll('.ingresso'))
    let checks = Array.from(document.querySelectorAll('.check'))
    let ingressosImg = Array.from(document.querySelectorAll('.ingressoimg'))

    ingressos.forEach( (ingresso) => {
        ingresso.addEventListener('mouseout', destaqueOff)
        ingresso.addEventListener('mouseover', destaque)
        ingresso.addEventListener('click', selectIngresso)}
    )
    
    function destaque(){
        this.classList.contains("card-ingresso-selecionado") ? null : this.classList.toggle("card-ingresso-selecionado")
    }  
    function destaqueOff(){
        this.classList.contains("card-ingresso-selecionado") ? this.classList.toggle("card-ingresso-selecionado") : null
    }  
    function remove(numero){
        ingressos.forEach( (ingresso) => {
            if(ingresso.classList.contains("card-ingresso-selecionado") && ingresso != ingressos[numero]){
                ingresso.classList.toggle("card-ingresso-selecionado")
            }
        })
    }

    setInterval(destacando, 3000)
    
    function destacando(){     
        // k == ingressos.length ? k = 0 : null
        for(let k = 0; k< ingressos.length; k++ ){
            ingressos[k].classList.toggle("card-ingresso-selecionado")
            setTimeout( () => {
                ingressos[k].classList.toggle("card-ingresso-selecionado")
                // k++
            }, 2000)
        }

    }
    
    function selectedKey(event){
        if(event.key == 'Enter'){
            ingressos.forEach( (ingresso) => {
                ingresso.classList.contains("card-ingresso-selecionado") ? selectIngresso.call(ingresso) : null

            })
        }
        let numero = event.key - 1
        if(numero >= 0 && numero <= 3){        
            ingressos[numero].classList.toggle("card-ingresso-selecionado")
            remove(numero)  
        }
    }
    
    function selectIngresso(){
        let numero = ingressos.indexOf(this)
        checks[numero].classList.toggle("display")
    }

    function comprar(){
        let compra = document.getElementById("diasComprados")
        compra.innerText = ""
        checks.forEach( (element) => {
            if(!element.classList.contains("display")){
                compra.innerHTML += `${ingressosImg[checks.indexOf(element)].id} <br>`
                // console.log(ingressos[0].valueOf("id"))
            }
        })
        compra.innerText == "" ? document.getElementById("texto").classList.add("display") : document.getElementById("texto").classList.remove("display")
    }

    function countdown(){
        const dataAtual = new Date()
        let diferenca = dataCCXP - dataAtual
        let dias = Math.floor(diferenca/1000/60/60/24)
        let horas = Math.floor(diferenca/1000/60/60 % 24)
        let minutos = Math.floor(diferenca/1000/60 % 60)
        let segundos = Math.floor((diferenca)/1000 % 60)

        document.getElementById('dias').innerText = formatoTempo(dias, 'D')
        document.getElementById('horas').innerText = formatoTempo(horas, 'H')
        document.getElementById('minutos').innerText = formatoTempo(minutos, 'M')
        document.getElementById('segundos').innerText = formatoTempo(segundos, 'S')
    }
    setInterval(countdown, 1000)

    function formatoTempo(tempo, letra){
        let a = '0'
        if(tempo < 10){
            tempo += letra
            a += tempo
            return a
        }
        tempo += letra
        return tempo
        
    }
    