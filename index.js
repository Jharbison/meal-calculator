var Diner = function(name){
	this.name = name;
	this.dishes = [];
	this.total = 0.00;

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

Diner.prototype.calculateTotal = function(tax, tip) {
	var total = 0;
	this.dishes.forEach(function(dish){
		total += dish.price;
	});
	this.total = total + (total * tax) + (total * tip);
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

	for (var i = 0; i < this.diners.length; i++) {
		this.diners[i].calculateTotal(this.taxRate, this.tipRate);
		total += this.diners[i].total;
	}

	this.totalAmount = total;
}
Meal.prototype.addDiner = function(diner) {
	this.diners.push(diner);
}



var meal = new Meal();
meal.addDiner(diner1);
meal.addDiner(diner2);

meal.calculateTotal();
console.log('Meal Total is $' + meal.totalAmount);
console.log('Bob owes: $' + diner1.total);
console.log('Jane owes: $' + diner2.total);





