const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());


//connection 
mongoose.connect('mongodb://localhost:27017/pg',{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connected");
}).catch(err=>{
    console.error("not connected error came");
});

//schema
const myschema=new mongoose.Schema({
    name:String,
    email:String,
    message:String
    
});

//model
const mymodel=mongoose.model("contacts",myschema);

//get
app.get("/getuser", (req, res) => {
    mymodel.find({}).then(function(programers) {
        res.json(programers);  
    }).catch(function(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    });
});

app.post("/adduser",(req,res)=>{
    const newuser=mymodel({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    });

    newuser.save().then(()=>{
        res.status(201).send("message sent successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Error message");
    });
});

app.listen(3001,()=>{
    console.log("server running")
});