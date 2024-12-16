const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 15; // Increase the listener limit

dotenv.config();
const app = express();

app.use(express.json());

// Using cors middleware with options
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Allow requests from your frontend URL
  Credential:true,
  optionSuccessStatus:200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

app.use(cors(corsOptions)); // Apply CORS options

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Event Management App!</h1><p>Your backend is up and running.</p>');
});

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/payments', paymentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => console.log('Server running'));
  })
  .catch((error) => console.log(error));
