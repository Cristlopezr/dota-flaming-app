import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

app.use(cors());

export default app;
