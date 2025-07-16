const express = require('express');
const helmet = require("helmet");
const cors = require('cors');

const setupSwagger = require('./config/swagger');

const app = express();

const userRoutesV1 = require('./routes/v1/protected/userRoutes');
const roleRoutesV1 = require('./routes/v1/protected/roleRoutes');
const authRoutesV1 = require('./routes/v1/public/authRoutes');

const authenticate = require('./middlewares/authMiddleware')

app.use(helmet());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

setupSwagger(app);

app.get('/', (req, res) => {
    res.send('PearlApi is running ✅');
});

const apiV1Router = express.Router();

apiV1Router.use('/auth', authRoutesV1);

apiV1Router.use('/users', authenticate, userRoutesV1);
apiV1Router.use('/roles', authenticate, roleRoutesV1);

app.use('/pearl/api/v1', apiV1Router);

module.exports = app;