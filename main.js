// Beatriz Teixeira exercicio 03 WEB DESIGN II 

console.log("hello world");
// define variables e identificar variáveis
//stylesheet
let ligdes = document.getElementById("switchValue");
let folhaestilo = document.head.querySelector("link[rel='stylesheet']");
//input text h1
let target = document.querySelector("header h1");
let changebtn = document.querySelector(".flex-item input:nth-child(3)");
let inputText = document.querySelector("#text");
let reset = document.querySelector('.flex-item a');
//controllers
let valorPeso = document.querySelector('.flex-item input#weight');
let valorWidth = document.querySelector('.flex-item input#width');
let valorTam = document.querySelector('.flex-item input#size');
//variáveis
let fPeso = document.querySelector(':root');
let fWidth = document.querySelector(':root');
let fSize = document.querySelector(':root');
let fcor = document.querySelector(':root');
//valor show
let mPeso = document.querySelector('.flex-item .value_weight');
let mWidth = document.querySelector('.flex-item .value_width');
let mSize = document.querySelector('.flex-item .value_size');
//mudar cor header
let fundohead = document.querySelector("header");
let cor_x;
let cor_y;

/* swapping style sheets*/ 
//quando clica no switch, função muda folha de estilo
ligdes.addEventListener("click", mudaestilo);

//função muda de estilo
function mudaestilo() {

    let estiloURL = folhaestilo.getAttribute('href');
    //check if URL string contains "def"
    if( estiloURL.includes("style_def.css") ){
        //muda para estilo alternativo
        let novoestiloURL = "style_alt.css";
        folhaestilo.setAttribute('href', novoestiloURL);

    }else{
        //volta ao estilo default
        let estilooriginalURL = "style_def.css";
        folhaestilo.setAttribute('href', estilooriginalURL);
    }
}
/* end of swapping stylesheets*/ 

/* mudar input text */ 
//quando botão é clicado função update de texto
changebtn.addEventListener("click", mudatexto);

function mudatexto(){
    // o valor do input é lido
    let valorTexto = inputText.value;

    //usa o valor do input mudar o texto do target
    target.innerHTML = valorTexto;
}

/*reset to default text*/
//procurar o botão para default
let textodef = document.querySelector("#intext a");
// função carregar no botão e meter o texto default
textodef.addEventListener("click", voltatext);
function voltatext(){
    let textopre = "welcome to the mono room";
    target.innerText = textopre;
}
/* end of input */

//função muda de font-size
valorTam.addEventListener ("click",mudaTam);
function mudaTam() {
    //novo valor da barra
    let novotam = valorTam.value;
    //update css
    fSize.style.setProperty("--size", novotam + "pt" );
    mSize.innerText = novotam;
}

//função muda de font-weight
valorPeso.addEventListener("click", mudaPeso);
function mudaPeso() {
    //novo valor da barra
    let novopeso = valorPeso.value;
    //update css
    fPeso.style.setProperty("--weight", novopeso);
    mPeso.innerText = novopeso;
}



//muda cor header (meter a funcionar)
fundohead.addEventListener("mousemove", function(e){
cor_x = e.clientX ;
cor_y = e.clientY;

console.log( cor_x); // o valor de x está a ler
console.log(cor_y); // o valor de y está a ler

let chcor = "rgb('+ cor_x / 5 + ','+ cor_y / 5 + ', 100)";

fcor.style.setProperty("--newcolor", chcor );

});



