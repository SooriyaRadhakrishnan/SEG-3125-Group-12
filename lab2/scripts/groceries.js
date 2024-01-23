// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "corn",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 0.99,
  },
  {
    name: "frozen chicken broccoli cheese cutlet",
    vegetarian: false,
    glutenFree: false,
    organic: false,
    price: 15.0,
  },
  {
    name: "frozen alaskan sole",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 20.99,
  },
  {
    name: "peanut butter (2kg)",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 10.88,
  },
  {
    name: "jam",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 5.99,
  },
  {
    name: "spring mix",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 3.99,
  },
  {
    name: "frozen buffalo chicken wings",
    vegetarian: false,
    glutenFree: false,
    organic: false,
    price: 20.0,
  },
  {
    name: "blueberry muffins",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 9.99,
  },
  {
    name: "chicken breasts",
    vegetarian: false,
    glutenFree: true,
    organic: true,

    price: 30.0,
  },
  {
    name: "panini ham",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 9.99,
  },
  {
    name: "rotisserie chicken",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 7.99,
  },
  {
    name: "broccoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    organic: true,
    price: 2.35,
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 10.0,
  },
];

function compareByPrice(p1, p2){
	return p1.price - p2.price;
}

products.sort(compareByPrice);

console.log(products);


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
	if (prods[i].organic && organic == "NonOrganic"){
		continue
	} else if (!prods[i].organic && organic == "Organic"){
		continue
	}
    if (restriction == "Vegetarian" && prods[i].vegetarian == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "GlutenFree" && prods[i].glutenFree == true) {
      product_names.push(prods[i].name);
	} else if((restriction == "GFVeg") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
		product_names.push(prods[i].name);
	}else if (restriction == "None") {
      product_names.push(prods[i].name);
    }

  }
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
