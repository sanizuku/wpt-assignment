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
console.log("connection created");


let item={itemno:4,price:500,category:'steel'};  //assume this came from http request

con.query('update item set category=?,price=? where itemno=?' , [item.category,item.price,item.itemno], 
(err, res1) => {
    console.log("djd");
    if (err) {
        console.log("error has occured let us see");  
    } else {
        if(res1.affectedRows==0){
            console.log("update failed");
        }  
        else{
            console.log("update succeded");
        }   
       
    }
}
);

