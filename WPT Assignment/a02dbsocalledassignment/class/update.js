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
let userid = 'x';
let password= 'z';
con.query('update cusers set password=? where userid=? ',[password,userid],(err,res1)=>{
    if(err){
        console.log("error has occured let us see")
    }
    else{
        if(res1.affectedRows==0){
            console.log("update failed");
        }
        else{
            console.log("update succeded");
        }
    }
}
);