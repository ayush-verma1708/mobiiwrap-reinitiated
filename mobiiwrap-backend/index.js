import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import productRoutes from './routes/productRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import shippingRoutes from './routes/shippingRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import morgan from 'morgan';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Logger Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Sample route
app.get('/', (req, res) => {
  res.send('Mobiiwrap API is running...');
});

// Use Route Middleware
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/category', categoryRoutes);
app.use('/coupon', couponRoutes);
app.use('/notification', notificationRoutes);
app.use('/order', orderRoutes);
app.use('/payment', paymentRoutes);
app.use('/product', productRoutes);
app.use('/review', reviewRoutes);
app.use('/shipping', shippingRoutes);
app.use('/wishlist', wishlistRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import adminRoutes from './routes/adminRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import cartRoutes from './routes/cartRoutes.js';
// import categoryRoutes from './routes/categoryRoutes.js';
// import couponRoutes from './routes/couponRoutes.js';
// import notificationRoutes from './routes/notificationRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
// import paymentRoutes from './routes/paymentRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import reviewRoutes from './routes/reviewRoutes.js';
// import shippingRoutes from './routes/shippingRoutes.js';
// import wishlistRoutes from './routes/wishlistRoutes.js';

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // Sample route
// app.get('/', (req, res) => {
//   res.send('Mobiiwrap API is running...');
// });

// // Use Route Middleware
// app.use('/admin', adminRoutes);
// app.use('/user', userRoutes);
// app.use('/cart', cartRoutes);
// app.use('/category', categoryRoutes);
// app.use('/coupon', couponRoutes);
// app.use('/notification', notificationRoutes);
// app.use('/order', orderRoutes);
// app.use('/payment', paymentRoutes);
// app.use('/product', productRoutes);
// app.use('/review', reviewRoutes);
// app.use('/shipping', shippingRoutes);
// app.use('/wishlist', wishlistRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
