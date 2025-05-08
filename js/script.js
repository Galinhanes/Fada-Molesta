var navi=document.getElementById("navi")
var clickCount=0;
var hello=document.getElementById("hello");
var hey=document.getElementById("hey");
var look=document.getElementById("look");
var heylisten=document.getElementById("heylisten");
var watchout=document.getElementById("watchout");
var navimove=document.getElementById("navimove");
var pos=document.getElementById("pos");
var pos1=document.getElementById("pos1");
var pos2=document.getElementById("pos2");
var pos3=document.getElementById("pos3");
var bso=document.getElementById("bso")
bso.volume=0.4;

function aparecerPos1(){
  pos1.style.display="block";
  pos2.style.display="none";
  pos3.style.display="none";
}
function aparecerPos2(){
  pos1.style.display="none";
  pos2.style.display="block";
  pos3.style.display="none";
}
function aparecerPos3(){
  pos1.style.display="none";
  pos2.style.display="none";
  pos3.style.display="block";
}
function opacidadePos375(){
  pos3.style.opacity=("75%");
}
function opacidadePos350(){
  pos3.style.opacity=("50%");
}
function opacidadePos325(){
  pos3.style.opacity=("25%");
}


function desaparecerPos3(){
  pos3.style.display="none"
}
navi.addEventListener('click',function(){
  clickCount++;
  if(clickCount ==1){
    navi.style.left=("10%");
    navi.style.top=("10%");
    navi.style.rotate=("-30deg");
    navimove.play();
    hello.play();
    pos.style.left=("30%");
    pos.style.top=("-5%");
    aparecerPos1();
    setTimeout(aparecerPos2, 50, this.style);
    setTimeout(aparecerPos3, 100, this.style);
    setTimeout(opacidadePos375, 150, this.style);
    setTimeout(opacidadePos350, 200, this.style);
    setTimeout(opacidadePos325, 250, this.style);
    setTimeout(desaparecerPos3, 300, this.style);
    if(!bso.play){bso.play()};
    
   

   
  }else if(clickCount ==2){
    navi.style.left=("10%");
    navi.style.top=("50%");
    navi.style.rotate=("30deg");
    navimove.play();
    hey.play();
    pos.style.left=("10%");
    pos.style.top=("-15%");
    pos.style.rotate=("-30deg");
    aparecerPos1();
    setTimeout(aparecerPos2, 50, this.style);
    setTimeout(aparecerPos3, 100, this.style);
    setTimeout(opacidadePos375, 150, this.style);
    setTimeout(opacidadePos350, 200, this.style);
    setTimeout(opacidadePos325, 250, this.style);
    setTimeout(desaparecerPos3, 300, this.style);
    
    
  }else if(clickCount==3){
    navi.style.left=("55%");
    navi.style.top=("70%");
    navi.style.rotate=("-30deg");
    navimove.play();
    look.play();
    pos.style.left=("10%");
    pos.style.top=("25%");
    pos.style.rotate=("30deg");
    aparecerPos1();
    setTimeout(aparecerPos2, 50, this.style);
    setTimeout(aparecerPos3, 100, this.style);
    setTimeout(opacidadePos375, 150, this.style);
    setTimeout(opacidadePos350, 200, this.style);
    setTimeout(opacidadePos325, 250, this.style);
    setTimeout(desaparecerPos3, 300, this.style);
    
    
  }else if(clickCount==4){
    navi.style.left=("55%");
    navi.style.top=("15%");
    navi.style.rotate=("-60deg");
    navimove.play();
    heylisten.play();
    pos.style.left=("55%");
    pos.style.top=("45%");
    pos.style.rotate=("-30deg");
    aparecerPos1();
    setTimeout(aparecerPos2, 50, this.style);
    setTimeout(aparecerPos3, 100, this.style);
    setTimeout(opacidadePos375, 150, this.style);
    setTimeout(opacidadePos350, 200, this.style);
    setTimeout(opacidadePos325, 250, this.style);
    setTimeout(desaparecerPos3, 300, this.style);
    
    
  }else if(clickCount==5){
    navi.style.left=("30%");
    navi.style.top=("20%");
    navi.style.rotate=("0deg");
    navimove.play();
    watchout.play();
    pos.style.left=("55%");
    pos.style.top=("-10%");
    pos.style.rotate=("-60deg");
    aparecerPos1();
    setTimeout(aparecerPos2, 50, this.style);
    setTimeout(aparecerPos3, 100, this.style);
    setTimeout(opacidadePos375, 150, this.style);
    setTimeout(opacidadePos350, 200, this.style);
    setTimeout(opacidadePos325, 250, this.style);
    setTimeout(desaparecerPos3, 300, this.style);
    clickCount=0;
  }
   
  
})

/*buscar a funcion offsetsetleft e offsettop
function cousa(){
  document.getElementById('').style.left = `calc(${location} + 1%)`;
}*/
/*dereita.addEventListener('click',function(){

    
   if(personaxe.style.left= (posicion0)) {personaxe.style.left= (posicion1)
   }else if(personaxe.style.left= (posicion1)) {personaxe.style.left= (posicion2)
   }else if(personaxe.style.left= (posicion2)) {personaxe.style.left= (posicion3)
   }else if(personaxe.style.left= (posicion3)) {personaxe.style.left= (posicion4)
   }else if(personaxe.style.left= (posicion4)) {personaxe.style.left= (posicion5)
   }else if(personaxe.style.left= (posicion5)) {personaxe.style.left= (posicion6)
   }else if(personaxe.style.left= (posicion6)) {personaxe.style.left= (posicion7)
   }else if(personaxe.style.left= (posicion7)) {personaxe.style.left= (posicion8)
   }else if(personaxe.style.left= (posicion8)) {personaxe.style.left= (posicion9)
   }else {personaxe.style.left= (posicion9)
}})

esquerda.addEventListener('click',function(){
    if(personaxe.style.left= (posicion9)) {personaxe.style.left= (posicion8)
    }else if(personaxe.style.left= (posicion8)) {personaxe.style.left= (posicion7)
    }else if(personaxe.style.left= (posicion7)) {personaxe.style.left= (posicion6)
    }else if(personaxe.style.left= (posicion6)) {personaxe.style.left= (posicion5)
    }else if(personaxe.style.left= (posicion5)) {personaxe.style.left= (posicion4)
    }else if(personaxe.style.left= (posicion4)) {personaxe.style.left= (posicion3)
    }else if(personaxe.style.left= (posicion3)) {personaxe.style.left= (posicion2)
    }else if(personaxe.style.left= (posicion2)) {personaxe.style.left= (posicion1)
    }else if(personaxe.style.left= (posicion1)) {personaxe.style.left= (posicion0)
    }else {personaxe.style.left= (posicion0)}


})
*/