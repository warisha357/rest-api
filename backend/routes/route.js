module.exports = (app) => {
  const Controller = require('../controller/controller'); // Correct path

  const router = require('express').Router();

  // Define routes
  router.get('/findAll', Controller.findAll);

  // Register the router
  app.use('/api', router);
};
