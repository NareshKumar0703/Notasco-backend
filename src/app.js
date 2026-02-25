import connectDB from './config/db.js';
import app from './config/express.js';

connectDB();

export default app;
