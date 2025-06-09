import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
