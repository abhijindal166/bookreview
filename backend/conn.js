const mongoose=require('mongoose');
const DB="mongodb+srv://abhi:cehGN9Sb5SMAVEf3@cluster0.lizvr3q.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser: true ,
  
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
    console.log("no connection");
})