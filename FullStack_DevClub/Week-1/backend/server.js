const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// app.use('/api/auth', require('./routes/auth'));
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);



// Future: app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
