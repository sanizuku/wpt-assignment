const url="";
let dbparams=
{
    host: 'localhost',
    user: 'sandeep',
    password: 'welcome123',
    database: 'pleasedontwork',
	port:3306
}; // change port to 3306 that may be the port mostly.


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);
console.log("db adventures");