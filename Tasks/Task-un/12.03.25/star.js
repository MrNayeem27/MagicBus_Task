// Looping Statements

// for loop syntax
// (initialization; condition; increment/decrement)

const rows = 5;

for (let i = 1; i <= rows; i++) {
    let rowPattern = '';
    for (let j = 1; j <= i; j++) {
        rowPattern += '* ';
    }
    console.log(rowPattern);
}
