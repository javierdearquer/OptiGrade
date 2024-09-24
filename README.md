# Mineral Mix Optimizer

## Description

**Mineral Mix Optimizer** is a web application built using **Vue.js** and **JavaScript** for managing client logins and optimizing mineral mix compositions according to client specifications. The app connects to a **SQL Server** to manage user information and uses algorithms to perform calculations that minimize the cost of mineral mixtures while ensuring they meet the specified criteria.

## Features

- **User Authentication**: A login page with a secure authentication mechanism that stores user credentials and data in a SQL Server database.
- **Mineral Mix Optimization**: Adjusts the mix of different minerals according to client specifications to achieve the best possible performance.
- **Cost Minimization**: Uses optimization algorithms to minimize the cost of the mineral mixture for the user.
- **Data Management**: Stores and retrieves user data, including client specifications and preferences, from the SQL Server database.
- **Responsive Design**: Ensures that the application works smoothly on desktops, tablets, and mobile devices.

## Tech Stack

### Frontend
- **Vue.js**: For building the user interface and handling the client-side logic.
- **JavaScript (ES6+)**: Core scripting language for frontend development.
- **HTML/CSS**: Used for structuring and styling the pages.

### Backend
- **SQL Server**: For storing and managing user data and client specifications.
- **Node.js (Optional)**: Can be used for API endpoints if you're using a Node.js backend to interface with the SQL Server.
- **Express.js (Optional)**: A lightweight server for handling API requests.

### Other Tools
- **ESLint**: For linting and maintaining clean, consistent code.
- **Nodemon**: For automatic reloading of the server during development.
- **Optimization Algorithms**: Algorithms designed to minimize the cost while maintaining product quality according to the client’s specifications.

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** installed on your system.
- **SQL Server** set up with appropriate user credentials and database schema.
- A modern browser (e.g., Chrome, Firefox) for testing.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/mineral-mix-optimizer.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd mineral-mix-optimizer
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up SQL Server**:

   - Create a new database in SQL Server.
   - Use the provided SQL script (`db-schema.sql` in the `/db` folder) to create the necessary tables.
   - Update the database connection settings in the `.env` file or `config.js`.

5. **Run the application locally**:

   ```bash
   npm run serve
   ```

   This will start the app in development mode. Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

6. **Connect to SQL Server**:

   - Ensure SQL Server is running and the connection details in your backend are correctly configured.
   - Test the connection by accessing the login page and trying a test login.

### Backend Setup (Optional)

If you’re using a **Node.js/Express** backend to handle the API for login and SQL Server communication, set up the backend like this:

1. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```

2. **Install backend dependencies**:

   ```bash
   npm install
   ```

3. **Run the backend**:

   ```bash
   npm run start
   ```

   This will run the server, and you can interact with the frontend through the API endpoints.

### Environment Variables

If you're using environment variables to store sensitive information (like database connection strings), ensure that you have a `.env` file set up in the root directory with the following keys:

```
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASS=your-database-password
DB_NAME=your-database-name
```

### Testing

- **Unit Tests**: Run the unit tests (if any) with the following command:

  ```bash
  npm run test
  ```

- **ESLint**: Lint your code to ensure consistency:

  ```bash
  npm run lint
  ```

### Deployment

To deploy the application, follow these steps (for Vue.js apps):

1. **Build for production**:

   ```bash
   npm run build
   ```

2. **Deploy the contents of the `dist/` folder** to your web server or cloud provider.

For backend deployment, follow the appropriate steps based on your hosting provider (e.g., deploying a Node.js app to **Heroku**, **AWS**, or **Azure**).

## Usage

1. **Login**: Users can create an account or log in using the login page.
2. **Client Specifications**: After login, users can input their mineral composition requirements and constraints.
3. **Optimization**: The system will run calculations and suggest an optimal mix that meets the client's criteria while minimizing costs.
4. **View Results**: Users can view the optimized mix, including the cost breakdown.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need help, feel free to reach out via email or open an issue in the GitHub repository.

---

This `README.md` provides an overview of the project, instructions for setup, and guidelines for contributions and usage. You can customize it further to suit your specific needs, like adding more details about the database schema or the specific algorithms you're using.
