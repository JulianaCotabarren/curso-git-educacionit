"use strict";

//Declaraciones
var d = document,
    className = 'active',
    store = localStorage,
    session = sessionStorage,
    //Mapa de contacto
mapButton = d.querySelector('#footer button.map'),
    mapFrame = d.querySelector('#footer iframe.map'); //Funciones

mapButton.onclick = function () {
  if (mapFrame.classList.toggle(className)) {
    mapButton.classList.replace('icon-plus', 'icon-less');
  } else {
    mapButton.classList.replace('icon-less', 'icon-plus');
  }
}; //Eventos