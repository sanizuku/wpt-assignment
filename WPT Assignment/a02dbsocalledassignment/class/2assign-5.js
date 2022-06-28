const express=require('express');
const app=express();
const mysql=require('mysql2');
app.listen(789);

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

app.use(express.static("ab"));
app.get("/getbalance",(req,resp)=>{

    let totheclient={ status:false,details:{ accno:0,balance:"" } };
    let acc=req.query.accno;
    console.log(accno);
    con.query('select * from bank where accno=?',[accno],
    (err,res)=>{

        if(err){
            console.log(err);
        }
        else{
           if(res.length>0){
               console.log("Account Found");
               totheclient.status=true;
               totheclient.details=res[0];
           }
           else{
               console.log("Not found");
           }
        }
        console.log(totheclient);
        resp.send(totheclient)
    });
});