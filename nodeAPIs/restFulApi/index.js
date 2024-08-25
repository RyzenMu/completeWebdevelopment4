const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json()); 
const Joi = require('joi');
// app.use(bodyParser.urlencoded({extended: true}));
const courses = [
    {id:1, name1: 'course1'},
    {id:2, name1: 'course2'},
    {id:3, name1: 'course3'},
]
app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

// joi -- npm package for object schema validation


app.post('/api/courses', (req, res) =>{

    const schema = {
        name1 : Joi.string().min(3).required(),
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);
    

    // if (!req.body.name || req.body.name.length <3) {
    //     // 400 bad request
    //     res.status(400).send('Name is required and shold be minimum 3 char');
    //     return;
    // }
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id : courses.length + 1,
        name1 : req.body.name1,
    };
    courses.push(course);
    res.send(courses);
});

//params
// app.get('/api/courses/:id', (req, res)=>{
//     // const courseKey = parseInt(req.params.id)
//     // res.send(courses[courseKey-1].name);
//     const course = courses.find(c=>c.id === parseInt(req.params.id));
//     console.log(course);
    
//     if (!course) { // 404 page
//         res.status(404).send("The course with the given id was not found");
//     }     
//     res.send(course);
// });

app.get('/api/courses/:id', (req, res) => {
    const { id } = req.params; // Destructure id from params
  
    const course = courses.find(c => c.id === parseInt(id));
    console.log(course);
  
    if (!course) {
      res.status(404).send("The course with the given id was not found");
      return;
    } else {
      res.send(course);
    }
  });

app.put('/api/courses/:id', (req, res)=>{
     // look up the course
     // if not existing, return 404
     const course = courses.find(c=> c.id === parseInt(req.params.id));
     if (!course)  return res.status(404).send('The course with the given id was not exist');

     // validate
     //if invalid, return 400 - Bad request 
     const schema = {
        name1 : Joi.string().min(3).required(),
     };
     const result = Joi.validate(req.body, schema);
     if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
     }

     //Update course
     //Return the updated course tro the client
     course.name1 = req.body.name1; 
     res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same course
    res.send(course);
})

app.get('/api/posts/:year/:month', (req, res)=>{
    // res.send(req.params);
    res.send(req.query);
});
//environment variables
const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`listening on port ${port}...`);    
});