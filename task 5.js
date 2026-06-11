// Student Management System

let students = [
    {
        id: 1,
        name: "Rahul",
        department: "CSE",
        mark: 95
    },
    {
        id: 2,
        name: "Priya",
        department: "ECE",
        mark: 82
    },
    {
        id: 3,
        name: "Arun",
        department: "MECH",
        mark: 74
    },
    {
        id: 4,
        name: "Sneha",
        department: "EEE",
        mark: 48
    },
    {
        id: 5,
        name: "Kiran",
        department: "CIVIL",
        mark: 67
    }
];

// Display all student names
console.log("----- Student Names -----");

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// Calculate Total Marks
let totalMarks = 0;

for (let i = 0; i < students.length; i++) {
    totalMarks = totalMarks + students[i].mark;
}

console.log("\nTotal Marks =", totalMarks);

// Students Above 80
console.log("\n----- Students Above 80 -----");

for (let i = 0; i < students.length; i++) {

    if (students[i].mark > 80) {
        console.log(students[i].name + " - " + students[i].mark);
    }

}

// Display Grades
console.log("\n----- Grades -----");

for (let i = 0; i < students.length; i++) {

    let grade = "";

    if (students[i].mark >= 90) {
        grade = "A";
    }
    else if (students[i].mark >= 75) {
        grade = "B";
    }
    else if (students[i].mark >= 50) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    console.log(students[i].name + " : " + grade);

}

// Function to Print Student Details

function printStudentDetails(student) {

    console.log("\nStudent Details");
    console.log("----------------------");
    console.log("ID :", student.id);
    console.log("Name :", student.name);
    console.log("Department :", student.department);
    console.log("Marks :", student.mark);

    let grade = "";

    if (student.mark >= 90) {
        grade = "A";
    }
    else if (student.mark >= 75) {
        grade = "B";
    }
    else if (student.mark >= 50) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    console.log("Grade :", grade);

}

// Print Details of Every Student

console.log("\n----- Student Details -----");

for (let i = 0; i < students.length; i++) {
    printStudentDetails(students[i]);
}
// Employee Payroll System

let employees = [
    {
        id: 1,
        name: "Rahul",
        salary: 25000,
        department: "HR"
    },
    {
        id: 2,
        name: "Priya",
        salary: 40000,
        department: "IT"
    },
    {
        id: 3,
        name: "Arun",
        salary: 55000,
        department: "Finance"
    },
    {
        id: 4,
        name: "Sneha",
        salary: 28000,
        department: "Sales"
    },
    {
        id: 5,
        name: "Kiran",
        salary: 35000,
        department: "IT"
    }
];

// Display Employee Names

console.log("===== Employee Names =====");

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}

// Calculate Total Salary Expense

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}

console.log("\nTotal Company Salary Expense = ₹" + totalSalary);

// Employees Earning Above ₹30,000

console.log("\n===== Employees Earning Above ₹30,000 =====");

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > 30000) {
        console.log(employees[i].name + " - ₹" + employees[i].salary);
    }

}

// Department Description Using Switch

console.log("\n===== Department Description =====");

for (let i = 0; i < employees.length; i++) {

    console.log("\nEmployee : " + employees[i].name);

    switch (employees[i].department) {

        case "HR":
            console.log("Department : Human Resources");
            break;

        case "IT":
            console.log("Department : Information Technology");
            break;

        case "Finance":
            console.log("Department : Finance Department");
            break;

        case "Sales":
            console.log("Department : Sales and Marketing");
            break;

        default:
            console.log("Department : Not Available");

    }

}

// Function to Generate Payroll Report

function payrollReport() {

    console.log("\n========== Payroll Report ==========");

    for (let i = 0; i < employees.length; i++) {

        console.log("----------------------------");
        console.log("Employee ID : " + employees[i].id);
        console.log("Name        : " + employees[i].name);
        console.log("Salary      : ₹" + employees[i].salary);
        console.log("Department  : " + employees[i].department);

    }

    console.log("----------------------------");
    console.log("Total Salary Expense : ₹" + totalSalary);

}

// Callback Function

function generateReport(callback) {
    console.log("\nGenerating Payroll Report...\n");
    callback();
}

// Function Call

generateReport(payrollReport);
// Online Food Order System

let foods = [
    {
        id: 1,
        foodName: "Chicken Biryani",
        price: 250,
        category: "Main Course"
    },
    {
        id: 2,
        foodName: "Veg Fried Rice",
        price: 180,
        category: "Main Course"
    },
    {
        id: 3,
        foodName: "Pizza",
        price: 350,
        category: "Fast Food"
    },
    {
        id: 4,
        foodName: "Ice Cream",
        price: 120,
        category: "Dessert"
    },
    {
        id: 5,
        foodName: "Coffee",
        price: 80,
        category: "Beverage"
    }
];

// Display All Food Names

console.log("===== Food Menu =====");

for (let i = 0; i < foods.length; i++) {
    console.log(foods[i].foodName);
}

// Calculate Total Menu Value

let totalMenuValue = 0;

for (let i = 0; i < foods.length; i++) {
    totalMenuValue = totalMenuValue + foods[i].price;
}

console.log("\nTotal Menu Value = ₹" + totalMenuValue);

// Display Foods Above ₹200

console.log("\n===== Foods Above ₹200 =====");

for (let i = 0; i < foods.length; i++) {

    if (foods[i].price > 200) {
        console.log(foods[i].foodName + " - ₹" + foods[i].price);
    }

}

// Category Description Using Switch

console.log("\n===== Food Categories =====");

for (let i = 0; i < foods.length; i++) {

    console.log("\nFood : " + foods[i].foodName);

    switch (foods[i].category) {

        case "Main Course":
            console.log("Category : Main Course Meal");
            break;

        case "Fast Food":
            console.log("Category : Fast Food Item");
            break;

        case "Dessert":
            console.log("Category : Sweet Dish");
            break;

        case "Beverage":
            console.log("Category : Drink");
            break;

        default:
            console.log("Category : Not Available");
    }
}

// Order Confirmation Function

function orderConfirmation() {

    console.log("\n========== Order Confirmation ==========");

    for (let i = 0; i < foods.length; i++) {

        console.log("----------------------------");
        console.log("Food ID   : " + foods[i].id);
        console.log("Food Name : " + foods[i].foodName);
        console.log("Price     : ₹" + foods[i].price);
        console.log("Category  : " + foods[i].category);
    }

    console.log("----------------------------");
    console.log("Thank You! Your Order Has Been Confirmed.");
}

// Callback Function

function placeOrder(callback) {
    console.log("\nProcessing Your Order...\n");
    callback();
}

// Function Call

placeOrder(orderConfirmation);
// Movie Ticket Booking System

let movies = [
    {
        movieName: "Pushpa 2",
        ticketPrice: 250,
        availableSeats: 50,
        language: "Telugu"
    },
    {
        movieName: "Leo",
        ticketPrice: 220,
        availableSeats: 0,
        language: "Tamil"
    },
    {
        movieName: "Kalki 2898 AD",
        ticketPrice: 300,
        availableSeats: 30,
        language: "Hindi"
    },
    {
        movieName: "KGF Chapter 2",
        ticketPrice: 280,
        availableSeats: 15,
        language: "Kannada"
    },
    {
        movieName: "RRR",
        ticketPrice: 260,
        availableSeats: 40,
        language: "Telugu"
    }
];

// Display All Movie Names

console.log("===== Movie Names =====");

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].movieName);
}

// Calculate Total Available Seats

let totalSeats = 0;

for (let i = 0; i < movies.length; i++) {
    totalSeats = totalSeats + movies[i].availableSeats;
}

console.log("\nTotal Available Seats = " + totalSeats);

// Check Booking Availability

console.log("\n===== Booking Status =====");

for (let i = 0; i < movies.length; i++) {

    if (movies[i].availableSeats > 0) {
        console.log(movies[i].movieName + " : Booking Available");
    } else {
        console.log(movies[i].movieName + " : House Full");
    }

}

// Language Description Using Switch

console.log("\n===== Movie Languages =====");

for (let i = 0; i < movies.length; i++) {

    console.log("\nMovie : " + movies[i].movieName);

    switch (movies[i].language) {

        case "Telugu":
            console.log("Language : Telugu Movie");
            break;

        case "Tamil":
            console.log("Language : Tamil Movie");
            break;

        case "Hindi":
            console.log("Language : Hindi Movie");
            break;

        case "Kannada":
            console.log("Language : Kannada Movie");
            break;

        default:
            console.log("Language : Other");
    }
}

// Booking Confirmation Function

function bookingConfirmation() {

    console.log("\n========== Booking Confirmation ==========");

    for (let i = 0; i < movies.length; i++) {

        console.log("----------------------------");
        console.log("Movie Name      : " + movies[i].movieName);
        console.log("Ticket Price    : ₹" + movies[i].ticketPrice);
        console.log("Available Seats : " + movies[i].availableSeats);
        console.log("Language        : " + movies[i].language);
    }

    console.log("----------------------------");
    console.log("Your Booking Has Been Confirmed.");
}

// Callback Function

function bookTicket(callback) {

    console.log("\nProcessing Your Booking...\n");
    callback();

}

// Function Call

bookTicket(bookingConfirmation);
// Hospital Patient Records

let patients = [
    {
        patientId: 101,
        patientName: "Rahul",
        age: 65,
        disease: "Cardiology"
    },
    {
        patientId: 102,
        patientName: "Priya",
        age: 45,
        disease: "Orthopedics"
    },
    {
        patientId: 103,
        patientName: "Arun",
        age: 72,
        disease: "Neurology"
    },
    {
        patientId: 104,
        patientName: "Sneha",
        age: 30,
        disease: "Dermatology"
    },
    {
        patientId: 105,
        patientName: "Kiran",
        age: 68,
        disease: "Cardiology"
    }
];

// Display All Patient Names

console.log("===== Patient Names =====");

for (let i = 0; i < patients.length; i++) {
    console.log(patients[i].patientName);
}

// Count Total Patients

let totalPatients = 0;

for (let i = 0; i < patients.length; i++) {
    totalPatients++;
}

console.log("\nTotal Patients = " + totalPatients);

// Display Patients Above Age 60

console.log("\n===== Patients Above Age 60 =====");

for (let i = 0; i < patients.length; i++) {

    if (patients[i].age > 60) {
        console.log(
            patients[i].patientName +
            " - Age: " +
            patients[i].age
        );
    }

}

// Disease Department Using Switch

console.log("\n===== Disease Departments =====");

for (let i = 0; i < patients.length; i++) {

    console.log("\nPatient : " + patients[i].patientName);

    switch (patients[i].disease) {

        case "Cardiology":
            console.log("Department : Heart Care");
            break;

        case "Orthopedics":
            console.log("Department : Bone Care");
            break;

        case "Neurology":
            console.log("Department : Brain and Nervous System");
            break;

        case "Dermatology":
            console.log("Department : Skin Care");
            break;

        default:
            console.log("Department : General Medicine");
    }

}

// Appointment Confirmation Function

function appointmentConfirmation() {

    console.log("\n========== Appointment Confirmation ==========");

    for (let i = 0; i < patients.length; i++) {

        console.log("------------------------------");
        console.log("Patient ID   : " + patients[i].patientId);
        console.log("Patient Name : " + patients[i].patientName);
        console.log("Age          : " + patients[i].age);
        console.log("Disease      : " + patients[i].disease);

    }

    console.log("------------------------------");
    console.log("Appointments Confirmed Successfully.");
}

// Callback Function

function confirmAppointment(callback) {

    console.log("\nProcessing Appointments...\n");
    callback();

}

// Function Call

confirmAppointment(appointmentConfirmation);
// Library Management System

let books = [
    {
        bookId: 101,
        bookName: "Java Programming",
        author: "James Gosling",
        price: 650,
        category: "Programming"
    },
    {
        bookId: 102,
        bookName: "Python Basics",
        author: "Guido Van Rossum",
        price: 550,
        category: "Programming"
    },
    {
        bookId: 103,
        bookName: "Wings of Fire",
        author: "A.P.J Abdul Kalam",
        price: 450,
        category: "Biography"
    },
    {
        bookId: 104,
        bookName: "The Alchemist",
        author: "Paulo Coelho",
        price: 700,
        category: "Novel"
    },
    {
        bookId: 105,
        bookName: "Data Structures",
        author: "Mark Allen Weiss",
        price: 800,
        category: "Education"
    }
];

// Display All Book Names

console.log("===== Book Names =====");

for (let i = 0; i < books.length; i++) {
    console.log(books[i].bookName);
}

// Calculate Total Book Value

let totalBookValue = 0;

for (let i = 0; i < books.length; i++) {
    totalBookValue = totalBookValue + books[i].price;
}

console.log("\nTotal Book Value = ₹" + totalBookValue);

// Display Books Above ₹500

console.log("\n===== Books Above ₹500 =====");

for (let i = 0; i < books.length; i++) {

    if (books[i].price > 500) {
        console.log(books[i].bookName + " - ₹" + books[i].price);
    }

}

// Book Category Using Switch

console.log("\n===== Book Categories =====");

for (let i = 0; i < books.length; i++) {

    console.log("\nBook : " + books[i].bookName);

    switch (books[i].category) {

        case "Programming":
            console.log("Category : Programming Book");
            break;

        case "Biography":
            console.log("Category : Biography Book");
            break;

        case "Novel":
            console.log("Category : Fiction Novel");
            break;

        case "Education":
            console.log("Category : Educational Book");
            break;

        default:
            console.log("Category : General Book");
    }
}

// Function to Issue a Book

function issueBook(bookName) {

    let found = false;

    for (let i = 0; i < books.length; i++) {

        if (books[i].bookName === bookName) {

            found = true;

            console.log("\n========== Book Issued ==========");
            console.log("Book ID   : " + books[i].bookId);
            console.log("Book Name : " + books[i].bookName);
            console.log("Author    : " + books[i].author);
            console.log("Price     : ₹" + books[i].price);
            console.log("Status    : Successfully Issued");

            break;
        }

    }

    if (!found) {
        console.log("\nBook Not Found.");
    }

}

// Function Call

issueBook("Java Programming");
// E-Commerce Product Dashboard

let products = [
    {
        productId: 101,
        productName: "Laptop",
        price: 55000,
        stock: 8
    },
    {
        productId: 102,
        productName: "Smartphone",
        price: 25000,
        stock: 15
    },
    {
        productId: 103,
        productName: "Headphones",
        price: 3000,
        stock: 5
    },
    {
        productId: 104,
        productName: "Smart Watch",
        price: 12000,
        stock: 20
    },
    {
        productId: 105,
        productName: "Bluetooth Speaker",
        price: 5000,
        stock: 7
    }
];

// Display All Products

console.log("===== Product List =====");

for (let i = 0; i < products.length; i++) {
    console.log(products[i].productName);
}

// Calculate Total Inventory Value

let totalInventoryValue = 0;

for (let i = 0; i < products.length; i++) {
    totalInventoryValue =
        totalInventoryValue + (products[i].price * products[i].stock);
}

console.log("\nTotal Inventory Value = ₹" + totalInventoryValue);

// Find Products with Stock Less Than 10

console.log("\n===== Products with Low Stock =====");

for (let i = 0; i < products.length; i++) {

    if (products[i].stock < 10) {
        console.log(
            products[i].productName +
            " - Stock: " +
            products[i].stock
        );
    }

}

// Display Stock Status

console.log("\n===== Stock Status =====");

for (let i = 0; i < products.length; i++) {

    let status = "";

    if (products[i].stock == 0) {
        status = "Out of Stock";
    }
    else if (products[i].stock < 10) {
        status = "Low Stock";
    }
    else {
        status = "In Stock";
    }

    console.log(products[i].productName + " : " + status);

}

// Product Report Function

function productReport() {

    console.log("\n========== Product Report ==========");

    for (let i = 0; i < products.length; i++) {

        console.log("----------------------------");
        console.log("Product ID   : " + products[i].productId);
        console.log("Product Name : " + products[i].productName);
        console.log("Price        : ₹" + products[i].price);
        console.log("Stock        : " + products[i].stock);

        let status = "";

        if (products[i].stock == 0) {
            status = "Out of Stock";
        }
        else if (products[i].stock < 10) {
            status = "Low Stock";
        }
        else {
            status = "In Stock";
        }

        console.log("Status       : " + status);
    }

    console.log("----------------------------");
    console.log("Total Inventory Value : ₹" + totalInventoryValue);
}

// Callback Function

function generateReport(callback) {

    console.log("\nGenerating Product Report...\n");
    callback();

}

// Function Call

generateReport(productReport);
// College Admission System

let applicants = [
    {
        name: "Rahul",
        age: 18,
        percentage: 92,
        department: "CSE"
    },
    {
        name: "Priya",
        age: 19,
        percentage: 85,
        department: "ECE"
    },
    {
        name: "Arun",
        age: 17,
        percentage: 75,
        department: "MECH"
    },
    {
        name: "Sneha",
        age: 20,
        percentage: 58,
        department: "EEE"
    },
    {
        name: "Kiran",
        age: 21,
        percentage: 68,
        department: "CIVIL"
    }
];

// Display Applicant Names

console.log("===== Applicant Names =====");

for (let i = 0; i < applicants.length; i++) {
    console.log(applicants[i].name);
}

// Check Eligibility

console.log("\n===== Admission Eligibility =====");

let eligibleCount = 0;

for (let i = 0; i < applicants.length; i++) {

    if (applicants[i].age >= 18 && applicants[i].percentage >= 60) {

        console.log(applicants[i].name + " : Eligible");
        eligibleCount++;

    } else {

        console.log(applicants[i].name + " : Not Eligible");

    }

}

console.log("\nTotal Eligible Students = " + eligibleCount);

// Department Names Using Switch

console.log("\n===== Department Details =====");

for (let i = 0; i < applicants.length; i++) {

    console.log("\nApplicant : " + applicants[i].name);

    switch (applicants[i].department) {

        case "CSE":
            console.log("Department : Computer Science Engineering");
            break;

        case "ECE":
            console.log("Department : Electronics and Communication Engineering");
            break;

        case "MECH":
            console.log("Department : Mechanical Engineering");
            break;

        case "EEE":
            console.log("Department : Electrical and Electronics Engineering");
            break;

        case "CIVIL":
            console.log("Department : Civil Engineering");
            break;

        default:
            console.log("Department : Not Available");
    }

}

// Admission Result Function

function admissionResult() {

    console.log("\n========== Admission Result ==========");

    for (let i = 0; i < applicants.length; i++) {

        console.log("------------------------------");
        console.log("Name       : " + applicants[i].name);
        console.log("Age        : " + applicants[i].age);
        console.log("Percentage : " + applicants[i].percentage + "%");
        console.log("Department : " + applicants[i].department);

        if (applicants[i].age >= 18 && applicants[i].percentage >= 60) {
            console.log("Status     : Admission Approved");
        } else {
            console.log("Status     : Admission Rejected");
        }
    }

    console.log("------------------------------");
    console.log("Total Eligible Students : " + eligibleCount);
}

// Callback Function

function generateAdmission(callback) {

    console.log("\nGenerating Admission Results...\n");
    callback();

}

// Function Call

generateAdmission(admissionResult);
// Bus Reservation System

let passengers = [
    {
        passengerId: 101,
        name: "Rahul",
        seatNumber: 5,
        ticketPrice: 750,
        busType: "AC"
    },
    {
        passengerId: 102,
        name: "Priya",
        seatNumber: 10,
        ticketPrice: 650,
        busType: "Non-AC"
    },
    {
        passengerId: 103,
        name: "Arun",
        seatNumber: 15,
        ticketPrice: 850,
        busType: "Sleeper"
    },
    {
        passengerId: 104,
        name: "Sneha",
        seatNumber: 20,
        ticketPrice: 900,
        busType: "Luxury"
    },
    {
        passengerId: 105,
        name: "Kiran",
        seatNumber: 25,
        ticketPrice: 700,
        busType: "AC"
    }
];

// Display Passenger Names

console.log("===== Passenger Names =====");

for (let i = 0; i < passengers.length; i++) {
    console.log(passengers[i].name);
}

// Calculate Total Collection

let totalCollection = 0;

for (let i = 0; i < passengers.length; i++) {
    totalCollection = totalCollection + passengers[i].ticketPrice;
}

console.log("\nTotal Ticket Collection = ₹" + totalCollection);

// Display Occupied Seats

console.log("\n===== Occupied Seats =====");

for (let i = 0; i < passengers.length; i++) {
    console.log(
        "Seat No: " +
        passengers[i].seatNumber +
        " - " +
        passengers[i].name
    );
}

// Bus Type Using Switch

console.log("\n===== Bus Type Details =====");

for (let i = 0; i < passengers.length; i++) {

    console.log("\nPassenger : " + passengers[i].name);

    switch (passengers[i].busType) {

        case "AC":
            console.log("Bus Type : Air Conditioned Bus");
            break;

        case "Non-AC":
            console.log("Bus Type : Non-Air Conditioned Bus");
            break;

        case "Sleeper":
            console.log("Bus Type : Sleeper Coach");
            break;

        case "Luxury":
            console.log("Bus Type : Luxury Coach");
            break;

        default:
            console.log("Bus Type : Ordinary Bus");
    }

}

// Ticket Confirmation Function

function ticketConfirmation() {

    console.log("\n========== Ticket Confirmation ==========");

    for (let i = 0; i < passengers.length; i++) {

        console.log("------------------------------");
        console.log("Passenger ID : " + passengers[i].passengerId);
        console.log("Name         : " + passengers[i].name);
        console.log("Seat Number  : " + passengers[i].seatNumber);
        console.log("Ticket Price : ₹" + passengers[i].ticketPrice);
        console.log("Bus Type     : " + passengers[i].busType);
    }

    console.log("------------------------------");
    console.log("Total Collection : ₹" + totalCollection);
    console.log("Tickets Confirmed Successfully.");
}

// Callback Function

function generateTicket(callback) {

    console.log("\nGenerating Tickets...\n");
    callback();

}

// Function Call

generateTicket(ticketConfirmation);
// Mobile Store Management

let mobiles = [
    {
        brand: "Samsung",
        model: "Galaxy S24",
        price: 75000,
        stock: 12
    },
    {
        brand: "Apple",
        model: "iPhone 16",
        price: 90000,
        stock: 8
    },
    {
        brand: "OnePlus",
        model: "OnePlus 13",
        price: 45000,
        stock: 15
    },
    {
        brand: "Xiaomi",
        model: "Redmi Note 14",
        price: 18000,
        stock: 20
    },
    {
        brand: "Vivo",
        model: "Vivo V50",
        price: 28000,
        stock: 10
    }
];

// Display All Mobile Names

console.log("===== Mobile List =====");

for (let i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i].brand + " " + mobiles[i].model);
}

// Calculate Total Stock Value

let totalStockValue = 0;

for (let i = 0; i < mobiles.length; i++) {
    totalStockValue =
        totalStockValue + (mobiles[i].price * mobiles[i].stock);
}

console.log("\nTotal Stock Value = ₹" + totalStockValue);

// Display Mobiles Above ₹20,000

console.log("\n===== Mobiles Above ₹20,000 =====");

for (let i = 0; i < mobiles.length; i++) {

    if (mobiles[i].price > 20000) {
        console.log(
            mobiles[i].brand +
            " " +
            mobiles[i].model +
            " - ₹" +
            mobiles[i].price
        );
    }

}

// Brand Category Using Switch

console.log("\n===== Brand Category =====");

for (let i = 0; i < mobiles.length; i++) {

    console.log("\nMobile : " + mobiles[i].brand + " " + mobiles[i].model);

    switch (mobiles[i].brand) {

        case "Samsung":
            console.log("Category : Android Flagship");
            break;

        case "Apple":
            console.log("Category : Premium iPhone");
            break;

        case "OnePlus":
            console.log("Category : Performance Android");
            break;

        case "Xiaomi":
            console.log("Category : Budget Android");
            break;

        case "Vivo":
            console.log("Category : Camera Smartphone");
            break;

        default:
            console.log("Category : Other Brand");
    }

}

// Sales Report Function

function salesReport() {

    console.log("\n========== Sales Report ==========");

    for (let i = 0; i < mobiles.length; i++) {

        console.log("------------------------------");
        console.log("Brand : " + mobiles[i].brand);
        console.log("Model : " + mobiles[i].model);
        console.log("Price : ₹" + mobiles[i].price);
        console.log("Stock : " + mobiles[i].stock);
    }

    console.log("------------------------------");
    console.log("Total Stock Value : ₹" + totalStockValue);
}

// Callback Function

function generateSalesReport(callback) {

    console.log("\nGenerating Sales Report...\n");
    callback();

}

// Function Call

generateSalesReport(salesReport);