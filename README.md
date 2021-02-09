# COMP308-W2021-Lab2-Ex1
## Lab project
---
Create an Express Web Application which allows students to evaluate their courses. 
Your MongoDB database should have a collection students to store student information and a 
collection comments to store student comments for the course. You will have to provide a login page (ejs page)
to allow the students to login, a sign up page for students to register (ejs page), a submit comments page (ejs) to 
allow the students to enter the comments, a view student comments page (ejs), and the Thank You page (ejs). 
The sign up page should allow the students to sign up by providing first name, last name, email, password,
and two other fields that will be different for each student. For example, you may create fields for favorite 
subject, number of languages, major, favorite sport, favorite team, favorite actor, favorite food, strongest technical skill, etc.
The login form should accept the user name (user’s email address) and password.
Then it will use MongoDB and Mongoose methods to find the student in the data store. After finding the student, the application should display 
the comments page and prompt the user to submit a comment for a course.
The student should enter course code, course name, program name, semester and the comment. 
Your application should store student comments when the user clicks on submit button. 
Then, a Thank You form should display the student email and thank the student for completing the course evaluation.
The view student comments page should allow an admin person to view the comments for each student given student’s email address. 
Implement a horizontal folder structure for your application similar to Lab 1. Apply MVC principles. Design nice and friendly web pages. 
Your index.ejs page should simply contain the links to other pages.

