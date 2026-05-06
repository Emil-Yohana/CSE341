const routes = require('express').Router();
const professionalController = require('../controllers/professional');

routes.get('/professional', professionalController.professionalRoute);

module.exports = routes;