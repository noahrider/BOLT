const VERSION = "1.00";
const DEBUG = true;

function print(message) {
    const console = document.getElementById('console');
    console.value += message + '\n';
    console.scrollTop = console.scrollHeight;
}
function error(message) {
    print(message);
}
/*
    the big-ass interpret function
    if your computer fucks itself while running this
    dont come crying to me, i never said i was good at coding
*/
function interpret() {
    try {
        if (lineIndex >= lines.length) return;
        const console = document.getElementById('console');
        console.value = '';
        const code = document.getElementById('editor').value;
        let lineNum = 0;
        if (code == '') {
            print("You need to have code to run!");
            return;
        }
        const lines = code.split('\n');
        if (DEBUG) {
            print("BOLT " + VERSION);
            print("lines: " + lines.length);
            print("");
        }


        for (let i = 0; i < lines.length; i++) {
            const part = lines[i].trim().split(' ');
            const myLineNum = part[0];
            const command = part[1];
            let variable = {};
            switch(command) {
                case "//": //comment (hey look i just fucking used one)
                    break;
                case "PRINT":
                    print(part[2]);
                    break;
                case "GOTO":
                    const targetLine = part[2];
                    for (let j = 0; j < lines.length; j++) {
                        const checkParts = lines[j].trim().split(' ');
                        if (checkParts[0] === targetLine) {
                            setTimeout(() => interpret(), 100)
                            break;
                        }
                    }
                    break;
                case "LET":
                    
                    break;
                case "IF":
                    
                    break;
                case "ENDIF":
                    
                    break;
                case "FOR":
                    
                    break;
                case "ENDFOR":
                    
                    break;
                default:
                    error('Command not found:' + command);
                    break;
            }
        }
    } catch(_ex) {
        print(_ex.message);
    }

}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("runButton");
    button.addEventListener("click", interpret);
});