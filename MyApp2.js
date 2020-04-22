var f1 = function(){
    console.log("You clicked on button1.")
};
var f2 = function(){
    console.log("Button1 clicked");
}
var a= document.getElementById("button1");
a.addEventListener("click",f1);

var b=document.getElementById("button2");
b.addEventListener("click",f2);
