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
let userid ='h';
let password ='l';
con.query('insert into cusers(userid,password) values(?,?)',[userid,password],
(err,res1)=>{
    if(err){
        console.log(err);
    }
    else{
       console.log(res1.affectedRows);
    }
}
)