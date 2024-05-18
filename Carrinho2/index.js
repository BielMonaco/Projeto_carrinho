// projeto carrinho 

class Carrinho {    //Criar uma classe para Carrinho que vai receber Itens (em um arrray), quantidade total e valor total
  constructor(itens, qtdT, valorT){
    this.itens = itens,
    this.qtdT = qtdT,
    this.valorT = valorT
  }


  addItem(item){      //Criar um metodo que vai adcionar itens ao carrinho.
    let contador = false   //variavel para dizer se o objeto já existe

    for(let buscar in this.itens){      //Aqui é um loop que vai passar em cada item do objeto
      if(this.itens[buscar].id == item.id){  //Se o id do item dentro do obj for igual ao id do item adicionado, incrementar valores
        this.itens[buscar].qtd += item.qtd;
        this.itens[buscar].preco += item.preco;

        contador = true
      }
    }

    if(contador == false){  // se o item não existi, adicionar na lista de itens
      this.itens.push(item)
    }

    item.preco = item.qtd * item.preco;   //incrementar o preco total no item do carrinho
    this.qtdT += item.qtd;    //Quantidade total
    this.valorT +=  item.preco   //Valor total
  }


}

//Como testar

let carrinho = new Carrinho([{
  id: "01",
  nome: "Camisa",
  preco: 20,
  qtd: 1
}], 1, 20 )


carrinho.addItem({
  id: "02",
  nome: "Calça",
  preco: 50,
  qtd: 5
})



console.log(carrinho)
