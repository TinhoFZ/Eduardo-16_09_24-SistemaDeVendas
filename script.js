// Preço dos produtos.
var precoSmartphone = 2499
var precoFone = 599
var precoSmartwatch = 1299
var precoTablet = 899
// Número de produtos comprados para contar múltiplos produtos iguais.
var numeroSmartphone = 0
var numeroFone= 0
var numeroSmartwatch = 0
var numeroTablet = 0
// Valor total de todos os produtos
var precoTotal = 0


function adicionarProdutoALista() {
    var produto = document.querySelector("#compra").value

        
    switch(produto){
        case "smartphone":
        case "Smartphone":
        case "SMARTPHONE":
        case "Smartphone X200":

            numeroSmartphone ++
            // Preço que certa quantidade do produto vai custar
            var precoTotalSmartphone = precoSmartphone * numeroSmartphone
            document.querySelector("#smartphonesComprados").textContent = `Você comprou ${numeroSmartphone} deste produto | Isso vai lhe custar ${precoTotalSmartphone}`

            precoTotal = precoTotal + precoSmartphone
        break;

        case "fone":
        case "Fone":
        case "FONE":
        case "Fone de Ouvido Bluetooth Pro":
    
            numeroFone ++
            var precoTotalFone = precoFone * numeroFone
            document.querySelector("#fonesComprados").textContent = `Você comprou ${numeroFone} deste produto | Isso vai lhe custar ${precoTotalFone}`
            
            precoTotal = precoTotal + precoFone
        break;

        case "smartwatch":
        case "Smartwatch":
        case "SMARTWATCH":
        case "Smartwatch Ultra 5":
    
            numeroSmartwatch ++
            var precoTotalSmartwatch = precoSmartwatch * numeroSmartwatch
            document.querySelector("#smartwatchsComprados").textContent = `Você comprou ${numeroSmartwatch} deste produto | Isso vai lhe custar ${precoTotalSmartwatch}`
    
            precoTotal = precoTotal + precoSmartwatch
        break;

        case "tablet":
        case "Tablet":
        case "TABLET":
        case "Tablet ZenPad 10":
        

            numeroTablet ++
            var precoTotalTablet = precoTablet * numeroTablet
            document.querySelector("#tabletsComprados").textContent = `Você comprou ${numeroTablet} deste produto | Isso vai lhe custar ${precoTotalTablet}`
        
            precoTotal = precoTotal + precoTablet
        break;

        default:
            document.querySelector("#erro").textContent = "Esse produto não é valido"
    }

    document.querySelector("#precoTotal").textContent = `${precoTotal}`

}