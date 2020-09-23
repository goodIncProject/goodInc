const invList = [];

function init()   {
    invList.push("<tr><th>Inventory Item</th><th>Quantity</th><th>Price</th></tr>");
    drawTable();
}
function helloUser() {
    var a = document.getElementById("userInput").value;
    alert("Hello, " + a);
    document.getElementById("userInput").value = "";
}

function reverseText(){
    var userInput = document.getElementById("revString").value;
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
function toDocument(str, id){
    //example
    document.getElementById(id).innerHTML = str;
}

//redundant but allows more encapsulation of the functions.
function alertWindow(s){
    alert(s);
}

//draws the inventory table
function drawTable(){
    var iTable = document.getElementById("invTable");
    var temp = " ";
    for (i=0; i < invList.length; i++){
        temp += invList[i];
    }
    iTable.innerHTML = temp;
}
