import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));
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

app.delete('/orders/:index', (req, res) => {
  const index = parseInt(req.params.index);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Помилка при читанні файлу' });

    let orders = JSON.parse(data);

    if (index < 0 || index >= orders.length) {
      return res.status(404).json({ message: 'Замовлення не знайдено' });
    }

    orders.splice(index, 1);

    fs.writeFile(filePath, JSON.stringify(orders, null, 2), err => {
      if (err) {
        console.error('Помилка запису:', err);
        return res.status(500).json({ message: 'Помилка сервера' });
      }
      res.status(200).json({ message: 'Замовлення видалено' });
    });
  });
});


app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
