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

let itemno=1;
con.query('select * from item where itemno=?',[itemno],(err,rows)=>
{
    if(err)
    {
        console.log("error has occured");
    }
    else
    {
        if(rows.length>0)
        {
            console.log(rows[0].itemno+" " +rows[0].itemname +" " +rows[0].price+" " +rows[0].category);
        }
        else
        {
            console.log("no details " + itemno);
        }
    }
}
); 