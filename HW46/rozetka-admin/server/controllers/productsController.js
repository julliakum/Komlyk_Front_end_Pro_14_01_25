import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/products.json');

// Получение всех продуктов
export function getAllProducts(req, res) {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
}

// Добавление нового продукта (с поддержкой файла)
export function addProduct(req, res) {
  const data = JSON.parse(fs.readFileSync(filePath));

  const newProduct = {
    id: nanoid(),
    ...req.body,
    photo: req.file ? `/uploads/${req.file.filename}` : null,
  };

  data.push(newProduct);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).json(newProduct);
}

// Удаление продукта
export function deleteProduct(req, res) {
  const { id } = req.params;
  let data = JSON.parse(fs.readFileSync(filePath));
  data = data.filter((p) => p.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(204).end();
}

// Обновление продукта (без повторной загрузки фото)
export function updateProduct(req, res) {
  const { id } = req.params;
  const updatedProduct = req.body;

  const data = JSON.parse(fs.readFileSync(filePath));
  const index = data.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  data[index] = {
    ...data[index],
    ...updatedProduct,
  };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json(data[index]);
}
