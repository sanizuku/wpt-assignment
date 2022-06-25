const express=require("express");
const app=express();

const mysql=require('mysql2');

app.use(express.static('sf'));

app.listen(90,()=>{
console.log("90 port is listening");
});

let dbparams={
    host: 'localhost',
    user: 'sandeep',
    password: 'welcome123',
    database: 'pleasework',
    port: 3306
}
const con=mysql.createConnection(dbparams);
console.log("connection Successful");
app.get('/getdetails',(req,resp)=>{
let empno=req.query.empno;
let output={status:false, empdetails:{empno:0,empname:"",mobile:0}};
con.query('select * from emp where empno=?', [empno],(err,rows)=>{
    if(err){
        console.log("error")
    }
    else{
        if(rows.length>0){
          
                output.status=true;
                output.empdetails=rows[0];
          
           
        }
        else{
            console.log("employee not found");
        }
    }
    resp.send(output);
    console.log(output);
});

});
app.get('/insertdetails',(req,resp)=>{
    let empdetails={empno:req.query.empno,empname:req.query.empname,mobile:req.query.mobile}
    let output={status:false}
    con.query('insert into emp(empno,empname,mobile) values(?,?,?)', [empdetails.empno,empdetails.empname,empdetails.mobile],(err,res)=>{
        if(err){
            console.log("error")
        }
        else{
            if(res.affectedRows>0){
                output.status=true;
               console.log("insert successfull")
            }
            else{
                console.log("insert failed");
            }
        }
        resp.send(output);
        console.log(output);
    });
    
    });