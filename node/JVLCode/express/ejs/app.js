const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');


app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs');

router.get('/', (req, res) => {
    const courses = [
        'PHP',
        'Javascript',
        'Node.js',
        'React.js',
        'Angular'
    ]
    res.status(200).render('index');
})

router.use((req, res, next)=> {
    res.status(200).render('404');
})

app.use(router);

app.listen(8000,() => {
    console.log('Running on 8000')
})