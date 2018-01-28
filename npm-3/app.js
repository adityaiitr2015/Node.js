var faker= require("faker");

console.log("===========================");
console.log("    Welcome to My Shop");
console.log("===========================");
for(var i=0;i<10;i++)
{
	var product= faker.commerce.productName();
	var price= faker.commerce.price();
	console.log(product+"- $"+price);
}