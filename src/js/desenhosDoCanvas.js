let desenhos=[
{nome:"Delet_posicao_0",            W1: 0, H1: 0, W2: 0, H2: 0, W3: 0, H3: 0, W4: 0, H4: 0},
{nome:"Pixel_posicao_1",            W1:-5, H1:-5, W2: 7, H2:-5, W3:-5, H3: 7, W4: 7, H4: 7},
{nome:"retaHorizontal_2",           W1: 7, H1: 2, W2:-5, H2: 2, W3: 0, H3: 0, W4: 0, H4: 0},
{nome:"retaVertical_3",             W1: 2, H1: 7, W2: 2, H2:-5, W3: 0, H3: 0, W4: 0, H4: 0},
{nome:"verticeiSuperiorEsquerdo_4", W1: 7, H1: 2, W2: 2, H2: 7, W3: 0, H3: 0, W4: 0, H4: 0},
{nome:"verticeiSuperiorDireito_5",  W1:-5, H1: 2, W2: 2, H2: 7, W3: 0, H3: 0, W4: 0, H4: 0},
{nome:"verticeiInferiorEsquerdo_6", W1: 2, H1:-5, W2: 7, H2: 2, W3: 0, H3: 0, W4: 0, H4: 0},
{nome:"verticeiInferiorDireito_7",  W1: 2, H1:-5, W2:-5, H2: 2, W3: 2, H3: 2, W4: 0, H4: 0},
{nome:"meioCima_8",                 W1: 2, H1: 7, W2:-5, H2: 2, W3: 7, H3: 2, W4: 0, H4: 0},
{nome:"meioDireito_9",              W1: 2, H1: 7, W2: 2, H2:-5, W3:-5, H3: 2, W4: 0, H4: 0},
{nome:"meioBaixo_10",                W1: 2, H1:-5, W2:-5, H2: 2, W3: 7, H3: 2, W4: 0, H4: 0},
{nome:"meioEsquerdo_11",            W1: 2, H1: 7, W2: 2, H2:-5, W3: 7, H3: 2, W4: 0, H4: 0},
{nome:"cruz_12",                    W1:-5, H1: 2, W2: 2, H2:-5, W3: 2, H3: 7, W4: 7, H4: 2},
]

function escolheDesenho(x,y,img){
    // if(img == 0){desenhaDelet(x,y)}
    if(img > 0){desenha(x,y,img)}
}

 function desenha(x,y,img){
    // desenhaDelet(x,y)
    setTimeout( ()=>{

    let posicaoX = (cellSize*x)+(cellSize/2)-1
    let posicaoY = (cellSize*y)+(cellSize/2)-1
    ctx.fillStyle = cores;

    ctx.fillRect(posicaoX , posicaoY , desenhos[img].W1, desenhos[img].H1);
    ctx.fillRect(posicaoX , posicaoY , desenhos[img].W2, desenhos[img].H2);
    ctx.fillRect(posicaoX , posicaoY , desenhos[img].W3, desenhos[img].H3);
    ctx.fillRect(posicaoX , posicaoY , desenhos[img].W4, desenhos[img].H4);
},15)
}

// function desenhaDelet(x,y){
//     let delet = "./src/imgs/delet.png"
//     var image = new Image();
//     image.src = delet;
//     image.onload = function() {
//     ctx.drawImage(image, cellSize*x, cellSize*y);
//     }
// }

function renderizacao(){

    desenhaPlataforma()
    let contador = 0;
    for(let x = 0; x<33; x++){
        for(let y =0; y<33; y++){
            escolheDesenho(y,x,matrizNumber[x][y])
            }
        }
    }