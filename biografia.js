var contador1=0;
var contador2=0;
var mono=0;
var titulo=0;
var titu2=0;
var titu3=0;
var boton1=0;
var boton2=0;

btnboton1 = document.getElementById('boton1');
btnboton2 = document.getElementById('boton2');
btntitu2 = document.getElementById('titu2');
btntitu3 = document.getElementById('titu3');
btntitulo = document.getElementById('titulo');
btnmono =document.getElementById('mono');
btnmia = document.getElementById('mia');
btndana = document.getElementById('dana');

btnboton1.addEventListener('click', function(){
    boton1++;
    if(boton1>=1){
        ponerfotos();
    }
})

btnboton2.addEventListener('click', function(){
    boton2++;
    if(boton2>=1){
        ponerfotos();
    }
})

btntitulo.addEventListener('click', function(){
    titulo++;
    if(titulo>=1){
        quitarfotos();
    }
})

btnmono.addEventListener('click', function(){
    mono++;
    if(mono>=1){
        quitarfotos();
    }
})

btndana.addEventListener('click', function(){
    contador2++;
    if(contador2>=1){
        quitarfotos();
        ponerbiografiadana();
    }
})

btnmia.addEventListener('click', function(){
    contador1++;
    titu2++;
    if(contador1>=1 && titu2>=1){
        quitarfotos();
        ponerbiografiamia();
    }
})

function quitarfotos(){
    btnmia.style.display="none";
    btndana.style.display="none";
    btnmono.style.display="none";
    btntitulo.style.display="none";
}

function ponerfotos(){
    btnmia.style.display="inline";
    btndana.style.display="inline";
    btnmono.style.display="inline";
    btntitulo.style.display="inline";
    btntitu2.style.display="none";
    btntitu3.style.display="none";
}

function ponerbiografiamia(){
    btntitu2.style.display="inline";
}

function ponerbiografiadana(){
    btntitu3.style.display="inline";
}
