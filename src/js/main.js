var UserNum1 = document.getElementById('Num1');
var UserNum2 = document.getElementById('Num2');
var UserNum3 = document.getElementById('Num3');
var UserNum4 = document.getElementById('Num4');
var UserNum5 = document.getElementById('Num5');
var UserNum6 = document.getElementById('Num6');

//Hold the numbers that the user picks for each ticket type in these arrays
var LotteryNumbersB = []; // This will hold the 3 numbers that the user picks for the Basic Ticket
var LotteryNumbersS = []; // This will hold the 5 numbers that the user picks for the Standard Ticket
var LotteryNumbersM = []; // This will hold the 6 numbers that the user picks for the Mega Ticket

// This will hold the 6 winning numbers that are randomly generated
var WinningNumbers = [];

//These are the Ticket Types that the user can choose from
var BasicTicket = document.getElementById('BasicTicket').addEventListener('click', function() {
    Basic();
});

var StandardTicket = document.getElementById('StandardTicket').addEventListener('click', function() {
    Standard();
});

var MegaTicket = document.getElementById('MegaTicket').addEventListener('click', function() {
    Mega();
});

var PlayButton = document.getElementById('PlayButton');

// This holds the users Winnings and how much they spent to calculate the profit (Calc for short)
var Winnings;
var Spent;
var Profit;

let ticketSelected = false;
let readyClicked = false;

function Basic(){
    ticketSelected = "Basic";
    
    LotteryNumbersB = []; 

    const Num1 = parseInt(UserNum1.value);
    const Num2 = parseInt(UserNum2.value);
    const Num3 = parseInt(UserNum3.value);

    LotteryNumbersB.push(Num1, Num2, Num3);

    checkConditions();
}

function Standard(){
    ticketSelected = "Standard";
    
    LotteryNumbersS = [];
    const Num1 = parseInt(UserNum1.value);
    const Num2 = parseInt(UserNum2.value);
    const Num3 = parseInt(UserNum3.value);
    const Num4 = parseInt(UserNum4.value);
    const Num5 = parseInt(UserNum5.value);

    LotteryNumbersS.push(Num1, Num2, Num3, Num4, Num5);

    checkConditions();
}

function Mega(){
    ticketSelected = "Mega";
    
    LotteryNumbersM = [];
    
    const Num1 = parseInt(UserNum1.value);
    const Num2 = parseInt(UserNum2.value);
    const Num3 = parseInt(UserNum3.value);
    const Num4 = parseInt(UserNum4.value);
    const Num5 = parseInt(UserNum5.value);
    const Num6 = parseInt(UserNum6.value);

    LotteryNumbersM.push(Num1, Num2, Num3, Num4, Num5, Num6);
    checkConditions();
}

// Put this on your second, separate verification button
function ReadyBtnClicked(){
    readyClicked = true;
    checkConditions();
}

function checkConditions() {
    if (ticketSelected && readyClicked) {
        PlayButton.disabled = false;
    }
}

PlayButton.addEventListener('click', function() {
    // Call the function to generate winning numbers and compare with user's numbers
    // You can also add code here to calculate winnings and update the Winnings, Spent, and Profit variables

    if (ticketSelected === "Basic") {
        // Compare LotteryNumbersB with WinningNumbers
        generateBasic();

        for (let num of LotteryNumbersB) {
            if (WinningNumbers.includes(num)) {
                Winnings += 2; // Example: Each matching number wins $2
            }
        }
    } else if (ticketSelected === "Standard") {
        // Compare LotteryNumbersS with WinningNumbers
        generateStandard();

        for (let num of LotteryNumbersS) {
            if (WinningNumbers.includes(num)) {
                Winnings += 6; // Example: Each matching number wins $6
            }
        }
    } else if (ticketSelected === "Mega") {
        // Compare LotteryNumbersM with WinningNumbers
        generateMega();

        for (let num of LotteryNumbersM) {
            if (WinningNumbers.includes(num)) {
                Winnings += 10; // Example: Each matching number wins $10
            }
        }
    }
});

function generateBasic() {
    WinningNumbers = [];

    while (WinningNumbers.length < 3) {
        let rand = Math.floor(Math.random() * 20) + 1;

        if (!WinningNumbers.includes(rand)) {
            WinningNumbers.push(rand);
        }
    }
}

function generateStandard() {
    WinningNumbers = [];

    while (WinningNumbers.length < 5) {
        let rand = Math.floor(Math.random() * 50) + 1;

        if (!WinningNumbers.includes(rand)) {
            WinningNumbers.push(rand);
        }
    }
}

function generateMega() {
    WinningNumbers = [];

    while (WinningNumbers.length < 6) {
        let rand = Math.floor(Math.random() * 60) + 1;

        if (!WinningNumbers.includes(rand)) {
            WinningNumbers.push(rand);
        }
    }
}   

function reset() {
    UserNum1.value = '';
    UserNum2.value = '';
    UserNum3.value = '';
    UserNum4.value = '';
    UserNum5.value = '';
    UserNum6.value = '';
}   
