angular.module('techApp', [])
  .controller('AppController', function() {
    var app = this;
    app.tab=1;
    app.menu = [
      {text:'Sobre nós', active: true, id:1},
      {text:'Projetos', active: false, id: 2},
      {text:'Contato', active: false, id: 3}
    ]; 
    app.changeTab = function(id){
        app.tab = id;
    }
    app.socialLinks = [
        {link : "https://www.instagram.com/techsolucoesenergeticas/", icon:"fa-instagram", label:"Instagram"}
    ]
    
  });