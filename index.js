<<<<<<< HEAD
require('dotenv').config();
const express = require('express');

const app = express();

// new: support both Postgres and MySQL depending on DB_TYPE
const dbType = (process.env.DB_TYPE || 'postgres').toLowerCase();
let pool;

if (dbType === 'mysql') {
  // lazy-require mysql2 promise wrapper
  const mysql = require('mysql2/promise');
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10
  });
} else {
  // default: postgres
  const { Pool } = require('pg');
  pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    // optional: ssl: process.env.DB_SSL === 'true'
  });
}

app.get('/', async (req, res) => {
  try {
    if (dbType === 'mysql') {
      const [rows] = await pool.query('SELECT NOW() AS now');
      res.send(`Database time: ${rows[0].now}`);
    } else {
      const result = await pool.query('SELECT NOW()');
      res.send(`Database time: ${result.rows[0].now}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('DB connection error');
  }
});

app.get('/health', (req, res) => res.status(200).send('ok'));

const port = process.env.PORT ? Number(process.env.PORT) : 80;

// warn when required env vars are missing and show example run commands
const _required = ['DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME'];
const _missing = _required.filter(k => !process.env[k]);
if (_missing.length) {
  console.warn(`Missing env vars: ${_missing.join(', ')}`);
  console.warn('Example to run (Linux/macOS):');
  console.warn('  export DB_HOST=your-host && export DB_USER=your-user && export DB_PASS=your-pass && export DB_NAME=your-db && node index.js');
  console.warn('Example to run (Windows PowerShell):');
  console.warn('  $env:DB_HOST="your-host"; $env:DB_USER="your-user"; $env:DB_PASS="your-pass"; $env:DB_NAME="your-db"; node index.js');
  console.warn('Or create a .env file in the project root with DB_HOST=... etc.');
}

// new: startup info for easier troubleshooting
console.log(`Starting app with DB_TYPE=${dbType}, DB_HOST=${process.env.DB_HOST}, DB_PORT=${process.env.DB_PORT}, APP_PORT=${port}`);
console.log('If dependencies are missing run: npm install in d:\\AWSDA2');

// ✅ Updated to bind on all interfaces
app.listen(port, '0.0.0.0', () => console.log(`App running on port ${port}`));
=======
require('dotenv').config();
const express = require('express');

const app = express();

// new: support both Postgres and MySQL depending on DB_TYPE
const dbType = (process.env.DB_TYPE || 'postgres').toLowerCase();
let pool;

if (dbType === 'mysql') {
  // lazy-require mysql2 promise wrapper
  const mysql = require('mysql2/promise');
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10
  });
} else {
  // default: postgres
  const { Pool } = require('pg');
  pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    // optional: ssl: process.env.DB_SSL === 'true'
  });
}

app.get('/', async (req, res) => {
  try {
    if (dbType === 'mysql') {
      const [rows] = await pool.query('SELECT NOW() AS now');
      res.send(`Database time: ${rows[0].now}`);
    } else {
      const result = await pool.query('SELECT NOW()');
      res.send(`Database time: ${result.rows[0].now}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('DB connection error');
  }
});

app.get('/health', (req, res) => res.status(200).send('ok'));

const port = process.env.PORT ? Number(process.env.PORT) : 80;

// warn when required env vars are missing and show example run commands
const _required = ['DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME'];
const _missing = _required.filter(k => !process.env[k]);
if (_missing.length) {
  console.warn(`Missing env vars: ${_missing.join(', ')}`);
  console.warn('Example to run (Linux/macOS):');
  console.warn('  export DB_HOST=your-host && export DB_USER=your-user && export DB_PASS=your-pass && export DB_NAME=your-db && node index.js');
  console.warn('Example to run (Windows PowerShell):');
  console.warn('  $env:DB_HOST="your-host"; $env:DB_USER="your-user"; $env:DB_PASS="your-pass"; $env:DB_NAME="your-db"; node index.js');
  console.warn('Or create a .env file in the project root with DB_HOST=... etc.');
}

// new: startup info for easier troubleshooting
console.log(`Starting app with DB_TYPE=${dbType}, DB_HOST=${process.env.DB_HOST}, DB_PORT=${process.env.DB_PORT}, APP_PORT=${port}`);
console.log('If dependencies are missing run: npm install in d:\\AWSDA2');

app.listen(port, () => console.log(`App running on port ${port}`));
>>>>>>> 09c502855776095b01c2b204c9ff36f91c4aa121
