/**
 * Created by ggnanasekar on 9/22/2016.
 */

var  express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoOp     =   require("./models/mongo");
var router = express.Router();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({"extended" : false}));
app.use(express.static(__dirname + '/public'));
    


router.route("/kural/:id")
    .get(function (req,res) {

        var response ={};

        mongoOp.find({"Number":req.params.id},function(err,data){

            if(err)
            {
                response = {"error":"Kural not found"};
            }
            else
            {
                response = data;
            }
            res.json(response);
        });
    });

router.route("/kural")
    .get(function(req,res){

        res.sendfile("./public/Thirukural.html");
    });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");
