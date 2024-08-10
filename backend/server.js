import express from 'express';
import cors from 'cors';
import foodRouter from './routes/foodRouter.js';
import connectDB from './config/db.js';
import { userRouter } from './routes/userRouter.js';
import dotenv from 'dotenv';
import cartRouter from './routes/cartRouter.js';
// import orderRouter from './routes/orderRouter.js';

// Initialize Express app
const app = express();

// Configure dotenv
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
    res.send("API");
});

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('upload'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
// app.use("api/order", orderRouter);
// Start server
const PORT = process.env.PORT || 4000; // Default to port 4000 if PORT is not set
app.listen(PORT, () => {
    console.log(`Server started on https://tomato-backend-1yje.onrender.com`);
});
