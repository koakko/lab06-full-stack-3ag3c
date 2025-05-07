const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8090;

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'c_database',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'secret',
  database: process.env.MYSQL_DATABASE || 'mydb'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js Backend!' });
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});