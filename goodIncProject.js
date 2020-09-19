function goodIncProject()   {

}
function helloUser() {
    var a = document.getElementById("userInput").value;
    alert("Hello, " + a);
    document.getElementById("userInput").value = "";
}

function reverseText(){
    var userInput = prompt("A name / phrase / sentence", "");
    alertWindow(reverse(userInput));
}

//reverses string
function reverse(strInput){

    var arrayInput = new Array(strInput.length);
    var strReverse = "";
    x = arrayInput.length;
    arrayInput = strInput.split("");
    for (i=0; i < x; i++){
        strReverse += arrayInput.pop();
    }
    return strReverse;
}

function inventoryItems(inventory_item, quantity, price){
    this.inventoryItem = inventory_item;
    this.quantity = quantity;
    this.price = price;

}

//Adds a row to table class "table"
function addItem(){
    var a = prompt("Add Inventory Item: ", "");
    var b= prompt("Add Quantity on-hand: ", "");
    var c = prompt("Add Price per item: ", "");

    document.getElementById("table").innerHTML += "<tr><td>" + a + "</td><td>" + b + "<td>" + c + "</td></td></tr>";
}

//used to insert text into html document
function toDocument(s){
    //example
    document.getElementById("example").innerHTML = s;
}

//redundant but allows more encapsulation of the functions.
function alertWindow(s){
    alert(s);
}


