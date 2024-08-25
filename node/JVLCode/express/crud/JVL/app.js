const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const dataBaseObject = require('./db');
const objectID = dataBaseObject.objectID;

app.engine('hbs',exhbs.engine({
    layoutsDir : 'views/',
    defaultLayout : 'main',
    extname : 'hbs' 
}));

app.use(bodyParser.urlencoded({extended}));

app.set('view engine', 'hbs');

app.set('views', './views'); 

app.get('/', async (req, res, next) => {
    let dataBase = await dataBaseObject.getDatabase();
    const collection = dataBase.collection('books');
    const cursor = collection.find({});
    let books = await cursor.toArray();
    let message = 'test';

    let edit_id, edit_book;  
    

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        edit_book = await collection.findOne({_id:objectID(edit_id)});
    }
    if(req.query.delete_id){
       await collection.deleteOne({_id:objectID(req.query.delete_id)});
       return res.redirect('/?status=3');
    }
    switch (req.query.status) {
        case '1':
            message = "inserted successfully";
            break;
        case '2':
            message = "updated successfully";
            break;
        case '':
            message = "deleted successfully";
            break;
    
        default:
            break;
    }
    res.render('main', {
        message,
        books, 
        edit_id,
        edit_book
    })
});

app.post('/store_book', async (req, res)=>{
    let dataBase = await dataBaseObject();
    const collection = dataBase.collection('books');
    let book = { title: req.body.title,
                 author : req.body.author
    };
    await collection.insertOne(book);
    return res.redirect('/?status=1');
});

app.post('/update_book/:edit_id ', async (req, res)=>{
    let dataBase = await dataBaseObject();
    const collection = dataBase.collection('books');
    let book = { title: req.body.title,
                 author : req.body.author
    };
    let edit_id = req.params.edit_id;
    await collection.updateOne({_id:objectID(edit_id), {$set:book}});
    return res.redirect('/?status=2');
})

app.listen(3000);