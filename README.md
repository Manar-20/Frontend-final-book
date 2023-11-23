# RRR Read Rate React Angular Application
This Angular application, RRR Community, is designed to provide a platform for book and reading enthusiasts to explore, review, and discuss various books. The application is built with Angular, utilizing TypeScript for enhanced functionality.

# Features
User-Friendly Interface
The application boasts a clean and intuitive design, ensuring a seamless browsing experience for users.
Community-Driven
RRR Community thrives on the contributions of its passionate user community. User reviews and ratings play a crucial role in shaping the platform.
Explore Books
Users can explore a wide range of books across genres, from timeless history to fiction to self-improvement books.
Review and Discuss
Share your thoughts and opinions by evaluating and reviewing books that you liked or disliked. Engage in meaningful discussions with other users through comments and reviews.
User Reviews (FUser Work)
Users (with the ROLE_USER role) can now make reviews by providing a comment and rating from 1 to 5. This functionality enhances the user experience by allowing them to express their opinions and provide valuable feedback.
Search Functionality
Utilize the powerful search feature to easily find information about the book you are interested in.
User Roles
The application supports different user roles, including admin and regular user, each with specific permissions and access to features.
How to Get Started
Clone the Repository

1-
git clone <repository-url>
cd rrr-community-angular
Install Dependencies

2-
npm install
Run the Application

3-
ng serve
The application will be available at http://localhost:4200/ by default.

# Login or Signup

If you don't have an account, you can sign up to create a new account.
Existing users can log in with their credentials.
Explore, Review, and Discuss

Navigate through the available features, explore books, and start reviewing and discussing.
## Application Structure
The application is structured with different components representing various pages and features. Key components include:

HomeComponent: The landing page for the application.
LoginComponent and SignupComponent: Responsible for user authentication.
HomeUserComponent and HomeAdminComponent: Home pages for regular users and admins, respectively.
AddBookComponent: Allows admins to add new books to the platform.
BookDetailComponent and BookDitaleUserComponent: Display detailed information about a specific book for admins and regular users.
API Integration
The application communicates with a backend API to perform operations like fetching books, user information, and managing book-related functionalities. The API URL is set to http://localhost:8081/ by default and can be configured in the AdminAPIService and AuthService services.

## Dependencies
The application utilizes various dependencies and services, including:

HttpClient for making HTTP requests.
AuthGuardService to protect routes and ensure authenticated access.
AuthService for handling user authentication and authorization.
AdminAPIService for interacting with the backend API.
Contribution Guidelines
Contributions to the RRR Community Angular Application are welcome. If you find a bug, have a feature request, or want to contribute to the codebase, please follow these steps:

## Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Push the changes to your fork.
Submit a pull request with a detailed description of your changes.
Happy exploring, reviewing, and discussing books with RRR Community!

# Home-Page
![image](https://github.com/Manar-20/Frontend-final-book/assets/111026905/df2c6e32-b76f-4888-8d2e-e675eb799099)

# User-home
![image](https://github.com/Manar-20/Frontend-final-book/assets/111026905/89431396-f29d-4d26-a267-d5a12e11b153)

# Admin-Home
![image](https://github.com/Manar-20/Frontend-final-book/assets/111026905/eca35b54-76d8-4308-8b59-84c2542ddd88)

# Add-Book
![image](https://github.com/Manar-20/Frontend-final-book/assets/111026905/f1c3ce63-191e-422d-a268-82ea77cd2124)

# Get All-user by Admin

![image](https://github.com/Manar-20/Frontend-final-book/assets/111026905/b9df1d6d-755f-4528-87ad-cf2781450fe2)

And you can explor the athor Pags







