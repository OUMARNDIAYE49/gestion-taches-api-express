// src/middlewares/validator.js
import { body, validationResult } from 'express-validator';

// Middleware de validation pour les tâches
export const validateTask = [
  // Validation du champ 'title' (doit être non vide)
  body('title')
    .notEmpty()
    .withMessage('Le titre est requis.')
    .isLength({ min: 3 })
    .withMessage('Le titre doit contenir au moins 3 caractères.'),
  
  // Validation du champ 'description' (optionnel mais doit avoir au moins 5 caractères si présent)
  body('description')
    .optional()
    .isLength({ min: 5 })
    .withMessage('La description doit contenir au moins 5 caractères.'),

  // Validation du champ 'completed' (doit être un booléen)
  body('completed')
    .isBoolean()
    .withMessage('Le statut doit être booléen.'),

  // Middleware pour gérer les erreurs de validation
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si des erreurs de validation sont présentes, renvoyer une réponse avec un statut 400
      return res.status(400).json({ errors: errors.array() });
    }
    // Si la validation passe, continuer vers le middleware suivant
    next();
  }
];
