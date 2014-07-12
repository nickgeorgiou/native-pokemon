'use strict';

angular.module('nickApp')
  .controller('MainCtrl', function ($scope, $timeout, $interval) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $timeout(function() {
    	$scope.awesomeThings.push("cats");
    }, 3000);

    $scope.addAgain = function(thingToAdd) {
    	$scope.awesomeThings.push(thingToAdd + "2");
    }

    $scope.animals = [
    	{
    		name: 'Monkey Bear',
    		hp: 100,
    		maxHp: 200,
    		attacks: [
    			{
    				attackPower: 16,
    				probability: 80,
    				name: 'Tackle'
    			},
    			{
    				attackPower: 40,
    				probability: 20,
    				name: 'Bite'
    			}
    		]
    	},
    	{
    		name: 'Cat',
    		hp: 100,
    		maxHp: 100,
    		attackPower: '3',
    		attacks: [
    			{
    				attackPower: 20,
    				probability: 70,
    				name: 'Tackle'
    			},
    			{
    				attackPower: 40,
    				probability: 20,
    				name: 'Scratch'
    			}
    		]
    	}
    ];

    $interval(function() {
    	var animalIndex = Math.round(Math.random());
    	$scope.animals[animalIndex].hp -= 10;
    	if($scope.animals[animalIndex].hp <= 0){
    		console.log($scope.animals[animalIndex].name + ' loses!');
    	}
    }, 1000);
  });
