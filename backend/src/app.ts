import express, { Application } from 'express';
import connectDB from './common/db';
import { routes } from './routes';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

connectDB();
routes(app);

export default app;