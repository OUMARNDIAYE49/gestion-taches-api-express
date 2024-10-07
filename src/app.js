// src/app.js
import express from 'express';
import sequelize from './config/database.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);

// Synchroniser la base de données
sequelize.sync().then(() => {
  console.log('Base de données synchronisée.');
}).catch(err => {
  console.error('Erreur lors de la synchronisation :', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
