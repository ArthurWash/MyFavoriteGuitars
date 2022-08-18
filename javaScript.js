function imgClick(message) {
    console.log ("image clicked: " + message);
}

document.getElementById("gibson").onclick=function(){
    imgClick("Gibson");
}

document.getElementById("fender").onclick=function(){
    imgClick("Fender");
}

document.getElementById("epiphone").onclick=function(){
    imgClick("Epiphone");
}

document.getElementById("ibanez").onclick=function(){
    imgClick("Ibanez");
}

document.getElementById("martin").onclick=function(){
    imgClick("Martin");
}