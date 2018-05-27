var app = angular.module('loja', ['ngRoute','ngResource']);

app.controller('personCtrl', function($scope){
	$scope.firstName = "John";
	$scope.lastName = "Doe";
});

app.controller('costCtrl', function($scope){
	$scope.price = 58;
});

app.controller('namesCtrl2', function($scope){
	$scope.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit','Mary','Kai'];
});

app.controller('namesCtrl3', function($scope){
	$scope.names = ['Jani', 'Carl','Margareth','Hege','Joe','Gustav','Birgit','Mary','Kai'];
});

app.controller('namesCtrl4', function Function($scope){
	$scope.names = [
	  {name:'Jani', country: 'Norway'},
	  {name:'Carl', country: 'Sweden'},
	  {name: 'Margareth', country: 'England'},
	  {name: 'Hege', country: 'Norway'},
	  {name: 'Joe', country: 'Denmark'},
	  {name: 'Gustavo', country: 'Sweden'},
	  {name: 'Birgit', country: 'Denmark'},
	  {name: 'Mary', country: 'England'},
	  {name: 'Kai', country: 'Norway'}
	  ];
	
	$scope.orderByMe = function(x){
		$scope.myOrderBy= x;
	};
});

app.controller('primeiroController', ['$scope', function($scope){
	
}]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {controller: "listController", templateUrl: "list.html"})
	.when("/edit/:name", {controller: "editController", templateUrl: "form.html"})
	.when("/new", {controller: "newController", templateUrl: "form.html"})
	.otherwise({redirectTo: "/"});
});

app.run(function($rootScope){
	$rootScope.frutas = ['banana', 'melancia', 'pera'];
});

app.controller('listController', ['$scope', function($scope){
	
}]);

app.controller('listController' ['$scope', function editController($scope, $location, $routeParams){
	$scope.title = 'Editar frutas';//adiciono título a pagina
	$scope.fruta = $routeParams.name;//pegando o nome da fruta para editar
	$scope.frutaIndex = $scope.indexOf($scope.fruta);//pegando a fruta dentro da lista
	
	$scope.salvar = function(){
		$scope.frutas[$scope.frutaIndex] = $scope.fruta;//pegando o noo nome da fruta editada
		$location.path('/');//volta para o index
	};
}]);

app.controller('newController', ['$scope','$routeParams', '$rootScope','route','$location', function newController($scope, $routerParams, $rootScope, $route, $location){
	$scope.title = 'Nova Fruta';
	$scope.fruta = '';
	
	$scope.salvar = function(){
		$scope.frutas.push($scope.fruta);
		$location.path('/');
	};
}]);

app.controller('localizacao', function($scope, $location){
	$scope.myUrl = $location.protocol();
	$scope.myUrl = $location.port();
});

app.controller('controllerTimeOut', function ($scope, $timeout){
	$scope.timermsg = "Oi!";
	$timeout(function(){
		$scope.timermsg = "Oi depois de 3 segundos";
	}, 3000);
});

app.controller('controllerIntervalo', function ($scope, $interval){
	$scope.intervalo = new Date().toLocaleTimeString();
	$interval(function(){
		$scope.intervalo = new Date().toLocaleTimeString();
	}, 1000);
});

app.controller('pegarResposta', function($scope, $http){
	
	$scope.pegarResposta = function (){
		$http.get("pegarResposta").then(function (response){
			document.getElementById("resposta").value = ""+response.data;
		});
	};
});

app.controller('namesController', function($scope){
	$scope.names = ["Emil", "Tobias", "Linus"];
});

app.controller("controllerPessoa", function($scope, $resource){
//	com Spring Framework RestFull
//	pessoas = $resource("/pessoas/:codPessoa");
	
	pessoas = $resource("/angularjs_spring_mvc/pessoa/?codPessoa=:codPessoa ");
	
	$scope.getPorId = function(){
		pessoas.get({codPessoa: $scope.codPessoa}, function(data){
			$scope.objetoPessoa = data;
			
		});
	};
});

//criação do service
app.factory("UserService", function(){
	var users = ["Ivete", "Alex", "Paulo"];
	
	return {
		all: function(){
			return users;
		},
		primeiro: function(){
			return users[0];
		}
	};
});

////Criação do Controller
//primeiroUserController = app.controller("primeiroController", function ($scope, UserService){
//	$scope.primeiro = UserService.primeiro();
//});
//
////segundo controller
//todosUserController = app.controller("todosUserController", function($scope, UserService){
//	$scope.todos = UserService.all();
//});
//
////ativando injecao de dependencia
//primeiroUserController.$inject = ["$scope", "UserService"];//Inject Angular
//

app.controller("filterController", function ($scope){
	$scope.friends = [
	   {
		name : "Mario",
		lastName : "souza",
		age : 20,
	   },
	   
	   {
		name : "Maria",
		lastName : "quermina",
		age : 89,
		},
		
		{
		name : "Paulo",
		lastName : "mineiro",
		age : 49,
		},
		
		{
		name : "Vanessa",
		lastName : "Pereira",
		age : 22,
		}
];
});

