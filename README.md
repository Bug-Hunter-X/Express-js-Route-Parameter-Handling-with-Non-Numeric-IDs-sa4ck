# Express.js Route Parameter Handling with Non-Numeric IDs

This repository demonstrates a common error in Express.js route parameter handling and provides a solution.

## The Bug
The bug lies in the way route parameters are handled when they're not numeric values. If a user tries to access a route like `/users/abc`, it will lead to an error because your database query might not handle non-numeric values correctly. This can lead to unexpected behavior or crashes in your application.

## The Solution
The solution involves validating the route parameters before making database queries. This prevents potential issues arising from invalid inputs.  The solution uses a regular expression to check if the parameter is a valid numeric ID.  If not, a 400 Bad Request is sent back. 

## How to Run
1. Clone the repository
2. Install dependencies using `npm install`
3. Run the application using `node bug.js` (for the buggy version) or `node bugSolution.js` (for the solution)