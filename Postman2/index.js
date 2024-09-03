
 const express = require ("express");
      
      const app = express();
      const mongoose = require("mongoose")
      const dotenv = require("dotenv")
      dotenv.config()
      mongoose.connect(process.env.mongo_url);
      app.use(express.json())
      const studentsModel = require('./students')
      app.get("/students", async (req, res) => {
        const students = await studentsModel.find();
        console.log(req.headers)   

        res.send(students);
      })
      app.get("/student/:name", async (req, res) => {
        const student = await studentsModel.find({firstName: req.params.name});
   
        console.log(req.query) 
       console.log(req.headers);
              res.send(student);
      })
      app.post("/addStudent", async (req, res) => {
    const Student = req.body;
     await studentsModel.create(Student);
    res.status(201).send({message: "success"}); 
    })
      app.listen(3000, () => console.log("Listeneing...")); 