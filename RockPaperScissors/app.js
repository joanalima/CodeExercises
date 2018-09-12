(function () {
'use strict';

  angular.module('RPSGame', [])
  .controller('GameController', GameController);

  GameController.$inject = ['$scope'];
  function GameController($scope){

    var actions = ['Rock', 'Paper', 'Scissors'];

    //Status
    $scope.statusPlayer1 = "";
    $scope.statusPlayer2 = "";

    //Scores
    $scope.scorePlayer1 = 0;
    $scope.scorePlayer2 = 0;

    $scope.resultMessage = "";

    $scope.result = function(statusPlayer1) {
      $scope.statusPlayer1 = statusPlayer1;
      $scope.statusPlayer2 = actions[Math.floor(Math.random() * actions.length)];
      //Score: wins are 2 points; loses are 0 points
      // Rock beats Scissors
      if(statusPlayer1 == $scope.statusPlayer2){
          playersTied();
      }

      if (statusPlayer1 == 'Rock'){
        if($scope.statusPlayer2 == 'Scissors'){
          player1Wins();
        } else if($scope.statusPlayer2 == 'Paper'){
          player2Wins();
        }
      } else if (statusPlayer1 == 'Scissors') {
        if($scope.statusPlayer2 == 'Paper'){
          player1Wins();
        } else if($scope.statusPlayer2 == 'Rock'){
          player2Wins();
        }
      } else if(statusPlayer1 == 'Paper'){
        if($scope.statusPlayer2 == 'Rock'){
          player1Wins();
        } else if($scope.statusPlayer2 == 'Scissors'){
          player2Wins();
        }
      }

      function player1Wins(){
        $scope.scorePlayer1 += 2;
        $scope.resultMessage = "You Win!";
      }
      function player2Wins(){
        $scope.scorePlayer2 += 2;
        $scope.resultMessage = "You Lose!";
      }
      function playersTied(){
        $scope.scorePlayer1 += 1;
        $scope.scorePlayer2 += 1;
        $scope.resultMessage = "It's a Tie!";
      }
    }
  }
})();
