'use strict';

/**
 * @ngdoc function
 * @name nickApp.controller:PokedexCtrl
 * @description
 * # PokedexCtrl
 * Controller of the nickApp
 */



// 1p4a3kdeljvvldl8 trove key
// http://api.trove.nla.gov.au/result?key=1p4a3kdeljvvldl8&encoding=json&zone=book&q=
angular.module('nickApp')
  .controller('PokedexCtrl', function ($scope,$http) {
	 
	$scope.troveData;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.selectedAnimal={
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
		};
	
	
	$scope.animals=[];
	$scope.url="";
	$scope.recived="recived data";
	
	
	$scope.query=function(fancyname){
		//alert(fancyname);
		//("http://api.trove.nla.gov.au/result?key=1p4a3kdeljvvldl8&encoding=json&zone=book&q="+fancyname);
	    /*$http.jsonp('http://api.trove.nla.gov.au/result?key=1p4a3kdeljvvldl8&encoding=json&zone=book&q='+fancyname).success(function(data, status, headers, config){
	    	console.log(data.);
	    });*/
		
		
	};
    $scope.cleanData = function() {
        angular.forEach($scope.animalsFromJson._Species, function(jsonAnimal, index) {
            var animalToAdd = {
                id: jsonAnimal.TaxonID,
                name: jsonAnimal.AcceptedCommonName,
                hp: 91,
                maxHp: 91,
                image: jsonAnimal._SpeciesProfile.Image[0].URL,
				rare:jsonAnimal.ConservationStatus.ConservationSignificant,
				fancyName:jsonAnimal.ScientificName,
				spottedby:jsonAnimal._SpeciesProfile.Image[0].URL,
            };
           
                $scope.animals.push(animalToAdd);
        });
    };
	
    $scope.animalsFromJson = {
        "_Species": [
		{
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
        }
		, {
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
	$scope.cleanData();
  });
