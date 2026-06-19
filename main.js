function collapsible(element, button){
    let section = document.getElementById(element);
    if(section.className == "hidden"){
        section.className = "";
        button.innerHTML = "";
    }
    else{
        section.className = "hidden";
        button.innerHTML = "";
    }
}