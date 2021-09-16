const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to db
connectDB();

// Init Middleware
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5000;

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
