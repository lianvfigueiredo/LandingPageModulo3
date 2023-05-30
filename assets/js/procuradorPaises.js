
let Procurar = document.getElementById('procurar')
Procurar.addEventListener('click', Pesquisa)

let bandeira = document.getElementById('bandeira')
let pais = document.getElementById('pais')
let capital = document.getElementById('capital')
let continente = document.getElementById('continente')
let populacao = document.getElementById('populacao')
let main = document.querySelector('main')

function Pesquisa(){
    let nome = document.getElementById('nome').value
    fetch(`https://restcountries.com/v3.1/name/${nome}?fullText=true`)
    
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        if(data.message != "Not Found"){
            main.style.display = "block"
            console.log(data)
            bandeira.src = data[0].flags.svg
            pais.innerText = data[0].name.common
            capital.innerText = data[0].capital[0]
            continente.innerText = data[0].continents[0]
            populacao.innerText = data[0].population
    }
    })
}