import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 Додаємо ці два middleware
app.use(cors());
app.use(express.json()); // <-- Обов’язково для обробки JSON-тіла

// Маршрут для прийому замовлень
app.post('/order', (req, res) => {
  const order = req.body;
  console.log('Замовлення отримано:', order); // тут має бути масив з об'єктами

  // Зберегти у файл
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

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
