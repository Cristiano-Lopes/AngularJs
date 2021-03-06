//Configuracao do modulo
var app = angular.module('loja', ['ngRoute', 'ngResource', 'ngAnimate']);

//configurando rotas
app.config(function($routeProvider, $provide, $httpProvider, $locationProvider){
	
	$routeProvider.when("/clientelist", {
		controller: "clienteController",
		templateUrl: "cliente/list.html"
	})//listar;
	
	.when("/cliente/:id",{
		controller: "clienteController",
		templateUrl: "cliente/cadastro.html"
	})//editar
	
	.when("/cliente/cadastro", {
		controller: "clienteController",
		templateUrl: "cliente/cadastro.html"
	})//novo
	
	.otherwise({
		redirectTo: "/"
	});
});