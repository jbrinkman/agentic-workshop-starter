import { Router } from 'express';
import { getItems, getItemById, createItem } from '../controllers/itemController';

const router = Router();

// Item routes
router.get('/items', getItems);
router.get('/items/:id', getItemById);
router.post('/items', createItem);

export default router;
