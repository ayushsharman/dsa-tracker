import { config } from './config';
import mongoose from 'mongoose';

const mongoURL: string = config.mongoURI || '';

const connectDB = async () => {
    mongoose.connect(mongoURL)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => console.error('MongoDB connection error:', err));
}

export default connectDB;