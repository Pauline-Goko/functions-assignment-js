//You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data.
// Create an array containing the names of all items in the inventory.
// Create a separate array with the corresponding stock quantities of each item.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.


// Create an array containing the names of all items in the inventory.
let items = ["bananas", "mangoes","apples", "plums", "oranges", "avocados", "pawpaws"];
console.log(items);

// Create a separate array with the corresponding stock quantities of each item.
let itemsQuantity = [30,50,70,200,35,20,15];
console.log(itemsQuantity);

// Write a function to add a new item to the inventory, updating both arrays.
function addItem(){
   let updateArrays =  items.push("pineapples") & itemsQuantity.push(45);
    console.log(updateArrays);
}
 addItem();
 console.log(items);


// Write a function to update the stock quantity of an existing item.
function updateStock(name,newStock) {
    let index = items.indexOf(name);
    if (index !== -1) {
      itemsQuantity[index] = newStock;
    }
}
updateStock("plums",160);
console.log(itemsQuantity);


// Write a function to calculate the total number of items in the inventory.
function totalItems(){
    let total = 0;
    for(i = 0; i<items.length; i++){
        total+=i
    }
    console.log(i);

}
totalItems();

// Write a function to find the item with the lowest stock quantity.
function lowestQuantity(){
    let findMin = Math.min(...itemsQuantity);
    let lowestItem = itemsQuantity.indexOf(findMin);
    console.log(items[lowestItem]);

}
lowestQuantity();

 //created a function to turn the arrays into an object
 function convert(items, itemsQuantity){
    return  Object.assign(...items.map((m, n)=>({[m]: itemsQuantity[n]}) ))

 }
 let newObject = convert(items, itemsQuantity);
console.log(newObject);



