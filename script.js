
var mainElement = document.getElementById("main");
var menuElement = document.getElementById("menu");

function invertClassInHtmlElement(htmlElement, className){
    if(htmlElement.classList.contains(className)){
        htmlElement.classList.remove(className)
    } else{
        htmlElement.classList.add(className)
    }
};

document.getElementById("darkModeButton").onclick = function(){ invertClassInHtmlElement(mainElement, "darkTheme");};
document.getElementById("menuHeader").onclick = function(){ invertClassInHtmlElement(menuElement, "hide");};