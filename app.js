const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT=3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send('Node JS server setup!');
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pswd',
    database: 'database',
});

connection.connect(error => {
    if(error){
        console.log('Error Occurred');
        throw error;
    }
});

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
   
connection.end();

app.listen(PORT, error => {
    if(!error){
        console.log('server started');
    }else{
        console.log('server error!');
    }
});