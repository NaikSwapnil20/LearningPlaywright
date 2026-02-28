let envName = "qa"; // Change to: dev, staging, qa, production, prod

// Fixed environment configs (const)
const DEV = {
  baseUrl: "https://dev-api.testingacademy.com",
  apiKeyPrefix: "dev_key_",
  timeout: 5000,
  description: "Development - Internal testing"
};

const STAGING = {
  baseUrl: "https://staging-api.testingacademy.com",
  apiKeyPrefix: "stg_key_",
  timeout: 8000,
  description: "Staging - Pre-production mirror"
};

const QA = {
  baseUrl: "https://qa-api.testingacademy.com",
  apiKeyPrefix: "qa_key_",
  timeout: 7000,
  description: "QA - Feature validation"
};

const PROD = {
  baseUrl: "https://api.testingacademy.com",
  apiKeyPrefix: "prod_key_",
  timeout: 10000,
  description: "Production - Live environment"
};

// Assembled config (let)
let config;

switch (envName.toLowerCase()) {
  case "dev":
    config = DEV;
    break;

  case "staging":
    config = STAGING;
    break;

  case "qa":
    config = QA;
    break;

  case "production":
  case "prod":
    config = PROD;
    break;

  default:
    console.log("Invalid environment provided.");
}

// Print config if found
if (config) {
  console.log(`Environment: ${envName.toUpperCase()}`);
  console.log(`Base URL: ${config.baseUrl}`);
  console.log(`API Key: ${config.apiKeyPrefix}xxxx-xxxx`);
  console.log(`Timeout: ${config.timeout}ms`);
  console.log(`Description: ${config.description}`);
}