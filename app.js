angular.module('techApp', [])
  .controller('AppController', function() {
    var app = this;
    app.menu = [
      {text:'Sobre nós', active: true},
      {text:'Projetos', active: false},
      {text:'Clientes', active: false}
    ]; 
    
  });