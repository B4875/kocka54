'use strict';

//    templateUrl: 'kocka9/kocka9-detail.template.html',
angular.
  module('kocka9').
  component('kocka9', {
    templateUrl: 'kocka9/kocka9-detail.template.html',
   controller: ['Udata', '$scope', '$http', '$routeParams',
      function Kocka9DetailController(Udata, $scope, $http, route, $location) {
		this.datum = {leto1:route.leto1, leto2:route.leto2, mesec1:route.mesec1, mesec2:route.mesec2};	 

		  var appn = route.app;
		this.appn1 = route.app;



console.log("kocka");

//#F64B07
//#1D46E1  #FFFFFF  #52C86A  #F4EC36
//#FF1110

this.tmpColor = ["#FFFFFF"];

this.sum = [];

this.button = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

 $scope.k54test = [['#CC11AA','#1111AA','#1111AA'],['#DD11AA','#1111AA','#1111AA'],['#1111AA','#CC11AA','#1111BB']];
  this.k54 = [['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		];

  
//  #767A9B
//  #999BA4
  
//  #F64B07	oranzna
//  #1D46E1	modra
//  #FFFFFF	bela
//  #52C86A	zelena
//  #F4EC36	rumena
//  #FF1110	rdeca
  
  
    this.k0 = [['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		];

    this.k00 = [['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		];


  this.k56 = [['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36'],
  		
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4'],
  		];

  
  this.k55 = [['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#F64B07', '#F64B07','#F64B07',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		['#1D46E1','#1D46E1','#1D46E1', 
  		'#FFFFFF', '#FFFFFF','#FFFFFF',
  		'#52C86A', '#52C86A','#52C86A',
  		'#F4EC36', '#F4EC36','#F4EC36',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		['#767A9B','#767A9B','#767A9B', 
  		'#FF1110', '#FF1110','#FF1110',
  		'#999BA4', '#999BA4','#999BA4',
  		'#999BA4', '#999BA4','#999BA4',
  		'#FFFFFF', '#FFFFFF','#FFFFFF'],
  		];
  		
//  this.csum = [[['','','','','','','','','','','',''],['','','','','','','','','','','',''],['','','','','','','','','','','',''],
//  ['','','','','','','','','','','',''],['','','','','','','','','','','',''],['','','','','','','','','','','','']]];
  
   this.csum = [[[['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']],[['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']],[['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']],
  [['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']],[['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']],[['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']], [['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']], [['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']], [['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']]]];
  
//  this.csum0 = ['','','','','','','','','','','',''];
  this.csum0 = [['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000'],['', '#000000']];
  	
  $scope.k0000 = [[1,2,3],[4,5,6],[7,8,9]];

   $scope.items = [];
    $scope.items[0] = ["12", "22"];
    $scope.items[1] = ["34", "657"];
    $scope.items[2] = ["129", null];

//$scope.k54.map((x) => console.log(x));


//		  this.user1 = location;
//		  this.user2 = "recho";
	$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:""};
		  
//    this.udata = Udata.query();
//    this.udata.$promise.then( function (data) {
        //$scope.partnerji = Klavzule.query({space9:$scope.applist[appn].space9, naslov:'tp2', usr:data.user.uname});
//        $scope.uporabnik.uporabnik = data.user.username;
//    });
    
    function h1_prepisi(A, B){
    	for (var i=0; i<12; i++)	 
		 B[5][i] = A[5][i];
		 
	for(var i=6; i<9; i++)
		for(var j=3; j<6; j++)
			B[i][j] = A[i][j];

    }
    
    function h1_premakni(A,B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=0; i<12; i++)	 
		 B[5][i+3] = A[5][i];
	for (var i=9; i<12; i++)	 
		 B[5][i-9] = A[5][i];		 

		B[6][5] = A[6][3];
		B[7][5] = A[6][4];
		B[8][5] = A[6][5];
		B[8][5] = A[6][5];
		B[8][4] = A[7][5];
		B[8][3] = A[8][5];								
		B[8][3] = A[8][5];		
		B[7][3] = A[8][4];
		B[6][3] = A[8][3];
		B[6][3] = A[8][3];		
		B[6][4] = A[7][3];
		B[6][5] = A[6][3]; 
		B[1][4] = A[1][4];   
    }
	$scope.h1 = function(A,B,S) {
	h1_premakni(A, B);	
	h1_prepisi(B, A);
	};
	
	function h1(A, B){
	return function () {
		h1_premakni(A, B);	
		h1_prepisi(B, A);
		}
	}
	
	function h13(A, B){
	return function () {
		h1_premakni(A, B);	
		h1_prepisi(B, A);
		h1_premakni(A, B);	
		h1_prepisi(B, A);
		h1_premakni(A, B);	
		h1_prepisi(B, A);
		}
	}

    function h2_prepisi(A, B){
    	for (var i=0; i<12; i++)	 
		 B[4][i] = A[4][i];

    }
    
        function h2_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=0; i<12; i++)	 
		 B[4][i+3] = A[4][i];
	for (var i=9; i<12; i++)	 
		 B[4][i-9] = A[4][i];		 

	};

	$scope.h2 = function(A,B,S) {
	h2_premakni(A, B);
	h2_prepisi(B, A);
	h1_premakni(S, B);
	h1_prepisi(B, S);
	h2_premakni(S, B);
	h2_prepisi(B, S);
	h3_premakni(S, B);
	h3_prepisi(B, S);
	}
	
	function h2(A,B){
	return function () {
		h2_premakni(A, B);	
		h2_prepisi(B, A);
		}
	}

	function h23(A,B){
	return function () {
		h2_premakni(A, B);	
		h2_prepisi(B, A);
		h2_premakni(A, B);	
		h2_prepisi(B, A);
		h2_premakni(A, B);	
		h2_prepisi(B, A);
		}
	}



	function h3_prepisi(A, B){
	
	for (var i=0; i<12; i++)	 
		 B[3][i] = A[3][i];
		 
	for(var i=0; i<3; i++)
		for(var j=3; j<6; j++)
			B[i][j] = A[i][j];
    
    }

    function h3_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=0; i<12; i++)	 
		 B[3][i+3] = A[3][i];
	for (var i=9; i<12; i++)	 
		 B[3][i-9] = A[3][i];		 

		B[2][5] = A[2][3];
		B[1][5] = A[2][4];
		B[0][5] = A[2][5];
		B[0][5] = A[2][5];
		B[0][4] = A[1][5];
		B[0][3] = A[0][5];								
		B[0][3] = A[0][5];		
		B[1][3] = A[0][4];
		B[2][3] = A[0][3];
		B[2][3] = A[0][3];		
		B[2][4] = A[1][3];
		B[2][5] = A[2][3];  
		B[4][7] = A[4][7];  
    }

	$scope.h3 = function(A,B,S) {

	h3_premakni(A, B);	
	h3_prepisi(B, A);
	};
	
	function h3(A,B){
	return function () {
		h3_premakni(A, B);	
		h3_prepisi(B, A);
		}
	}

	function h33(A,B){
	return function () {
		h3_premakni(A, B);	
		h3_prepisi(B, A);
		h3_premakni(A, B);	
		h3_prepisi(B, A);
		h3_premakni(A, B);	
		h3_prepisi(B, A);
		}
	}

	
	function s1_prepisi(A, B){
	
	for (var i=3; i<6; i++)	 
		 B[i][6] = A[i][6];
	for (var i=3; i<6; i++)	 
		 B[6][i] = A[6][i];
	for (var i=3; i<6; i++)	 
		 B[i][2] = A[i][2];
	for (var i=3; i<6; i++)	 
		 B[2][i] = A[2][i];
	
	for(var i=3; i<6; i++)
		for(var j=3; j<6; j++)
			B[i][j] = A[i][j];

	}
	
	    function s1_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=3; i<6; i++)	 
		 B[i][6] = A[2][i];
	for (var i=0; i<3; i++)	 
		 B[6][5-i] = A[i+3][6];
	for (var i=3; i<6; i++)	 
		 B[i][2] = A[6][i];
	for (var i=0; i<3; i++)	 
		 B[2][5-i] = A[i+3][2];


		B[3][5] = A[3][3];
		B[4][5] = A[3][4];
		B[5][5] = A[3][5];

		B[5][5] = A[3][5];
		B[5][4] = A[4][5];
		B[5][3] = A[5][5];
										
		B[3][3] = A[5][3];		
		B[4][3] = A[5][4];
		B[5][3] = A[5][5];
		
		B[3][5] = A[3][3];		
		B[3][4] = A[4][3];
		B[3][3] = A[5][3]; 
		
		B[4][4] = A[4][4];   
    }
	
	$scope.s1 = function(A,B,S) {

	s1_premakni(A, B);
	s1_prepisi(B, A);	
	};
	
	function s1(A,B){
	return function () {
		s1_premakni(A,B);	
		s1_prepisi(B, A);
		}
	}

	function s13(A,B){
	return function () {
		s1_premakni(A,B);	
		s1_prepisi(B, A);
		s1_premakni(A,B);	
		s1_prepisi(B, A);
		s1_premakni(A,B);	
		s1_prepisi(B, A);
		}
	}

	function s2_prepisi(A, B){
	
		for (var i=3; i<6; i++)	 
		 B[i][7] = A[i][7];
	for (var i=3; i<6; i++)	 
		 B[7][i] = A[7][i];
	for (var i=3; i<6; i++)	 
		 B[i][1] = A[i][1];
	for (var i=3; i<6; i++)	 
		 B[1][i] = A[1][i];
	}
	
    function s2_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=3; i<6; i++)	 
		 B[i][7] = A[1][i];
	for (var i=0; i<3; i++)	 
		 B[7][5-i] = A[i+3][7];
	for (var i=3; i<6; i++)	 
		 B[i][1] = A[7][i];
	for (var i=0; i<3; i++)	 
		 B[1][5-i] = A[i+3][1];

    
    }

	$scope.s2 = function(A,B,S) {
	s2_premakni(A, B);
	s2_prepisi(B, A);	
	s1_premakni(S, B);
	s1_prepisi(B, S);
	s2_premakni(S, B);
	s2_prepisi(B, S);
	s3_premakni(S, B);
	s3_prepisi(B, S);
	};	
	
	function s2(A,B){
	return function () {
		s2_premakni(A, B);	
		s2_prepisi(B, A);
		}
	}

	function s23(A,B){
	return function () {
		s2_premakni(A, B);	
		s2_prepisi(B, A);
		s2_premakni(A, B);	
		s2_prepisi(B, A);
		s2_premakni(A, B);	
		s2_prepisi(B, A);
		}
	}


	function s3_prepisi(A, B){
	
		for (var i=3; i<6; i++)	 
		 B[i][8] = A[i][8];
	for (var i=3; i<6; i++)	 
		 B[8][i] = A[8][i];
	for (var i=3; i<6; i++)	 
		 B[i][0] = A[i][0];
	for (var i=3; i<6; i++)	 
		 B[0][i] = A[0][i];
	
		for(var i=3; i<6; i++)
		for(var j=9; j<12; j++)
			B[i][j] = A[i][j];

	}
	
    function s3_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=3; i<6; i++)	 
		 B[i][8] = A[0][i];
	for (var i=0; i<3; i++)	 
		 B[8][5-i] = A[i+3][8];
	for (var i=3; i<6; i++)	 
		 B[i][0] = A[8][i];
	for (var i=0; i<3; i++)	 
		 B[0][5-i] = A[i+3][0];



		B[3][9] = A[3][11];
		B[3][10] = A[4][11];
		B[3][11] = A[5][11];

		B[3][11] = A[5][11];
		B[4][11] = A[5][10];
		B[5][11] = A[5][9];
										
		B[5][11] = A[5][9];		
		B[5][10] = A[4][9];
		B[5][9] = A[3][9];
		
		B[3][9] = A[3][11];		
		B[4][9] = A[3][10];
		B[5][9] = A[3][9];
		
		B[4][10] = A[4][10];


//		$scope.k55[3][11] = $scope.k54[3][9];
//		$scope.k55[4][11] = $scope.k54[3][10];
//		$scope.k55[5][11] = $scope.k54[3][11];

//		$scope.k55[5][11] = $scope.k54[3][11];
//		$scope.k55[5][10] = $scope.k54[4][11];
//		$scope.k55[5][9] = $scope.k54[5][11];
										
//		$scope.k55[5][9] = $scope.k54[5][11];		
//		$scope.k55[4][9] = $scope.k54[5][10];
//		$scope.k55[3][9] = $scope.k54[5][9];
		
//		$scope.k55[3][11] = $scope.k54[3][9];		
//		$scope.k55[3][10] = $scope.k54[4][9];
//		$scope.k55[3][9] = $scope.k54[5][9];    
    }
	
	
	$scope.s3 = function(A,B,S) {

	s3_premakni(A, B);
	s3_prepisi(B, A);	
	};	
	
	function s3(A,B){
	return function () {
		s3_premakni(A, B);	
		s3_prepisi(B, A);
		}
	}

	function s33(A,B){
	return function () {
		s3_premakni(A, B);	
		s3_prepisi(B, A);
		s3_premakni(A, B);	
		s3_prepisi(B, A);
		s3_premakni(A, B);	
		s3_prepisi(B, A);
		}
	}


	function v1_prepisi(A, B){
	
		for (var i=3; i<6; i++)	 
		 B[3+i][3] = A[3+i][3];
	for (var i=3; i<6; i++)	 
		 B[i][11] = A[i][11];
	for (var i=3; i<6; i++)	 
		 B[i-3][3] = A[i-3][3];
	for (var i=0; i<3; i++)	 
		 B[i+3][3] = A[i+3][3];
		 
		for(var i=3; i<6; i++){
		for(var j=0; j<3; j++)
			B[i][j] = A[i][j];
			}

	}
	
    function v1_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=3; i<6; i++)	 
		 B[3+i][3] = A[i][3];
	for (var i=3; i<6; i++)	 
		 B[8-i][11] = A[i+3][3];
	for (var i=3; i<6; i++)	 
		 B[5-i][3] = A[i][11];
	for (var i=0; i<3; i++)	 
		 B[i+3][3] = A[i][3];



		B[3][2] = A[3][0];
		B[4][2] = A[3][1];
		B[5][2] = A[3][2];

		B[5][2] = A[3][2];
		B[5][1] = A[4][2];
		B[5][0] = A[5][2];
										
		B[5][0] = A[5][2];		
		B[4][0] = A[5][1];
		B[3][0] = A[5][0];
		
		B[3][2] = A[3][0];		
		B[3][1] = A[4][0];
		B[3][0] = A[5][0];
		
		B[4][1] = A[4][1];
    
    }

	
	$scope.v1 = function(A,B,S) {
	v1_premakni(A, B);
	v1_prepisi(B, A);	
	};
	
	function v1(A,B){
	return function () {
		v1_premakni(A, B);	
		v1_prepisi(B, A);
		}
	}

	function v13(A,B){
	return function () {
		v1_premakni(A, B);	
		v1_prepisi(B, A);
		v1_premakni(A, B);	
		v1_prepisi(B, A);
		v1_premakni(A, B);	
		v1_prepisi(B, A);
		}
	}


	function v2_prepisi(A, B){
		for (var i=3; i<6; i++)	 
		 B[3+i][4] = A[3+i][4];
	for (var i=3; i<6; i++)	 
		 B[i][10] = A[i][10];
	for (var i=3; i<6; i++)	 
		 B[i-3][4] = A[i-3][4];
	for (var i=0; i<3; i++)	 
		 B[i+3][4] = A[i+3][4];
	}
	
    function v2_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=3; i<6; i++)	 
		 B[3+i][4] = A[i][4];
	for (var i=3; i<6; i++)	 
		 B[8-i][10] = A[i+3][4];
	for (var i=3; i<6; i++)	 
		 B[5-i][4] = A[i][10];
	for (var i=0; i<3; i++)	 
		 B[i+3][4] = A[i][4];
    
    }
	

	$scope.v2 = function(A,B,S) {
	v2_premakni(A, B);
	v2_prepisi(B, A);	
	v1_premakni(S, B);
	v1_prepisi(B, S);
	v2_premakni(S, B);
	v2_prepisi(B, S);
	v3_premakni(S, B);
	v3_prepisi(B, S);
	};
	
	function v2(A,B){
	return function () {
		v2_premakni(A, B);	
		v2_prepisi(B, A);
		}
	}

	function v23(A,B){
	return function () {
		v2_premakni(A, B);	
		v2_prepisi(B, A);
		v2_premakni(A, B);	
		v2_prepisi(B, A);
		v2_premakni(A, B);	
		v2_prepisi(B, A);
		}
	}



	function v3_prepisi(A, B){
	
		for (var i=3; i<6; i++)	 
		 B[3+i][5] = A[3+i][5];
	for (var i=3; i<6; i++)	 
		 B[i][9] = A[i][9];
	for (var i=3; i<6; i++)	 
		 B[i-3][5] = A[i-3][5];
	for (var i=0; i<3; i++)	 
		 B[i+3][5] = A[i+3][5];
		 
		for(var i=3; i<6; i++)
		for(var j=6; j<9; j++)
			B[i][j] = A[i][j];
	}
	
    function v3_premakni(A, B){
	 //$scope.k54[5][0] = $scope.k54[5][3];
	for (var i=3; i<6; i++)	 
		 B[3+i][5] = A[i][5];
	for (var i=3; i<6; i++)	 
		 B[8-i][9] = A[i+3][5];
	for (var i=3; i<6; i++)	 
		 B[5-i][5] = A[i][9];
	for (var i=0; i<3; i++)	 
		 B[i+3][5] = A[i][5];



		B[3][6] = A[3][8];
		B[3][7] = A[4][8];
		B[3][8] = A[5][8];

		B[3][8] = A[5][8];
		B[4][8] = A[5][7];
		B[5][8] = A[5][6];
										
		B[5][6] = A[3][6];		
		B[5][7] = A[4][6];
		B[5][8] = A[5][6];
		
		B[3][6] = A[3][8];		
		B[4][6] = A[3][7];
		B[5][6] = A[3][6];
		
		B[4][7] = A[4][7];

//		$scope.k55[3][8] = $scope.k54[3][6];
//		$scope.k55[4][8] = $scope.k54[3][7];
//		$scope.k55[5][8] = $scope.k54[3][8];

//		$scope.k55[5][8] = $scope.k54[3][8];
//		$scope.k55[5][7] = $scope.k54[4][8];
//		$scope.k55[5][6] = $scope.k54[5][8];
										
//		$scope.k55[3][6] = $scope.k54[5][6];		
//		$scope.k55[4][6] = $scope.k54[5][7];
//		$scope.k55[5][6] = $scope.k54[5][8];
		
//		$scope.k55[3][8] = $scope.k54[3][6];		
//		$scope.k55[3][7] = $scope.k54[4][6];
//		$scope.k55[3][6] = $scope.k54[5][6];
    
    }
	
	
	$scope.v3 = function(A,B,S) {

	v3_premakni(A, B);
	v3_prepisi(B, A);
	};
	
	function v3(A,B){
	return function () {
		v3_premakni(A, B);	
		v3_prepisi(B, A);
		}
	}

	function v33(A,B){
	return function () {
		v3_premakni(A, B);	
		v3_prepisi(B, A);
		v3_premakni(A, B);	
		v3_prepisi(B, A);
		v3_premakni(A, B);	
		v3_prepisi(B, A);
		}
	}


	$scope.m11 = function(f1) {
		f1();
	}
	
	function m111(f1){
		f1();
	}
	
	function test_f1(A){
		return function(B){ return A+B;};	//function(B){ return 5+B; }
	}

	function fx11(A, A_54, A_55){
		return A(A_54,A_55);
	}

	function fx111(F, A){
		return F(A);
	}
	

	$scope.m1 = function(A54, A00, A0, S, CS) {
	//var test = $scope.v3;
	//$scope.m11($scope.v3);
	//$scope.m11(test);
	//prepisiK0(A00, A0);
	//prepisiK0(A00, A54);
	//console.log(A54);
	dodajSum(A54, S, CS);
	}

	$scope.m2 = function(A54, A55, A56, A00, A0, S) {
	var move = [h1(A54, A55), h2(A54, A55), h3(A54, A55),
			 s1(A54, A55), s2(A54, A55), s3(A54, A55),
			  v1(A54, A55), v2(A54, A55), v3(A54, A55), v1(A54, A55)];

	prepisiK0(A00, A54);	
	prepisiK0(A00, A0);
	prepisiK0(A54, A56);	
	$scope.sum = [];	
	
	var ak = [];
	for (var i=0; i<20; i++){
	
		for (var n1=0; n1<9; n1++){
			ak.push([]);
			for (var m1=0; m1<12; m1++){
				ak[n1].push(A54[n1][m1]);
			}
		}
		
			var moveA = [h1(ak, A55), h2(ak, A55), h3(ak, A55),
			 s1(ak, A55), s2(ak, A55), s3(ak, A55),
			  v1(ak, A55), v2(ak, A55), v3(ak, A55), v1(ak, A55)];

	
	
		var mr = Math.floor(Math.random()*10);
		console.log("random:" + mr);
		var moveR = move[mr];
		//$scope.m11(moveR);
		
		//m111(moveA[mr]);
		m111(move[mr]);
//		S.push([]);
		for (var n=0; n<9; n++){
//			S[i].push([]);
			for (var m=0; m<12; m++){
////				$scope.sum[i][n].push($scope.k54[n][m]);
//				S[i][n].push(ak[n][m]);
			}
		}
		
		//$scope.sum.push($scope.sum[i]);
		//$scope.m11(move[0]);
		//$scope.sum.push(new Array(...($scope.k54)));
		//var ak54 = new Array(...($scope.k54));
		//$scope.sum.push($scope.k54);
		//$scope.sum.push([].concat($scope.k54 || []));
		//$scope.sum = $scope.sum.concat($scope.k54 || []);
	}
	}
	
	
//  #F64B07	oranzna
//  #1D46E1	modra
//  #FFFFFF	bela
//  #52C86A	zelena
//  #F4EC36	rumena
//  #FF1110	rdeca
	function preveriC(A54, A0, AT2, z, x, y){
		var at=0;
		var atx=0;
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][2], A0[3][3], A0[2][3]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[2][3], A0[3][2], A0[3][3]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][3], A0[2][3], A0[3][2]);
		atx += at;
		AT2[0][0][2] += at;
		at=0;
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[2][5], A0[3][5], A0[3][6]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][5], A0[3][6], A0[2][5]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][6], A0[2][5], A0[3][5]);
		atx += at;
		AT2[0][2][2] += at;
		at=0;
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][6], A0[5][5], A0[6][5]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][5], A0[6][5], A0[5][6]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[6][5], A0[5][6], A0[5][5]);
		atx += at;
		AT2[0][2][0] += at;
		at=0;
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[6][3], A0[5][3], A0[5][2]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][3], A0[5][2], A0[6][3]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][2], A0[6][3], A0[5][3]);
		atx += at;
		AT2[0][0][0] += at;
		at=0;
			//alert(A54[3][2] + ":" + A0[5][2]);

		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][11], A0[3][0], A0[0][3]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][0], A0[0][3], A0[3][11]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[0][3], A0[3][11], A0[3][0]);
		atx += at;
		AT2[2][0][2] += at;
		at=0;
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][8], A0[3][9], A0[0][5]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[3][9], A0[0][5], A0[3][8]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[0][5], A0[3][8], A0[3][9]);
		atx += at;
		AT2[2][2][2] += at;
		at=0;
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[8][5], A0[5][9], A0[5][8]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][9], A0[5][8], A0[8][5]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][8], A0[8][5], A0[5][9]);
		atx += at;
		AT2[2][2][0] += at;
		at=0;
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][0], A0[5][11], A0[8][3]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[5][11], A0[8][3], A0[5][0]);
		at += preveri(A54[3][2], A54[3][3], A54[2][3], A0[8][3], A0[5][0], A0[5][11]);
		atx += at;
		AT2[2][0][0] += at;
		at=0;
	return atx;
	}
	
	function testC(A54, A55, A0, S, CS, AT1, AT2){
		//if (A54[3][2] == A0[3][2])
		//if ( (AX == A0[3][2]) && (BX == A0[3][3]) && (CX == A0[2][3]) )
		AT1[0][0][2] += preveriC(A54, A0, AT2, 0, 0, 2);
		dodajSum(A54, S, CS, 0, 's0', 2, 5);
		dodajSum(A54, S, CS, 0, 's0', 2, 5);
		m111(s1(A54, A55, A0));
		AT1[0][0][0] += preveriC(A54, A0, AT2, 0, 2, 2);
//		dodajSum(A54, S, CS, 0, 's1', 2, 5);
		m111(s1(A54, A55, A0));
		AT1[0][2][0] += preveriC(A54, A0, AT2, 0, 2, 0);
		m111(s1(A54, A55, A0));
		AT1[0][2][2] += preveriC(A54, A0, AT2, 0, 0, 0);
		m111(s1(A54, A55, A0));
		m111(v1(A54, A55, A0));
		AT1[2][0][2] += preveriC(A54, A0, AT2,2, 0, 2);
		m111(v1(A54, A55, A0));
		AT1[2][0][0] += preveriC(A54, A0, AT2, 2, 0, 0);
		m111(s3(A54, A55, A0));
		m111(s3(A54, A55, A0));
		m111(v1(A54, A55, A0));
		AT1[2][2][0] += preveriC(A54, A0, AT2, 2, 2, 0);
		m111(v1(A54, A55, A0));
		AT1[2][2][2] += preveriC(A54, A0, AT2, 2, 2, 2);
		m111(v1(A54, A55, A0));
		m111(v1(A54, A55, A0));
		m111(s3(A54, A55, A0));
		m111(s3(A54, A55, A0));
		m111(v1(A54, A55, A0));
		m111(v1(A54, A55, A0));
	}
	
	function preveriE(A54, A0, AT2){
	var at=0;
	var atx=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][2], A0[4][3], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][3], A0[4][2], 1);
		atx += at;
		console.log("E: " + at);
		AT2[0][0][1] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[3][4], A0[2][4], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[2][4], A0[3][4], 1);
		atx += at;
		AT2[0][1][2] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][5], A0[4][6], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][6], A0[4][5], 1);
		atx += at;
		AT2[0][2][1] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[5][4], A0[6][4], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[6][4], A0[5][4], 1);
		atx += at;
		AT2[0][1][0] += at;
		at=0;

		at += preveri(A54[4][2], A54[4][3], 1, A0[3][1], A0[1][3], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[1][3], A0[3][1], 1);
		atx += at;
		AT2[1][0][2] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[1][5], A0[3][7], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[3][7], A0[1][5], 1);
		atx += at;
		AT2[1][2][2] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[5][7], A0[7][5], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[7][5], A0[5][7], 1);
		atx += at;
		AT2[1][2][0] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[5][1], A0[7][3], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[7][3], A0[5][1], 1);
		atx += at;
		AT2[1][0][0] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][0], A0[4][11], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][11], A0[4][0], 1);		
		atx += at;
		AT2[2][0][1] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][8], A0[4][9], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[4][9], A0[4][8], 1);		
		atx += at;
		AT2[2][2][1] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[0][4], A0[3][10], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[3][10], A0[0][4], 1);		
		atx += at;
		AT2[2][1][2] += at;
		at=0;
		at += preveri(A54[4][2], A54[4][3], 1, A0[5][10], A0[8][4], 1);
		at += preveri(A54[4][2], A54[4][3], 1, A0[8][4], A0[5][10], 1);
		atx += at;
		AT2[2][1][0] += at;
		at=0;

	return atx;
	}
	
	function testE(A54, A55, A0, S, CS, AT1, AT2){
		//console.log(AT);
		AT1[0][0][1] += preveriE(A54, A0, AT2);
		m111(s1(A54, A55, A0));
		AT1[0][1][2] += preveriE(A54, A0, AT2);
		m111(s1(A54, A55, A0));
		AT1[0][2][1] += preveriE(A54, A0, AT2);
		m111(s1(A54, A55, A0));
		AT1[0][1][0] += preveriE(A54, A0, AT2);
		m111(s1(A54, A55, A0));
		
		m111(v1(A54, A55, A0));
		AT1[1][0][2] += preveriE(A54, A0, AT2);
		m111(v1(A54, A55, A0));
		AT1[2][0][1] += preveriE(A54, A0, AT2);
		m111(v1(A54, A55, A0));
		AT1[1][0][0] += preveriE(A54, A0, AT2);		
		m111(v1(A54, A55, A0));
		
		m111(s2(A54, A55, A0));
		m111(s2(A54, A55, A0));
		m111(v1(A54, A55, A0));
		AT1[1][2][0] += preveriE(A54, A0, AT2);				
		m111(v1(A54, A55, A0));
		m111(v1(A54, A55, A0));
		AT1[1][2][2] += preveriE(A54, A0, AT2);				
		m111(v1(A54, A55, A0));
		m111(s2(A54, A55, A0));
		m111(s2(A54, A55, A0));
		
		m111(v2(A54, A55, A0));
		m111(v2(A54, A55, A0));
		m111(s1(A54, A55, A0));
		AT1[2][1][2] += preveriE(A54, A0, AT2);
		m111(s1(A54, A55, A0));
		m111(s1(A54, A55, A0));
		AT1[2][1][0] += preveriE(A54, A0, AT2);
		m111(s1(A54, A55, A0));
		m111(v2(A54, A55, A0));
		m111(v2(A54, A55, A0));
		
		m111(s3(A54, A55, A0));
		m111(s3(A54, A55, A0));
		m111(v1(A54, A55, A0));
		m111(v1(A54, A55, A0));
		AT1[2][2][1] += preveriE(A54, A0, AT2);
		m111(v1(A54, A55, A0));
		m111(v1(A54, A55, A0));
		m111(s3(A54, A55, A0));
		m111(s3(A54, A55, A0));	

	}


	function preveri(a1,b1,c1,a0,b0,c0){ if ((a1==a0) && (b1==b0) && (c1==c0)) return 1; else return 0;}
	function testf(A54, A55, A0, S, CS){

		//AT[0][1][1] += (A54[4][4] == A0[4][4])?1:0;	//preveri(A54[4][4], A54[][], A54[][], A0[][], A0[][], A0[][]);
//  #F64B07	oranzna
//  #1D46E1	modra
//  #FFFFFF	bela
//  #52C86A	zelena
//  #F4EC36	rumena
//  #FF1110	rdeca

		var AT1 = [ [[0,0,0], [0,0,0], [0,0,0]], [[0,0,0], [0,14,0], [0,0,0]], [[0,0,0], [0,0,0], [0,0,0]] ];
		var AT2 = [ [[0,0,0], [0,0,0], [0,0,0]], [[0,0,0], [0,14,0], [0,0,0]], [[0,0,0], [0,0,0], [0,0,0]] ];
		var A000 = [0,0,0,0,0,0];
		var barve = ['#F64B07','#1D46E1','#FFFFFF','#52C86A','#F4EC36','#FF1110'];
		barve.map((v,i) => {if (v==A54[4][4]) A000[i]++;});
		barve.map((v,i) => {if (v==A54[4][1]) A000[i]++;});
		barve.map((v,i) => {if (v==A54[4][7]) A000[i]++;});
		barve.map((v,i) => {if (v==A54[4][10]) A000[i]++;});
		barve.map((v,i) => {if (v==A54[1][4]) A000[i]++;});
		barve.map((v,i) => {if (v==A54[7][4]) A000[i]++;});
		console.log(A000);
		var AT0 = ([1,1,1,1,1,1].every((v,i) => v==A000[i]));
		if (AT0){
			testC(A54, A55, A0, S, CS, AT1, AT2);
			testE(A54, A55, A0, S, CS, AT1, AT2);
			alert(AT0 + "\n : " + 
			AT1[0][0][2] + " : " + AT1[0][2][2] + " : " + AT1[0][2][0] + " : " + AT1[0][0][0] + "\n : " + AT1[2][0][2] + " : " + AT1[2][2][2] + " : " + AT1[2][2][0] + " : " + AT1[2][0][0] + "\n" + "\n : " + 
			 AT1[0][0][1] + " : " + AT1[0][1][2] + " : " + AT1[0][2][1] + " : " + AT1[0][1][0] + "\n : " + AT1[1][0][0] + " : " + AT1[1][0][2] + " : " + AT1[1][2][2] + " : " + AT1[1][2][0] + "\n : " + AT1[2][0][1] + " : " + AT1[2][1][2] + " : " + AT1[2][2][1] + " : " + AT1[2][1][0] + "\n" + "\n : " + 
			 AT2[0][0][2] + " : " + AT2[0][2][2] + " : " + AT2[0][2][0] + " : " + AT2[0][0][0] + "\n : " + AT2[2][0][2] + " : " + AT2[2][2][2] + " : " + AT2[2][2][0] + " : " + AT2[2][0][0] + "\n" + "\n : " + 
			 AT2[0][0][1] + " : " + AT2[0][1][2] + " : " + AT2[0][2][1] + " : " + AT2[0][1][0] + "\n : " + AT2[1][0][0] + " : " + AT2[1][0][2] + " : " + AT2[1][2][2] + " : " + AT2[1][2][0] + "\n : " + AT2[2][0][1] + " : " + AT2[2][1][2] + " : " + AT2[2][2][1] + " : " + AT2[2][1][0] + "\n : ");

			}
		else
			alert("Napaka(error)...barve(colors)-sredina(center) ");
		//var tt = [0,0,0,0,0,0].every((v,i)=> v === A000[i]);
		/*alert(tt);
		AT[0][1][1] += preveri(A54[4][4], 1, 1, A0[4][4], 1, 1);
		AT[0][1][1] += preveri(A54[4][4], 1, 1, A0[4][1], 1, 1);
		AT[0][1][1] += preveri(A54[4][4], 1, 1, A0[4][7], 1, 1);
		AT[0][1][1] += preveri(A54[4][4], 1, 1, A0[4][10], 1, 1);
		AT[0][1][1] += preveri(A54[4][4], 1, 1, A0[1][4], 1, 1);
		AT[0][1][1] += preveri(A54[4][4], 1, 1, A0[7][4], 1, 1);
		*/
		//console.log(A54[4][2] + ":" +  A54[4][3] + ":" + A0[4][2] + ":" +  A0[4][3]);
	}
	
	function m3(A54, A55, S, CS){
	//prepisiK0(A00, A0);
	var move = [['', 5, 5, 0, h1(A54, A55)], ['', 5, 5, 1, h1(A54, A55)], ['🠈', 5, 3, 1, h1(A54, A55)],
	 ['🠋', 5, 3, 0, v1(A54, A55)],
	  ['🠊', 5, 5, 0, h1(A54, A55)],
	   ['🠊', 2, 5, 0, s1(A54, A55)],
	    ['', 5, 5, 0, h1(A54, A55)], ['', 5, 5, 1, h1(A54, A55)], ['🠈', 5, 3, 1, h1(A54, A55)],
	     ['', 2, 5, 0, s1(A54, A55)], ['', 2, 5, 1, s1(A54, A55)], ['🠈', 2, 3, 1, s1(A54, A55)],
	      ['', 5, 3, 0, v1(A54, A55)], ['', 5, 3, 1, v1(A54, A55)], ['🠉', 3, 3, 1, v1(A54, A55)],
	       ['🠊', 2, 5, 0, s1(A54, A55)],
	        ['🠊', 5, 5, 0, h1(A54, A55)]];
	        
	move.map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]);});
	console.log("CS: " + CS);

	}
	
		//9
	$scope.m3 = function(A54, A55, A0, S, CS) {
		//m3(A54, A55, S, CS);
		testf(A54, A55, A0, S, CS);
	}


	function m4(A54, A55, S, CS){
	//prepisiK0(A00, A0);
	var move = [['🠋', 5, 5, 0, v3(A54, A55)], ['🠋', 5, 5, 0, v3(A54, A55)],
	 ['🠊', 0, 5, 0, s3(A54, A55)],
	  ['🠋', 5, 5, 0, v3(A54, A55)], ['🠋', 5, 5, 0, v3(A54, A55)],
	   ['', 0, 5, 0, s3(A54, A55)], ['', 0, 5, 1, s3(A54, A55)], ['🠈', 0, 3, 1, s3(A54, A55)],
	    ['', 5, 5, 0, v3(A54, A55)], ['', 5, 5, 1, v3(A54, A55)], ['🠉', 3, 5, 1, v3(A54, A55)],
	     ['🠊', 0, 5, 0, s3(A54, A55)], 
	      ['', 5, 5, 0, v3(A54, A55)], ['', 5, 5, 1, v3(A54, A55)], ['🠉', 3, 5, 1, v3(A54, A55)],
	      ['', 0, 5, 0, s3(A54, A55)], ['', 0, 5, 1, s3(A54, A55)], ['🠈', 0, 3, 1, s3(A54, A55)]];
	        
	//move.map((x) => $scope.m11(x));
	move.map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]); });

	}
	
	function m5(A54, A55, S, CS, ind=0){
	//prepisiK0(A00, A0);
	var move = [ [['🠋', 5, 3, 0, v1(A54, A55)], ['🠋', 5, 3, 0, v1(A54, A55)],
	 ['🠊', 0, 5, 0, s3(A54, A55)],
	  ['🠋', 5, 3, 0, v1(A54, A55)], ['🠋', 5, 5, 0, v3(A54, A55)],
	   ['🠊', 2, 5, 0, s1(A54, A55)], ['🠊', 2, 5, 0, s1(A54, A55)],
	    ['', 5, 5, 0, v3(A54, A55)], ['', 5, 5, 1, v3(A54, A55)], ['🠉', 3, 5, 1, v3(A54, A55)],['', 5, 3, 0, v1(A54, A55)], ['', 5, 3, 1, v1(A54, A55)], ['🠉', 3, 3, 1, v1(A54, A55)],
	     ['🠊', 3, 5, 0, h3(A54, A55)], ['🠊', 3, 5, 0, h3(A54, A55)], 
	       ['', 0, 5, 0, s3(A54, A55)], ['', 0, 5, 1, s3(A54, A55)], ['🠈', 0, 3, 1, s3(A54, A55)],
	       ['🠋', 5, 3, 0, v1(A54, A55)], ['🠋', 5, 3, 0, v1(A54, A55)]],
	[['🠋', 5, 3, 0, v1(A54, A55)], ['🠋', 5, 3, 0, v1(A54, A55)],
	 ['🠊', 0, 5, 0, s3(A54, A55)],
	 	     ['🠊', 3, 5, 0, h3(A54, A55)], ['🠊', 3, 5, 0, h3(A54, A55)], 
	  ['🠋', 5, 3, 0, v1(A54, A55)], ['🠋', 5, 5, 0, v3(A54, A55)],
	   ['🠊', 2, 5, 0, s1(A54, A55)], ['🠊', 2, 5, 0, s1(A54, A55)],
	    ['', 5, 5, 0, v3(A54, A55)], ['', 5, 5, 1, v3(A54, A55)], ['🠉', 3, 5, 1, v3(A54, A55)],['', 5, 3, 0, v1(A54, A55)], ['', 5, 3, 1, v1(A54, A55)], ['🠉', 3, 3, 1, v1(A54, A55)],
	      ['', 0, 5, 0, s3(A54, A55)], ['', 0, 5, 1, s3(A54, A55)], ['🠈', 0, 3, 1, s3(A54, A55)],
	       ['🠋', 5, 3, 0, v1(A54, A55)], ['🠋', 5, 3, 0, v1(A54, A55)]] ];
	        
	//move.map((x) => $scope.m11(x));
	move[ind].map((x) => {console.log("m5: " + ind + " : " + x[4]); m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]); });

	}
	//				🠈	🠊	🠉	🠋
	function m6(A54, A55, S, CS){
	//prepisiK0(A00, A0);
	var move = [['🠊', 0, 5, 0, s3(A54, A55)],
		 ['🠋', 5, 5, 0, v3(A54, A55)], ['🠋', 5, 5, 0, v3(A54, A55)],
		 ['🠊', 0, 5, 0, s3(A54, A55)], ['🠊', 0, 5, 0, s3(A54, A55)],
	  ['', 5, 5, 0, v3(A54, A55)], ['', 5, 5, 0, v3(A54, A55)], ['🠉', 3, 5, 1, v3(A54, A55)],
	   ['🠊', 0, 5, 0, s3(A54, A55)], 
	   ['🠋', 5, 5, 0, v3(A54, A55)],
	   ['🠊', 0, 5, 0, s3(A54, A55)],
	    ['🠋', 5, 5, 0, v3(A54, A55)], ['🠋', 5, 5, 0, v3(A54, A55)],
	     ['🠊', 2, 5, 0, s1(A54, A55)],
	     ['🠊', 5, 5, 0, h1(A54, A55)],
	       ['', 0, 5, 0, s3(A54, A55)], ['', 0, 5, 1, s3(A54, A55)], ['🠈', 0, 3, 1, s3(A54, A55)], 
	       ['', 5, 5, 0, h1(A54, A55)], ['', 5, 5, 1, h1(A54, A55)], ['🠈', 5, 3, 1, h1(A54, A55)],
	      ['', 2, 5, 0, s1(A54, A55)], ['', 2, 5, 1, s1(A54, A55)], ['🠈', 2, 3, 1, s1(A54, A55)]];
	        
	//move.map((x) => $scope.m11(x));
	move.map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]);});

	}


	function prepisiK0(A, B){
		for(var i=0; i<9; i++)
			for(var j=0; j<12; j++)
				B[i][j] = A[i][j];
				//$scope.k54[i][j] = $scope.k0[i][j];
	}

//#F64B07
//#1D46E1  #FFFFFF  #52C86A  #F4EC36
//#FF1110

//	function c11(move){
//		move.map((x) => $scope.m11(x));	
//	}

	function h0_pr(A, B){
		return function () {
			h1_premakni(A, B);
			h1_prepisi(B, A);
			h2_premakni(A, B);
			h2_prepisi(B, A);
			h3_premakni(A, B);
			h3_prepisi(B, A);
		};
	}

	function v0_pr(A, B){
		return function () {
			v1_premakni(A, B);
			v1_prepisi(B, A);
			v2_premakni(A, B);
			v2_prepisi(B, A);
			v3_premakni(A, B);
			v3_prepisi(B, A);
		};
	}


	function h2_pr(A, B){
		return function () {
			h2_premakni(A, B);
			h2_prepisi(B, A);
		};
	}

	function h2_pre(A, B){
		return function () {
			h2_prepisi(A, B);
		};
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	function dodajSum(A54, S, CS, prepisi=0, znak='', x=1, y=1, barva='#000000'){
		if (prepisi==0){
			S.push([]);
			CS.push([]);
		for (var n=0; n<9; n++){
			S[S.length-1].push([]);
			CS[CS.length-1].push([]);
			for (var m=0; m<12; m++){
////				$scope.sum[i][n].push($scope.k54[n][m]);
				S[S.length-1][n].push(A54[n][m]);
				CS[CS.length-1][n].push(['', barva]);
			}
		}
		}	else	{
			if (prepisi == 1){
				for (var n=0; n<9; n++){
					for (var m=0; m<12; m++){
						S[S.length-1][n][m] = A54[n][m];
						//CS[CS.length-1][n][m] = '';
					}
				}
				//CS[CS.length-2][x][y][0] = znak;
				//CS[CS.length-2][x][y][1] = barva;

				}
		}
		//var csl = (csl>1)?1:2;
		//CS[CS.length-2][x][y].push([]);
		CS[CS.length-2][x][y][0] = znak;
		CS[CS.length-2][x][y][1] = barva;

	}
	
	function dodajSumZ(A54, S, CS, prepisi=0, znak='', x=1, y=1, barva='#000000'){
		CS[CS.length-1][x][y][0] = znak;
		CS[CS.length-1][x][y][1] = barva;	
	}

	function dodajSum0(S, CS, color, l=12){
			S.push([]);
			CS.push([]);
//		for (var n=0; n<9; n++){
			S[S.length-1].push([]);
			CS[CS.length-1].push([]);
			for (var m=0; m<l; m++){
////				$scope.sum[i][n].push($scope.k54[n][m]);
				S[S.length-1][0].push(color);
				//CS[CS.length-1][0].push(['', color]);
			}
			for (var n=0; n<9; n++){
				CS[CS.length-1].push([]);
				for (var m=0; m<l; m++){
					CS[CS.length-1][n].push(['', color]);
				}
			}
//		}
	
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function c1(A54,A55, A56, A0, A00, S, CS, test=0){
	// samo za testiranje:
	if (test==1) dodajSum(A54, S, CS, 0, 'C1', 1, 2);
		console.log("CS: " + CS);
//		v3_premakni($scope.k54, $scope.k55);
//		v3_prepisi($scope.k55, $scope.k54);
//#1F806	🠈	🠊	🠉	🠋
		var move1  = [[['🠊',5,5,0, h1(A54,A55)], ['🠊',4,5,1,h2(A54,A55)], ['🠊',3,5,1, h3(A54,A55)]],
			[['🠊',5,5,0, h1(A54,A55)], ['🠊',4,5,1,h2(A54,A55)], ['🠊',3,5,1, h3(A54,A55)],['🠊',5,5,0, h1(A54,A55)], ['🠊',4,5,1,h2(A54,A55)], ['🠊',3,5,1, h3(A54,A55)]], 
			[['',5,5,0, h1(A54,A55)], ['',4,5,1,h2(A54,A55)], ['',3,5,1, h3(A54,A55)],['',5,5,1, h1(A54,A55)], ['',4,5,1,h2(A54,A55)], ['',3,5,1, h3(A54,A55)],['🠈',5,3,1, h1(A54,A55)], ['🠈',4,3,1,h2(A54,A55)], ['🠈',3,3,1, h3(A54,A55)]], 
			[['🠋',5,3,0, v1(A54,A55)], ['🠋',5,4,1,v2(A54,A55)], ['🠋',5,5,1, v3(A54,A55)]],
			[['',5,3,0, v1(A54,A55)], ['',5,4,1,v2(A54,A55)], ['',5,5,1, v3(A54,A55)],['',5,3,1, v1(A54,A55)], ['',5,4,1,v2(A54,A55)], ['',5,5,1, v3(A54,A55)],['🠉',3,3,1, v1(A54,A55)], ['🠉',3,4,1,v2(A54,A55)], ['🠉',3,5,1, v3(A54,A55)]]
			];
//		var move0  = [[h2_pr($scope.k54, $scope.k55), h2_pre($scope.k54, $scope.k55)],
//				[h2_pr($scope.k54, $scope.k55), h2_pre($scope.k54, $scope.k55)],
//				[h2_pr($scope.k54, $scope.k55), h2_pre($scope.k54, $scope.k55)],
//				[h2_pr($scope.k54, $scope.k55), h2_pre($scope.k54, $scope.k55)],
//				[h2_pr($scope.k54, $scope.k55), h2_pre($scope.k54, $scope.k55)]
//		];
//		var move0  = [[h0_pr($scope.k0, $scope.k55)],
//				[h0_pr($scope.k0, $scope.k55), h0_pr($scope.k0, $scope.k55)],
//				[h0_pr($scope.k0, $scope.k55), h0_pr($scope.k0, $scope.k55), h0_pr($scope.k0, $scope.k55)],
//				[v0_pr($scope.k0, $scope.k55)],
//				[v0_pr($scope.k0, $scope.k55), v0_pr($scope.k0, $scope.k55), v0_pr($scope.k0, $scope.k55)]
//		];

	//var move2  = [[$scope.h2, $scope.h2]];
		//var m1 = move1[0];
		//$scope.m11(move1[0]);

//		function fx11(A, B, C){
//			return A(B,C);
//		}

//	function fx111(F, A){
//		return F(A);
//	}

					
//		function test_f1(A){
//			return function(B){ return A+B;};
//		}		
		var test_f2 = test_f1(5);
		console.log("test_f: " + test_f2 + " : " + test_f2(4));
		
		//var test_f4 = fx111(move1[0][0][4], A0);
////		var test_f41 = move1[0][0][4];	// h1(A54,A55)		fx111(H,X,Y)...return function H(X,Y);
		//var test_f4 = fx11(test_f41);  
		//console.log("test_f4:" + test_f4);
		//m111(test_f4);
		var test_f4 = fx111(test_f1, 2);  
		console.log("test_f4:" + test_f4 + " : " + test_f4(3));

		var mNum = 0;
		prepisiK0(A00, A0);
		prepisiK0(A54, A56);
		while (A00[4][4] != A54[4][4]){
			prepisiK0(A56, A54);
			//console.log("f:" + mNum + ":" + move1[mNum][0][4]);
			//move1[mNum].map((x) => {m111(x[4]); var test_f3 = fx111(x[4], A0); console.log("test_f3:" + test_f3);} );
			move1[mNum].map((x) => {m111(x[4]);} );
			//move0[mNum].map((x) => $scope.m11(x));	//je ze zacetno stanje
			mNum++;
		}
		if (mNum > 0){
			prepisiK0(A56, A54);
			move1[mNum-1].map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]);});
			}
		
		//#1F80A	🠊	🠈	🠉	🠋
		var move2  = [[['🠊',2,5,0, s1(A54,A55)], ['🠊',1,5,1,s2(A54,A55)], ['🠊',0,5,1, s3(A54,A55)]],
			[['🠊',2,5,0, s1(A54,A55)], ['🠊',1,5,1,s2(A54,A55)], ['🠊',0,5,1, s3(A54,A55)],['🠊',2,5,0, s1(A54,A55)], ['🠊',1,5,1,s2(A54,A55)], ['🠊',0,5,1, s3(A54,A55)]], 
			[['',2,5,0, s1(A54,A55)], ['',1,5,1,s2(A54,A55)], ['',0,5,1, s3(A54,A55)],['',2,5,1, s1(A54,A55)], ['',1,5,1,s2(A54,A55)], ['',0,5,1, s3(A54,A55)],['🠈',2,3,1, s1(A54,A55)], ['🠈',1,3,1,s2(A54,A55)], ['🠈',0,3,1, s3(A54,A55)]] 
			];
		mNum = 0;
		prepisiK0(A54, A56);
		while (A00[1][4] != A54[1][4]){
			prepisiK0(A56, A54);
			move2[mNum].map((x) => m111(x[4]));
			mNum++;
		}
		if (mNum > 0){
			prepisiK0(A56, A54);
			move2[mNum-1].map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]);});
			}
	}

	$scope.c1 = function(A54,A55, A56, A0, A00, S, CS) {	c1(A54,A55, A56, A0, A00, S, CS);	}
		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	function c2(A54, A55, A56, A0, S, CS) {
//#1F806	🠈	🠊	🠉	🠋
		var move3  = [[['🠋',2,5,0, v3(A54, A55)]], [['🠋',2,5,0, v3(A54, A55)], ['🠋',2,5,0, v3(A54, A55)]], [['',2,5,0, v3(A54, A55)],['',2,5,1, v3(A54, A55)],['🠉',3,5,1, v3(A54, A55)]],
				[['🠋',2,5,0, v3(A54, A55)], ['🠊',5,2,0,h1(A54, A55)], ['',0,5,0,s3(A54, A55)], ['',0,5,1,s3(A54, A55)], ['🠈',0,3,1,s3(A54, A55)], ['',5,2,0,h1(A54, A55)], ['',5,2,1,h1(A54, A55)], ['🠈',5,0,1,h1(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				
				
				[['🠊',3,2,0,h3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['🠊',5,2,0,h1(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['',5,2,0,h1(A54, A55)], ['',5,2,1,h1(A54, A55)], ['🠈',5,0,1,h1(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				
				[['🠊',3,2,0,h3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['🠊',3,2,0,h3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)]],
				[['',5,2,0,h1(A54, A55)], ['',5,2,1,h1(A54, A55)], ['🠈',5,0,1,h1(A54, A55)], ['',2,5,0,v3(A54, A55)], ['',2,5,1,v3(A54, A55)], ['🠉',0,5,1,v3(A54, A55)], ['🠊',5,2,0,h1(A54, A55)]],
				[['',0,5,0,s3(A54, A55)], ['',0,5,1,s3(A54, A55)], ['🠈',0,3,1,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['🠊',5,2,0,h1(A54, A55)], ['',2,5,0,v3(A54, A55)], ['',2,5,1,v3(A54, A55)], ['🠉',0,5,1,v3(A54, A55)]],
				[['🠊',5,2,0,h1(A54, A55)], ['🠊',5,2,0,h1(A54, A55)], ['',0,5,0,s3(A54, A55)], ['',0,5,1,s3(A54, A55)], ['🠈',0,3,1,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				
				[['🠋',2,3,0,v1(A54, A55)], ['🠋',2,3,0,v1(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['',2,3,0,v1(A54, A55)], ['',2,3,1,v1(A54, A55)], ['🠉',0,3,1,v1(A54, A55)], ['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)]],
				[['',3,2,0,h3(A54, A55)], ['🠈',3,2,0,h3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)]],
				[['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)]],				
				[['🠊',0,5,0,s3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)]],
				[['🠊',0,5,0,s3(A54, A55)], ['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)]],
				[['🠊',5,2,0,h1(A54, A55)], ['🠊',5,2,0,h1(A54, A55)], ['',2,5,0,v3(A54, A55)], ['',2,5,1,v3(A54, A55)], ['🠉',0,5,1,v3(A54, A55)], ['🠊',5,2,0,h1(A54, A55)], ['🠊',5,2,0,h1(A54, A55)]],
				[['🠋',2,3,0,v1(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['',2,3,0,v1(A54, A55)], ['',2,3,1,v1(A54, A55)], ['🠉',0,3,1,v1(A54, A55)], ['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)]]];
		var mNum = 0;
		prepisiK0(A54, A56);
		while ( (A0[4][5] != A54[4][5]) || (A0[4][6] != A54[4][6]) ){
			prepisiK0(A56, A54);
			console.log("f:" + mNum + ":" + move3[mNum][0][4]);
			move3[mNum].map((x) => m111(x[4]));
			mNum++;
		}
		if (mNum > 0){
			prepisiK0(A56, A54);
			move3[mNum-1].map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]); dodajSum(A54, S, CS, 1, 'X', 4, 5, A0[4][5]); dodajSum(A54, S, CS, 1, 'X', 4, 6, A0[4][6]);});
		}

	}
	
	$scope.c2 = function(A54, A55, A56, A0, S, CS) {	c2(A54, A55, A56, A0, S, CS);	}
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
////33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
	function c3(A54, A55, A56, A0, A00, S, CS) {
		dodajSum(A54,S, CS, 0, 'c3', 1, 2);
		dodajSum0(S, CS, '#000000', 24);	
		dodajSum(A54,S, CS, 0, 'c1', 1, 2);
		c1(A54, A55, A56, A0, A00, S, CS);
		/*
		if (A00[4][4] == A54[4][4]){
			dodajSumZ(A54, S, CS, 0, 'V', 4, 4);
			dodajSumZ(A54, S, CS, 0, 'V', 4, 10);		
		}		*/
		if (A00[1][4] == A54[1][4]){
			dodajSumZ(A54, S, CS, 2, 'V', 1, 4);
			dodajSumZ(A54, S, CS, 0, 'V', 4, 1);
			dodajSumZ(A54, S, CS, 0, 'V', 4, 7);
			dodajSumZ(A54, S, CS, 0, 'V', 7, 4);
			dodajSumZ(A54, S, CS, 0, 'V', 4, 4);
			dodajSumZ(A54, S, CS, 0, 'V', 4, 10);		
		}
		dodajSum0(S, CS,'#000000',24);	
				
		dodajSum(A54,S, CS, 0, 'c21', 1, 2);
		c2(A54, A55, A56, A0, S, CS);
		dodajSumZ(A54, S, CS, 0, 'V', 4, 5);
		dodajSumZ(A54, S, CS, 0, 'V', 4, 6);				
		dodajSum0(S, CS, '#000000');
		dodajSum(A54,S, CS, 2, '🠊', 0, 5);
		dodajSum(A54,S, CS, 2, '🠊', 1, 5);	
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);				
//		dodajSum(A54,S, CS, 0, 'T', 0, 5);
		//$scope.s1(A54, A55, A56, A0);
		m111(s1(A54, A55));
		m111(s2(A54, A55));
		m111(s3(A54, A55));
//		dodajSum0(S, CS, '#777777');	
		dodajSum(A54,S, CS, 0, 'T', 0, 2);
		s1_premakni(A0, A55);
		s1_prepisi(A55, A0);
		s2_premakni(A0, A55);
		s2_prepisi(A55, A0);
		s3_premakni(A0, A55);
		s3_prepisi(A55, A0);
////		prepisiK0(A55, A0);

/*
/* debug
//
[['',2,3,0,v1(A54, A55)], ['',2,3,1,v1(A54, A55)], ['🠉',0,3,1,v1(A54, A55)], ['',3,2,0,h3(A54, A55)], ['',3,2,1,h3(A54, A55)], ['🠈',3,0,1,h3(A54, A55)], ['🠊',0,5,0,s3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠋',2,5,0,v3(A54, A55)], ['🠊',3,2,0,h3(A54, A55)]].map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]); dodajSum(A54, S, CS, 1, 'X', 4, 5, '#CC1177');});
//while ( (A0[4][5] != A54[4][5]) || (A0[4][6] != A54[4][6]) ){
console.log("napaka1: " + A0[4][5] + " : " + A54[4][5] + " :: " + A0[4][6] + " : "  + A54[4][6]);
*/
		c2(A54, A55, A56, A0,S, CS);		
		dodajSumZ(A54, S, CS, 0, 'V', 4, 5);		
		dodajSumZ(A54, S, CS, 0, 'V', 4, 6);								
		dodajSumZ(A54, S, CS, 0, 'V', 5, 4);		
		dodajSumZ(A54, S, CS, 0, 'V', 6, 4);								
		dodajSum0(S, CS, '#000000');	
		dodajSum(A54,S, CS, 2, '🠊', 0, 5);
		dodajSum(A54,S, CS, 2, '🠊', 1, 5);	
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);				
		
		m111(s1(A54, A55));
		m111(s2(A54, A55));
		m111(s3(A54, A55));
//		dodajSum0(S,'#777777');	
		dodajSum(A54,S, CS);
		s1_premakni(A0, A55);
		s1_prepisi(A55, A0);
		s2_premakni(A0, A55);
		s2_prepisi(A55, A0);
		s3_premakni(A0, A55);
		s3_prepisi(A55, A0);
		c2(A54, A55, A56, A0,S, CS);				
		dodajSumZ(A54, S, CS, 0, 'V', 4, 5);
		dodajSumZ(A54, S, CS, 0, 'V', 4, 6);										
		dodajSumZ(A54, S, CS, 0, 'V', 5, 4);
		dodajSumZ(A54, S, CS, 0, 'V', 6, 4);
		dodajSumZ(A54, S, CS, 0, 'V', 4, 3);
		dodajSumZ(A54, S, CS, 0, 'V', 4, 2);
		dodajSum0(S, CS, '#000000');	
		dodajSum(A54,S, CS, 2, '🠊', 0, 5);
		dodajSum(A54,S, CS, 2, '🠊', 1, 5);	
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);				

		m111(s1(A54, A55));
		m111(s2(A54, A55));
		m111(s3(A54, A55));
//		dodajSum0(S,'#777777');	
		dodajSum(A54,S, CS);
		s1_premakni(A0, A55);
		s1_prepisi(A55, A0);
		s2_premakni(A0, A55);
		s2_prepisi(A55, A0);
		s3_premakni(A0, A55);
		s3_prepisi(A55, A0);
		c2(A54, A55, A56, A0,S, CS);				
		dodajSumZ(A54, S, CS, 0, 'V', 3, 4);		
		dodajSumZ(A54, S, CS, 0, 'V', 2, 4);								
		dodajSumZ(A54, S, CS, 0, 'V', 4, 3);		
		dodajSumZ(A54, S, CS, 0, 'V', 4, 2);								
		dodajSumZ(A54, S, CS, 0, 'V', 4, 5);		
		dodajSumZ(A54, S, CS, 0, 'V', 4, 6);								
		dodajSumZ(A54, S, CS, 0, 'V', 5, 4);		
		dodajSumZ(A54, S, CS, 0, 'V', 6, 4);								
		dodajSum0(S, CS, '#000000',24);	
		dodajSum(A54,S, CS, 2, '🠊', 0, 5);
		dodajSum(A54,S, CS, 2, '🠊', 1, 5);	
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);				
		
		c1(A54, A55, A56, A0, A00, S, CS);
		prepisiK0(A00, A0);

	}
	
		$scope.c3 = function(A54, A55, A56, A0, A00, S, CS) {	c3(A54, A55, A56, A0, A00, S, CS);	}



////444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444		
	function c4(A54, A55, A56, A0, S, CS, ind) {
		console.log(ind+1);
//[[h3(A54, A55), s3(A54, A55), h3(A54, A55), h3(A54, A55), h3(A54, A55)],
//				 [s3(A54, A55), s3(A54, A55), s3(A54, A55), v3(A54, A55), v3(A54, A55), v3(A54, A55), s3(A54, A55), s3(A54, A55), v3(A54, A55), s3(A54, A55), v3(A54, A55), v3(A54, A55), v3(A54, A55), s3(A54, A55), s3(A54, A55), s3(A54, A55), v3(A54, A55)], 
//				 [v3(A54, A55), v3(A54, A55), v3(A54, A55)],

		var move3  = [[['🠊', 3, 4, 0, h3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 3, 4, 0, h3(A54, A55)], ['', 3, 4, 1, h3(A54, A55)], ['🠈', 3, 4, 1, h3(A54, A55)]],
				[['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]],
			[['🠊', 5, 4, 0, h1(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['', 5, 4, 0, h1(A54, A55)], ['', 5, 4, 1, h1(A54, A55)], ['🠈', 5, 4, 1, h1(A54, A55)], ['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]],
				 
				[['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]],
				[['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)]],
								
				[['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]],
				[['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]],
				
				[['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠊', 3, 4, 0, h3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 3, 4, 0, h3(A54, A55)], ['', 3, 4, 1, h3(A54, A55)], ['🠈', 3, 4, 1, h3(A54, A55)]],
				
				[['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]],
//				[s3(A54, A55), h3(A54, A55), ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], h3(A54, A55), h3(A54, A55),
//				h3(A54, A55)],

				[['🠊', 5, 4, 0, h1(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['', 5, 4, 0, h1(A54, A55)], ['', 5, 4, 1, h1(A54, A55)], ['🠈', 5, 4, 1, h1(A54, A55)],
				['🠊', 3, 4, 0, h3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 3, 4, 0, h3(A54, A55)], ['', 3, 4, 1, h3(A54, A55)], ['🠈', 3, 4, 1, h3(A54, A55)]],
				
				
				[['🠊', 5, 4, 0, h1(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['', 5, 4, 0, h1(A54, A55)], ['', 5, 4, 1, h1(A54, A55)], ['🠈', 5, 4, 1, h1(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]],
				
				[['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 3, 4, 0, h3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 3, 4, 0, h3(A54, A55)], ['', 3, 4, 1, h3(A54, A55)], ['🠈', 3, 4, 1, h3(A54, A55)]], 
				[['🠊', 0, 4, 0, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 
				[['🠊', 0, 4, 0, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 

				[['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 3, 4, 0, h3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 3, 4, 0, h3(A54, A55)], ['', 3, 4, 1, h3(A54, A55)], ['🠈', 3, 4, 1, h3(A54, A55)]], 
				[['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 
				[['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 

				[['', 4, 3, 0, v1(A54, A55)], ['', 4, 3, 1, v1(A54, A55)], ['🠉', 4, 3, 1, v1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 3, 0, v1(A54, A55)], ['🠊', 3, 4, 0, h3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 3, 4, 0, h3(A54, A55)], ['', 3, 4, 1, h3(A54, A55)], ['🠈', 3, 4, 1, h3(A54, A55)]], 
				[['', 4, 3, 0, v1(A54, A55)], ['', 4, 3, 1, v1(A54, A55)], ['🠉', 4, 3, 1, v1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 3, 0, v1(A54, A55)], ['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 
				[['', 4, 3, 0, v1(A54, A55)], ['', 4, 3, 1, v1(A54, A55)], ['🠉', 4, 3, 1, v1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 3, 0, v1(A54, A55)], ['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 
				
				[['', 5, 4, 0, h1(A54, A55)], ['', 5, 4, 1, h1(A54, A55)], ['🠈', 5, 4, 1, h1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 5, 4, 0, h1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['🠊', 3, 4, 0, h3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 3, 4, 0, h3(A54, A55)], ['', 3, 4, 1, h3(A54, A55)], ['🠈', 3, 4, 1, h3(A54, A55)]], 
				[['', 5, 4, 0, h1(A54, A55)], ['', 5, 4, 1, h1(A54, A55)], ['🠈', 5, 4, 1, h1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 5, 4, 0, h1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],['🠋', 4, 5, 0, v3(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 
				[['', 5, 4, 0, h1(A54, A55)], ['', 5, 4, 1, h1(A54, A55)], ['🠈', 5, 4, 1, h1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 5, 4, 0, h1(A54, A55)], ['🠊', 0, 4, 0, s3(A54, A55)],['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 1, s3(A54, A55)],['🠈', 0, 4, 1, s3(A54, A55)], ['🠋', 4, 5, 0, v3(A54, A55)]], 

				
				[['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)], 
				['🠊', 0, 4, 0, s3(A54, A55)],['🠊', 0, 4, 0, s3(A54, A55)],
				['🠋', 4, 5, 0, v3(A54, A55)],
				['🠊', 0, 4, 0, s3(A54, A55)],
				['', 4, 5, 0, v3(A54, A55)], ['', 4, 5, 1, v3(A54, A55)], ['🠉', 4, 5, 1, v3(A54, A55)],
				 ['', 0, 4, 0, s3(A54, A55)],['', 0, 4, 0, s3(A54, A55)], ['🠈', 0, 4, 0, s3(A54, A55)],
				  ['🠋', 4, 5, 0, v3(A54, A55)]],

				
				];
		var mNum = 0;
		prepisiK0(A54, A56);
		while ( (A0[3][5] != A54[3][5]) || (A0[2][5] != A54[2][5]) || (A0[3][6] != A54[3][6]) ){
			prepisiK0(A56, A54);
			//move3[mNum].map((x) => $scope.m11(x[4]));
			console.log("c4:" + mNum); // + " : " + move3[mNum]);
			move3[mNum].map((x) => console.log(x[4]));
			move3[mNum].map((x) => m111(x[4]));
			mNum++;
		}
		if (mNum > 0){
		//	mNum = ind+1;
			prepisiK0(A56, A54);
			move3[mNum-1].map((x) => {m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]); dodajSum(A54, S, CS, 1, 'X', 3, 5, A0[3][5]); dodajSum(A54, S, CS, 1, 'X', 3, 6, A0[3][6]); dodajSum(A54, S, CS, 1, 'X', 2, 5, A0[2][5]);});
			}

	}
	
	$scope.c4 = function(A54, A55, A56, A0, S, CS, ind) {	c4(A54, A55, A56, A0, S, CS, ind);	 }
	
////555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
		function c5(A54, A55, A56, A0, A00, S, CS) {
//		dodajSum(A54,S);
//		dodajSum0(S,'#000000');	
//		$scope.c1(A54, A55, A56, A00, S);
//		dodajSum0(S,'#000000');	
				
		c4(A54, A55, A56, A0, S, CS);
		dodajSumZ(A54,S, CS, 0, 'V', 3, 5);
		dodajSum0(S, CS, '#000000');	
		dodajSum(A54,S, CS, 2, '🠊', 0, 5);
		dodajSum(A54,S, CS, 2, '🠊', 1, 5);	
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);				

		//$scope.s1(A54, A55, A56, A0);
		m111(s1(A54, A55));
		m111(s2(A54, A55));
		m111(s3(A54, A55));
//		dodajSum0(S, CS, '#777777');	
		dodajSum(A54,S, CS);
		s1_premakni(A0, A55);
		s1_prepisi(A55, A0);
		s2_premakni(A0, A55);
		s2_prepisi(A55, A0);
		s3_premakni(A0, A55);
		s3_prepisi(A55, A0);
//		prepisiK0(A55, A0);
		c4(A54, A55, A56, A0, S, CS);		
		dodajSumZ(A54,S, CS, 0, 'V', 3, 5);
		dodajSumZ(A54,S, CS, 0, 'V', 5, 5);
		dodajSum0(S, CS, '#000000');	
		dodajSum(A54,S, CS, 2, '🠊', 0, 5);
		dodajSum(A54,S, CS, 2, '🠊', 1, 5);	
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);				

		m111(s1(A54, A55));
		m111(s2(A54, A55));
		m111(s3(A54, A55));
//		dodajSum0(S, CS, '#777777');	
		dodajSum(A54,S, CS);
		s1_premakni(A0, A55);
		s1_prepisi(A55, A0);
		s2_premakni(A0, A55);
		s2_prepisi(A55, A0);
		s3_premakni(A0, A55);
		s3_prepisi(A55, A0);
		c4(A54, A55, A56, A0, S, CS);	
		dodajSumZ(A54,S, CS, 0, 'V', 3, 5);
		dodajSumZ(A54,S, CS, 0, 'V', 5, 5);
		dodajSumZ(A54,S, CS, 0, 'V', 5, 3);
			
		dodajSum0(S, CS, '#000000');	
		dodajSum(A54,S, CS, 2, '🠊', 0, 5);
		dodajSum(A54,S, CS, 2, '🠊', 1, 5);	
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);
		dodajSum(A54,S, CS, 2, '🠊', 2, 5);								

		m111(s1(A54, A55));
		m111(s2(A54, A55));
		m111(s3(A54, A55));
//		dodajSum0(S, CS, '#777777');	
		dodajSum(A54,S, CS);
		s1_premakni(A0, A55);
		s1_prepisi(A55, A0);
		s2_premakni(A0, A55);
		s2_prepisi(A55, A0);
		s3_premakni(A0, A55);
		s3_prepisi(A55, A0);
		c4(A54, A55, A56, A0, S, CS);				
		dodajSumZ(A54,S, CS, 0, 'V', 3, 5);
		dodajSumZ(A54,S, CS, 0, 'V', 5, 5);
		dodajSumZ(A54,S, CS, 0, 'V', 5, 3);
		dodajSumZ(A54,S, CS, 0, 'V', 3, 3);
		//dodajSum0(S, CS, '#000000');	
	}
	
		$scope.c5 = function(A54, A55, A56, A0, A00, S, CS) {	c5(A54, A55, A56, A0, A00, S, CS);	}
	

/*
		var move1  = [[['🠊',5,5,0, h1(A54,A55)], ['🠊',4,5,1,h2(A54,A55)], ['🠊',3,5,1, h3(A54,A55)]],
			[['🠊',5,5,0, h1(A54,A55)], ['🠊',4,5,1,h2(A54,A55)], ['🠊',3,5,1, h3(A54,A55)],['🠊',5,5,0, h1(A54,A55)], ['🠊',4,5,1,h2(A54,A55)], ['🠊',3,5,1, h3(A54,A55)]], 
			[['',5,5,0, h1(A54,A55)], ['',4,5,1,h2(A54,A55)], ['',3,5,1, h3(A54,A55)],['',5,5,1, h1(A54,A55)], ['',4,5,1,h2(A54,A55)], ['',3,5,1, h3(A54,A55)],['🠈',5,3,1, h1(A54,A55)], ['🠈',4,3,1,h2(A54,A55)], ['🠈',3,3,1, h3(A54,A55)]], 
			[['🠋',5,3,0, v1(A54,A55)], ['🠋',5,4,1,v2(A54,A55)], ['🠋',5,5,1, v3(A54,A55)]],
			[['',5,3,0, v1(A54,A55)], ['',5,4,1,v2(A54,A55)], ['',5,5,1, v3(A54,A55)],['',5,3,1, v1(A54,A55)], ['',5,4,1,v2(A54,A55)], ['',5,5,1, v3(A54,A55)],['🠉',3,3,1, v1(A54,A55)], ['🠉',3,4,1,v2(A54,A55)], ['🠉',3,5,1, v3(A54,A55)]]
			];
*/



		$scope.c61 = function(A54, A55, A56, A0, S, CS, ind=0) {
			dodajSum(A0, S, CS);
			/*
			dodajSum(A54, S, CS, 1, '🡪', 3, 3, '#000000');
			dodajSum(A54, S, CS, 1, '🡲', 3, 4, '#000000');
			dodajSum(A54, S, CS, 1, '🡺', 3, 5, '#000000');			
			dodajSum(A54, S, CS, 1, '🠊', 4, 3, '#000000');
			dodajSum(A54, S, CS, 1, '🢂', 4, 4, '#000000');
			dodajSum(A54, S, CS, 1, '⟶', 4, 5, '#000000');
			dodajSum(A54, S, CS, 1, '🢡', 5, 3, '#000000');
			dodajSum(A54, S, CS, 1, '🠞', 5, 4, '#000000');
			dodajSum(A54, S, CS, 1, '🠞', 5, 5, '#000000');
			*/
		}
////66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
		//$scope.c6 = function(A54, A55, A56, A0, S, ind=0) {
		function c6(A54, A55, A56, A0, S, CS, ind=0) {

		var move3  = [
				[['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				['🠋', 5,5, 0, v3(A54, A55)],
				['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				['', 5,5, 0, v3(A54, A55)], ['', 5,5, 1, v3(A54, A55)], ['🠉', 3,5, 1, v3(A54, A55)], 
				['🠊', 5,3,0, h1(A54, A55)], 
				 ['🠊', 2,5, 0, s1(A54, A55)],
				  ['🠊', 5,3,0, h1(A54, A55)],
				  ['', 2,5, 0, s1(A54, A55)],['', 2,5, 1, s1(A54, A55)], ['🠈', 2,5, 1, s1(A54, A55)]
				  ],
				  
				  [['🠊', 5,3,0, h1(A54, A55)], 
				['🠋', 5, 3, 0, v1(A54, A55)],
				['🠊', 5,3,0, h1(A54, A55)],
				['', 5, 3, 0, v1(A54, A55)], ['', 5, 3, 1, v1(A54, A55)], ['🠉', 3, 3, 1, v1(A54, A55)], 
				['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				 ['', 2,5, 0, s1(A54, A55)], ['', 2,5, 1, s1(A54, A55)], ['🠈', 2,3, 1, s1(A54, A55)],
				  ['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				  ['🠊', 2,5, 0, s1(A54, A55)]]
				];
		var mNum = 0;
		//prepisiK0(A54, A56);
			
		var ntd = 0;
		var err = 0;
		var err1 = 0;
		while( (ntd < 4) && (err<30) ) {
		err++;
		////h1(A54, A55, A56, A0); 
		//h1_premakni(A54, A55); h1_prepisi(A55, A54);
		//dodajSum(A54,S, CS, 0, '🠊', 5, 5);					
		////h1_premakni(A0, A55); h1_prepisi(A55, A0);					
		if ( (A54[5][4] != A0[7][4]) && (A54[6][4] != A0[7][4]) ){
			ntd=0;
			while ( (A0[4][4] != A54[5][4]) && (err1 < 14) ){
				err1++;
				//h3(A54, A55, A56, A0); 
				h3_premakni(A54, A55); h3_prepisi(A55, A54);
				h3_premakni(A0, A55); h3_prepisi(A55, A0);
				//h2(A54, A55, A56, A0); 
				h2_premakni(A0, A55); h2_prepisi(A55, A0);
				h2_premakni(A54, A55); h2_prepisi(A55, A54);
				h1_premakni(A0, A55); h1_prepisi(A55, A0);
				dodajSum(A54,S, CS, 0, '🠊', 3, 5);	
				dodajSum(A54,S, CS, 1, '🠊', 4, 5);	
			}
			dodajSumZ(A54,S, CS, 0, 'V', 4, 4);
			dodajSumZ(A54,S, CS, 0, 'V', 5, 4);
			dodajSumZ(A54,S, CS, 0, 'V', 6, 4);
			dodajSum0(S, CS, '#000000');
			dodajSum(A54,S, CS);
			console.log("c6");
			if ((A54[6][4] == A0[4][7]) ){		
				move3[mNum+ind].map((x) => {console.log("a:" + mNum + " : " + x); 
					m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]);
					dodajSum(A54,S, CS, 2, 'X', 4, 5, A0[4][5]);	dodajSum(A54,S, CS, 2, 'X', 4, 6, A0[4][6]); });
				dodajSum0(S, CS, '#000000');
				dodajSum(A54,S, CS, 2, 'V', 4, 5);
				dodajSum(A54,S, CS, 2, 'V', 4, 6);
				dodajSum(A54,S, CS);	
			}	else	{
				move3[mNum+1].map((x) => {console.log("b:" + mNum + " : " + x);
					 m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]);
					 dodajSum(A54,S, CS, 2, 'X', 4, 2, A0[4][2]);	dodajSum(A54,S, CS, 2, 'X', 4, 3, A0[4][3]);});
				dodajSum0(S, CS, '#000000');	
				dodajSum(A54,S, CS, 2, 'V', 4, 2);
				dodajSum(A54,S, CS, 2, 'V', 4, 3);
				dodajSum(A54,S, CS);
			//			if ((A54[5][4] == A0[4][7]) )
			}
			
		}
		else{
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			dodajSum(A54,S, CS, 0, '🠊', 5, 5);					
			ntd++;
			}
		}
			
		//if (mNum >= 0){
		//	mNum = ind+1;
			//prepisiK0(A56, A54);
		//	move3[mNum+ind].map((x) => {$scope.m11(x); dodajSum(A54, S);});
		//	}



	}
////7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
		function c7(A54, A55, A56, A0, S, CS, ind) {
/*
		var move3  = [
				[h1(A54, A55), h1(A54, A55), h1(A54, A55), 
				v3(A54, A55),
				h1(A54, A55), h1(A54, A55), h1(A54, A55), 
				v3(A54, A55), v3(A54, A55), v3(A54, A55), 
				h1(A54, A55), 
				 s1(A54, A55),
				  h1(A54, A55),
				  s1(A54, A55), s1(A54, A55), s1(A54, A55)],
				  
				  [h1(A54, A55), 
				v1(A54, A55),
				h1(A54, A55),
				v1(A54, A55), v1(A54, A55), v1(A54, A55), 
				h1(A54, A55), h1(A54, A55), h1(A54, A55), 
				 s1(A54, A55), s1(A54, A55), s1(A54, A55),
				  h1(A54, A55), h1(A54, A55), h1(A54, A55), 
				  s1(A54, A55)]
				];
				*/
				
		var move3  = [
				[['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				['🠋', 5,5, 0, v3(A54, A55)],
				['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				['', 5,5, 0, v3(A54, A55)], ['', 5,5, 1, v3(A54, A55)], ['🠉', 3,5, 1, v3(A54, A55)], 
				['🠊', 5,3,0, h1(A54, A55)], 
				 ['🠊', 2,5, 0, s1(A54, A55)],
				  ['🠊', 5,3,0, h1(A54, A55)],
				  ['', 2,5, 0, s1(A54, A55)],['', 2,5, 1, s1(A54, A55)], ['🠈', 2,5, 1, s1(A54, A55)]
				  ],
				  
				  [['🠊', 5,3,0, h1(A54, A55)], 
				['🠋', 5, 3, 0, v1(A54, A55)],
				['🠊', 5,3,0, h1(A54, A55)],
				['', 5, 3, 0, v1(A54, A55)], ['', 5, 3, 1, v1(A54, A55)], ['🠉', 3, 3, 1, v1(A54, A55)], 
				['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				 ['', 2,5, 0, s1(A54, A55)], ['', 2,5, 1, s1(A54, A55)], ['🠈', 2,3, 1, s1(A54, A55)],
				  ['', 5,3,0, h1(A54, A55)], ['', 5,3,1, h1(A54, A55)], ['🠈', 5,3,1, h1(A54, A55)], 
				  ['🠊', 2,5, 0, s1(A54, A55)]]
				];
				

		var mNum = 0;
		//prepisiK0(A54, A56);

//dodajSum(A0, S);
		//v1(A54, A55, A56, A0); 
		v1_premakni(A0, A55); v1_prepisi(A55, A0);
		v1_premakni(A54, A55); v1_prepisi(A55, A54);
		//v1(A54, A55, A56, A0); 
		v1_premakni(A0, A55); v1_prepisi(A55, A0);
		v1_premakni(A54, A55); v1_prepisi(A55, A54);
		//v1(A54, A55, A56, A0); 
		v1_premakni(A0, A55); v1_prepisi(A55, A0);
		v1_premakni(A54, A55); v1_prepisi(A55, A54);
		//v2(A54, A55, A56, A0); 
		v2_premakni(A0, A55); v2_prepisi(A55, A0);
		v2_premakni(A54, A55); v2_prepisi(A55, A54);
		//v2(A54, A55, A56, A0); 
		v2_premakni(A0, A55); v2_prepisi(A55, A0);
		v2_premakni(A54, A55); v2_prepisi(A55, A54);
		//v2(A54, A55, A56, A0); 
		v2_premakni(A0, A55); v2_prepisi(A55, A0);
		v2_premakni(A54, A55); v2_prepisi(A55, A54);
		//v3(A54, A55, A56, A0); 
		v3_premakni(A0, A55); v3_prepisi(A55, A0);
		v3_premakni(A54, A55); v3_prepisi(A55, A54);
		//v3(A54, A55, A56, A0); 
		v3_premakni(A0, A55); v3_prepisi(A55, A0);
		v3_premakni(A54, A55); v3_prepisi(A55, A54);
		//v3(A54, A55, A56, A0); 
		v3_premakni(A0, A55); v3_prepisi(A55, A0);
		v3_premakni(A54, A55); v3_prepisi(A55, A54);

//dodajSum(A0, S);
dodajSum0(S, CS, '#000000',24);
dodajSum(A54,S, CS, 2, '🠉', 2, 3);
dodajSum(A54,S, CS, 2, '🠉', 2, 4);	
dodajSum(A54,S, CS, 2, '🠉', 2, 5);				
	
dodajSum(A54, S, CS);

		c6(A54, A55, A56, A0, S, CS, ind);


		var ntd = 0;
		var err = 0;
		while ( (ntd<4) && (err<30) ){
			err++;
			if ( (A54[4][5] != A0[4][4]) || (A54[4][6] != A0[4][7]) ){
				ntd=0;
				dodajSum0(S, CS, '#000000');	
				dodajSum(A54,S, CS);
				dodajSumZ(A54,S, CS, 0, 'X', 5, 4, A0[4][6]);
				dodajSumZ(A54,S, CS, 0, 'X', 6, 4, A0[4][5]);
				move3[mNum].map((x) => {console.log("c7:" + mNum);m111(x[4]); dodajSum(A54, S, CS, x[3], x[0], x[1], x[2]);});
				c6(A54, A55, A56, A0, S, CS, ind);
				//dodajSum0(S, CS, '#000000');	
				}
			else{
				ntd++;
				//h1(A54, A55, A56, A0);
				//dodajSum0(S, CS, '#000000');	
				dodajSum(A54,S, CS);
				dodajSumZ(A54,S, CS, 0, '🠊', 3, 5);
				dodajSumZ(A54,S, CS, 0, '🠊', 4, 5);
				dodajSumZ(A54,S, CS, 0, '🠊', 5, 5);
				
				h1_premakni(A0, A55); h1_prepisi(A55, A0);
				h1_premakni(A54, A55); h1_prepisi(A55, A54);
				//h2(A54, A55, A56, A0); 
				h2_premakni(A0, A55); h2_prepisi(A55, A0);
				h2_premakni(A54, A55); h2_prepisi(A55, A54);
				//h3(A54, A55, A56, A0); 
				h3_premakni(A0, A55); h3_prepisi(A55, A0);
				h3_premakni(A54, A55); h3_prepisi(A55, A54);
				
				}
		}
		
		/*
/*					
			if (mNum >= 0){
		//	mNum = ind+1;
			//prepisiK0(A56, A54);
			move3[mNum].map((x) => {m111(x); dodajSum(A54, S);});
			}
*/		
	dodajSum(A54,S, CS);
	}
	
			$scope.c7 = function(A54, A55, A56, A0, S, CS, ind) {	c7(A54, A55, A56, A0, S, CS, ind);	}

////88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
		function c8(A54, A55, A56, A0, S, CS) {

//dodajSum0(S, CS, '#000000',24);
//				🠈	🠊	🠉	🠋
dodajSumZ(A54,S, CS, 2, '🠉', 2, 3);
dodajSumZ(A54,S, CS, 2, '🠉', 2, 4);	
dodajSumZ(A54,S, CS, 2, '🠉', 2, 5);				

		console.log("c8");
		v1_premakni(A54, A55); v1_prepisi(A55, A54);
		v1_premakni(A0, A55); v1_prepisi(A55, A0);
		v2_premakni(A54, A55); v2_prepisi(A55, A54);
		v2_premakni(A0, A55); v2_prepisi(A55, A0);
		v3_premakni(A54, A55); v3_prepisi(A55, A54);
		v3_premakni(A0, A55); v3_prepisi(A55, A0);
		v1_premakni(A54, A55); v1_prepisi(A55, A54);
		v1_premakni(A0, A55); v1_prepisi(A55, A0);
		v2_premakni(A54, A55); v2_prepisi(A55, A54);
		v2_premakni(A0, A55); v2_prepisi(A55, A0);
		v3_premakni(A54, A55); v3_prepisi(A55, A54);
		v3_premakni(A0, A55); v3_prepisi(A55, A0);
		v1_premakni(A54, A55); v1_prepisi(A55, A54);
		v1_premakni(A0, A55); v1_prepisi(A55, A0);
		v2_premakni(A54, A55); v2_prepisi(A55, A54);
		v2_premakni(A0, A55); v2_prepisi(A55, A0);
		v3_premakni(A54, A55); v3_prepisi(A55, A54);
		v3_premakni(A0, A55); v3_prepisi(A55, A0);

/*
		h1_premakni(A54, A55); h1_prepisi(A55, A54);
		h1_premakni(A0, A55); h1_prepisi(A55, A0);
		h1_premakni(A54, A55); h1_prepisi(A55, A54);		
		h1_premakni(A0, A55); h1_prepisi(A55, A0);
		h2_premakni(A54, A55); h2_prepisi(A55, A54);
		h2_premakni(A0, A55); h2_prepisi(A55, A0);
		h2_premakni(A54, A55); h2_prepisi(A55, A54);
		h2_premakni(A0, A55); h2_prepisi(A55, A0);		
		h3_premakni(A54, A55); h3_prepisi(A55, A54);
		h3_premakni(A0, A55); h3_prepisi(A55, A0);
		h3_premakni(A54, A55); h3_prepisi(A55, A54);
		h3_premakni(A0, A55); h3_prepisi(A55, A0);
	*/
		dodajSum(A54, S, CS);
		dodajSum0(S, CS, '#000000',24);	
		dodajSum(A54, S, CS);
		dodajSumZ(A54, S, CS, 0, 'X', 3, 2);
		dodajSumZ(A54, S, CS, 0, 'X', 3, 3);				
		dodajSumZ(A54, S, CS, 0, 'X', 2, 3);		
		//  #767A9B
//  #999BA4
  
//  #F64B07	oranzna
//  #1D46E1	modra
//  #FFFFFF	bela
//  #52C86A	zelena
//  #F4EC36	rumena
//  #FF1110	rdeca
				
		var err = 0;
		while ( (((A54[3][2]!=A0[4][1]) && (A54[3][2]!=A0[4][4]) && (A54[3][2]!=A0[1][4])) ||
			((A54[3][3]!=A0[4][1]) && (A54[3][3]!=A0[4][4]) && (A54[3][3]!=A0[1][4])) ||
			((A54[2][3]!=A0[4][1]) && (A54[2][3]!=A0[4][4]) && (A54[2][3]!=A0[1][4]))) && err <10 ) {
			err++;
			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			dodajSum(A54, S, CS, 0, '🠊', 2, 5);
			//s1_premakni(A0, A55); s1_prepisi(A55, A0);	
		}
		
		//dodajSum(A54, S, CS);
		dodajSumZ(A54, S, CS, 0, '1', 2, 3);
		dodajSumZ(A54, S, CS, 0, '1', 3, 2);
		dodajSumZ(A54, S, CS, 0, '1', 3, 3);
		dodajSum0(S, CS, '#000000');
		dodajSum(A54, S, CS);	

		console.log(A0[4][1]);
		console.log(A0[4][4]);
		console.log(A0[7][4]);
		
		console.log(A54[3][5]);
		console.log(A54[3][6]);
		console.log(A54[2][5]);
		
		
		if ( ((A54[3][5]==A0[4][1]) || (A54[3][5]==A0[4][4]) || (A54[3][5]==A0[7][4])) &&
			((A54[3][6]==A0[4][1]) || (A54[3][6]==A0[4][4]) || (A54[3][6]==A0[7][4])) &&
			((A54[2][5]==A0[4][1]) || (A54[2][5]==A0[4][4]) || (A54[2][5]==A0[7][4])) ){
			dodajSumZ(A54, S, CS, 0, 'X', 5, 3); //, A54[2][5]);
			dodajSumZ(A54, S, CS, 0, 'X', 5, 2); //, A54[3][5]);
			dodajSumZ(A54, S, CS, 0, 'X', 6, 3); //, A54[3][6]);
			dodajSumZ(A54, S, CS, 0, '2', 3, 5); //, A54[2][5]);
			dodajSumZ(A54, S, CS, 0, '2', 3, 6); //, A54[3][5]);
			dodajSumZ(A54, S, CS, 0, '2', 2, 5); //, A54[3][6]);
			//				🠈	🠊	🠉	🠋
			dodajSumZ(A54,S, CS, 2, '🠊', 0, 4);
			dodajSumZ(A54,S, CS, 2, '🠊', 1, 4);	
			dodajSumZ(A54,S, CS, 2, '🠊', 2, 4);	
			
			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);
			
			console.log("c8.1");
			dodajSum(A54, S, CS);
			dodajSum0(S, CS, '#000000');			

			dodajSum(A54, S, CS);
			m3(A54,A55, S, CS);
			dodajSum(A54, S, CS);
			dodajSumZ(A54,S, CS, 2, '🠊', 0, 5);
			dodajSumZ(A54,S, CS, 2, '🠊', 1, 5);	
			dodajSumZ(A54,S, CS, 2, '🠊', 2, 5);				
			
			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);

			dodajSumZ(A54,S, CS, 2, '🠊', 0, 5);
			dodajSumZ(A54,S, CS, 2, '🠊', 1, 5);	
			dodajSumZ(A54,S, CS, 2, '🠊', 2, 5);				
			
			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);

			dodajSum(A54, S, CS);
			dodajSumZ(A54,S, CS, 2, '🠊', 0, 5);
			dodajSumZ(A54,S, CS, 2, '🠊', 1, 5);	

			//!//s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);

			dodajSum(A54, S, CS);
			dodajSumZ(A54,S, CS, 2, '1', 3, 2);
			dodajSumZ(A54,S, CS, 2, '1', 3, 3);	
			dodajSumZ(A54,S, CS, 2, '1', 2, 3);				

			dodajSumZ(A54,S, CS, 2, '2', 5, 2);
			dodajSumZ(A54,S, CS, 2, '2', 5, 3);	
			dodajSumZ(A54,S, CS, 2, '2', 6, 3);				
		
			dodajSum0(S, CS, '#000000');	
			dodajSum(A54, S, CS);

			}
		//
		//dodajSum0(S, CS, '#000000');	
		//dodajSum(A54, S, CS);

		if ( ((A54[5][5]==A0[4][1]) || (A54[5][5]==A0[4][4]) || (A54[5][5]==A0[7][4])) &&
			((A54[5][6]==A0[4][1]) || (A54[5][6]==A0[4][4]) || (A54[5][6]==A0[7][4])) &&
			((A54[6][5]==A0[4][1]) || (A54[6][5]==A0[4][4]) || (A54[6][5]==A0[7][4])) ){
			dodajSumZ(A54, S, CS, 0, 'X', 5, 3); //, A54[5][6]);
			dodajSumZ(A54, S, CS, 0, 'X', 5, 2); //, A54[5][5]);
			dodajSumZ(A54, S, CS, 0, 'X', 6, 3); //, A54[5][6]);
			dodajSumZ(A54,S, CS, 2, '2', 5, 5);
			dodajSumZ(A54,S, CS, 2, '2', 5, 6);	
			dodajSumZ(A54,S, CS, 2, '2', 6, 5);				

			//dodajSumZ(A54,S, CS, 2, '🠊', 0, 5);
			//dodajSumZ(A54,S, CS, 2, '🠊', 1, 5);	
			//dodajSumZ(A54,S, CS, 2, '🠊', 2, 5);				
			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);
			
			//dodajSum(A54, S, CS);
			//dodajSumZ(A54,S, CS, 2, '🠊', 0, 5);
			//dodajSumZ(A54,S, CS, 2, '🠊', 1, 5);	
			//dodajSumZ(A54,S, CS, 2, '🠊', 2, 5);				

			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);
			
			//dodajSum(A54, S, CS);
			dodajSumZ(A54,S, CS, 2, '🠈', 0, 5);
			dodajSumZ(A54,S, CS, 2, '🠈', 1, 5);	
			dodajSumZ(A54,S, CS, 2, '🠈', 2, 5);				

			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);
			
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);
			m3(A54,A55, S, CS);
			dodajSum(A54, S, CS);
			dodajSumZ(A54,S, CS, 2, '🠊', 0, 5);
			dodajSumZ(A54,S, CS, 2, '🠊', 1, 5);	
			dodajSumZ(A54,S, CS, 2, '🠊', 2, 5);				

			console.log("c8.2");
			
			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);

			dodajSumZ(A54,S, CS, 2, '1', 3, 2);
			dodajSumZ(A54,S, CS, 2, '1', 3, 3);	
			dodajSumZ(A54,S, CS, 2, '1', 2, 3);				

			dodajSumZ(A54,S, CS, 2, '2', 5, 2);
			dodajSumZ(A54,S, CS, 2, '2', 5, 3);	
			dodajSumZ(A54,S, CS, 2, '2', 6, 3);				

			dodajSum0(S, CS, '#000000');	
			dodajSum(A54, S, CS);
			}
		//dodajSum(A54, S, CS);
		//dodajSum0(S, CS, '#000000');	
		//dodajSum(A54, S, CS);
			
		if ( ((A54[3][5]==A0[4][7]) || (A54[3][5]==A0[4][4]) || (A54[3][5]==A0[7][4])) &&
			((A54[3][6]==A0[4][7]) || (A54[3][6]==A0[4][4]) || (A54[3][6]==A0[7][4])) &&
			((A54[2][5]==A0[4][7]) || (A54[2][5]==A0[4][4]) || (A54[2][5]==A0[7][4])) ){
				dodajSumZ(A54, S, CS, 0, 'X', 3, 5); //, A54[5][6]);				
				dodajSumZ(A54, S, CS, 0, 'X', 3, 6); //, A54[5][5]);
				dodajSumZ(A54, S, CS, 0, 'X', 2, 5); //, A54[6][5]);
				dodajSumZ(A54, S, CS, 0, '4', 5, 5); //, A54[5][6]);				
				dodajSumZ(A54, S, CS, 0, '4', 5, 6); //, A54[5][5]);
				dodajSumZ(A54, S, CS, 0, '4', 6, 5); //, A54[6][5]);

				dodajSum(A54, S, CS);
				m3(A54, A55, S, CS);
				//dodajSum(A54, S, CS);
				console.log("c8.3");
			}
			dodajSumZ(A54,S, CS, 2, '1', 3, 2);
			dodajSumZ(A54,S, CS, 2, '1', 3, 3);	
			dodajSumZ(A54,S, CS, 2, '1', 2, 3);				

			dodajSumZ(A54,S, CS, 2, '2', 5, 2);
			dodajSumZ(A54,S, CS, 2, '2', 5, 3);	
			dodajSumZ(A54,S, CS, 2, '2', 6, 3);				

			dodajSumZ(A54,S, CS, 2, '3', 5, 5);
			dodajSumZ(A54,S, CS, 2, '3', 5, 6);	
			dodajSumZ(A54,S, CS, 2, '3', 6, 5);				

			dodajSumZ(A54,S, CS, 2, '4', 3, 5);
			dodajSumZ(A54,S, CS, 2, '4', 3, 6);	
			dodajSumZ(A54,S, CS, 2, '4', 2, 5);				

		//dodajSum(A54, S, CS);
		//dodajSum0(S, CS, '#000000');	
			
	/*
		var c8 = 0;
		
		while (c8 < 7){
		
		if ( ((A54[3][5]==A0[4][4]) || (A54[3][5]==A0[4][7]) ||(A54[3][5]==A0[1][4])) &&
			((A54[3][6]==A0[4][4]) || (A54[3][6]==A0[4][7]) ||(A54[3][6]==A0[1][4])) &&
			((A54[2][5]==A0[4][4]) || (A54[2][5]==A0[4][7]) ||(A54[2][5]==A0[1][4])) )
			c8 += 1;

		if ( ((A54[5][5]==A0[4][4]) || (A54[5][5]==A0[4][7]) ||(A54[5][5]==A0[7][4])) &&
			((A54[5][6]==A0[4][4]) || (A54[5][6]==A0[4][7]) ||(A54[5][6]==A0[7][4])) &&
			((A54[6][5]==A0[4][4]) || (A54[6][5]==A0[4][7]) ||(A54[6][5]==A0[7][4])) )
			c8 += 2;

		if ( ((A54[5][2]==A0[4][4]) || (A54[5][2]==A0[4][7]) ||(A54[5][2]==A0[1][4])) &&
			((A54[5][3]==A0[4][4]) || (A54[5][3]==A0[4][7]) ||(A54[5][3]==A0[1][4])) &&
			((A54[6][3]==A0[4][4]) || (A54[6][3]==A0[4][7]) ||(A54[6][3]==A0[1][4])) )
			c8 += 4;
		
/*
		if (c8 == 1){
		}
		
		if (c8 == 4){
		}
		
		if (c8 == 2){
		}		
			
		}
*/
		
		}
		
		$scope.c8 = function(A54, A55, A56, A0, S, CS) {	c8(A54, A55, A56, A0, S, CS); 	}
		
////99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
		$scope.c9 = function(A54, A55, A56, A0, S, CS) {
		
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum0(S, CS, '#000000');	
			m4(A54, A55, S, CS);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);

		}

////101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010				
		function c10(A54, A55, A56, A0, S, CS) {		
		
		//dodajSum(A0, S, CS);
		dodajSum0(S, CS, '#000000', 24);	
		dodajSum(A54, S, CS);

		
		var vsota = 0;
		var nerr = 0;
		if ( (A54[3][2]==A0[4][1]) && (A54[3][3]==A0[4][4]) && (A54[2][3]==A0[1][4]) )
			vsota++;
		if ( (A54[3][5]==A0[4][4]) && (A54[3][6]==A0[4][7]) && (A54[2][5]==A0[1][4]) )
			vsota++;
		if ( (A54[5][5]==A0[4][4]) && (A54[5][6]==A0[4][7]) && (A54[6][5]==A0[7][4]) )
			vsota++;
		if ( (A54[5][2]==A0[4][1]) && (A54[5][3]==A0[4][4]) && (A54[6][3]==A0[7][4]) )
			vsota++;
		
		
		console.log("vsota: " + vsota);
		if ( vsota == 0 ){
			while( ((A54[3][2]!=A0[1][4]) || (A54[3][3]!=A0[4][1]) || (A54[2][3]!=A0[4][4])) && (nerr<5) ){
				s1_premakni(A54, A55); s1_prepisi(A55, A54);
				s2_premakni(A54, A55); s2_prepisi(A55, A54);
				s3_premakni(A54, A55); s3_prepisi(A55, A54);
				s1_premakni(A0, A55); s1_prepisi(A55, A0);
				s2_premakni(A0, A55); s2_prepisi(A55, A0);
				s3_premakni(A0, A55); s3_prepisi(A55, A0);
				dodajSum(A54, S, CS, 0, '🠊', 2, 5);
				nerr++;
			}
			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 1, 'X1', 3, 6);
			dodajSumZ(A54, S, CS, 1, 'X2', 3, 5);
			dodajSumZ(A54, S, CS, 1, 'X3', 2, 5);
			dodajSumZ(A54, S, CS, 1, 'Y1', 6, 5);
			dodajSumZ(A54, S, CS, 1, 'Y2', 5, 5);
			dodajSumZ(A54, S, CS, 1, 'Y3', 5, 6);
			dodajSumZ(A54, S, CS, 1, 'Z1', 5, 2);
			dodajSumZ(A54, S, CS, 1, 'Z2', 5, 3);
			dodajSumZ(A54, S, CS, 1, 'Z3', 6, 3);

			//dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 0, 'V', 3, 2);
			dodajSumZ(A54, S, CS, 0, '0', 3, 3);
			dodajSumZ(A54, S, CS, 0, '0', 3, 5);
			dodajSumZ(A54, S, CS, 0, '0', 5, 3);
			dodajSumZ(A54, S, CS, 0, '0', 5, 5);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS, 0, '🠊', 3, 4);
			dodajSum(A54, S, CS, 1, '🠊', 4, 4);
			dodajSum(A54, S, CS, 1, '🠊', 5, 4);
			dodajSum0(S, CS, '#000000');	
			dodajSum(A54, S, CS);
			m4(A54, A55, S, CS);
			dodajSum0(S, CS, '#000000');	
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS);
			dodajSum(A54, S, CS, 0, '🠊', 3, 4);
			dodajSum(A54, S, CS, 1, '🠊', 4, 4);
			dodajSum(A54, S, CS, 1, '🠊', 5, 4);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS);
			dodajSum(A54, S, CS, 0, '🠊', 3, 4);
			dodajSum(A54, S, CS, 1, '🠊', 4, 4);
			dodajSum(A54, S, CS, 1, '🠊', 5, 4);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS);
			dodajSum(A54, S, CS, 0, '🠊', 3, 4);
			dodajSum(A54, S, CS, 1, '🠊', 4, 4);
			dodajSum(A54, S, CS, 1, '🠊', 5, 4);
			dodajSumZ(A54, S, CS, 1, 'X3', 3, 6);
			dodajSumZ(A54, S, CS, 1, 'X1', 3, 5);
			dodajSumZ(A54, S, CS, 1, 'X2', 2, 5);
			dodajSumZ(A54, S, CS, 1, 'Y3', 6, 5);
			dodajSumZ(A54, S, CS, 1, 'Y1', 5, 5);
			dodajSumZ(A54, S, CS, 1, 'Y2', 5, 6);
			dodajSumZ(A54, S, CS, 1, 'Z3', 5, 2);
			dodajSumZ(A54, S, CS, 1, 'Z1', 5, 3);
			dodajSumZ(A54, S, CS, 1, 'Z2', 6, 3);

			//dodajSum0(S, CS, '#000000');	
			
		}

		nerr=0;
		if (vsota == 2){
			while( ((A54[3][2]!=A0[4][4] || (A54[3][3]!=A0[1][4])) || (A54[2][3]!=A0[4][1])) && (nerr<5)){
				s1_premakni(A54, A55); s1_prepisi(A55, A54);
				s2_premakni(A54, A55); s2_prepisi(A55, A54);
				s3_premakni(A54, A55); s3_prepisi(A55, A54);
				s1_premakni(A0, A55); s1_prepisi(A55, A0);
				s2_premakni(A0, A55); s2_prepisi(A55, A0);
				s3_premakni(A0, A55); s3_prepisi(A55, A0);
				dodajSum(A54, S, CS);
				dodajSumZ(A54, S, CS, 0, '🠊', 0, 4);
				dodajSumZ(A54, S, CS, 1, '🠊', 1, 4);
				dodajSumZ(A54, S, CS, 1, '🠊', 2, 4);
				nerr++;
			}
			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 1, 'X1', 3, 6);
			dodajSumZ(A54, S, CS, 1, 'X2', 3, 5);
			dodajSumZ(A54, S, CS, 1, 'X3', 2, 5);
			dodajSumZ(A54, S, CS, 1, 'Y1', 6, 5);
			dodajSumZ(A54, S, CS, 1, 'Y2', 5, 5);
			dodajSumZ(A54, S, CS, 1, 'Y3', 5, 6);
			dodajSumZ(A54, S, CS, 1, 'Z1', 5, 2);
			dodajSumZ(A54, S, CS, 1, 'Z2', 5, 3);
			dodajSumZ(A54, S, CS, 1, 'Z3', 6, 3);

			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 0, '🠊', 3, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 4, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 5, 4);

			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS);

			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);
			m4(A54, A55, S, CS);
			dodajSum0(S, CS, '#000000');	
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS);
			dodajSum(A54, S, CS, 0, '🠈', 3, 4);
			dodajSum(A54, S, CS, 1, '🠈', 4, 4);
			dodajSum(A54, S, CS, 1, '🠈', 5, 4);
			dodajSumZ(A54, S, CS, 1, 'X3', 3, 6);
			dodajSumZ(A54, S, CS, 1, 'X1', 3, 5);
			dodajSumZ(A54, S, CS, 1, 'X2', 2, 5);
			dodajSumZ(A54, S, CS, 1, 'Y3', 6, 5);
			dodajSumZ(A54, S, CS, 1, 'Y1', 5, 5);
			dodajSumZ(A54, S, CS, 1, 'Y2', 5, 6);
			dodajSumZ(A54, S, CS, 1, 'Z3', 5, 2);
			dodajSumZ(A54, S, CS, 1, 'Z1', 5, 3);
			dodajSumZ(A54, S, CS, 1, 'Z2', 6, 3);

			//dodajSum0(S, CS, '#000000');	
		}
		
		
		nerr = 0;
		dodajSum0(S, CS, '#000000');	
		while( ((A54[3][2]!=A0[4][1]) || (A54[3][3]!=A0[4][4]) || (A54[2][3]!=A0[1][4])) && (nerr<5) ){
			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 0, '🠊', 0, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 1, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 2, 4);

			s1_premakni(A54, A55); s1_prepisi(A55, A54);
			s2_premakni(A54, A55); s2_prepisi(A55, A54);
			s3_premakni(A54, A55); s3_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0);
			s2_premakni(A0, A55); s2_prepisi(A55, A0);
			s3_premakni(A0, A55); s3_prepisi(A55, A0);
			
			nerr++;
		}
			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 0, 'V', 3, 2);
			dodajSumZ(A54, S, CS, 1, 'V', 3, 3);
			dodajSumZ(A54, S, CS, 1, 'V', 2, 3);

		
		dodajSum0(S, CS, '#000000');	
		if( (A54[3][5]!=A0[4][4]) || (A54[3][6]!=A0[4][7]) || (A54[2][3]!=A0[1][4]) ){
		
			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 1, 'X1', 3, 6);
			dodajSumZ(A54, S, CS, 1, 'X2', 3, 5);
			dodajSumZ(A54, S, CS, 1, 'X3', 2, 5);
			dodajSumZ(A54, S, CS, 1, 'Y1', 6, 5);
			dodajSumZ(A54, S, CS, 1, 'Y2', 5, 5);
			dodajSumZ(A54, S, CS, 1, 'Y3', 5, 6);
			dodajSumZ(A54, S, CS, 1, 'Z1', 5, 2);
			dodajSumZ(A54, S, CS, 1, 'Z2', 5, 3);
			dodajSumZ(A54, S, CS, 1, 'Z3', 6, 3);

			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 0, '🠊', 3, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 4, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 5, 4);

			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS);
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);
			m4(A54, A55, S, CS);
			dodajSum0(S, CS, '#000000');	
			dodajSum(A54, S, CS);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSumZ(A54, S, CS, 0, '🠈', 3, 4);
			dodajSumZ(A54, S, CS, 1, '🠈', 4, 4);
			dodajSumZ(A54, S, CS, 1, '🠈', 5, 4);
			dodajSum(A54, S, CS);

		}

		dodajSum0(S, CS, '#000000');	
		if( (A54[3][5]!=A0[4][4]) || (A54[3][6]!=A0[4][7]) || (A54[2][3]!=A0[1][4]) ){
			dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 1, 'X1', 3, 6);
			dodajSumZ(A54, S, CS, 1, 'X2', 3, 5);
			dodajSumZ(A54, S, CS, 1, 'X3', 2, 5);
			dodajSumZ(A54, S, CS, 1, 'Y1', 6, 5);
			dodajSumZ(A54, S, CS, 1, 'Y2', 5, 5);
			dodajSumZ(A54, S, CS, 1, 'Y3', 5, 6);
			dodajSumZ(A54, S, CS, 1, 'Z1', 5, 2);
			dodajSumZ(A54, S, CS, 1, 'Z2', 5, 3);
			dodajSumZ(A54, S, CS, 1, 'Z3', 6, 3);
			dodajSum(A54, S, CS);

			dodajSumZ(A54, S, CS, 0, '🠊', 3, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 4, 4);
			dodajSumZ(A54, S, CS, 1, '🠊', 5, 4);

			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSum(A54, S, CS);
			dodajSum0(S, CS, '#000000');
			m4(A54, A55, S, CS);
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			h1_premakni(A54, A55); h1_prepisi(A55, A54);
			h2_premakni(A54, A55); h2_prepisi(A55, A54);
			h3_premakni(A54, A55); h3_prepisi(A55, A54);
			dodajSumZ(A54, S, CS, 0, '🠈', 3, 4);
			dodajSumZ(A54, S, CS, 1, '🠈', 4, 4);
			dodajSumZ(A54, S, CS, 1, '🠈', 5, 4);
			dodajSum(A54, S, CS);

		}
			dodajSumZ(A54, S, CS, 1, 'V', 3, 6);
			dodajSumZ(A54, S, CS, 1, 'V', 3, 5);
			dodajSumZ(A54, S, CS, 1, 'V', 2, 5);
			dodajSumZ(A54, S, CS, 1, 'V', 6, 5);
			dodajSumZ(A54, S, CS, 1, 'V', 5, 5);
			dodajSumZ(A54, S, CS, 1, 'V', 5, 6);
			dodajSumZ(A54, S, CS, 1, 'V', 5, 2);
			dodajSumZ(A54, S, CS, 1, 'V', 5, 3);
			dodajSumZ(A54, S, CS, 1, 'V', 6, 3);
			dodajSumZ(A54, S, CS, 1, 'V', 3, 2);
			dodajSumZ(A54, S, CS, 1, 'V', 3, 3);
			dodajSumZ(A54, S, CS, 1, 'V', 2, 3);


		}
		
		$scope.c10 = function(A54, A55, A56, A0, S, CS) {	c10(A54, A55, A56, A0, S, CS);	}
		
////11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
		$scope.c11 = function(A54, A55, A56, A0, S, CS) {
		
		console.log("c11");
		dodajSum0(S, CS, '#000000', 24);	
		dodajSum(A54, S, CS);		

			//s1_premakni(A54, A55); s1_prepisi(A55, A54);
			//s2_premakni(A54, A55); s2_prepisi(A55, A54);
			//s3_premakni(A54, A55); s3_prepisi(A55, A54);
			//s1_premakni(A0, A55); s1_prepisi(A55, A0);
			//s2_premakni(A0, A55); s2_prepisi(A55, A0);
			//s3_premakni(A0, A55); s3_prepisi(A55, A0);
			//dodajSum(A54,S, CS);
		
		if ( ((A54[4][5] == A0[4][4]) && (A54[4][6] == A0[1][4])) ||
			((A54[4][5] == A0[1][4]) && (A54[4][6] == A0[4][4])) ){
			dodajSumZ(A54, S, CS, 1, 'X', 3, 4, A54[4][5]);	
			dodajSumZ(A54, S, CS, 1, 'X', 2, 4, A54[4][6]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 5, A54[5][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 6, A54[6][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 5, 4, A54[3][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 6, 4, A54[2][4]);	
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);		
			dodajSumZ(A54, S, CS, 0, '🠊', 0, 5);
			dodajSumZ(A54, S, CS, 1, '🠊', 1, 5);
			dodajSumZ(A54, S, CS, 1, '🠊', 2, 5);

			s1_premakni(A54, A55); s1_prepisi(A55, A54); s1_prepisi(A55, A54);
			s2_premakni(A54, A55); s2_prepisi(A55, A54); s2_prepisi(A55, A54);
			s3_premakni(A54, A55); s3_prepisi(A55, A54); s3_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0); s1_prepisi(A55, A0);
			s2_premakni(A0, A55); s2_prepisi(A55, A0); s2_prepisi(A55, A0);
			s3_premakni(A0, A55); s3_prepisi(A55, A0); s3_prepisi(A55, A0);

			dodajSum(A54, S, CS);		
			dodajSumZ(A54, S, CS, 0, '🠊', 0, 5);
			dodajSumZ(A54, S, CS, 1, '🠊', 1, 5);
			dodajSumZ(A54, S, CS, 1, '🠊', 2, 5);
			
			s1_premakni(A54, A55); s1_prepisi(A55, A54); s1_prepisi(A55, A54);
			s2_premakni(A54, A55); s2_prepisi(A55, A54); s2_prepisi(A55, A54);
			s3_premakni(A54, A55); s3_prepisi(A55, A54); s3_prepisi(A55, A54);
			s1_premakni(A0, A55); s1_prepisi(A55, A0); s1_prepisi(A55, A0);
			s2_premakni(A0, A55); s2_prepisi(A55, A0); s2_prepisi(A55, A0);
			s3_premakni(A0, A55); s3_prepisi(A55, A0); s3_prepisi(A55, A0);
			
			dodajSum(A54, S, CS);					
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);		
			m5(A54,A55,S, CS, 1);
			}
			
		if ( ((A54[4][2] == A0[4][4]) && (A54[4][3] == A0[1][4])) ||
			((A54[4][2] == A0[1][4]) && (A54[4][3] == A0[4][4])) ){
			dodajSumZ(A54, S, CS, 1, 'X', 3, 4, A54[4][3]);	
			dodajSumZ(A54, S, CS, 1, 'X', 2, 4, A54[4][2]);	
			dodajSumZ(A54, S, CS, 1, 'X', 5, 4, A54[3][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 6, 4, A54[2][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 3, A54[5][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 2, A54[6][4]);	
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);		
			m5(A54,A55,S, CS, 0);
			}

		if ( ((A54[5][4] == A0[4][4]) && (A54[6][4] == A0[1][4])) ||
			((A54[5][4] == A0[1][4]) && (A54[6][4] == A0[4][4])) ){
			dodajSumZ(A54, S, CS, 1, 'X', 3, 4, A54[5][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 2, 4, A54[6][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 5, 4, A54[4][3]);	
			dodajSumZ(A54, S, CS, 1, 'X', 6, 4, A54[4][2]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 3, A54[3][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 2, A54[2][4]);	
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);		
			m5(A54,A55,S, CS, 1);
			}

		dodajSumZ(A54, S, CS, 1, 'V', 3, 4);		
		dodajSumZ(A54, S, CS, 1, 'V', 2, 4);		
		dodajSum0(S, CS, '#000000');	
		dodajSum(A54, S, CS);
		dodajSumZ(A54, S, CS, 0, '🠊', 0, 5);
		dodajSumZ(A54, S, CS, 1, '🠊', 1, 5);
		dodajSumZ(A54, S, CS, 1, '🠊', 2, 5);
		s1_premakni(A54, A55); s1_prepisi(A55, A54);
		s2_premakni(A54, A55); s2_prepisi(A55, A54);
		s3_premakni(A54, A55); s3_prepisi(A55, A54);
		dodajSum(A54, S, CS);		
		dodajSumZ(A54, S, CS, 0, '🠊', 0, 5);
		dodajSumZ(A54, S, CS, 1, '🠊', 1, 5);
		dodajSumZ(A54, S, CS, 1, '🠊', 2, 5);
		s1_premakni(A0, A55); s1_prepisi(A55, A0);
		s2_premakni(A0, A55); s2_prepisi(A55, A0);
		s3_premakni(A0, A55); s3_prepisi(A55, A0);
		dodajSum(A54, S, CS);		
		dodajSumZ(A54, S, CS, 1, 'V', 4, 5);
		dodajSumZ(A54, S, CS, 1, 'V', 4, 6);
			
		if ( ((A54[4][2] == A0[4][4]) && (A54[4][3] == A0[1][4])) ||
			((A54[4][2] == A0[1][4]) && (A54[4][3] == A0[4][4])) ){
			dodajSumZ(A54, S, CS, 1, 'X', 3, 4, A54[4][3]);	
			dodajSumZ(A54, S, CS, 1, 'X', 2, 4, A54[4][2]);	
			dodajSumZ(A54, S, CS, 1, 'X', 5, 4, A54[3][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 6, 4, A54[2][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 3, A54[5][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 2, A54[6][4]);	
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);		

			m5(A54,A55,S, CS, 0);
		}

		if ( ((A54[5][4] == A0[4][4]) && (A54[6][4] == A0[1][4])) ||
			((A54[5][4] == A0[1][4]) && (A54[6][4] == A0[4][4])) ){
			dodajSumZ(A54, S, CS, 1, 'X', 3, 4, A54[5][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 2, 4, A54[6][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 5, 4, A54[4][3]);	
			dodajSumZ(A54, S, CS, 1, 'X', 6, 4, A54[4][2]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 3, A54[3][4]);	
			dodajSumZ(A54, S, CS, 1, 'X', 4, 2, A54[2][4]);	
			dodajSum0(S, CS, '#000000');
			dodajSum(A54, S, CS);		

			m5(A54,A55,S, CS, 1);
		}
		dodajSumZ(A54, S, CS, 1, 'V', 4, 5);
		dodajSumZ(A54, S, CS, 1, 'V', 4, 6);
		dodajSumZ(A54, S, CS, 1, 'V', 4, 2);
		dodajSumZ(A54, S, CS, 1, 'V', 4, 3);
		dodajSumZ(A54, S, CS, 1, 'V', 2, 4);
		dodajSumZ(A54, S, CS, 1, 'V', 3, 4);
		dodajSumZ(A54, S, CS, 1, 'V', 5, 4);
		dodajSumZ(A54, S, CS, 1, 'V', 6, 4);
					
		}

////1212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212		
			//				🠈	🠊	🠉	🠋
		$scope.c12 = function(A54, A55, A56, A0, S, CS) {		
			console.log("c12");
		dodajSum0(S, CS, '#000000', 24);	
		dodajSum(A54, S, CS);

			//m5(A54,A55,S,1);
		h1_premakni(A54, A55); h1_prepisi(A55, A54);
		h2_premakni(A54, A55); h2_prepisi(A55, A54);
		h3_premakni(A54, A55); h3_prepisi(A55, A54);
		h1_premakni(A0, A55); h1_prepisi(A55, A0);
		h2_premakni(A0, A55); h2_prepisi(A55, A0);
		h3_premakni(A0, A55); h3_prepisi(A55, A0);
		dodajSumZ(A54, S, CS, 0, '🠊', 3, 5);
		dodajSumZ(A54, S, CS, 1, '🠊', 4, 5);
		dodajSumZ(A54, S, CS, 1, '🠊', 5, 5);

		dodajSum(A54, S, CS);
		dodajSum0(S, CS, '#000000');	
		//dodajSum(A54, S, CS);
		
			var ntd=0;
			var nerr=0;
			while ( (nerr<5) && (ntd<4) ){
			if( (A54[4][8] != A0[4][7]) && ( (A54[5][7]!=A0[4][7]) || (A54[3][7]==A0[4][7]) ) ){
				if (ntd > 0)
					dodajSum0(S, CS, '#000000');
				dodajSum(A54, S, CS);	
				dodajSumZ(A54, S, CS, 0, '1', 4, 8);
				dodajSumZ(A54, S, CS, 0, '2', 4, 9);
				dodajSumZ(A54, S, CS, 0, '1', 5, 7);
				dodajSumZ(A54, S, CS, 0, '2', 7, 5);
		
				m6(A54,A55,S, CS);
				//dodajSum(A54, S, CS);
				dodajSumZ(A54, S, CS, 0, 'V', 4, 8);
				dodajSumZ(A54, S, CS, 0, 'V', 4, 9);
					
				dodajSum0(S, CS, '#000000');	
				ntd=0;
				nerr++;
				}
			if (ntd == 0)
				dodajSum(A54, S, CS);
			dodajSumZ(A54, S, CS, 0, '🠋', 5, 3);
			dodajSumZ(A54, S, CS, 1, '🠋', 5, 4);
			dodajSumZ(A54, S, CS, 1, '🠋', 5, 5);
			v1_premakni(A54, A55); v1_prepisi(A55, A54);
			v2_premakni(A54, A55); v2_prepisi(A55, A54);
			v3_premakni(A54, A55); v3_prepisi(A55, A54);
			v1_premakni(A0, A55); v1_prepisi(A55, A0);
			v2_premakni(A0, A55); v2_prepisi(A55, A0);
			v3_premakni(A0, A55); v3_prepisi(A55, A0);
			dodajSum(A54, S, CS);
			ntd++;
				}
			
		}
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	$scope.cClick = function(A, x, y, tmpC){
		console.log("cClick: " + x + " : " + y + " : " + tmpC);
		A[x][y] = tmpC[0];
	}
	
	$scope.pcolor = function(A, c, tc){	console.log("tmpC: " + tc + " : " + c); tc[0]=c; console.log("tmpC: " + tc + " : " + c);	}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  $scope.getStyle = function(name){
    if(name == "ali")
      return {'color':'red'};
    if(name == "reza")
      return {'color':'blue'};
    if(name == "amir")
      return {'color':'green'};
    }
    
      $scope.getStyle2 = function(A, ind0, ind1){
//      return {'color':'green'};
//      return {'background-color':'#AACCAA'};
var c1 = '#AACCAA';
//var c2 = this.k54[0][0][0];
//console.log("k0:" + $scope.k54[0][0][0]);
//console.log(ind0);
	var scA = A[ind0][ind1];
	var backc = {'background-color':scA, 'color':'#AAAAAA'};
//	var backc = {'background-color':$scope.k54[ind0][ind1]};
//      return {'background-color':$scope.k54[ind0][ind1]};
      return backc;
    }

      $scope.getStyle3 = function(A, B, ind0, ind1){
//      return {'color':'green'};
//      return {'background-color':'#AACCAA'};
var c1 = '#AACCAA';
//var c2 = this.k54[0][0][0];
//console.log("k0:" + $scope.k54[0][0][0]);
//console.log(ind0);
	var scA = A[ind0][ind1];
	var scB = B[ind0][ind1][1];
	var backc = {'background-color':scA, 'color':scB};
//	var backc = {'background-color':$scope.k54[ind0][ind1]};
//      return {'background-color':$scope.k54[ind0][ind1]};
      return backc;
    }




var hashCode = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
};

var intToRGB = function(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
};

$scope.generateColor = function(string) {
    return '#' + intToRGB(hashCode(string))
};

$scope.generateColor2 = function() {
    return '#AA1122';
};




      }
    ]
  });
