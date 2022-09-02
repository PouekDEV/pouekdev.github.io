console.log("News initiated")
ping('https://news.api.pouekdev.one').then(function() {
    console.log("News are working")
}).catch(function(err) {
    console.log("Fail: " + err);
    $(".marquee div").css("animation", "marquee 15s linear infinite")
    var tag = document.createElement("span");
    var text = document.createTextNode("News are currently unavailable check status.pouekdev.one")
    tag.appendChild(text);
    var element = document.getElementById("news");
    element.appendChild(tag);
});
fetch("https://news.api.pouekdev.one")
.then(res => res.json()).then(body => {
    if(!body) {
        console.log("Error");
        document.getElementById("newsbox").style.display = "none";
    }
    else{
        $('#news').empty();
        news = body.news;
        $(".marquee div").css("animation", "marquee " + body.duration + "s linear infinite")
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
        var text = document.createTextNode(news[amount] + "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        tag.appendChild(text);
        var element = document.getElementById("news");
        element.appendChild(tag);
    }
}