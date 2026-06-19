// Task 1: Traffic Signal Management

let signal = "Red";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Get Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}
// Task 2: Employee Attendance Report

for (let i = 1; i <= 30; i++) {
    console.log("Employee " + i + " Present");
}
// Task 3: ATM Cash Withdrawal

let balance = 10000;

while (balance > 0) {
    balance -= 500;
    console.log("Remaining Balance: ₹" + balance);
}
// Task 4: College Admission Eligibility

let age = 18;
let percentage = 75;
let entranceExam = true;

if (age >= 18) {

    if (percentage >= 70) {

        if (entranceExam) {
            console.log("Admission Approved");
        } else {
            console.log("Rejected: Entrance Exam Not Passed");
        }

    } else {
        console.log("Rejected: Percentage Below 70");
    }

} else {
    console.log("Rejected: Age Below 18");
}
// Task 5: Food Delivery Status

function deliveryStatus(customerName, foodItem, deliveryAddress) {

    console.log("Order Confirmed");
    console.log("Customer: " + customerName);
    console.log("Food Item: " + foodItem);
    console.log("Delivery Address: " + deliveryAddress);
}

deliveryStatus(
    "Bhavesh",
    "Pizza",
    "Bangalore"
);
// Task 6: Salary Processing System

function calculateSalary(basicSalary, hra, allowance) {
    let totalSalary = basicSalary + hra + allowance;
    return totalSalary;
}

function calculateBonus(salary) {
    let bonus = salary * 0.10;
    return bonus;
}

let salary = calculateSalary(30000, 5000, 2000);
let bonus = calculateBonus(salary);

console.log("Total Salary: ₹" + salary);
console.log("Bonus: ₹" + bonus);
console.log("Final Salary: ₹" + (salary + bonus));
// Task 7: E-commerce Discount Engine

function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount: ₹" + finalAmount);
}

function applyDiscount(amount, callback) {

    let discount = amount * 0.10;
    let finalAmount = amount - discount;

    console.log("Discount Applied: ₹" + discount);

    callback(finalAmount);
}

applyDiscount(5000, generateInvoice);
// Task 8: Promotional Offers

function* offersGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = offersGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
// Task 9: Student Database Merge

let scienceStudents = [
    "Rahul",
    "Akhil",
    "John"
];

let commerceStudents = [
    "Priya",
    "Sneha",
    "Kiran"
];

let allStudents = [
    ...scienceStudents,
    ...commerceStudents
];

console.log("All Students");
console.log(allStudents);
// Task 10: Online Exam System

function calculateMarks(studentName, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Student Name:", studentName);
    console.log("Total Marks:", total);
}

calculateMarks("Bhavesh", 85, 90, 78, 88, 95);
// Task 11: Employee Profile

let employee = {
    name: "Bhavesh",
    department: "Frontend Developer",
    salary: 50000,
    experience: 3
};

// Object Destructuring
let { name, department, salary, experience } = employee;

console.log("Employee Details");
console.log("Name:", name);
console.log("Department:", department);
console.log("Salary: ₹" + salary);
console.log("Experience:", experience + " Years");
// Task 12: Product Inventory Filter

let products = [
    { name: "Mobile", price: 25000, category: "Electronics" },
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Headphone", price: 3000, category: "Accessories" },
    { name: "Smartwatch", price: 7000, category: "Electronics" },
    { name: "Keyboard", price: 1500, category: "Accessories" }
];

// Filter products above ₹5000
let expensiveProducts = products.filter(product => product.price > 5000);

console.log("Products Above ₹5000");

for (let product of expensiveProducts) {
    console.log(product.name + " - ₹" + product.price);
}
// Task 13: Find First Premium Customer

let customers = [
    { name: "Rahul", purchase: 25000 },
    { name: "Kiran", purchase: 40000 },
    { name: "Bhavesh", purchase: 70000 },
    { name: "John", purchase: 90000 }
];

// Find first customer with purchase > ₹50000
let premiumCustomer = customers.find(customer => customer.purchase > 50000);

console.log("First Premium Customer");
console.log("Name:", premiumCustomer.name);
console.log("Purchase Amount: ₹" + premiumCustomer.purchase);
// Task 14: Company Expense Tracker

let expenses = [
    12000,
    18000,
    25000,
    9000,
    16000
];

// Calculate total expenses
let totalExpense = expenses.reduce((total, expense) => {
    return total + expense;
}, 0);

console.log("Total Company Expense: ₹" + totalExpense);
// Task 15: Gaming Tournament Verification

let players = [
    { name: "Rahul", age: 22 },
    { name: "Kiran", age: 20 },
    { name: "Bhavesh", age: 24 },
    { name: "John", age: 19 }
];

// Check if all players are above 18
let eligible = players.every(player => player.age > 18);

console.log("All Players Above 18:", eligible);
// Task 16: Job Portal Search

let candidates = [
    {
        name: "Rahul",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Bhavesh",
        skills: ["React", "JavaScript", "Node.js"]
    },
    {
        name: "John",
        skills: ["Python", "SQL"]
    }
];

// Check if at least one candidate knows React
let knowsReact = candidates.some(candidate =>
    candidate.skills.includes("React")
);

console.log("At least one candidate knows React:", knowsReact);
// Task 17: Mobile Number Validator

let mobileNumber = "9876543210";

if (
    mobileNumber.length === 10 &&
    (
        mobileNumber.startsWith("6") ||
        mobileNumber.startsWith("7") ||
        mobileNumber.startsWith("8") ||
        mobileNumber.startsWith("9")
    )
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}
// Task 18: URL Slug Generator

let title = "Learn JavaScript Complete Course";

let slug = title
    .toLowerCase()
    .split(" ")
    .join("-");

console.log("URL Slug:", slug);
// Task 19: Employee Sorting Dashboard

let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Kiran", salary: 40000 },
    { name: "Bhavesh", salary: 35000 },
    { name: "John", salary: 50000 }
];

// Highest to Lowest
employees.sort((a, b) => b.salary - a.salary);

console.log("Highest to Lowest Salary");

for (let employee of employees) {
    console.log(employee.name + " - ₹" + employee.salary);
}

// Lowest to Highest
employees.sort((a, b) => a.salary - b.salary);

console.log("--------------------------");
console.log("Lowest to Highest Salary");

for (let employee of employees) {
    console.log(employee.name + " - ₹" + employee.salary);
}
// Task 20: Movie Booking System

let movies = [
    "Leo",
    "Jailer",
    "Pushpa",
    "KGF"
];

// Generate Booking IDs
let bookingIDs = movies.map((movie, index) => {
    return {
        bookingId: "BK" + (index + 1),
        movieName: movie
    };
});

console.log("Movie Booking Details");

for (let booking of bookingIDs) {
    console.log(
        booking.bookingId +
        " - " +
        booking.movieName
    );
}
