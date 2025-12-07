const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "D L & Associates Contact API",
      version: "1.0.0",
      description: "API documentation for Contact Form Submission",
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production"
          ? "https://dl-backend-mu.vercel.app/api"
          : "http://localhost:5000/api",
        description: "API Server",
      }
    ],
  },

  // IMPORTANT: Correct path for Vercel deployment
  apis: [path.join(__dirname, "../routes/*.js")],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
