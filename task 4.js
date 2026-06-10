// ==========================================
// Task 1: Age Category Finder
// ==========================================

let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}


// ==========================================
// Task 2: Salary Hike Calculator
// ==========================================

let salary = Number(prompt("Enter your salary:"));
let newSalary;

if (salary < 20000) {
    newSalary = salary + (salary * 20 / 100);
} else if (salary <= 50000) {
    newSalary = salary + (salary * 10 / 100);
} else {
    newSalary = salary + (salary * 5 / 100);
}

console.log("Old Salary : " + salary);
console.log("New Salary : " + newSalary);


// ==========================================
// Task 3: Electricity Department
// ==========================================

let units = Number(prompt("Enter units consumed:"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Units Consumed : " + units);
console.log("Electricity Bill : ₹" + bill);


// ==========================================
// Task 4: Simple ATM
// ==========================================

let balance = 10000;
let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance : ₹" + balance);
} else {
    console.log("Insufficient Funds");
}


// ==========================================
// Task 5: Login Validation
// ==========================================

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}
// ==========================================
// Task 6: Mobile Recharge Offer
// ==========================================

let recharge = Number(prompt("Enter Recharge Amount:"));

if (recharge >= 499) {
    console.log("Offer : Netflix Subscription");
} else if (recharge >= 299) {
    console.log("Offer : 2GB Extra Data");
} else {
    console.log("Offer : No Offer");
}


// ==========================================
// Task 7: Traffic Signal System
// ==========================================

let signal = prompt("Enter Traffic Signal Color (Red, Yellow, Green):");

switch (signal.toLowerCase()) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// ==========================================
// Task 8: Employee Attendance
// ==========================================

let workingDays = Number(prompt("Enter Total Working Days:"));
let presentDays = Number(prompt("Enter Present Days:"));

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance Percentage : " + attendance + "%");

if (attendance >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// ==========================================
// Task 9: Bus Ticket Booking
// ==========================================

let ticketPrice = 500;
let numberOfTickets = Number(prompt("Enter Number of Tickets:"));

let totalAmount = ticketPrice * numberOfTickets;
let gst = totalAmount * 5 / 100;
let finalAmount = totalAmount + gst;

console.log("Ticket Price : ₹" + ticketPrice);
console.log("Number of Tickets : " + numberOfTickets);
console.log("Total Amount : ₹" + totalAmount);
console.log("GST (5%) : ₹" + gst);
console.log("Final Amount : ₹" + finalAmount);


// ==========================================
// Task 10: Restaurant Bill
// ==========================================

let foodCost = Number(prompt("Enter Food Cost:"));

let discount = 0;

if (foodCost > 2000) {
    discount = foodCost * 10 / 100;
}

let finalBill = foodCost - discount;

console.log("Food Cost : ₹" + foodCost);
console.log("Discount : ₹" + discount);
console.log("Final Bill : ₹" + finalBill);
// ==========================================
// Task 11: Police Recruitment
// ==========================================

let age = Number(prompt("Enter Age:"));
let height = Number(prompt("Enter Height (cm):"));
let weight = Number(prompt("Enter Weight (kg):"));

if (age >= 18) {

    if (height >= 160) {

        if (weight >= 55) {
            console.log("Selected for Police Recruitment");
        } else {
            console.log("Rejected: Weight should be at least 55 kg");
        }

    } else {
        console.log("Rejected: Height should be at least 160 cm");
    }

} else {
    console.log("Rejected: Age should be at least 18 years");
}


// ==========================================
// Task 12: Student Result
// ==========================================

let sub1 = Number(prompt("Enter Subject 1 Marks:"));
let sub2 = Number(prompt("Enter Subject 2 Marks:"));
let sub3 = Number(prompt("Enter Subject 3 Marks:"));
let sub4 = Number(prompt("Enter Subject 4 Marks:"));
let sub5 = Number(prompt("Enter Subject 5 Marks:"));

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = total / 5;

console.log("Total Marks : " + total);
console.log("Percentage : " + percentage + "%");

if (percentage >= 90) {
    console.log("Grade : A+");
} else if (percentage >= 80) {
    console.log("Grade : A");
} else if (percentage >= 70) {
    console.log("Grade : B");
} else if (percentage >= 60) {
    console.log("Grade : C");
} else {
    console.log("Grade : Fail");
}


// ==========================================
// Task 13: Employee Shift Finder
// ==========================================

let time = Number(prompt("Enter Time (0 - 23):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else if ((time >= 22 && time <= 23) || (time >= 0 && time < 6)) {
    console.log("Night Shift");
} else {
    console.log("Invalid Time");
}


// ==========================================
// Task 14: Loan Eligibility
// ==========================================

let loanAge = Number(prompt("Enter Age:"));
let loanSalary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

if (loanAge >= 21 && loanSalary >= 25000 && experience >= 2) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan");
}


// ==========================================
// Task 15: Cab Fare Calculator
// ==========================================

let distance = Number(prompt("Enter Distance (KM):"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Distance : " + distance + " KM");
console.log("Total Fare : ₹" + fare);
// ==========================================
// Task 16: Multiplication Table Generator
// ==========================================

let number = Number(prompt("Enter a Number:"));

console.log("Multiplication Table of " + number);

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// ==========================================
// Task 17: Password Checker
// ==========================================

let password = prompt("Enter Password:");

let length = password.length;

if (length < 6) {
    console.log("Weak Password");
} else if (length >= 6 && length <= 10) {
    console.log("Medium Password");
} else {
    console.log("Strong Password");
}


// ==========================================
// Task 18: Company Bonus System
// ==========================================

let salary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

let bonus = 0;

if (experience >= 0 && experience <= 2) {
    bonus = salary * 5 / 100;
} else if (experience >= 3 && experience <= 5) {
    bonus = salary * 10 / 100;
} else {
    bonus = salary * 20 / 100;
}

let finalSalary = salary + bonus;

console.log("Salary : ₹" + salary);
console.log("Bonus : ₹" + bonus);
console.log("Final Salary : ₹" + finalSalary);


// ==========================================
// Task 19: Countdown Timer
// ==========================================

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");


// ==========================================
// Task 20: Interview Selection System
// ==========================================

let degree = prompt("Degree Completed? (Yes/No)");
let communication = prompt("Communication Skill (Good/Poor)");
let technicalScore = Number(prompt("Technical Score:"));

if (degree.toLowerCase() === "yes") {

    if (communication.toLowerCase() === "good") {

        if (technicalScore >= 70) {
            console.log("Selected for Interview");
        } else {
            console.log("Rejected: Technical Score is below 70");
        }

    } else {
        console.log("Rejected: Communication Skills are not Good");
    }

} else {
    console.log("Rejected: Degree Not Completed");
}