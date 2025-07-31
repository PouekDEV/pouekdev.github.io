// @ts-nocheck
let cmd = document.getElementById("cmd");
let caret = document.getElementById("cursor");
let previousCommands = document.getElementById("previousCommands");
let commandHistory = []
let commandHistoryPointer = 0;
let caretOffset = 0;
let caretTimeout;

onkeydown = (event) => {
    if(event.key == "Enter"){
        updateCaret(-1);
        let command = cmd.value;
        command = command.replaceAll("&nbsp;", "");
        setTimeout(() => cmd.value = "", 5);
        runCommand(command);
    }
    if(event.key == "ArrowUp"){
        if((commandHistory.length - 1) > commandHistoryPointer){
            commandHistoryPointer += 1;
            cmd.value = commandHistory[commandHistoryPointer];
        }
    }
    if(event.key == "ArrowDown" && -1 < commandHistoryPointer){
        commandHistoryPointer -= 1;
        if(commandHistoryPointer == -1){
            cmd.value = ""
        }
        else{
            cmd.value = commandHistory[commandHistoryPointer];
        }
    }
    caret.style.animationName = "nothing";
    clearTimeout(caretTimeout);
    caretTimeout = setTimeout(() => caret.style.animationName = "", 500);
    if(event.key == "Backspace" && caretOffset != 0){
        updateCaret(cmd.selectionEnd - 1);
    }
    else{
        updateCaret(cmd.selectionEnd);
    }
}

onkeyup = (event) => {
    updateCaret(cmd.selectionEnd);
}

function probeCaret(){
    updateCaret(cmd.selectionEnd + 1);
}

function updateCaret(value = caretOffset){
    caretOffset = value;
    caret.style.left = 18.2 + caretOffset + "ch";
}

function runCommand(command){
    commandHistoryPointer = 0;
    let div = document.createElement("div");
    let user = document.createElement("span");
    let green = document.createElement("span");
    green.className = "green";
    green.innerHTML = "guest@website";
    user.appendChild(green);
    user.innerHTML = user.innerHTML + ":";
    let blue = document.createElement("span");
    blue.className = "blue";
    blue.innerHTML = "~";
    user.appendChild(blue);
    user.innerHTML = user.innerHTML + "$";
    let commandElement = document.createElement("span");
    commandElement.innerHTML = command;
    commandElement.className = "margin";
    div.appendChild(user);
    div.appendChild(commandElement);
    previousCommands.appendChild(div);
    if(command != "" && command.split(" ")[0] != ""){
        commandHistoryPointer = -1;
        commandHistory.unshift(command);
        command = command.split(" ");
        let output = document.createElement("span");
        let result = "";
        if(command[0] == "clear"){
            previousCommands.innerHTML = "";
        }
        else if(command[0] == "echo"){
            result = command.slice(1);
            result = result.join(" ");
        }
        else if(command[0] == "restart"){
            window.location.reload();
        }
        else{
            result = command[0] + ": command not found";
        }
        output.innerHTML = result;
        previousCommands.appendChild(output);
    }
}