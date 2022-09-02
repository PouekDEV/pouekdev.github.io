document.onload = loading();
function loading(){
    alert("Hello! Here you can find status for all my discord bots and I mean ALL of them");
}
proxyurl = "";//"https://cors-anywhere.herokuapp.com/"
warningmessagems = "❌One of bot latency is high❌";
warningmessagecpu = "❌One of bot cpu usage is high❌";
warningmessageram = "❌One of bot ram usage is high❌";
operational = "✅All systems operational✅";
operationalnot = "";
refresht = 5000;
//iron
function iron() {
  setInterval(() => {
    fetch(proxyurl + "https://irondc.pouekdev.repl.co")
      .then((res) => res.json())
      .then((body) => {
        if (!body) {
          console.log("Error");
        } else {
          document.getElementById("Ram").innerHTML =
            "Ram usage " + body.ram + "MB/1024MB";
          if (body.ram >= 400) {
            document.getElementById("ramw").innerHTML = warningmessageram;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("Cpu").innerHTML =
            "Cpu usage " + body.cpu + "%";
          if (body.cpu >= 80) {
            document.getElementById("cpuw").innerHTML = warningmessagecpu;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("ms").innerHTML = "Latency " + body.ms + "ms";
          if (body.ms >= 280) {
            document.getElementById("msw").innerHTML = warningmessagems;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
        }
      });
  }, refresht);
}
//Shell
function shell() {
  setInterval(() => {
    fetch(proxyurl + "https://shellldcbot.pouekdev.repl.co")
      .then((res) => res.json())
      .then((body) => {
        if (!body) {
          console.log("Error");
        } else {
          document.getElementById("Rams").innerHTML =
            "Ram usage " + body.ram + "MB/1024MB";
          if (body.ram >= 400) {
            document.getElementById("ramw").innerHTML = warningmessageram;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("Cpus").innerHTML =
            "Cpu usage " + body.cpu + "%";
          if (body.cpu >= 80) {
            document.getElementById("cpuw").innerHTML = warningmessagecpu;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("mss").innerHTML =
            "Latency " + body.ms + "ms";
          if (body.ms >= 280) {
            document.getElementById("msw").innerHTML = warningmessagems;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
        }
      });
  }, refresht);
}
//Sweepy
function sweepy() {
  setInterval(() => {
    fetch(proxyurl + "https://sweepydcbot.pouekdev.repl.co")
      .then((res) => res.json())
      .then((body) => {
        if (!body) {
          console.log("Error");
        } else {
          document.getElementById("Ramss").innerHTML =
            "Ram usage " + body.ram + "MB/1024MB";
          if (body.ram >= 400) {
            document.getElementById("ramw").innerHTML = warningmessageram;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("Cpuss").innerHTML =
            "Cpu usage " + body.cpu + "%";
          if (body.cpu >= 80) {
            document.getElementById("cpuw").innerHTML = warningmessagecpu;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("msss").innerHTML =
            "Latency " + body.ms + "ms";
          if (body.ms >= 280) {
            document.getElementById("msw").innerHTML = warningmessagems;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
        }
      });
  }, refresht);
}
//Fakt Bot
function faktbot() {
  setInterval(() => {
    fetch(proxyurl + "https://faktbotdc.pouekdev.repl.co")
      .then((res) => res.json())
      .then((body) => {
        if (!body) {
          console.log("Error");
        } else {
          document.getElementById("Ramf").innerHTML =
            "Ram usage " + body.ram + "MB/1024MB";
          if (body.ram >= 400) {
            document.getElementById("ramw").innerHTML = warningmessageram;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("Cpuf").innerHTML =
            "Cpu usage " + body.cpu + "%";
          if (body.cpu >= 80) {
            document.getElementById("cpuw").innerHTML = warningmessagecpu;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
          document.getElementById("msf").innerHTML =
            "Latency " + body.ms + "ms";
          if (body.ms >= 280) {
            document.getElementById("msw").innerHTML = warningmessagems;
            document.getElementById("operational").innerHTML = operationalnot;
          } else {
            document.getElementById("operational").innerHTML = operational;
          }
        }
      });
  }, refresht);
}
faktbot();
sweepy();
iron();
shell();
