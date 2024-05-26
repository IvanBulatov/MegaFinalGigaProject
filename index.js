let express = require(`express`);
let app = express();
let cors = require('cors')
let port = 3000;
app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(cors())
app.use(express.json())
app.use(express.static('public'));



// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/kinoticks');


// Схема и модель
let filmSchema = new mongoose.Schema({
    title: String,
    preview: String,
    rating: Number,
    description: String
}, {
    timestamps: true
})

let Film = mongoose.model('film', filmSchema);

// Роуты

// Поиск всех фильмов
app.get(`/films`, async function (req, res) {
    let title = req.query.title;
    let search = {}; 

    if (title) {
        search.title = title;
    }

    let data = await Film.find(search).sort({rating: -1});
    res.send(data)
});


// Поиск всех данных одного фильма
app.get(`/film`, async function (req, res) {
    let id = req.query.id;
    let data = await Film.findOne({_id: id});
    res.send({
        film: data
    })
});
