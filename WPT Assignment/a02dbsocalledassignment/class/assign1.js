const url="";
let dbparams=
{
    host: 'localhost',
    user: 'sandeep',
    password: 'welcome123',
    database: 'pleasework',
	port:3306
}; // change port to 3306 that may be the port mostly.


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

let item={itemno:5,itemname:'glass',price:1,category:'kaanch'};  //assume this came from http request

con.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [item.itemno,item.itemname,item.price,item.category], 
(err, res1) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);

