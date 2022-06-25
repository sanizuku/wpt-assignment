const url="";
let dbparams=
{
    host: 'localhost',
    user: 'sandeep',
    password: 'welcome123',
    database: 'pleasework',
	port:3306
}; 
const mysql=require('mysql2');
const con=mysql.createConnection(dbparams);
let userid='c';
let password='d';
con.query('select userid,password from cusers where userid=? and password=?',[userid,password], (err,rows)=>{
    if(err){
        console.log("error has occured");
    }
    else{
        if(rows.length>0){
            console.log(rows[0].userid);;
        }
       
    }
}
);
