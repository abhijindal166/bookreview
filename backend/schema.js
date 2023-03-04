const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    username:{
        type:String,
        
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        
    },
    price:{
        type:Number,
       
      },
      contact :{
        type:Number,
       
      },
    comments:[
        {
            comment:{
type:String,
required:true,
        }}
    ]

})
const Post=mongoose.model('USER',schema);
module.exports=Post;