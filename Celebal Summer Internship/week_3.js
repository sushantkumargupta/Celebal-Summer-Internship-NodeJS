//Week-3 , Mentor-MOHD MOINUDDIN RANGREJ Sir
//*************************(1)*********************************


// console.log('index.js');
const express= require('express');

const students = require("./students");

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
  console.log('listening on port 3000')
}); 



//GET method
app.get('/', (req,res)=>{
  // res.send("Hello World");
  res.json({message: "Api is working"});
  // res.json(students);
})

app.get('/api/students', (req,res) =>{
  res.json(students);
})

//POST method
app.post('/api/students', (req,res) =>{
if(!req.body.email){
  res.status(400);
  return res.json({error:"email is required..."})
}

const user ={
  id : students.length+1,
  first_name: req.body.first_name,
   last_name : req.body.last_name,
   email : req.body.email

}

students.push(user);
res.json(user)
  // console.log(req.body);
  res.send("student post request");
})

// app.get('/a', (req,res)=>{
//   res.send("Hello world");
// })
