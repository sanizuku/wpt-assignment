
const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'pleasework',
	port:3309
}; // change port to 3306 that may be the port mostly.


//fate means other person design
const mysql = require('mysql2'); //fate
const con=mysql.createConnection(dbparams);//fate  
// above two lines does not need any change in your code.
console.log("connection created");



let category = 'stationary';  //assume this came from http request
con.query('select * from item where category=?', [category], 
(err, rows)=>
 {
    if (err) 
    {
        console.log("error has occured let us see");  
    } 
    else
    {
        if(rows.length > 0)
         {
            for(let i=0; i < rows.length; i++)
            console.log(rows[i].itemno + " " + rows[i].itemname + " " + rows[i].price + " " + rows[i].category);// rows is an array which contains one object per row.     
         }
            else{
           console.log("no emp found with " + category);
            }
    
    }
}
);
