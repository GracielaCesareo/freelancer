/*
 * Archivo principal de JS
 */

 var nav = document.getElementById('navegacion');
 var titulo = document.getElementById('bootstrap');

 document.addEventListener('scroll',estiloNav);

 function estiloNav() {

   if (window.scrollY > 90) {
     nav.style.padding = "0px";
     titulo.style.fontSize = "21px";
   } else {
     nav.style.padding = "10px";
     titulo.style.fontSize = "28px";
   }
 }
