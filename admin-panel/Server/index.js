const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const cors = require('cors');
const multer = require('multer');
 const storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString() + file.originalname);
    }
});
const upload = multer({storage: storage});
mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true});
server.use('/uploads',express.static('uploads'));
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:  {type:String,required:true},
    description:  {type:String,required:true},
    cost:  {type:Number,required:true},
    course:  {type:String,required:true},
    semester: {type:Number,required:true},
    condition:  {type:Number,required:true},
    image: String
  });
  const Book= mongoose.model('Book',bookSchema);
server.post("/insert",function(req,res){
     const book = new Book();
     
    book.name= req.body.name;
    book.description = req.body.description;
    book.cost = req.body.cost;
    book.course = req.body.course;
    book.semester = req.body.semester;
    book.condition = req.body.condition;
     book.image = req.body.image;
     book.save();
    res.json(book);
})  
server.get("/read/:course",function(req,res){
    Book.find({course:req.params.course},function(err,docs){
        res.json(docs);
    })
})
server.post('/insertImage',upload.single('file'),function(req,res){
    res.json(req.file.path);
 })
  server.listen(8080,function(){
      console.log("Server Started");
  })