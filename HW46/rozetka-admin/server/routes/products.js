import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct
} from '../controllers/productsController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

// GET all products
router.get('/', getAllProducts);

// POST product with image
router.post('/', upload.single('photo'), addProduct);

// DELETE product by id
router.delete('/:id', deleteProduct);

// PUT product by id
router.put('/:id', updateProduct);

export default router;
