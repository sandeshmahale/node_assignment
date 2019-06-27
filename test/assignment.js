const readline = require('readline');
var fs = require('fs');
const readLastLines = require('read-last-lines');
var watch = require('node-watch');

console.log("server started");

watch('./test.txt', { recursive: true }, async function (evt, name) {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Please input lines to be displayed from the file or Press enter to Display last 10 lines : ', (data) => {

        if (data == "") {
            var def = 10 * 2;
            console.log('Last 10 line of the file are : ');
            readLastLines.read('./test.txt', def)
                .then((lines) => {
                    console.log(lines);
                    console.log('--------------------------')
                });

        } else {

            console.log(`\nThe last ${data} lines of the file are :`);
            var lines = data * 2;
            readLastLines.read('./test.txt', lines)
                .then((lines) => {
                    console.log(lines);
                    console.log('--------------------------')
                });
            rl.close();
        }
    });
});