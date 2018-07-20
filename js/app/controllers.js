angular.module("meuModulo")
	.controller("indexController",function($scope){
		$scope.titulo = "Sistema com Angular JS";
		$scope.alunos = [
			{nome: "Camila",email:"camila@mail.com",nota1:65,nota2:80,nota3:55},
			{nome: "Pedro",email:"pedro@mail.com",nota1:75,nota2:80,nota3:55},
			{nome: "Murilo",email:"murilo@mail.com",nota1:65,nota2:60,nota3:55},
			{nome: "João",email:"joao@mail.com",nota1:95,nota2:80,nota3:55},
			{nome: "Ana",email:"ana@mail.com",nota1:65,nota2:30,nota3:55}
		];

	

		//executa uma função na inicialização da página
		var init = function(){
			$scope.alunos.forEach(function(aluno){
				aluno.media = media(aluno);
			});
			limpaForm();
		};
		var contar2 = 0;
		var media = function(Aluno){
			//exibe no console do navegador toda vez q funcao é chamada
			console.log(contar2++);
			//parseFloat converte os valores para número (float)
			var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3))/3;
			//toFixed(2) exibe o número com só 2 casas depois da virgula
			return media.toFixed(2);
		};

		$scope.abreAddAlunos = function(){
			$scope.editando = false;
			limpaForm();
			$('#modal1').openModal();
		};

			//seta titulo ADIOCIONAR
		$scope.editando = false;

		var alunoEditar;

		$scope.editarAluno = function(Aluno){
			//seta titulo EDITAR
			$scope.editando = true;
			angular.copy(Aluno, $scope.Aluno);
			$('#modal1').openModal();
			alunoEditar = Aluno;
		}

		$scope.salvarAluno = function(Aluno){
			alunoEditar.nome = Aluno.nome;
			alunoEditar.email = Aluno.email;
			alunoEditar.nota1 = Aluno.nota1;
			alunoEditar.nota2 = Aluno.nota2;
			alunoEditar.nota3 = Aluno.nota3;
			alunoEditar.media = media(Aluno);
			$('#modal1').closeModal();
		};
		
		$scope.deletarAluno = function(Aluno){
			for(index in $scope.alunos){
				var aux = $scope.alunos[index];
				if(Aluno === aux){
					//splice deleta elementos de uma lista
					$scope.alunos.splice(index,1);
				}
			}
		}

		$scope.addAluno = function(Aluno){
			Aluno.media = media(Aluno);
			//adc objeto aluno na lista de alunos
			$scope.alunos.push(Aluno);
			//Fecha o método modal
			$('#modal1').closeModal();
			//limpa os dados do formulario
			limpaForm();
		};

		var limpaForm = function(){
			$scope.Aluno = {nome: "",email:"",nota1:'',nota2:'',nota3:'',media:''};
		};


		init();

	})