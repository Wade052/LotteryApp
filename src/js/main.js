// Reference on how to use the alert function in JavaScript
var inputNum = document.getElementById('inputNum');

document.getElementById('btnA').addEventListener('click', () => {
    //alert('I got clicked!');
    inputNum.style.backgroundColor = 'green';
    alert('You picked ' + inputNum.value);
})

//Lottery Game
var LotteryNumbersB = []; // This will hold the 3 numbers that the user picks for the Basic Ticket
var LotteryNumbersS = []; // This will hold the 5 numbers that the user picks for the Standard Ticket
var LotteryNumbersM = []; // This will hold the 6 numbers that the user picks for the Mega Ticket

// This will hold the 6 winning numbers that are randomly generated
var WinningNumbers = [];

//These are the Ticket Types that the user can choose from
var BasicTicket = document.getElementById('BasicTicket');
var StandardTicket = document.getElementById('StandardTicket');
var MegaTicket = document.getElementById('MegaTicket');

// This holds the users Winnings and how much they spent to calculate the profit (Calc for short)
var Winnings = 0;
var Spent = 0;
var Profit = 0;

