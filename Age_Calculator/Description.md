# AGE CALCULATOR
## Description:
This project is a simple web application designed to calculate and display a user's age based on their inputted birthday. 
Users enter their birthday, click a button, and the application calculates and displays their age in years. 
The project showcases basic HTML form handling, date manipulation, and DOM updates using JavaScript.

### Key Features:
1. User Input Handling: Allows users to input their birthday using an HTML date picker.
2. Age Calculation: Calculates the user's age based on the current date and the provided birthday.
3. Dynamic Feedback: Displays the calculated age on the webpage, providing immediate feedback to the user.

### Technologies Used:
1. HTML: For the structure of the webpage, including the input field and button.
2. CSS: For basic styling (not shown in the provided code).
3. JavaScript: To handle user interactions, perform the age calculation, and update the webpage content dynamically.

### How It Works:
#### HTML Elements:
1. btnEl is the button that the user clicks to calculate their age.
2. birthdayEl is the input field where the user enters their birthday.
3. resultEl is the element where the calculated age is displayed.

#### Calculate Age Function:
1. The calculateAge function retrieves the user's birthday from the input field.
2. If the input is empty, it alerts the user to enter their birthday.
3. If the input is valid, it calculates the age using the getAge function and updates the resultEl to display the user's age.

#### Age Calculation Logic:
1. The getAge function calculates the age by comparing the current date with the birthday.
2. It adjusts for the current month and day to ensure accurate age calculation.
3. The calculated age is returned to the calculateAge function.

#### Event Listener:
An event listener is added to the button (btnEl) to trigger the calculateAge function when the button is clicked.

This project demonstrates how to build a simple interactive web application that performs date calculations and dynamically updates the user interface based on user input.

![Screenshot 2024-07-30 002507](https://github.com/user-attachments/assets/d29e372d-2f0b-41a0-8d9b-3b3afe56e4e7)
