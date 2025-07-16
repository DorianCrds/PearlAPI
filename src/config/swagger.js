const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pearl API',
            version: '1.0.0',
            description: "Documentation de l'API Pearl",
        },
        servers: [
            {
                url: 'http://localhost:3000/pearl/api/v1',
            },
        ],
    },
    apis: [
        './src/routes/v1/*.js',
        './src/docs/schemas/*.js',
        './src/docs/routes/*.js',
    ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;