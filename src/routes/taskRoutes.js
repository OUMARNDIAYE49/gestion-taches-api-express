// src/routes/taskRoutes.js
import express from 'express';
import {
  createTask, getTasks, updateTask, deleteTask
} from '../controllers/taskController.js';
import { validateTask } from '../middlewares/validator.js';

const router = express.Router();

router.post('/tasks', validateTask, createTask);
router.get('/tasks', getTasks);
router.put('/tasks/:id', validateTask, updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
