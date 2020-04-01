//console.log("hola mundo");
//DOM
//document.querySelector devuelve un solo elementos
//document.document.querySelector devuelve todos los elementos
//let container=document.querySelector(".container");//recorre el Dom busacncdo un elemento que tenga la classe container
//let table=document.querySelector(".table");//recorre el Dom busacncdo un elemento que tenga la classe container
//ejemplos con document.querySelector
//console.log(container);
//console.log(table);
// este regresa un a lista de elementos tipo a
//console.log(links);
/*
este es para recorrer usando forEach((item, i) => {

});

let links=document.querySelectorAll("a");
links.forEach(function (link){
  console.log(link);
})*/
/*EJEMPLO CLICK EN CELDA
let celdas=document.querySelectorAll("td");
celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log("Click");
  })
});*/

/*let links=document.querySelectorAll(".close");
close.forEach(function(link){
  link.addEventListener('click',function(){
    console.log("Click");
  })
});*/
//moverse entre documentos setimeOut se ejecuta despuesd e cierto tiempo una sola vez
//setIntervalo  se ejecuta despuesd e cierto tiempo constatementte

let links=document.querySelectorAll(".close");
links.forEach(function (link){
  //agregar un evento click a cada uno de ellos -case sensitive
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content=document.querySelector('.content');

    //quitar las clases de animacion que ta addEventListener
    content.classList.remove("fadeIndown");
    content.classList.remove("animated");
    //Agregar clases para animar su salida  fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");
    setTimeout(function(){
      location.href="/boletines";
    },300);
  /*  setIntervalo(function()) {
      location.href="/";
    },1000);*/
    return false;
  });
});
