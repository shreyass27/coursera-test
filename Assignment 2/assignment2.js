(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyListController', ToBuyListController)
.controller('AlreadyBotController', AlreadyBotController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

//Injecting Service to First Controller
ToBuyListController.$inject = ['ShoppingListCheckOffService'];

function ToBuyListController(ShoppingListCheckOffService) {
  var toBuyList = this;
  
    toBuyList.bought = function (id){
        ShoppingListCheckOffService.bought(id);
    }
    
    toBuyList.check = function (){
        if(toBuyList.items[0]==undefined){ 
            return 1; 
        }
         else{
             return 0; 
         }
     }
      toBuyList.itemName = "";
  toBuyList.itemQuantity = "";

  toBuyList.addItem = function () {
    ShoppingListCheckOffService.addItem(toBuyList.itemName, toBuyList.itemQuantity);
  }
    
     toBuyList.items =  ShoppingListCheckOffService.itemcollection(); 
    
  }
  
//Injecting Service to Second Controller    
AlreadyBotController.$inject = ['ShoppingListCheckOffService'];
    
function AlreadyBotController(ShoppingListCheckOffService) {
 var botList = this;
  
botList.items =  ShoppingListCheckOffService.botItems;
            
botList.check = function (){
    if(botList.items[0]==undefined){
        return 1;
        }
    else{
            return 0;
        }
    }
    
  }
    
 // Service Function    
function ShoppingListCheckOffService(){
        
var service = this;
    
var items = [
                { name:"Cokiees"   , quantity: 1} ,         
                { name:"Tukudi"    , quantity: 4} ,          
                { name:"Chakkli"   , quantity: 3} ,          
                { name:"Kara-Kaddi", quantity: 1} ,  
                { name:"Parle-g"   , quantity: 4} ,
            ];
    
service.botItems = [];  
    
service.addItem = function (itemName, quantity) {
    var item = {
                name: itemName,
                quantity: quantity
            };
    items.push(item);
  };
        
service.itemcollection = function (){
    return items;
    }
service.bought = function (id){
    service.botItems.push(items[id]);
    items.splice(id,1);
    }
  }
    
})();
