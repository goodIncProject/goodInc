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



