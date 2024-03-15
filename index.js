const express = require('express') //LOAD THE EXPRESS MODULE
const app = express(); //APPLICATION
const port = 3000; 
const courses = require('./data/collegecourses');
const collegeCourses = require('./data/collegecourses');







// HTTP METHODS
app.get('/', (req,res)=> { 
    res.send('Hello World'); 
});

// ALL COURSES END POINT
app.get('/api/collegecourses', (req, res) => {
    // console.log(collegeCourses)
    try {
        res.json(collegeCourses); // Respond with JSON data of all college courses
    } catch (error) {
        console.error('Error fetching college courses:', error);
        res.status(500).send('Internal Server Error'); // If error occurs, return 500 status
    }
});


// app.post()

// app.put()

// app.delete()

app.listen(port, ()=>{ 
    console.log(`server is running on port ${port}`)
});