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
            print("Beginning program..");
            print("-==-==-==-==-==-==-");
        }


        for (let i = 0; i < lines.length; i++) {
            const part = lines[i].trim().split(' ');
            const myLineNum = part[0];
            const command = part[1];
            let variable = {};
            let varCount = 0;
            switch(command.toUpperCase()) {
                case "//": //comment (hey look i just fucking used one)
                    break;
                case "PRINT":
                    let message = part[2];
                    if (message && message.startsWith('"')) {
                    const fullLine = lines[i].trim();
                    const quoteStart = fullLine.indexOf('"');
                    const quoteEnd = fullLine.indexOf('"', quoteStart + 1);

                    if (quoteEnd !== -1) {
                        message = fullLine.substring(quoteStart + 1, quoteEnd);
                    }
                    }
                    print(message);
                    break;
                case "GOTO":
                    //eee
                    break;
                case "LET":
                    const varName = part[2];
                    const equalz = part[3];
                    variable[varCount] = part[4];
                    varCount++;
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
                    error('Command not found: ' + command);
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