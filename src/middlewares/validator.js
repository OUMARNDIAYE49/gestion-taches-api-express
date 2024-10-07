// src/middlewares/validator.js
import { body } from 'express-validator';

export const validateTask = [
  body('title').notEmpty().withMessage('Le titre est requis.'),
  body('completed').isBoolean().withMessage('Le statut doit être booléen.'),
];
