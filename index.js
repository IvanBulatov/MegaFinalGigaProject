let express = require('express');
let app = express();
let port = 3005;

let dayjs = require('dayjs');
let relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/ru');
dayjs.locale('ru');
dayjs.extend(relativeTime)

app.listen(port,function(){
    console.log(`http://localhost:${port}`);
})

let cors = require('cors');
app.use(cors());

app.use(express.static('public'));

let card = [{
    "image":"Res3",
    "title":"Natural Plants",
    "gold": 1400
},
{
    "image":"Res2",
    "title":"Artificial Plants",
    "gold":900
},
{
    "image":"Res1",
    "title":"Artificial Plants",
    "gold":3500
}];

app.get('/card',async function(req,res){
    res.send(card);
});
