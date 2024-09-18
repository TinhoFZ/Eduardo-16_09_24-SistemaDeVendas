// Preço dos produtos.
// Eletrônicos
var precoSmartphone = 2499
var precoFone = 599
var precoSmartwatch = 1299
var precoTablet = 899

// Eletrodomésticos
var precoLiquidificador = 249
var precoCafe = 499
var precoVentilador = 179
var precoMicroondas = 399


// Número de produtos comprados para contar múltiplos produtos iguais.
// Eletrônicos
var numeroSmartphone = 0
var numeroFone = 0
var numeroSmartwatch = 0
var numeroTablet = 0

// Eletrodomésticos
var numeroLiquidificador = 0
var numeroCafe = 0
var numeroVentilador = 0
var numeroMicroondas = 0


// Valor total de todos os produtos
var precoTotal = 0


function adicionarProdutoALista() {
    var produto = document.querySelector("#compra").value


    switch(produto){

        // eletrônicos
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


        // Eletrodomésticos
        case "liquidificador":
        case "Liquidificador":
        case "LIQUIDIFICADOR":
        case "Liquidificador TurboMix 500":
    
            numeroLiquidificador ++
            var precoTotalLiquidificador = precoLiquidificador * numeroLiquidificador
            document.querySelector("#LiquidificadoresComprados").textContent = `Você comprou ${numeroLiquidificador} deste produto | Isso vai lhe custar ${precoTotalLiquidificador}`
    
            precoTotal = precoTotal + precoLiquidificador
        break;

        case "café":
        case "Café":
        case "CAFÉ":
        case "Máquina de Café Expresso Premium:":
    
            numeroCafe ++
            var precoTotalCafe = precoCafe * numeroCafe
            document.querySelector("#cafesComprados").textContent = `Você comprou ${numeroCafe} deste produto | Isso vai lhe custar ${precoTotalCafe}`
    
            precoTotal = precoTotal + precoCafe
        break;

        case "ventilador":
        case "Ventilador":
        case "VENTILADOR":
        case "Ventilador de Coluna AirCool":
        
            numeroVentilador ++
            var precoTotalVentilador = precoVentilador * numeroVentilador
            document.querySelector("#ventiladoresComprados").textContent = `Você comprou ${numeroVentilador} deste produto | Isso vai lhe custar ${precoTotalVentilador}`
        
            precoTotal = precoTotal + precoVentilador
        break;

        case "microondas":
        case "Microondas":
        case "MICROONDAS":
        case "Micro-ondas Compacto 25L":
            
            numeroMicroondas ++
            var precoTotalMicroondas = precoMicroondas * numeroMicroondas
            document.querySelector("#microondasComprados").textContent = `Você comprou ${numeroMicroondas} deste produto | Isso vai lhe custar ${precoTotalMicroondas}`
            
            precoTotal = precoTotal + precoMicroondas
        break;

        default:
            document.querySelector("#erro").textContent = "Esse produto não é valido"
    }

    document.querySelector("#precoTotal").textContent = `${precoTotal}`

}
