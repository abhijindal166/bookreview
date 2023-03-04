const jwt=require("jsonwebtoken");
const Post = require("./schema2")
const auth=async(req,res,next)=>{
    try{
      
        // console.log("entering middleware");
const token=req.cookies.jwtoken;
const verify=jwt.verify(token,"abhishekjindalabhishekjindal");
const rootuser=await Post.findOne({_id:verify._id,"tokens.token":token});
if(!rootuser){
    throw new Error("user not found")
}
req.token=token;
req.rootuser=rootuser;
req.userid=rootuser._id;
console.log("heree");
next();
    }
    catch(err){
        res.status(401).send("unauthorized");
        console.log("error in middleware");
        console.log(err);
    }

}
module.exports=auth;