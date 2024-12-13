function dice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let dice = Math.floor((Math.random() * 6) + 1);
            resolve(dice);
        }, 4000);
    });
}

async function rollDiceNTimes(n) {
    for (let i = 0; i < n; ++i) {
        let result = await dice(); // Wait for the dice roll
        console.log(`${i}: ${result}`);
    }
}

rollDiceNTimes(10);

