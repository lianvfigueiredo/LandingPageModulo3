class Produto{

    constructor(Id, Nome, Valor){
        this.Id = Id
        this.Nome = Nome
        this.Valor = Valor
        this.ArrayProdutos = []
    }
    getId(){
        return this.Id
    }
    getNome(){
        return this.Nome
    }
    getValor(){
        return this.Valor
    }

    Adicionar(){
        let produto = this.lerDados()      
        if(this.Validar(produto)){
            this.salvar(produto)
            this.listar()
            this.cancelar()    
        }        
    }
    
    salvar(obj){
        let produto = new Produto(obj.Id, obj.NomeProduto, obj.PrecoProduto)
        this.ArrayProdutos.push(produto)
        i++ 
    }

    lerDados(){
        let ndp = document.getElementById("nome_produto").value
        let vdp = document.getElementById("valor_produto").value   
            
        let produto = []
        produto.Id = i
        produto.NomeProduto = ndp
        produto.PrecoProduto = vdp
        return produto   
    }

    Validar(produto){
        let str = ""
        produto.NomeProduto == "" ? str += "Informe o nome do produto\n" : null
        produto.PrecoProduto == "" ? str += "Informe o valor do produto": null
        if(str == ""){
            return true
        }else{
            alert(str)
            return false
        }
    }

    cancelar(){
        document.getElementById("nome_produto").value = ""
        document.getElementById("valor_produto").value = ""
    }

    toString(){
        let str = `Id = ${this.Id}, Nome = ${this.NomeProduto}, Preço = ${this.PrecoProduto}`
        console.log(str)
    }

    listar(){
        let l = document.getElementsByClassName("product")
        for(let j = l.length-1; j >= 0; j--){
            l[j].parentNode.removeChild(l[j])
        }
    
        for(let j = 0; j < this.ArrayProdutos.length; j++){
            let tr = tableBody.insertRow()
            tr.classList.add("table2", "product")

            let td_Id = tr.insertCell()
            let td_Nome = tr.insertCell()
            let td_Valor = tr.insertCell()
            let td_Del = tr.insertCell()

            td_Id.innerText = this.ArrayProdutos[j].getId()+1
            td_Nome.innerText = this.ArrayProdutos[j].getNome()
            td_Valor.innerText = this.ArrayProdutos[j].getValor()
            td_Del.innerHTML = `<img src="assets/images/lixeira.png" class="img" id="${j}">`
            td_Del.classList.add("p_img")

            let remove = document.getElementsByClassName("img")[`${j}`]
            remove.addEventListener("click", produto.remover)
        }   
    }

    remover(){
        produto.ArrayProdutos.splice(this.getAttribute("id"), 1)
        produto.listar()
    }
    
}

let i = 0
let produto = new Produto();
let add = document.getElementById("adicionar")
add.addEventListener("click", produto.Adicionar.bind(produto))

let cancel = document.getElementById("cancelar")
cancel.addEventListener("click", produto.cancelar)