var Diner = function(name){
	this.name = name;
	this.dishes = [];
};

var Dish = function(name, price){
	this.name = name;
	this.price = price;
};

var diner1 = new Diner("Bob");
var diner2 = new Diner("Jane");

var dish1 = new Dish("Eggs", 6);
var dish2 = new Dish("Bacon", 4);
var dish3 = new Dish("Toast", 2);

Diner.prototype.addDish = function(dish) {
	this.dishes.push(dish);
}


diner1.addDish(dish1);
diner1.addDish(dish2);
diner1.addDish(dish3);

diner2.addDish(dish1);
diner2.addDish(dish2);

var Meal = function(){
	this.totalAmount = 0;
	this.diners = [];
	this.taxRate = 0.10;
	this.tipRate = 0.15;
}

Meal.prototype.calculateTotal = function () {
	var total = 0;

	this.diners.forEach(function(diner){
		diner.dishes.forEach(function(dish){
			total += dish.price;	
		});
	

	});

	this.totalAmount = total;
}
Meal.prototype.addDiner = function(diner) {
	this.diners.push(diner);
}



var meal = new Meal();
meal.addDiner(diner1);
meal.addDiner(diner2);

meal.calculateTotal();
console.log(meal.totalAmount);

var tax = meal.totalAmount * meal.taxRate;
var tip = meal.totalAmount * meal.tipRate;
var mealTotal = meal.totalAmount + tax + tip;
console.log("Meal Total is $" + mealTotal);

var dinner1 = new Meal(diner1);
var dinner2 = new Meal(diner2);

var dinerCost1 = dinner1.calculateTotal();
var dinerCost2 = dinner2.calculateTotal();
console.log(tax);





