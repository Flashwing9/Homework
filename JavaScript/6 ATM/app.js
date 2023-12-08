function withdrawFromATM() {
    let accountBalance = 100000;
    let withdrawAmount = parseFloat(prompt("input the amount you want to withdraw"))

    if (Number.isNaN(withdrawAmount)) {
        console.log("error, enter a valid number");
        return;
    }

    if (withdrawAmount > accountBalance) {
        console.log("not enough money in account");
        return "not enough money";
    }

    let remainingBalance = accountBalance - withdrawAmount;

    console.log(`withdraw amount ${withdrawAmount}`);
    console.log(`remaining money ${remainingBalance}`);

    return {
        withdrawAmount:withdrawAmount,
        remainingBalance: remainingBalance,
    };
}

let withdrawResult = withdrawFromATM();
console.log(withdrawResult);