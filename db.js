const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    uri: process.env.DB_URL,
});


connection.query('SELECT *FROM carros', (error, resultados) => {
    if (error) throw error;
    console.log(resultados);

    console.log('Realizpou a consulta no banco de dados');
})


connection.connect((err) => {
    if (err) { throw err; }
    console.log(`Conectado ao banco de dados! com sucesso!\nAo banco ${process.env.DB_NAME}`);
});

module.exports = connection;
