"use strict";

//Declaraciones
var d = document,
    className = 'active',
    store = localStorage,
    session = sessionStorage,
    //Mapa de contacto
mapButton = d.querySelector('#footer button.map'),
    mapFrame = d.querySelector('#footer iframe.map'); //Funciones

var toggle = function toggle(object) {
  var btn = object.btn,
      target = object.target,
      className = object.className,
      classes = object.classes;

  if (target.classList.toggle(className)) {
    btn.classList.replace(classes[0], classes[1]);
  } else {
    btn.classList.replace(classes[1], classes[0]);
  }
}; //Eventos


mapButton.addEventListener('click', toggle({
  btn: mapButton,
  target: mapFrame,
  className: className,
  classes: ['icon-plus', 'icon-less']
}));