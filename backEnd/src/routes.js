const express = require('express');
const routes = express();

const ongsController = require('./controllers/ongsController')
const incidentsController = require('./controllers/incidentsController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

// session
routes.post('/session',sessionController.create)

// ongs
routes.get('/ongs',ongsController.index)
routes.post('/ongs',ongsController.create)

// incidents
routes.get('/incidents',incidentsController.index)
routes.post('/incidents',incidentsController.create)
routes.delete('/incidents/:id',incidentsController.delete)

//profiles
routes.get('/profile',profileController.index)


module.exports = routes