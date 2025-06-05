Setting up the main branch as default and pushing code to remote repository.
Create a Git Ignore file to exclude sensitive files from being pushed to git
Setting up backend project includes managing environment variables and directory structure.
"type": "module", what does it mean in package.json file
<!-- The "type": "module" field in package.json tells Node.js to treat the JavaScript files in the project as ES Modules (ECMAScript Modules, ESM) instead of CommonJS (CJS). -->
<!-- Enables ES6 import and export syntax instead of require() -->
Nodemon is used to save files and restart the server during development.
Setting up Node Man for automatic reloading of files
<!-- "scripts": {
    "dev": "nodemon src/index.js"  // nodemon reloads this file on npm run dev
  }, -->
Prettier plugin is used for same formatting (teamwork)
setting up prettier files(prettierignore,prettierrc(rules))
The dotenv library is used in Node.js projects to manage environment variables easily and securely.
app.use is used for middleware and configuration(CORS) settings
CORS->Cross-Origin Resource Sharing.
It’s a security feature built into web browsers that controls which websites are allowed to access resources on a different domain (origin).
<!-- Imagine:
Your frontend is hosted on http://localhost:3000
Your backend API is on http://localhost:5000
If your frontend tries to fetch data like this:
fetch('http://localhost:5000/api/data')
The browser blocks the request unless the backend allows it via CORS. -->
Middleware is a function that runs between the request coming in from the client and the response sent back by the server.(check krta h ki response dena h ki nhi)
//Creating Utils-asyncHandler
// Its is a wrapper function which will be used at many places
//Creating a utility file for error handling and database operations
//Creating ApiError-The ApiError class in your backend code is a custom error handler used to standardize error handling and API responses across your application.
For ex.
import { ApiError } from './path/to/ApiError';
function getUser(req, res, next) {
    const user = null; // Let's say user is not found
    if (!user) {
        throw new ApiError(404, "User not found");
    }
}
ApiResponse
// The ApiResponse class is the counterpart to the ApiError class. Together, they help you standardize both successful and error responses in your backend API.
//The ApiResponse class is used to wrap successful API responses in a consistent format.

// Data modelling user and video
use of hooks(pre middleware , jwt and bcrypt)

// file uploading
 File upload is mainly handled by the back end engineers
 The method for uploading files in the backend depends on project size, calculations, and file handling.
 Multer is a commonly used package for file uploading in the industry.
 Upload files to the server using Cloudinary
 Uploading and managing files in backend using Multer
 Upload a file in backend using Multer
 Upload a local file in backend using Multer
 Upload a file in the backend and print a success message
 The 'unlink' function is used to remove locally saved temporary files in case of failed upload operations
 Multer is a middleware used for file uploading in the backend.
 You can choose between disk storage and memory storage for uploading files in the backend using Multer.
 Naming the file with a unique ID
 Configuring the file upload using Multer
 Learn how to upload files in the backend using Multer.

The main difference between HTTP and HTTPS is that data sent through HTTPS is encrypted and becomes readable only on the server or client.
HTTP headers are a way to send additional information about the request or response

http
Postman is a tool that lets you test APIs (Application Programming Interfaces) easily without needing to build a frontend or browser-based client.


 Validation and file checking are important steps in register controller.
 Extract URL from the response and check for successful avatar upload
 The user details are extracted from the request body with a destructure operation
 Testing the data using Postman
 To use the uploaded file in the register route, add the upload middleware and use the 'fields' option to accept multiple files.
 Creating an array with two objects for accepting avatar and cover image files.
 Using the dot sum method to check if fields are empty
 Checking validation and user registration in a JavaScript code
 Retrieve user email based on username
 Logic building for registering controller
 Upload cover image and avatar image
 Upload your file on cloud using a method
 Creating an entry in the database with Avatar object
 Ensure validation of cover image and handle cases when it is missing.
 Use Find by ID to find a user and ensure successful creation
 Creating a properly structured API response
 Creating a new object with given status code and data
 Register controller and bug fixes

// controller
loginUser:
This is the entry point to the app.

The user is not logged in yet, so:

There's no accessToken in the cookie.

There's no req.user to extract.

You use the credentials from req.body (username/email + password).

Once verified, you generate tokens and set them in cookies.

👉 No middleware needed here—you're creating a session, not validating one.

🟩 logoutUser:
At this point, the user is already logged in, and:

A valid accessToken is stored in the request's cookies.

You need to identify which user is making the request.

So you use auth middleware (e.g., auth.middleware.js) to:

Decode the accessToken.

Extract user info from it.

Attach user to req.user.

👉 Middleware is required to know who is logging out.

//Access Token and Refresh Token
During login we generate 2 tokens 1) access-token 2) refresh token
we save refresh-token in DB and set access-token and refresh-token cookie in chrome
access-token is for short time and refresh-token is for long time
when user access-token is expired it send refresh token to Back-end
Back-end checks if DB refresh-token and user refresh-token is same or not 
if same it generate both token again and repeat process of saving RT in Db and set cookie with RT and AT

