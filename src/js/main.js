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
var BasicTicket = document.getElementById('BasicTicket');
var StandardTicket = document.getElementById('StandardTicket');
var MegaTicket = document.getElementById('MegaTicket');

// This holds the users Winnings and how much they spent to calculate the profit (Calc for short)
var Winnings = 0;
var Spent = 0;
var Profit = 0;

let BTicket = false;
let STicket = false;
let MTicket = false;

const BasicTicket = document.getElementById('BasicTicket');
const StandardTicket = document.getElementById('StandardTicket');
const MegaTicket = document.getElementById('MegaTicket');
const PlayButton = document.getElementById('Play');

