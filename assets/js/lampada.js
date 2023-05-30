var lamp = window.document.getElementById('image')

function ligar(){
    if(image.src.endsWith('lampadaOn.svg')){
        alert("A lâmpada já está ligada")
    }else if(image.getAttribute("src") == 'assets/images/lampadaQuebrada.svg'){
        alert("A lâmpada está quebrada")   
        image.style.paddingLeft = '5px'
    }else{
        image.src = 'assets/images/lampadaOn.svg'
        image.style.paddingLeft = '0px'
    }
}
function desligar(){
    if(lamp.src.endsWith('lampadaOff.svg')){
        alert("A lâmpada já está desligada")
    }else if(image.src.endsWith('lampadaQuebrada.svg')){
        alert("A lâmpada está quebrada") 
        image.style.paddingLeft = '5px'  
    }else{
        image.src = 'assets/images/lampadaOff.svg'
        image.style.paddingLeft = '3px'
    }
}

function quebrar(){
    if(image.src.endsWith('lampadaQuebrada.svg')){
        alert("A lâmpada já está quebrada! Não quebre mais!")
    }else{
        image.src = 'assets/images/lampadaQuebrada.svg'
        image.style.paddingLeft = '3px'
    }
}