
const express=require('express');
const app=express();

const mysql=require('mysql2');

app.use(express.static('sf'));

app.listen(550);

app.get('/getareaname',(req,resp)=>{
    console.log('ajax function called');
const dbobject ={
    host:'localhost',
    user:'sandeep',
    password:'welcome123',
    database:'pleasework',
    port:3306
}
const con=mysql.createConnection(dbobject);

let output={status:false, detail:{pin:0,areaname:""}}

let pin=req.query.pin;
console.log(pin);
con.query('select pin, areaname from location where pin=?', [pin],
(err,rows)=>{
          if(err){
            console.log(err);
          }
          else{
            if(rows.length>0){
                output.status=true;
                output.detail=rows[0];
            }
            else{
                console.log("no area with this pin");
            }
          }
          console.log(output);
          resp.send(output);
});




});
app.get('/updateareaname',(req,resp)=>{
    console.log('ajax function called');
const dbobject ={
    host:'localhost',
    user:'sandeep',
    password:'welcome123',
    database:'pleasework',
    port:3306
}
const con=mysql.createConnection(dbobject);

let output={status:false}

let pin=req.query.pin;
let areaname=req.query.areaname;
console.log(pin);
con.query('update location set areaname=? where pin=?', [areaname,pin],
(err,res)=>{
          if(err){
            console.log(err);
          }
          else{
            if(res.affectedRows>0){
                output.status=true;
               
            }
            else{
                console.log("did not update");
            }
          }
          console.log(output);
          resp.send(output);
});




});

