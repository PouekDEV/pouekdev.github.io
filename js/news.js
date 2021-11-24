proxyurl = //"https://cors-anywhere.herokuapp.com/"
console.log("News initiated")
fetch(proxyurl + "https://news.api.pouekdev.one")
.then(res => res.json()).then(body => {
    if(!body) {
        console.log("Error");
        document.getElementById("newsbox").style.display = "none";
    }
    else{
        news = body.news;
        setnewnews();
    }
})
news = []
var amount = 0;
function setnewnews(){
    amount = news.length
    console.log(news[4])
    while(amount > 0){
        amount -= 1;
        console.log(amount)
        var tag = document.createElement("span");
        var text = document.createTextNode(news[amount]);
        tag.appendChild(text);
        var element = document.getElementById("news");
        element.appendChild(tag);
    }
}