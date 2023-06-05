const dataCCXP = new Date("20 jul 2023")

    let quinta = document.getElementById('quinta')
    quinta.addEventListener('mouseleave', destaqueOff)
    quinta.addEventListener('mouseenter', destaque)
    let sexta = document.getElementById('sexta')
    sexta.addEventListener('mouseleave', destaqueOff)
    sexta.addEventListener('mouseenter', destaque)
    let sabado = document.getElementById('sabado')
    sabado.addEventListener('mouseleave', destaqueOff)
    sabado.addEventListener('mouseenter', destaque)
    let domingo = document.getElementById('domingo')
    domingo.addEventListener('mouseleave', destaqueOff)
    domingo.addEventListener('mouseenter', destaque)
    
    
    function destaque(){
        this.classList.add("card-ingresso-selecionado")
    }
    function destaqueOff(){

        this.style.transform = "scale(1)"
        this.classList.remove("card-ingresso-selecionado")
        this.style.transform = ""
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
    