const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const jwt=require("jsonwebtoken");
const cookieparser=require("cookie-parser");
const app = express();
const auth=require("./auth");
const cloudinary=require("cloudinary").v2;
const fileupload=require("express-fileupload");
app.use(express.json());
app.use(cors());
app.use(cookieparser());
if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"))
}
app.use(fileupload({
    useTempFiles:true
}));

cloudinary.config({ 
    cloud_name: 'desjmubi1', 
    api_key: '859361148333473', 
    api_secret: 'n0mSpWdvX0U6hOpeUIxQzUDEYmM',
    secure: true
  });
dotenv.config({ path: "./config.env" });
require("./conn");
const User = require("./schema");
const Post = require("./schema2");
const { response } = require("express");

app.post("/home",async(req, res) => {
  console.log("entrering home route",req.body.t);
    const token=req.body.t;
    if(!token){
      console.log("wefhbewweeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      res.status(202).send("user not logged in");
    }
    else{
const verify=jwt.verify(token,"abhishekjindalabhishekjindal");
const rootuser=await Post.findOne({_id:verify._id,"tokens.token":token});
if(!rootuser){
  // console.log("no user");
  
    throw new Error("user not found")
}
req.token=token;
req.rootuser=rootuser;
req.userid=rootuser._id;
 
  res.send(req.rootuser);}
});

// app.get("/anshul",auth, async(req, res) => {
  // const token=req.body.token;
//     res.cookie("jwtoken", token);
//     console.log("this cookie " , req.cookie);
//     res.send("hello gged");

//   });
app.get("/logout", async (req, res) => {
   
    console.log("logged out");
    res.status(200).send("user logout");

})
app.post("/create", async (req, res) => {
  // save data to mongo db
 
//   console.log(req.body.image);
//   const file=req.body.image;
//   cloudinary.uploader.upload('C:\\fakepath\\Screenshot (1).png', function(error, result) {console.log(result, error)});
 
  const data = await new User(req.body.info);
  data.save();
  await Post.updateOne(
    { username: req.body.info.username },
    { $inc: { points:100} }
  );
 
  res.status(201).json("bloged created");
});


app.post("/login", async (req, res) => {
  try {
    
    const person = await Post.find({ email: req.body.info.email });

    if (person[0]) {

      if (person[0].password == req.body.info.password) {
        let token = await person[0].generateauthtoken();
       

        // res.cookie("jwtoken", token ,{
        // maxAge:1000*60*60,
        
        //  httpOnly: false,
        // })
        // res.cookie("jwtoken","jwt");
      
        console.log(token);
        res.status(200).json({ "token":token });
      } else {
     console.log("entering fail");
        res.status(401).json({ error: "invalid credntials" });
      }
    } else {
      res.status(401).json({ error: "invalid credntials" });
    }
  } catch (err) {
    console.log(err);
 
  }
});

app.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const person = await Post.find({ email: req.body.info.email });

    if (person[0]) {
      res.status(202).json("already exist");
    }
    else{
    const data = await new Post(req.body.info);
    data.save();
    res.status(201).json("bloged created");
    console.log("helo");
  }
 } catch (err) {
    console.log(err);
    
  }

});

app.post("/updatedata/:id", async (req, res) => {
  const { title, discription, username, category } = req.body.post;
  await User.updateOne(
    { _id: req.params.id },
    { $set: { title, discription, username, category } }
  );

  res.status(200).json("bloged edited");
});

app.get("/deletedata/:id", async (req, res) => {
  let data = await User.deleteOne({ _id: req.params.id });

  res.status(201).json("blog deleted");
});


app.get("/allpost", async (req, res) => {
  console.log("entering backend");
  let category = req.query.category;
  try {
    let allpost;
    if (category) {
      if (category == "all") {
        allpost = await User.find({});
      } else {
        allpost = await User.find({ category: category });
      }
    } else {
      allpost = await User.find({});
    }

    res.status(200).json(allpost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
app.get("/musicpost", async (req, res) => {
  try {
    let post = await User.find({ category: "music" });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
app.get("/bookpost", async (req, res) => {
  try {
    let post = await User.find({ category: "book" });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
app.get("/detailpost/:id", async (req, res) => {
  try {
    let detailpost = await User.findById(req.params.id);

    res.status(200).json(detailpost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
app.get("/predata/:id", async (req, res) => {
  try {
    let post = await User.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

const PORT=process.env.PORT||8000;
app.listen(PORT, () => {
  console.log(`server connected ${PORT}`);
});
