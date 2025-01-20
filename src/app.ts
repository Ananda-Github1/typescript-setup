import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.get('/', (req, res) => {
  res.send('I love you ironman!');
});

// app.use('/api/user', userRoutes);



export default app;
