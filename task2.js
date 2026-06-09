// =====================================
// Task 1: Student Result Checker
// Concepts: Variables, Comparison, Logical, Ternary
// =====================================

let marks = 75;

console.log("Marks : " + marks);

console.log(marks >= 40 ? "Pass" : "Fail");

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("No Grade");
}


// =====================================
// Task 2: Employee Bonus Calculator
// Concepts: Arithmetic, Assignment Operators
// =====================================

let salary = 20000;
let bonus = salary * 10 / 100;
let finalSalary = salary + bonus;

console.log("Original Salary : " + salary);
console.log("Bonus : " + bonus);
console.log("Final Salary : " + finalSalary);


// =====================================
// Task 3: User Login Validation
// Concepts: Logical Operators
// =====================================

let email = "admin@gmail.com";
let password = "12345678";

if (email === "admin@gmail.com" && password === "12345678") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}


// =====================================
// Task 4: Product Discount Calculator
// Concepts: Arithmetic, Ternary
// =====================================

let price = 2000;

let finalPrice = price > 1000 ? price - (price * 20 / 100) : price;

console.log("Original Price : " + price);
console.log("Final Price : " + finalPrice);


// =====================================
// Task 5: Array Product Management
// Concepts: Array
// =====================================

let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product : " + products[0]);
console.log("Last Product : " + products[products.length - 1]);
console.log("Total Products : " + products.length);


// =====================================
// Task 6: Employee Object
// Concepts: Object
// =====================================

let employee = {
    name: "Bhavesh",
    department: "Development",
    salary: 30000
};

console.log(employee);
console.log("Employee Name : " + employee.name);
console.log("Salary : " + employee.salary);


// =====================================
// Task 7: E-Commerce Cart Total
// Concepts: Arithmetic Operators
// =====================================

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let discount = totalBill * 10 / 100;
let finalAmount = totalBill - discount;

console.log("Total Bill : " + totalBill);
console.log("Discount : " + discount);
console.log("Final Amount : " + finalAmount);


// =====================================
// Task 8: Age Eligibility Checker
// Concepts: Comparison Operator
// =====================================

let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}


// =====================================
// Task 9: Increment Decrement Practice
// Concepts: Pre/Post Increment
// =====================================

let a = 10;

console.log("Initial Value : " + a);

a++;
console.log("After a++ : " + a);

++a;
console.log("After ++a : " + a);

a--;
console.log("After a-- : " + a);

--a;
console.log("After --a : " + a);


// =====================================
// Task 10: Mini Employee Attendance System
// Concepts: Boolean, Logical Operators
// =====================================

let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}


// =====================================
// Bonus Task: Employee Management Console App
// =====================================

let employeeDetails = {
    id: 101,
    name: "Bhavesh",
    department: "Development",
    salary: 35000,
    experience: 2
};

console.log("Employee ID : " + employeeDetails.id);
console.log("Employee Name : " + employeeDetails.name);
console.log("Department : " + employeeDetails.department);
console.log("Salary : " + employeeDetails.salary);
console.log("Experience : " + employeeDetails.experience + " Years");

let empBonus = employeeDetails.salary * 10 / 100;
let empFinalSalary = employeeDetails.salary + empBonus;

console.log("Bonus : " + empBonus);
console.log("Final Salary : " + empFinalSalary);

if (employeeDetails.experience >= 2) {
    console.log("Performance Status : Good");
} else {
    console.log("Performance Status : Average");
}