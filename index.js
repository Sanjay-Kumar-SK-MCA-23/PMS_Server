//==========================MAIN FILE OF SERVER========================
const dotEnv = require("dotenv").config();
const app = require("./app");
const database = require("./config/database");

// Establish database connection
database();

// Add the root route to confirm the API is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
