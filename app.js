const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const Video = require('./models/video');

// connect to mongoDB
const dbURI = 'mongodb+srv://testUser:test123@cluster0.xxvgctg.mongodb.net/TestDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

const app = express();

//register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/video');
})

// blog routes

app.get('/upload_video', (req, res) => {
    const video = new Video({
        title: 'Jannat forehand',
        sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],
        description: 'Basics',
    })

    video.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/video', (req, res) => {
    Video.findById('643087c450b0184f50345fa5')
        .then((result) =>  {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
});

app.get('/add_blog', (req, res) => {
    const blog = new Blog({
        title: 'new Blog',
        snippet: 'about my new blog',
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        })
});

app.get('/all_blogs', (req, res) => {
    Blog.find()
        .then((result) =>  {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
})

// // middleware & static files
// app.use(express.static('public'));
// app.use(morgan('dev'););c 