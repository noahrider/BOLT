# BOLT
A simple programming language aimed at teaching anyone how to program.
## Commands:
### //
####	Usage: // [message]
Allows you to comment code. Not an ‘actual’ command, but useful nonetheless.
### GOTO
####	Usage: GOTO [lineNo]
The most basic command. Stops going down in the normal line of execution, and starts back up at the specified line number.
### PRINT
####	Usage: PRINT “[message]”
Another basic command. Prints a message to the terminal
### LET
####	Usage: LET [variable] = [value]
Assigns a variable to a value.
### IF
####	Usage: IF [value1] (== | < | <= | > | >=) [value2]
Compares two values, and continues executing until an ENDIF.
### ENDIF
####	Usage: ENDIF
Ends an IF statement.
### FOR
####	Usage: FOR [variable] = [value] IN [length], (ADD/SUB) [inc]
Starts a FOR LOOP. The variable starts at value and runs (and add/subtracts the given increment) until it hits the specified length
### ENDFOR
####	Usage: ENDFOR
Ends a FOR statement.
