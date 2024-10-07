// src/config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nom_de_la_base', 'utilisateur', 'mot_de_passe', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
