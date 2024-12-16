const express = require('express');
const db = require('./model/index');
const routes = require('./routes/route'); 
const cors = require("cors");
const app = express();
const PORT = 3005;
const Controller = require('./controller/controller'); // Correct path
var corsOptions = {
  origin: ["http://localhost:8081", "http://localhost:3000"]
};

app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Register routes
routes(app);

console.log('Routes middleware added');

// Sync the database
db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
