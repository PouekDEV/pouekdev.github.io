proxyurl = "https://cors-anywhere.herokuapp.com/"//"https://cors.pouekdev.repl.co/"
warningmessagems = "❌One of bot latency is high❌"
warningmessagecpu = "❌One of bot cpu usage is high❌"
warningmessageram = "❌One of bot ram usage is high❌"
operational = "✅All systems operational✅"
operationalnot = ""
refresht = 5000
//iron
new function iron(){
setInterval(() => {
    fetch(proxyurl + "https://irondc.pouekdev.repl.co")
            .then(res => res.json()).then(body => {
            if(!body) {
            console.log("Error");
            }
            else{
                document.getElementById("Ram").innerHTML = "Ram usage " + body.ram + "MB/500MB";
                if(body.ram >= 2048){
                    document.getElementById("ramw").innerHTML = warningmessageram;
                    document.getElementById("operational").innerHTML = operationalnot;
                }
                else{
                    document.getElementById("operational").innerHTML = operational;
                }
                document.getElementById("Cpu").innerHTML = "Cpu usage " + body.cpu + "%";
                            if(body.cpu >= 80){
                                document.getElementById("cpuw").innerHTML = warningmessagecpu;
                                document.getElementById("operational").innerHTML = operationalnot;
                            }
                            else{
                                document.getElementById("operational").innerHTML = operational;
                            }
                            document.getElementById("ms").innerHTML = "Latency " + body.ms + "ms";
                                        if(body.ms >= 280){
                                            document.getElementById("msw").innerHTML = warningmessagems;
                                            document.getElementById("operational").innerHTML = operationalnot;
                                        }
                                        else{
                                            document.getElementById("operational").innerHTML = operational;
                                        }
            }
            })
    },refresht);
        }
//Respect
new function respect(){
    setInterval(() => {
        fetch(proxyurl + "https://Respectdcbot.pouekdev.repl.co")
                .then(res => res.json()).then(body => {
                if(!body) {
                console.log("Error");
                }
                else{
                    document.getElementById("Ramr").innerHTML = "Ram usage " + body.ram + "MB/500MB";
                    if(body.ram >= 2048){
                        document.getElementById("ramw").innerHTML = warningmessageram;
                        document.getElementById("operational").innerHTML = operationalnot;
                    }
                    else{
                        document.getElementById("operational").innerHTML = operational;
                    }
                    document.getElementById("Cpur").innerHTML = "Cpu usage " + body.cpu + "%";
                    if(body.cpu >= 80){
                        document.getElementById("cpuw").innerHTML = warningmessagecpu;
                        document.getElementById("operational").innerHTML = operationalnot;
                    }
                    else{
                        document.getElementById("operational").innerHTML = operational;
                    }
                    document.getElementById("msr").innerHTML = "Latency " + body.ms + "ms";
                    if(body.ms >= 280){
                        document.getElementById("msw").innerHTML = warningmessagems;
                        document.getElementById("operational").innerHTML = operationalnot;
                    }
                    else{
                        document.getElementById("operational").innerHTML = operational;
                    }
                }
                })
        },refresht);
            }
//Shell
new function shell(){
    setInterval(() => {
        fetch(proxyurl + "https://shellldcbot.pouekdev.repl.co")
                .then(res => res.json()).then(body => {
                if(!body) {
                console.log("Error");
                }
                else{
                    document.getElementById("Rams").innerHTML = "Ram usage " + body.ram + "MB/500MB";
                    if(body.ram >= 2048){
                        document.getElementById("ramw").innerHTML = warningmessageram;
                        document.getElementById("operational").innerHTML = operationalnot;
                    }
                    else{
                        document.getElementById("operational").innerHTML = operational;
                    }
                    document.getElementById("Cpus").innerHTML = "Cpu usage " + body.cpu + "%";
                                if(body.cpu >= 80){
                                    document.getElementById("cpuw").innerHTML = warningmessagecpu;
                                    document.getElementById("operational").innerHTML = operationalnot;
                                }
                                else{
                                    document.getElementById("operational").innerHTML = operational;
                                }
                                document.getElementById("mss").innerHTML = "Latency " + body.ms + "ms";
                                            if(body.ms >= 280){
                                                document.getElementById("msw").innerHTML = warningmessagems;
                                                document.getElementById("operational").innerHTML = operationalnot;
                                            }
                                            else{
                                                document.getElementById("operational").innerHTML = operational;
                                            }
                }
                })
        },refresht);
            }
//Sweepy
new function sweepy(){
    setInterval(() => {
        fetch(proxyurl + "https://sweepydcbot.pouekdev.repl.co")
                .then(res => res.json()).then(body => {
                if(!body) {
                console.log("Error");
                }
                else{
                    document.getElementById("Ramss").innerHTML = "Ram usage " + body.ram + "MB/500MB";
                    if(body.ram >= 2048){
                        document.getElementById("ramw").innerHTML = warningmessageram;
                        document.getElementById("operational").innerHTML = operationalnot;
                    }
                    else{
                        document.getElementById("operational").innerHTML = operational;
                    }
                    document.getElementById("Cpuss").innerHTML = "Cpu usage " + body.cpu + "%";
                    if(body.cpu >= 80){
                        document.getElementById("cpuw").innerHTML = warningmessagecpu;
                        document.getElementById("operational").innerHTML = operationalnot;
                    }
                    else{
                        document.getElementById("operational").innerHTML = operational;
                    }
                    document.getElementById("msss").innerHTML = "Latency " + body.ms + "ms";
                                            if(body.ms >= 280){
                                                document.getElementById("msw").innerHTML = warningmessagems;
                                                document.getElementById("operational").innerHTML = operationalnot;
                                            }
                                            else{
                                                document.getElementById("operational").innerHTML = operational;
                                            }
                }
                })
        },refresht);
            }