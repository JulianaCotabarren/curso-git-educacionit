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
  mapFrame.classList.toggle(className);
}; //Eventos