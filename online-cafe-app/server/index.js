import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());
const filePath = path.join(__dirname, 'controllers', 'orders.json');


app.post('/order', (req, res) => {
  const order = req.body;
  console.log('Замовлення отримано:', order);


  const filePath = path.join(__dirname, 'controllers', 'orders.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    const orders = data ? JSON.parse(data) : [];
    orders.push(order);
    fs.writeFile(filePath, JSON.stringify(orders, null, 2), err => {
      if (err) {
        console.error('Помилка запису:', err);
        res.status(500).json({ message: 'Помилка сервера' });
      } else {
        res.status(200).json({ message: 'Замовлення прийнято!' });
      }
    });
  });
});

app.get('/orders', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка при читанні файлу:', err);
      return res.status(500).json({ message: 'Не вдалося завантажити замовлення' });
    }

    try {
      const orders = JSON.parse(data);
      res.status(200).json(orders);
    } catch (parseErr) {
      console.error('Помилка при розборі JSON:', parseErr);
      res.status(500).json({ message: 'Помилка формату даних' });
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
