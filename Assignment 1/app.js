       (function(){
      angular.module('LunchCheckApp',[])
      
      .controller('LunchCheckController',['$scope', function($scope){
        $scope.message = "";
         $scope.items = "";
        $scope.lunchCheck = function (item) {
        
            items = item;

          if(items!="" && items!=null){
                items = items.split(",");
                if(items.length>3){
                  $scope.message = "Too Much!!";  
                    $scope.mystyle = {"color":"red"}
                   } 
                 else{
                      $scope.message = "Enjoy!";  
                     $scope.mystyle = {"color":"green"}
                    }   
                 }
         else {
          $scope.message = "Please Enter Data First";
             $scope.mystyle = {"color":"blue"}
              }
        }
      }]);})();