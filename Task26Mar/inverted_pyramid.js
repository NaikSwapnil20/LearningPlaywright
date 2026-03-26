let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces (increase)
    for (let s = 1; s <= 2 * (i - 1); s++) {
        row += " ";
    }

    // stars (decrease)
    for (let j = 1; j <= 2 * (n - i) + 1; j++) {
        row += "* ";
    }

    console.log(row);
}