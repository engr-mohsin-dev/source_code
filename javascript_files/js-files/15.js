// break & continue function

// break fnc

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;                          // Exit the loop when i is 5
    }
    console.log(i);                     // This will print 0, 1, 2, 3, 4
}

console.log("-----------------------------")

// continue fnc

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("skipped");
        continue;                                       // Skip the iteration when i is 3
    }
    console.log(i);                                     // This will print 0, 1, 2, 3, 4, 6, 7, 8, 9
}



