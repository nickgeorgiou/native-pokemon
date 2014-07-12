'use strict';

angular.module('nickApp')
    .controller('MainCtrl', function($scope, $timeout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.animals = [{
            id: 1,
            name: 'Monkey Bear',
            hp: 84,
            maxHp: 84,
            attacks: [{
                attackPower: 11,
                accuracy: 0.9,
                name: 'Tackle',
                simplePast: 'tackled',
                pastParticiple: 'tackled'
            }, {
                attackPower: 16,
                accuracy: 0.6,
                name: 'Bite',
                simplePast: 'bit',
                pastParticiple: 'bitten'
            }]
        }, {
            id: 2,
            name: 'Cat',
            hp: 91,
            maxHp: 91,
            attackPower: '20',
            attacks: [{
                attackPower: 20,
                accuracy: 0.7,
                name: 'Tackle',
                simplePast: 'tackled',
                pastParticiple: 'tacked'
            }, {
                attackPower: 40,
                accuracy: 0.2,
                name: 'Scratch',
                simplePast: 'scratched',
                pastParticiple: 'scratched'
            }]
        }];

        $scope.wildAnimals = [{
            id: 3,
            name: 'Fox',
            hp: 83,
            maxHp: 83,
            attacks: [{
                attackPower: 10,
                accuracy: 1,
                name: 'Scratch',
                simplePast: 'scratched',
                pastParticiple: 'scratched'
            }, {
                attackPower: 20,
                accuracy: 0.6,
                name: 'Bite',
                simplePast: 'bit',
                pastParticiple: 'bitten'
            }]
        }, {
            id: 3,
            name: 'Moose',
            hp: 91,
            maxHp: 91,
            attacks: [{
                attackPower: 10,
                accuracy: 1,
                name: 'Tackle',
                simplePast: 'tackled',
                pastParticiple: 'tackled'
            }, {
                attackPower: 20,
                accuracy: 0.6,
                name: 'Scratch',
                simplePast: 'scratched',
                pastParticiple: 'scratched'
            }]
        }];

        $scope.startBattle = function() {
            $scope.isNotPlayersTurn = false;
            $scope.getNewActiveAnimal();
            $scope.getNewActiveWildAnimal();
        };


        $scope.getNewActiveAnimal = function() {
            var activeAnimalIndex = Math.floor(Math.random() * ($scope.animals.length));
            $scope.activeAnimal = $scope.animals[activeAnimalIndex];
            $scope.animals.splice(activeAnimalIndex, 1);
        };

        $scope.getNewActiveWildAnimal = function() {
            var activeWildAnimalIndex = Math.floor(Math.random() * ($scope.wildAnimals.length));
            $scope.activeWildAnimal = $scope.wildAnimals[activeWildAnimalIndex];
            $scope.battleMessage = 'Wild ' + $scope.activeWildAnimal.name + ' appeared!';
            $scope.wildAnimals.splice(activeWildAnimalIndex, 1);
        };

        $scope.playerAttack = function(animal, otherAnimal, attack) {
            $scope.attackWithAnimal(animal, otherAnimal, attack);
            console.log($scope.isNotPlayersTurn);
            if ($scope.checkAnimalAlive(otherAnimal)) {
                $scope.isNotPlayersTurn = true;
                $timeout(function() {
                    $scope.wildAttack(otherAnimal, animal);
                }, 1000 + 3000 * Math.random());
            } else {
                $scope.battleMessage = otherAnimal.name + ' fainted!';
                $timeout(function() {
                    $scope.getNewActiveWildAnimal();
                }, 1000 + 3000 * Math.random());
            }

        };

        $scope.wildAttack = function(animal, otherAnimal) {
            $scope.attackToUse = animal.attacks[Math.floor(Math.random() * (animal.attacks.length))];
            $scope.attackWithAnimal(animal, otherAnimal, $scope.attackToUse);

            $scope.isNotPlayersTurn = false;


        };

        $scope.attackWithAnimal = function(animal, otherAnimal, attack) {

            if (Math.random() < attack.accuracy) {
                $scope.battleMessage = animal.name + ' ' + attack.simplePast + ' ' + otherAnimal.name;
                if (otherAnimal.hp - attack.attackPower > 0) {
                    otherAnimal.hp -= attack.attackPower;
                } else {
                    otherAnimal.hp = 0;
                }
            } else {
                $scope.battleMessage = animal.name + ' missed!';
            }
            //var otherAnimalHealthbar = _.find(otherAnimal.children('.progress-bar'));
            //otherAnimalHealthbar.removeClass('progress-bar-success');

        };

        $scope.checkAnimalAlive = function(animal) {
            return animal.hp > 0;
        };

        $scope.startBattle();

        // $interval(function() {
        //     var animalIndex = Math.round(Math.random());
        //     $scope.animals[animalIndex].hp -= 10;
        //     if($scope.animals[animalIndex].hp <= 0){
        //         console.log($scope.animals[animalIndex].name + ' loses!');
        //     }
        // }, 1000);
    });