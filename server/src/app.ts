import express from 'express';
import cors from 'cors';
import heroRoutes from './routes/heroRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Dota App API' });
});

app.use('/api', heroRoutes);

export default app;
