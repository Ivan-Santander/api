import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API",
    version: "1.0.0",
  },
  servers: [
    {                
      url: "http://localhost:4000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      users: {
        type: "object",
        required: ["name","lastname","type_document","document","indicative","phone","status"],
        properties: {
          name: {
            type: "string",
          },
          lastname: {
            type: "string",
          },
          type_document: {
            type: "string",
          },
          document: {
            type: "number",
          },
          indicative: {
            type: "string",
          },
          phone: {
            type: "number",
          },
          status: {
            type: "number",
          },
          role_admin: {
            type: "boolean",
          },
          role_logistics: {
            type: "boolean",
          },
          role_delivery: {
            type: "boolean",
          },
          role_patient: {
            type: "boolean",
          },
          street_address: {
            type: "string",
          }
        },
      },

      roles:{
        type: "object",
        required: ["role_user","admin","logistics","patient","delivery","technical","userid"],
        properties: {
          role_user: {
            type: "boolean",
          },
          admin: {
            type: "boolean",
          },
          logistics: {
            type: "boolean",
          },
          patient: {
            type: "boolean",
          },
          delivery: {
            type: "boolean",
          },
          technical: {
            type: "boolean",
          },
          userid: {
            type: "string",
          },
        },
      },
      locations:{
        type: "object",
        required: ["street_address","latitude","longitude","accuracy","altitude_accuracy","speed","heading","altitude","userid"],
        properties: {
          street_address: {
            type: "string",
          },
          latitude: {
            type: "number",
          },
          longitude: {
            type: "number",
          },
          accuracy: {
            type: "number",
          },
          altitude_accuracy: {
            type: "number",
          },
          speed: {
            type: "number",
          },
          heading: {
            type: "number",
          },
          altitude: {
            type: "number",
          },
          userid: {
            type: "string",
          },
        },
      },
      
      orders:{
        type: "object",
        required: ["street_address","latitude","longitude","accuracy","altitude_accuracy","speed","heading","altitude","iduser_delivery","iduser_patient","iduser_logistic"],
        properties: {
          street_address: {
            type: "string",
          },
          latitude: {
            type: "number",
          },
          longitude: {
            type: "number",
          },
          accuracy: {
            type: "number",
          },
          altitude_accuracy: {
            type: "number",
          },
          speed: {
            type: "number",
          },
          heading: {
            type: "number",
          },
          altitude: {
            type: "number",
          },
          iduser_delivery: {
            type: "string",
          },
          iduser_patient: {
            type: "string",
          },
          iduser_logistic: {
            type: "string",
          },
          order: {
            type: "string",
          },
        },
      }
      
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);