const express = require('express');
const app = express();

let date = new Date();
let d = date.getDay();
let h= date.getHours();

const testMiddlaware=(req,res,next)=>{
    if(d!== 0 && d!==6 && h>=9 && h<=00)
    next()
    else
    res.redirect('/hors-service.html')
    res.sendFile(__dirname+'/Public/hors-service.html')
}
app.get('/hors-service.html',(req,res)=>{
    res.sendFile(__dirname+'/Public/hors-service.html')
})
app.use(testMiddlaware)
app.use(express.static('Public'))

app.listen(5050,()=>console.log('server is listening'));
