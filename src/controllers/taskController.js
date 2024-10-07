// src/controllers/taskController.js
import { validationResult } from 'express-validator';
import Task from '../models/Task.js';

export const createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, description, completed } = req.body;
    const task = await Task.create({ title, description, completed });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la tâche.' });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des tâches.' });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée.' });
    }

    const { title, description, completed } = req.body;
    await task.update({ title, description, completed });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour.' });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée.' });
    }

    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression.' });
  }
};
