const express = require('express');
const router = require('./routes/index.routes');
const taskRoutes = require('./routes/tasks.routes');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(router);
app.use('/cumples', taskRoutes);

module.exports = app;
