/**
 * Created by ggnanasekar on 9/27/2016.
 */

var express = require('express');
var path = require('path');
var app = express();
var bodyparser = require('body-parser');
var mongodb = require("./models/mongo");


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyparser.json());

app.get('/kural/:start/:end',function(req,res){

    mongodb.find({'Number':{$gte:req.params.start,$lte:req.params.end}},function(err,data)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('kuralview',{"data":data});
        }
    });

});

app.get('/kural/:start',function(req,res){

    mongodb.find({'Number':req.params.start},function(err,data)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('kuralview',{"data":data});
        }
    });

});




app.listen('3000');

console.log('listening to server 3000');