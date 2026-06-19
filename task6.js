// Task 1: Employee Bonus Calculator

let employeeName = "Bhavesh";
let salary = 50000;
let experience = 4;

let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

let finalSalary = salary + bonus;

console.log("Employee Name:", employeeName);
console.log("Experience:", experience, "Years");
console.log("Bonus:", bonus);
console.log("Final Salary:", finalSalary);
// Task 2: College Admission System

let studentName = "Rahul";
let age = 18;
let percentage = 75;

if (age >= 17) {

    if (percentage >= 60) {
        console.log(studentName + " Admission Approved");
    } else {
        console.log(studentName + " Admission Rejected");
    }

} else {
    console.log(studentName + " Admission Rejected");
}
// Task 3: Food Delivery Menu

let choice = 2;

switch (choice) {

    case 1:
        console.log("Order Confirmed : Pizza");
        break;

    case 2:
        console.log("Order Confirmed : Burger");
        break;

    case 3:
        console.log("Order Confirmed : Shawarma");
        break;

    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;

    default:
        console.log("Invalid Choice");
}
// Task 4: Attendance Tracker

let students = [
    "Rahul",
    "Kiran",
    "Bhavesh",
    "John",
    "Priya",
    "Sneha",
    "Rohit",
    "Akhil",
    "Arjun",
    "Kavin"
];

console.log("Student List");

for (let student of students) {
    console.log(student);
}

console.log("Total Students:", students.length);
// Task 5: E-Commerce Cart

let cart = [
    {
        product: "Mobile",
        price: 15000
    },
    {
        product: "Headset",
        price: 2000
    },
    {
        product: "Charger",
        price: 1000
    }
];

console.log("Products in Cart");

let total = 0;

let expensiveProduct = cart[0];

for (let item of cart) {

    console.log(item.product + " - ₹" + item.price);

    total += item.price;

    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("----------------------");
console.log("Total Cart Value: ₹" + total);
console.log("Most Expensive Product:", expensiveProduct.product);
console.log("Price: ₹" + expensiveProduct.price);
// Task 6: Bank Account Management

let balance = 10000;

function deposit(amount) {
    balance += amount;
    console.log("Deposited: ₹" + amount);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn: ₹" + amount);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Current Balance: ₹" + balance);
}

// Function Calls
checkBalance();
deposit(5000);
checkBalance();
withdraw(3000);
checkBalance();
// Task 7: Movie Ticket Booking

let customerName = "Bhavesh";
let age = 24;
let ticketPrice = 0;

if (age < 5) {
    ticketPrice = 0;
} else if (age <= 18) {
    ticketPrice = 100;
} else if (age <= 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 120;
}

console.log("Customer:", customerName);
console.log("Age:", age);
console.log("Ticket Price: ₹" + ticketPrice);
// Task 8: Online Shopping Discount

let purchaseAmount = 5500;
let discount = 0;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
} else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
} else {
    discount = 0;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount: ₹" + purchaseAmount);
console.log("Discount: ₹" + discount);
console.log("Final Amount: ₹" + finalAmount);
// Task 9: Food Inventory System

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

console.log("Initial Inventory:");
console.log(inventory);

// Add 2 items
inventory.push("Bread");
inventory.push("Butter");

// Remove first item
inventory.shift();

// Remove last item
inventory.pop();

// Check whether Milk exists
if (inventory.includes("Milk")) {
    console.log("Milk is available.");
} else {
    console.log("Milk is not available.");
}

console.log("Final Inventory:");
console.log(inventory);
// Task 10: Hospital Patient Management

let patient = {
    patientName: "Bhavesh",
    age: 24,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

console.log("Patient Details");

// Display using for-in loop
for (let key in patient) {
    console.log(key + " : " + patient[key]);
}

// Destructuring
let { patientName, age, disease, doctor } = patient;

console.log("----------------------");
console.log("Patient Name:", patientName);
console.log("Age:", age);
console.log("Disease:", disease);
console.log("Doctor:", doctor);
// Task 11: Amazon Order Tracker

function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

// Function Call
placeOrder(sendSMS);
// Task 12: Cashback Offer Generator

function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
// Task 13: Employee Database

let employees = [
    {
        id: 1,
        name: "Rahul",
        salary: 25000
    },
    {
        id: 2,
        name: "Kavin",
        salary: 30000
    },
    {
        id: 3,
        name: "John",
        salary: 40000
    }
];

let totalSalary = 0;
let highestSalaryEmployee = employees[0];

console.log("Employee Names");

for (let employee of employees) {

    console.log(employee.name);

    totalSalary += employee.salary;

    if (employee.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = employee;
    }
}

console.log("---------------------");
console.log("Total Salary Expense: ₹" + totalSalary);
console.log("Highest Salary Employee: " + highestSalaryEmployee.name);
console.log("Salary: ₹" + highestSalaryEmployee.salary);
// Task 14: Railway Reservation System

let availableSeats = 50;

function bookSeats(seatsRequired) {

    if (seatsRequired <= availableSeats) {

        availableSeats -= seatsRequired;

        console.log(seatsRequired + " Seat(s) Booked Successfully");
        console.log("Remaining Seats: " + availableSeats);

    } else {

        console.log("Booking Rejected");
        console.log("Only " + availableSeats + " Seat(s) Available");

    }
}

// Function Calls

bookSeats(10);
bookSeats(15);
bookSeats(30);
// Task 15: Mobile Store Billing System

let products = {
    Mobile: 25000,
    Laptop: 60000,
    Headphone: 3000,
    Smartwatch: 7000
};

let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

let totalAmount = 0;

console.log("Selected Products");

for (let product of selectedProducts) {

    console.log(product + " - ₹" + products[product]);

    totalAmount += products[product];

}

let gst = totalAmount * 0.18;
let finalBill = totalAmount + gst;

console.log("--------------------------");
console.log("Total Amount: ₹" + totalAmount);
console.log("GST (18%): ₹" + gst);
console.log("Final Bill: ₹" + finalBill);
