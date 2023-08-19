let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumber(n) {
if(Number(n) >= 1 && Number(n) <= 100 ) {
    return true
} else {
    return false
}
}



function inlista(n, i) {
    if(i.indexOf(Number(n)) != -1) {
        return true
    }  else {
        return false
    }
}


function adicionar() {
    if(isnumber(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    } num.value = ''
    num.focus()
}
   
  
   function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicionar valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
           menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<P>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<P>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<P> Media dos valores digitados é ${media}.</p>`
    }

   }

         


