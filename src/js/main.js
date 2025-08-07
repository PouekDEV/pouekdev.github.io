// @ts-nocheck
const cmd = document.getElementById("cmd");
const caret = document.getElementById("cursor");
const previousCommands = document.getElementById("previousCommands");
const pxFor1ch = document.getElementById("char").getBoundingClientRect().width;
document.getElementById("char").remove();
let commandHistory = []
let commandHistoryPointer = 0;
let caretOffset = 0;
let caretTimeout;

onkeydown = (event) => {
    if(document.activeElement === cmd){
        if(event.key == "Enter"){
            event.preventDefault();
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
        if(event.key == "ArrowUp" || event.key == "ArrowDown"){
            window.scrollTo(0, document.body.scrollHeight);
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
    else{
        cmd.focus();
    }
    console.log(cmd.selectionEnd)
}

onkeyup = (event) => {
    updateCaret(cmd.selectionEnd);
}

function probeCaret(){
    updateCaret(cmd.selectionEnd + 1);
}

function mouseProbeCaret(){
    updateCaret(cmd.selectionEnd);
}

// This breaks after the text input scrolls
function updateCaret(value = caretOffset){
    //if(Math.floor(value * pxFor1ch) > cmd.clientWidth){
    //    caretOffset = Math.floor(cmd.clientWidth / pxFor1ch);
    //}
    //else{
        caretOffset = value;
    //}
    caret.style.left = 18.2 + caretOffset + "ch";
}

async function runCommand(command){
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
        switch(command[0]){
            case "clear":
                previousCommands.innerHTML = "";
                break;
            case "echo":
                result = command.slice(1);
                result = result.join(" ");
                break;
            case "restart":
                window.location.reload();
                break;
            case "ls":
                output.className = "green";
                result = "spotify";
                break;
            case "ascii":
                if(command.length >= 2){
                    result = "<pre>" + await returnAscii(command[1], command.length >= 3 ? command[2] : 20, command.length >= 4 ? command[3] : 20) + "</pre>";
                }
                else{
                    result = "You must specify a url. Try 'ascii https://www.pouekdev.one/src/images/bettericonkitku.png'. Optionally add width and height."
                }
                break;
            case "neofetch":
                result = await neofetch();
                break;
            default:
                result = command[0] + ": command not found";
        }
        output.innerHTML = result;
        previousCommands.appendChild(output);
    }
    window.scrollTo(0, document.body.scrollHeight);
}