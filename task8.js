// Task 1: Employee Salary Management

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

// Employees with salary above ₹40,000
let highSalaryEmployees = employees.filter(employee => employee.salary > 40000);

console.log("Employees with Salary Above ₹40,000");
console.log(highSalaryEmployees);

// First employee with salary above ₹60,000
let firstEmployee = employees.find(employee => employee.salary > 60000);

console.log("\nFirst Employee with Salary Above ₹60,000");
console.log(firstEmployee);

// Total company salary expense
let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);

console.log("\nTotal Salary Expense: ₹" + totalSalary);

// Employee names
let employeeNames = employees.map(employee => employee.name);

console.log("\nEmployee Names");
console.log(employeeNames);
// Task 2: College Admission Form

function checkAdmission(name, age, percentage) {

    let student = {
        name,
        age,
        percentage
    };

    if (student.age >= 18 && student.percentage >= 60) {
        return student.name + " - Admission Approved";
    } else {
        return student.name + " - Admission Rejected";
    }
}

console.log(checkAdmission("Bhavesh", 24, 82));
console.log(checkAdmission("Rahul", 17, 75));
// Task 3: E-Commerce Cart

let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

// Total Bill
let totalBill = cart.reduce((total, item) => {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Bill: ₹" + totalBill);

// Most Expensive Product
let expensive = cart.reduce((highest, item) => {
    return item.price > highest.price ? item : highest;
});

console.log("Most Expensive Product:", expensive.product);

// Product Names
console.log("Products");

cart.forEach(item => console.log(item.product));
// Task 4: Traffic Fine System

let signal = "red";
let violated = true;

switch (signal) {

    case "red":
        console.log("Stop");
        if (violated) {
            console.log("Fine: ₹1000");
        }
        break;

    case "yellow":
        console.log("Slow Down");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}
// Task 5: Student Result Processing

let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

// Passed Students
let passed = students.filter(student => student.mark >= 50);

// Failed Students
let failed = students.filter(student => student.mark < 50);

// Grade List
let grades = students.map(student => {

    if (student.mark >= 90)
        return { name: student.name, grade: "A+" };

    if (student.mark >= 75)
        return { name: student.name, grade: "A" };

    if (student.mark >= 50)
        return { name: student.name, grade: "B" };

    return { name: student.name, grade: "Fail" };
});

console.log("Passed Students");
console.log(passed);

console.log("\nFailed Students");
console.log(failed);

console.log("\nGrades");
console.log(grades);
// Task 6: Online Food Delivery

function placeOrder(customerName, ...items) {

    console.log("Customer Name:", customerName);

    console.log("Ordered Items:");

    items.forEach(item => {
        console.log(item);
    });

    console.log("Total Items:", items.length);
}

placeOrder(
    "Bhavesh",
    "Pizza",
    "Burger",
    "Cold Coffee",
    "French Fries"
);
// Task 7: Bank Account System

let balance = 10000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {

    if (amount <= balance) {
        balance -= amount;
    } else {
        console.log("Insufficient Balance");
    }

    return balance;
}

function checkBalance() {
    return balance;
}

console.log("Current Balance:", checkBalance());

console.log("After Deposit:", deposit(5000));

console.log("After Withdrawal:", withdraw(3000));

console.log("Available Balance:", checkBalance());
// Task 8: Movie Ticket Booking

let bookedSeats = [];

function bookSeat(seatNumber) {

    if (bookedSeats.includes(seatNumber)) {
        console.log("Seat", seatNumber, "Already Booked");
    } else {
        bookedSeats.push(seatNumber);
        console.log("Seat", seatNumber, "Booked Successfully");
    }
}

bookSeat("A1");
bookSeat("A2");
bookSeat("A1");

console.log("\nBooked Seats:");

for (let seat of bookedSeats) {
    console.log(seat);
}
// Task 9: User Login Validation

let username = "Bhavesh";
let password = "Password123";
let email = "bhavesh@gmail.com";

if (
    !username.includes(" ") &&
    password.length >= 8 &&
    email.includes("@")
) {
    console.log("Login Details Valid");
} else {
    console.log("Invalid Login Details");
}
// Task 10: Product API Dashboard

async function getProducts() {

    try {

        let response = await fetch("https://fakestoreapi.com/products");

        let products = await response.json();

        console.log("Product Titles:");

        products.forEach(product => {
            console.log(product.title);
        });

        let expensiveProducts = products.filter(product => product.price > 1000);

        console.log("\nProducts Above ₹1000:");
        console.log(expensiveProducts);

        console.log("\nTotal Products:", products.length);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getProducts();
// Task 11: Birthday Day Finder

let dob = new Date("2002-08-15");

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Date:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", days[dob.getDay()]);
// Task 12: Netflix Subscription System

let plan = "Premium";

let benefit =
    plan === "Mobile"
        ? "Watch on 1 Mobile Device"
        : plan === "Basic"
        ? "Watch on 1 Screen (HD)"
        : plan === "Standard"
        ? "Watch on 2 Screens (Full HD)"
        : plan === "Premium"
        ? "Watch on 4 Screens (4K + HDR)"
        : "Invalid Plan";

console.log("Selected Plan:", plan);
console.log("Benefits:", benefit);
// Task 13: Hospital Patient Management

let patients = [
    { id: 1, name: "Rahul", status: "Normal" },
    { id: 2, name: "Bhavesh", status: "Critical" },
    { id: 3, name: "John", status: "Normal" },
    { id: 4, name: "Kiran", status: "Critical" }
];

// Find critical patients
let criticalPatients = patients.filter(patient => patient.status === "Critical");

// Find patient by ID
let patient = patients.find(patient => patient.id === 2);

// Count total patients
let totalPatients = patients.length;

console.log("Critical Patients:");
console.log(criticalPatients);

console.log("\nPatient with ID 2:");
console.log(patient);

console.log("\nTotal Patients:", totalPatients);
// Task 14: Inventory Management System

let inventory1 = [
    { id: 1, product: "Laptop", price: 60000 },
    { id: 2, product: "Mouse", price: 1000 }
];

let inventory2 = [
    { id: 3, product: "Keyboard", price: 2000 },
    { id: 4, product: "Monitor", price: 15000 }
];

// Merge arrays
let allProducts = [...inventory1, ...inventory2];

// Add new product
let updatedInventory = [
    ...allProducts,
    { id: 5, product: "Headphone", price: 3000 }
];

console.log("Inventory List:");

updatedInventory.forEach(item => {

    // Destructuring
    let { id, product, price } = item;

    console.log(
        "ID:", id,
        "| Product:", product,
        "| Price: ₹" + price
    );
});
// Task 15: WhatsApp Group Management

let groupMembers = [
    "Rahul",
    "Kiran",
    "John"
];

console.log("Initial Members:");
console.log(groupMembers);

// Add member at end
groupMembers.push("Bhavesh");

// Remove last member
groupMembers.pop();

// Remove first member
groupMembers.shift();

// Add member at beginning
groupMembers.unshift("Sneha");

// Insert member at position 2
groupMembers.splice(2, 0, "Arjun");

console.log("\nFinal Group Members:");

groupMembers.forEach(member => {
    console.log(member);
});
