let body=document.getElementById("body1");
let input1=document.querySelector(".color1");
let input2=document.querySelector(".color2");
let value1=document.querySelector("h4");
let value2=document.querySelector("h1");

function setAtri(){
    
        body.style.background="linear-gradient(to right, "
        +input1.value 
        +", " 
        + input2.value +")";
        value1.innerText=body.style.background+"\n"
        value2.style.textShadow="0 0 10px "+input1.value+" , 0 0 8px "+input2.value;
    
}
input1.addEventListener("input",setAtri);

input2.addEventListener("input",setAtri);