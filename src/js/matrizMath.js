let raizdDaMatriz = canvas.width/cellSize
let matrizNumber = [];
let botoesDoDesenho = document.querySelectorAll("#botoesDoDesenho")
let valorDoClick = 1
let span = document.getElementById('spanDeTexto')
criaMatriz()

canvas.addEventListener('click', (evento) =>{
    let pixelX = evento.offsetX;
    let pixelY = evento.offsetY;
    let retorno = convertePixelCoordEmUnidade(pixelX,pixelY)
    registraNaMatriz(retorno.X,retorno.Y)
    copiaMatrizNumber()
    const stringCopiar = converteMatrizEmTexto(copiaMatriz)
    escolheDesenho(retorno.X,retorno.Y,valorDoClick)

    copiarTextoParaAreaTransferencia();
    console.log(matrizNumber);
  });

function copiarTextoParaAreaTransferencia() {
    const span = document.getElementById('spanDeTexto');
    const textoParaCopiar = span.innerText;

    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            console.log('Texto copiado para a área de transferência.');
        })
        .catch((error) => {
            console.error('Erro ao copiar para a área de transferência:', error);
        });
}
  
  
function convertePixelCoordEmUnidade(x,y){
    
    let coordX = x
    let coordY = y
    let larguraPixel = cellSize
    let alturaPixel = cellSize
    let XCoordInt =""
    let YCoordInt =""
      for (let i = 1; i <= raizdDaMatriz; i++) {
        if (coordX > (i - 1) * larguraPixel && coordX <= i * larguraPixel) {
          XCoordInt = i-1;
          break;
        }
     }
      for (let i = 1; i <= raizdDaMatriz; i++) {
        if (coordY > (i - 1) * alturaPixel && coordY <= i * alturaPixel) {
          YCoordInt = i-1;
          break;
        }
      }
      return {Y: YCoordInt,X: XCoordInt}   
    }

function criaMatriz() {
   for (let i = 0; i < raizdDaMatriz; i++) {
      matrizNumber[i] = [];
         for (let j = 0; j < raizdDaMatriz; j++) {
         matrizNumber[i][j] = 0;
     }
  }
      
 return matrizNumber 
}

function registraNaMatriz(x,y){
  matrizNumber[y][x] = valorDoClick
  
}
let lastClicked;
  botoesDoDesenho.forEach(function(botoesDoDesenho){
  botoesDoDesenho.addEventListener('click', (evento)=>{

    if (lastClicked) {
      lastClicked.classList.remove('botaoClickado');
    }
    botoesDoDesenho.classList.add('botaoClickado');
    lastClicked = botoesDoDesenho
    valorDoClick = parseInt(evento.target.parentNode.value)
})})

trataMatriz()
function trataMatriz(){

}

caracteresDaMatriz = [
  {Posicao: 0, Nome: "Em Quad",                 codeJS: "\u2001", codeHTML: "&#8193;"},
  {Posicao: 1, Nome: "Pixel",                   codeJS: "\u2588", codeHTML: "&#9608;"},
  {Posicao: 2, Nome: "retaHorizontal",          codeJS: "\u2501", codeHTML: "&#9473;"},
  {Posicao: 3, Nome: "retaVertical",            codeJS: "\u2503", codeHTML: "&#9475;"},
  {Posicao: 4, Nome: "VerticeSuperiorEsquerdo", codeJS: "\u250F", codeHTML: "&#9487;"},
  {Posicao: 5, Nome: "VerticeSuperiorDireito",  codeJS: "\u2513", codeHTML: "&#9491;"},
  {Posicao: 6, Nome: "VerticeInferiorEsquerdo", codeJS: "\u2517", codeHTML: "&#9495;"},
  {Posicao: 7, Nome: "VerticeInferiorDireito",  codeJS: "\u251B", codeHTML: "&#9499;"},
  {Posicao: 8, Nome: "meioCima",                codeJS: "\u2533", codeHTML: "&#9523;"},
  {Posicao: 9, Nome: "meioDireito",             codeJS: "\u252B", codeHTML: "&#9515;"},
  {Posicao:10, Nome: "meioBaixo",               codeJS: "\u253B", codeHTML: "&#9531;"},
  {Posicao:11, Nome: "meioEsquerdo",            codeJS: "\u2523", codeHTML: "&#9507;"},
  {Posicao:12, Nome: "cruz",                    codeJS: "\u254B", codeHTML: "&#9547;"},
]

let copiaMatriz = []

function copiaMatrizNumber(){
  copiaMatriz  = ""
  copiaMatriz = matrizNumber.map( (value) => [...value])
}


function converteMatrizEmTexto(X){
 //Rastreia Zero a Direita 
arrayLinha = X.map((value)=> value.findLastIndex((X) => X >0)) ;
let arrayLinhaMais1 = arrayLinha.map((value)=> value+1)

//Torna null 0 a direita
for (i = 0; i < X.length ; i++ ){
  for (j = arrayLinhaMais1[i]; j < X[i].length ; j++ ){
    X[i][j] = null
   }
  }
  //Converte Número em Caracter
  let matrizdeCaracter = X.map((linha) => linha.map((unidade)=> {
    if (typeof unidade ==="number"){
   return unidade = caracteresDaMatriz[unidade].codeJS
    } else {
    return unidade = "x"
  }
  }))
//Apaga linha de array de 33 X
matrizdeCaracter.map((linha) => {
let primeiroIndex = linha.indexOf("x");
let ultimoIndex = linha.lastIndexOf("x");
numXs = ultimoIndex - primeiroIndex +1
if (numXs === 33) {
 return linha.splice(primeiroIndex, numXs)
}})
//Apaga caracter X nas linhas
for (let i = 0; i < matrizdeCaracter.length; i++) {
  for (let j = 0; j < matrizdeCaracter[i].length; j++) {
    if (matrizdeCaracter[i][j] === "x") {
      matrizdeCaracter[i].splice(j, 1);
      j--;
    }
  }
}
//converte em texto e quebra linha
const matrizFinal = matrizdeCaracter.map(linha =>{ 
  if (linha.length === 0)
  {return "<br>"
}else{
 return linha.join("") + "<br>"
}
});

StringdaMatriz = JSON.stringify(matrizFinal)
const string = StringdaMatriz.replace(/"/g, '').replace(/,/g, '').replace(/\[|\]/g, '');
// console.log(typeof string)
// console.log(string)
span.innerHTML = `<span>${string}</span>`

return string;
}
