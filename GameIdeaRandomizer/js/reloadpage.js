new function reload(){
    var seconds = 20;
    setInterval(() => {
    location.reload();
    },20000);
    setInterval(() => {
        document.getElementById("time").innerHTML = "Time left to reload: " + seconds + " seconds";
        seconds -= 1;
        },1000);
}