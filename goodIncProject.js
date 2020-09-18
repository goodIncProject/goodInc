function goodIncProject()   {

}
function helloUser() {
    var a = document.getElementById("userInput").value;
    alert("Hello, " + a);
    document.getElementById("userInput").value = "";
}

function reverseText(){
    alertWindow(reverse());
}

//reverses string
function reverse(){
    var userInput = prompt("A name / phrase / sentence", "");
    var arrayInput = new Array(userInput.length);
    var strReverse = "";
    x = arrayInput.length;
    arrayInput = userInput.split("");
    for (i=0; i < x; i++){
        strReverse += arrayInput.pop();
    }
    return strReverse;
}

function example(){
    var a = prompt("Say something: ", "");
    toDocument(a);
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



