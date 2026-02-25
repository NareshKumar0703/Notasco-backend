import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express Modular API',
            version: '1.0.0',
            description: 'A production-ready Express.js backend API template',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
        modules: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/modules/**/swagger/*.swagger.js', './src/config/swagger.modules.js'], // Path to the API doc
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
