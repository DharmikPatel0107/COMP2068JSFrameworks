# COMP2068JSFrameworks
 
Regard Midterm
Task 1: Create a New Express Project (6 marks)
Scaffold the Project: Use the Express Generator tool to quickly scaffold a new Express project. This tool generates the project structure, including basic routes, views, and configurations.
Modify Layout View:
Bootstrap CSS: Enhance the appearance of your application by adding Bootstrap’s CSS link to the project’s main layout view.
Jumbotron: Incorporate a Jumbotron at the top of your main layout, displaying your full name.
Navigation Bar: Implement a navigation bar with links to /home and /student, facilitating easy navigation.
Footer: Add a footer displaying your student number.
Task 2: Set Up a Database Connection (13 marks)
Install Packages: Install necessary packages (mongoose for MongoDB interaction, dotenv for environment variable management) to connect your application to a database.
Configure Environment: Use the dotenv package to securely store and access your database connection string through a .env file.
Connect to Database: Modify app.js to establish a connection to your database using the connection string stored in the .env file.
Model Creation:
Create a Models folder to organize your data models.
Inside this folder, create a Student.js file defining a Student model with StudentNumber, FirstName, LastName, and EmailAddress fields, all of which are strings and required.
Task 3: Implement CRUD Functionality for /Student (13 marks)
Router Setup: Create a students.js file in the routes directory to handle requests related to students. This involves defining routes for creating and reading student records.
CRUD Operations:
CREATE: Implement a route to add new student records to the database.
READ: Implement a route to retrieve and display all student records from the database.
Views for CRUD:
Develop views that correspond to the CRUD functionalities. For the READ operation, create a view that displays a table of all students in the database, along with a button to navigate to the form for adding a new student.
By completing these tasks, you will have created an Express web application that utilizes a MongoDB database to store and manage student data, including the ability to create new student records and read (list) all existing records in a styled and navigable interface.




