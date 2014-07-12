'use strict';

angular.module('nickApp')
    .controller('MainCtrl', function($scope, $timeout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.animalClassAttacks = {
            'Amphibia': [{
                attackPower: 10,
                accuracy: 0.95,
                name: 'Croak',
                simplePast: 'croaked at',
                pastParticiple: 'croaked at'
            }, {
                attackPower: 18,
                accuracy: 0.65,
                name: 'Tackled',
                simplePast: 'tackled',
                pastParticiple: 'tackled'
            }],
            'Actinopterygii': [{
                attackPower: 10,
                accuracy: 0.95,
                name: 'Splash',
                simplePast: 'splashed toward',
                pastParticiple: 'splashed at'
            }, {
                attackPower: 20,
                accuracy: 0.6,
                name: 'Fin Spike',
                simplePast: 'used fin spike on',
                pastParticiple: 'fin spiked'
            }]
        };

        $scope.animals = [];

        $scope.wildAnimals = [];

        $scope.startBattle = function() {
            angular.forEach($scope.animalsFromJson._Species, function(jsonAnimal, index) {
                var animalToAdd = {
                    id: jsonAnimal.TaxonID,
                    name: jsonAnimal.AcceptedCommonName,
                    hp: 91,
                    maxHp: 91,
                    image: jsonAnimal._SpeciesProfile.Image[0].URL,
                    attacks: $scope.animalClassAttacks[jsonAnimal.ClassName]
                };
                if (index % 2 === 1) {
                    $scope.wildAnimals.push(animalToAdd);
                } else {
                    $scope.animals.push(animalToAdd);
                }
                $scope.wildAnimals.push();
            });
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
                }, 1000 + 2000 * Math.random());
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

        $scope.animalsFromJson = {
            "_Species": [{
                "AcceptedCommonName": "Eastern blue groper",
                "ClassCommonName": "ray-finned fishes",
                "ClassName": "Actinopterygii",
                "ConservationStatus": {
                    "BOTStatusCode": "C",
                    "ConservationSignificant": false
                },
                "FamilyCommonName": "wrasses",
                "FamilyName": "Labridae",
                "FamilyRank": 950770,
                "IsSuperseded": false,
                "KingdomCommonName": "animals",
                "KingdomName": "Animalia",
                "ScientificName": "Achoerodus viridis",
                "SpeciesProfileUrl": "http://environment.ehp.qld.gov.au/species/?op=getspeciesbyid&taxonid=34168",
                "TaxonID": 34168,
                "_SpeciesProfile": {
                    "Image": [{
                        "Format": "jpg",
                        "Reference": "Richard Ling,2004",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/14876"
                    }]
                },
            }, {
                "AcceptedCommonName": "Murray cod",
                "ClassCommonName": "ray-finned fishes",
                "ClassName": "Actinopterygii",
                "ConservationStatus": {
                    "BOTStatusCode": "C",
                    "ConservationSignificant": true,
                    "EPBCStatusCode": "V"
                },
                "FamilyCommonName": "basses and cods",
                "FamilyName": "Percichthyidae",
                "FamilyRank": 950598,
                "IsSuperseded": false,
                "KingdomCommonName": "animals",
                "KingdomName": "Animalia",
                "ScientificName": "Maccullochella peelii",
                "SpeciesProfileUrl": "http://environment.ehp.qld.gov.au/species/?op=getspeciesbyid&taxonid=27041",
                "TaxonID": 27041,
                "_SpeciesProfile": {
                    "Image": [{
                        "Format": "jpg",
                        "Reference": "Limpus, C.,Department of Environment and Resource Management (DERM),2004",
                        "Type": "Preferred Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/7010"
                    }],
                    "WetlandStatus": "D"
                },

            }, {
                "AcceptedCommonName": "cane toad",
                "ClassCommonName": "amphibians",
                "ClassName": "Amphibia",
                "ConservationStatus": {
                    "ConservationSignificant": false
                },
                "FamilyCommonName": "true toads",
                "FamilyName": "Bufonidae",
                "FamilyRank": 960040,
                "IsSuperseded": false,
                "KingdomCommonName": "animals",
                "KingdomName": "Animalia",
                "ScientificName": "Rhinella marina",
                "SpeciesProfileUrl": "http://environment.ehp.qld.gov.au/species/?op=getspeciesbyid&taxonid=716",
                "TaxonID": 716,
                "_SpeciesProfile": {
                    "Image": [{
                        "Format": "jpg",
                        "Reference": "Queensland Government",
                        "Type": "Preferred Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/4220"
                    }, {
                        "Format": "jpg",
                        "Reference": "Queensland Government",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/4221"
                    }, {
                        "Format": "jpg",
                        "Reference": "McDonald, K.,Queensland Government,1988",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/4222"
                    }, {
                        "Format": "jpg",
                        "Reference": "Queensland Government,1995",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/4223"
                    }, {
                        "Format": "jpg",
                        "Reference": "Queensland Government,1994",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/4224"
                    }]
                },
            }, {
                "AcceptedCommonName": "greenstripe frog",
                "ClassCommonName": "amphibians",
                "ClassName": "Amphibia",
                "ConservationStatus": {
                    "BOTStatusCode": "L",
                    "ConservationSignificant": false,
                    "NCAStatusCode": "C"
                },
                "FamilyCommonName": "tree frogs",
                "FamilyName": "Hylidae",
                "FamilyRank": 960010,
                "IsSuperseded": false,
                "KingdomCommonName": "animals",
                "KingdomName": "Animalia",
                "ScientificName": "Cyclorana alboguttata",
                "SpeciesProfileUrl": "http://environment.ehp.qld.gov.au/species/?op=getspeciesbyid&taxonid=624",
                "TaxonID": 624,
                "_SpeciesProfile": {
                    "Image": [{
                        "Format": "jpg",
                        "Reference": "Dollery, C.,DERM,1995",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/522"
                    }, {
                        "Format": "jpg",
                        "Reference": "Dollery, C.,DERM,2000",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/1323"
                    }, {
                        "Format": "jpg",
                        "Reference": "Queensland Government,1978",
                        "Type": "Preferred Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/3776"
                    }, {
                        "Format": "jpg",
                        "Reference": "Queensland Government,1978",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/3777"
                    }, {
                        "Format": "jpg",
                        "Reference": "Queensland Government,1978",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/3778"
                    }, {
                        "Format": "jpg",
                        "Reference": "Hines, H.,Queensland Government,1999",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/3779"
                    }, {
                        "Format": "jpg",
                        "Reference": "Hines, H.,Queensland Government,1999",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/3780"
                    }, {
                        "Format": "jpg",
                        "Reference": "Hines, H.,Queensland Government,1999",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/3781"
                    }, {
                        "Format": "jpg",
                        "Reference": "Queensland Government,1978",
                        "Type": "Available Image",
                        "URL": "http://wildnet.derm.qld.gov.au/wws/images/3796"
                    }]
                },
            }]
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