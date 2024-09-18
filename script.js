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

// Roupas e acessórios
var precoCamisa = 89
var precoCalca = 159
var precoTenis = 299
var precoJaqueta = 499

// Beleza e cuidados pessoais
var precoPerfume = 199
var precoHidratante = 129
var precoMaquiagem = 299
var precoEscova = 169

// Casa e decoração
var precoToalha = 149
var precoAbajur = 99
var precoQuadro = 179
var precoAlmofada = 89

// Brinquedos e Jogos
var precoCarrinho = 149
var precoQuebracabeca = 79
var precoBoneca = 199
var precoJogo = 129

// Livros e mídia
var precoLivro = 59
var precoDVD = 129
var precoCD = 39
var precoEbook = 49

// Alimentos e bebidas
var precoFruta =  89
var precoVinho = 149
var precoChocolate = 79
var precoAzeite = 59

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

// Roupas e acessórios
var numeroCamisa = 0
var numeroCalca = 0
var numeroTenis = 0
var numeroJaqueta = 0

// Beleza e cuidados pessoais
var numeroPerfume = 0
var numeroHidratante = 0
var numeroMaquiagem = 0
var numeroEscova = 0

// Casa e decoração
var numeroToalha = 0
var numeroAbajur = 0
var numeroQuadro = 0
var numeroAlmofada = 0

// Brinquedos e Jogos
var numeroCarrinho = 0
var numeroQuebracabeca = 0
var numeroBoneca = 0
var numeroJogo = 0

// Livros e mídia
var numeroLivro = 0
var numeroDVD = 0
var numeroCD = 0
var numeroEbook = 0

// Alimentos e bebidas
var numeroFruta = 0
var numeroVinho = 0
var numeroChocolate = 0
var numeroAzeite = 0

// Valores não relacionados a produtos
var precoTotal = 0
var dinheiroCliente = 0
var troco = dinheiroCliente - precoTotal

function adicionarDinheiroDoCliente() {
    dinheiroCliente = document.querySelector("#escreverDinheiroDoCliente").value
    dinheiroCliente = dinheiroCliente - precoTotal
    document.querySelector("#dinheiroDoCliente").textContent = `Voce têm ${dinheiroCliente} para gastar`

    if(troco > 0) {
        document.querySelector("#troco").innerHTML = `Neste momento, o seu troco será ${troco}`
    } else {
        if(troco < 0) {
        document.querySelector("#troco").innerHTML = "Você não tem dinheiro o suficiente"
        }
    }
}

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
            dinheiroCliente = dinheiroCliente - precoSmartphone
        break;

        case "fone":
        case "Fone":
        case "FONE":
        case "Fone de Ouvido Bluetooth Pro":
    
            numeroFone ++
            var precoTotalFone = precoFone * numeroFone
            document.querySelector("#fonesComprados").textContent = `Você comprou ${numeroFone} deste produto | Isso vai lhe custar ${precoTotalFone}`
            
            precoTotal = precoTotal + precoFone
            dinheiroCliente = dinheiroCliente - precoFone
        break;

        case "smartwatch":
        case "Smartwatch":
        case "SMARTWATCH":
        case "Smartwatch Ultra 5":
    
            numeroSmartwatch ++
            var precoTotalSmartwatch = precoSmartwatch * numeroSmartwatch
            document.querySelector("#smartwatchsComprados").textContent = `Você comprou ${numeroSmartwatch} deste produto | Isso vai lhe custar ${precoTotalSmartwatch}`
    
            precoTotal = precoTotal + precoSmartwatch
            dinheiroCliente = dinheiroCliente - precoSmartwatch
        break;

        case "tablet":
        case "Tablet":
        case "TABLET":
        case "Tablet ZenPad 10":
        

            numeroTablet ++
            var precoTotalTablet = precoTablet * numeroTablet
            document.querySelector("#tabletsComprados").textContent = `Você comprou ${numeroTablet} deste produto | Isso vai lhe custar ${precoTotalTablet}`
        
            precoTotal = precoTotal + precoTablet
            dinheiroCliente = dinheiroCliente - precoTablet
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
            dinheiroCliente = dinheiroCliente - precoLiquidificador
        break;

        case "café":
        case "Café":
        case "CAFÉ":
        case "Máquina de Café Expresso Premium:":
    
            numeroCafe ++
            var precoTotalCafe = precoCafe * numeroCafe
            document.querySelector("#cafesComprados").textContent = `Você comprou ${numeroCafe} deste produto | Isso vai lhe custar ${precoTotalCafe}`
    
            precoTotal = precoTotal + precoCafe
            dinheiroCliente = dinheiroCliente - precoCafe
        break;

        case "ventilador":
        case "Ventilador":
        case "VENTILADOR":
        case "Ventilador de Coluna AirCool":
        
            numeroVentilador ++
            var precoTotalVentilador = precoVentilador * numeroVentilador
            document.querySelector("#ventiladoresComprados").textContent = `Você comprou ${numeroVentilador} deste produto | Isso vai lhe custar ${precoTotalVentilador}`
        
            precoTotal = precoTotal + precoVentilador
            dinheiroCliente = dinheiroCliente - precoVentilador
        break;

        case "microondas":
        case "Microondas":
        case "MICROONDAS":
        case "Micro-ondas Compacto 25L":
            
            numeroMicroondas ++
            var precoTotalMicroondas = precoMicroondas * numeroMicroondas
            document.querySelector("#microondasComprados").textContent = `Você comprou ${numeroMicroondas} deste produto | Isso vai lhe custar ${precoTotalMicroondas}`
            
            precoTotal = precoTotal + precoMicroondas
            dinheiroCliente = dinheiroCliente - precoMicroondas
        break;








        // Roupas e acessórios
        case "camisa":
        case "Camisa":
        case "CAMISA":
        case "Camisa Casual Algodão":
                
            numeroCamisa ++
            var precoTotalCamisa = precoCamisa * numeroCamisa
            document.querySelector("#camisasCompradas").textContent = `Você comprou ${numeroCamisa} deste produto | Isso vai lhe custar ${precoTotalCamisa}`
                
            precoTotal = precoTotal + precoCamisa
            dinheiroCliente = dinheiroCliente - precoCamisa
        break;

        case "calça":
        case "Calça":
        case "CALÇA":
        case "Calça Jeans Premium":
                    
            numeroCalca ++
            var precoTotalCalca = precoCalca * numeroCalca
            document.querySelector("#calcasCompradas").textContent = `Você comprou ${numeroCalca} deste produto | Isso vai lhe custar ${precoTotalCalca}`
                    
            precoTotal = precoTotal + precoCalca
            dinheiroCliente = dinheiroCliente - precoCalca
        break;

        case "tenis":
        case "Tenis":
        case "TENIS":
        case "Tênis Esportivo X-Run":
                        
            numeroTenis ++
            var precoTotalTenis = precoTenis * numeroTenis
            document.querySelector("#tenisComprados").textContent = `Você comprou ${numeroTenis} deste produto | Isso vai lhe custar ${precoTotalTenis}`
                        
            precoTotal = precoTotal + precoTenis
            dinheiroCliente = dinheiroCliente - precoTenis
        break;

        case "jaqueta":
        case "Jaqueta":
        case "JAQUETA":
        case "Jaqueta de Couro":
                            
            numeroJaqueta ++
            var precoTotalJaqueta = precoJaqueta * numeroJaqueta
            document.querySelector("#jaquetasCompradas").textContent = `Você comprou ${numeroJaqueta} deste produto | Isso vai lhe custar ${precoTotalJaqueta}`
                            
            precoTotal = precoTotal + precoJaqueta
            dinheiroCliente = dinheiroCliente - precoJaqueta
        break;

        case "perfume":
        case "Perfume":
        case "PERFUME":
        case "Perfume Floral Essence 50ml":
                            
            numeroPerfume ++
            var precoTotalPerfume = precoPerfume * numeroPerfume
            document.querySelector("#perfumesComprados").textContent = `Você comprou ${numeroPerfume} deste produto | Isso vai lhe custar ${precoTotalPerfume}`
                                
            precoTotal = precoTotal + precoPerfume
            dinheiroCliente = dinheiroCliente - precoPerfume
        break;







        // Beleza e cuidados pessoais
        case "hidratante":
        case "Hidratante":
        case "HIDRATANTE":
        case "Creme Hidratante Facial Anti-idade":
                                
            numeroHidratante ++
            var precoTotalHidratante = precoHidratante * numeroHidratante
            document.querySelector("#hidratantesComprados").textContent = `Você comprou ${numeroHidratante} deste produto | Isso vai lhe custar ${precoTotalHidratante}`
                                    
            precoTotal = precoTotal + precoHidratante
            dinheiroCliente = dinheiroCliente - precoHidratante
        break;

        case "maquiagem":
        case "Maquiagem":
        case "MAQUIAGEM":
        case "Kit de Maquiagem Glamour":
                                    
            numeroMaquiagem ++
            var precoTotalMaquiagem = precoMaquiagem * numeroMaquiagem
            document.querySelector("#maquiagensCompradas").textContent = `Você comprou ${numeroMaquiagem} deste produto | Isso vai lhe custar ${precoTotalMaquiagem}`
                                        
            precoTotal = precoTotal + precoMaquiagem
            dinheiroCliente = dinheiroCliente - precoMaquiagem
        break;

        case "escova":
        case "Escova":
        case "ESCOVA":
        case "Escova de Cabelo Modeladora":
                                        
            numeroEscova ++
            var precoTotalEscova = precoEscova * numeroEscova
            document.querySelector("#escovasCompradas").textContent = `Você comprou ${numeroEscova} deste produto | Isso vai lhe custar ${precoTotalEscova}`
                                            
            precoTotal = precoTotal + precoEscova
            dinheiroCliente = dinheiroCliente - precoEscova
        break;

        case "toalha":
        case "Toalha":
        case "TOALHA":
        case "Conjunto de Toalhas de Banho":
                                            
            numeroToalha ++
            var precoTotalToalha = precoToalha * numeroToalha
            document.querySelector("#toalhasCompradas").textContent = `Você comprou ${numeroToalha} deste produto | Isso vai lhe custar ${precoTotalToalha}`
                                                
            precoTotal = precoTotal + precoToalha
            dinheiroCliente = dinheiroCliente - precoToalha
        break;







        // Casa e decoração
        case "abajur":
        case "Abajur":
        case "ABAJUR":
        case "Abajur Moderno":
                                            
            numeroAbajur ++
            var precoTotalAbajur = precoAbajur * numeroAbajur
            document.querySelector("#abajuresComprados").textContent = `Você comprou ${numeroAbajur} deste produto | Isso vai lhe custar ${precoTotalAbajur}`
                                                
            precoTotal = precoTotal + precoAbajur
            dinheiroCliente = dinheiroCliente - precoAbajur
        break;

        case "quadro":
        case "Quadro":
        case "QUADRO":
        case "Quadro Decorativo Natureza":
                                            
            numeroQuadro ++
            var precoTotalQuadro = precoQuadro * numeroQuadro
            document.querySelector("#quadrosComprados").textContent = `Você comprou ${numeroQuadro} deste produto | Isso vai lhe custar ${precoTotalQuadro}`
                                                
            precoTotal = precoTotal + precoQuadro
            dinheiroCliente = dinheiroCliente - precoQuadro
        break;

        case "almofada":
        case "Almofada":
        case "ALMOFADA":
        case "Almofada Veludo":
                                                
            numeroAlmofada ++
            var precoTotalAlmofada = precoAlmofada * numeroAlmofada
            document.querySelector("#almofadasCompradas").textContent = `Você comprou ${numeroAlmofada} deste produto | Isso vai lhe custar ${precoTotalAlmofada}`
                                                    
            precoTotal = precoTotal + precoAlmofada
            dinheiroCliente = dinheiroCliente - precoAlmofada
        break;
    






        // Brinquedos e jogos
        case "carrinho":
        case "Carrinho":
        case "CARRINHO":
        case "Carrinho de Controle Remoto":
                                                
            numeroCarrinho ++
            var precoTotalCarrinho = precoCarrinho * numeroCarrinho
            document.querySelector("#carrinhosComprados").textContent = `Você comprou ${numeroCarrinho} deste produto | Isso vai lhe custar ${precoTotalCarrinho}`
                                                    
            precoTotal = precoTotal + precoCarrinho
            dinheiroCliente = dinheiroCliente - precoCarrinho
        break;
    
        case "quebra-cabeça":
        case "Quebra-cabeça":
        case "QUEBRA-CABEÇA":
        case "Quebra-cabeça 1000 Peças":
                                                    
            numeroQuebracabeca ++
            var precoTotalQuebracabeca = precoQuebracabeca * numeroQuebracabeca
            document.querySelector("#quebra-cabeçasComprados").textContent = `Você comprou ${numeroQuebracabeca} deste produto | Isso vai lhe custar ${precoTotalQuebracabeca}`
                                                        
            precoTotal = precoTotal + precoQuebracabeca
            dinheiroCliente = dinheiroCliente - precoQuebracabeca
        break;

        case "boneca":
        case "Boneca":
        case "BONECA":
        case "Boneca Interativa":
                                                    
            numeroBoneca ++
            var precoTotalBoneca = precoBoneca * numeroBoneca
            document.querySelector("#bonecasCompradas").textContent = `Você comprou ${numeroBoneca} deste produto | Isso vai lhe custar ${precoTotalBoneca}`
                                                        
            precoTotal = precoTotal + precoBoneca
            dinheiroCliente = dinheiroCliente - precoBoneca
        break;

        // Jogo não está funcionando
        case "jogo":
        case "Jogo":
        case "JOGO":
        case "Jogo de Tabuleiro Estratégia":
                                                    
            numeroJogo ++
            var precoTotalJogo = precoJogo * numeroJogo
            document.querySelector("#JogosComprados").textContent = `Você comprou ${numeroJogo} deste produto | Isso vai lhe custar ${precoTotalJogo}`
                                                        
            precoTotal = precoTotal + precoJogo
            dinheiroCliente = dinheiroCliente - precoJogo
        break;







        // Livros e Mídia
        case "livro":
        case "Livro":
        case "LIVRO":
        case 'Livro "A Jornada do Herói"':
                                                    
            numeroLivro ++
            var precoTotalLivro = precoLivro * numeroLivro
            document.querySelector("#livrosComprados").textContent = `Você comprou ${numeroLivro} deste produto | Isso vai lhe custar ${precoTotalLivro}`
                                                        
            precoTotal = precoTotal + precoLivro
            dinheiroCliente = dinheiroCliente - precoLivro
        break;

        case "dvd":
        case "Dvd":
        case "DVD":
        case 'DVD Box "Série Completa"':
                                                    
            numeroDVD ++
            var precoTotalDVD = precoDVD * numeroDVD
            document.querySelector("#DVDsComprados").textContent = `Você comprou ${numeroDVD} deste produto | Isso vai lhe custar ${precoTotalDVD}`
                                                        
            precoTotal = precoTotal + precoDVD
            dinheiroCliente = dinheiroCliente - precoDVD
        break;

        case "cd":
        case "Cd":
        case "CD":
        case 'CD "Hits do Momento"':
                                                    
            numeroCD ++
            var precoTotalCD = precoCD * numeroCD
            document.querySelector("#CDsComprados").textContent = `Você comprou ${numeroCD} deste produto | Isso vai lhe custar ${precoTotalCD}`
                                                        
            precoTotal = precoTotal + precoCD
            dinheiroCliente = dinheiroCliente - precoCD
        break;

        case "e-book":
        case "E-book":
        case "E-BOOK":
        case 'E-book "Aprenda a Programar"':
                                                    
            numeroEbook ++
            var precoTotalEbook = precoEbook * numeroEbook
            document.querySelector("#ebooksComprados").textContent = `Você comprou ${numeroEbook} deste produto | Isso vai lhe custar ${precoTotalEbook}`
                                                        
            precoTotal = precoTotal + precoEbook
            dinheiroCliente = dinheiroCliente - precoEbook
        break;






        // Alimentos e bebidas
        case "fruta":
        case "Fruta":
        case "FRUTA":
        case "frutasCompradas":
                                                
            numeroFruta ++
            var precoTotalFruta = precoFruta * numeroFruta
            document.querySelector("#frutasCompradas").textContent = `Você comprou ${numeroFruta} deste produto | Isso vai lhe custar ${precoTotalFruta}`
                                                    
            precoTotal = precoTotal + precoFruta
            dinheiroCliente = dinheiroCliente - precoFruta
        break;
    
        case "vinho":
        case "Vinho":
        case "VINHO":
        case "vinhosComprados":
                                                    
            numeroVinho ++
            var precoTotalVinho = precoVinho * numeroVinho
            document.querySelector("#vinhosComprados").textContent = `Você comprou ${numeroVinho} deste produto | Isso vai lhe custar ${precoTotalVinho}`
                                                        
            precoTotal = precoTotal + precoVinho
            dinheiroCliente = dinheiroCliente - precoVinho
        break;

        case "chocolate":
        case "Chocolate":
        case "CHOCOLATE":
        case "Caixa de Chocolates Finos":
                                                    
            numeroChocolate ++
            var precoTotalChocolate = precoChocolate * numeroChocolate
            document.querySelector("#chocolatesComprados").textContent = `Você comprou ${numeroChocolate} deste produto | Isso vai lhe custar ${precoTotalChocolate}`
                                                        
            precoTotal = precoTotal + precoChocolate
            dinheiroCliente = dinheiroCliente - precoChocolate
        break;

        case "azeite":
        case "Azeite":
        case "AZEITE":
        case "Azeite Extra Virgem 500ml":
                                                    
            numeroAzeite ++
            var precoTotalAzeite = precoAzeite * numeroAzeite
            document.querySelector("#azeitesComprados").textContent = `Você comprou ${numeroAzeite} deste produto | Isso vai lhe custar ${precoTotalAzeite}`
                                                        
            precoTotal = precoTotal + precoAzeite
            dinheiroCliente = dinheiroCliente - precoAzeite
        break;

        default:
            document.querySelector("#erro").textContent = "Esse produto não é valido"
    }

    document.querySelector("#dinheiroDoCliente").textContent = `Você têm ${dinheiroCliente} para gastar`
    document.querySelector("#precoTotal").textContent = `No momento, o total é: ${precoTotal}`
    if(troco > 0) {
        document.querySelector("#troco").innerHTML = `Neste momento, o seu troco será ${troco}`
    } else {
        if(troco < 0) {
        document.querySelector("#troco").innerHTML = "Você não tem dinheiro o suficiente"
        }
    }
}
