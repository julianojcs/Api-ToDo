const jwt = {
  JWT_KEY: 'e2f667e43efff4dadbbd6f3b177aa4f7',
  SALT_ROUNDS: 13,
  EXPIRES_IN: '1d'
}

const env = {
  host: 'http://localhost',
  port: 3000,
  dbUrl: 'mongodb+srv://root:jcs123@cluster0.grsjv.mongodb.net/todo'
  // dbUrl: 'mongodb://localhost:27017/todo'
}

const baseUrl = `${env.host}:${String(env.port)}/`;
const staticUrl = baseUrl + 'uploads/';

module.exports = {
  jwt,
  env,
  baseUrl,
  staticUrl
}