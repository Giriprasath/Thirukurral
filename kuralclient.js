/**
 * Created by ggnanasekar on 9/22/2016.
 */
var Client =  require('node-rest-client').Client;
var mongoOp     =   require("./models/mongo");

var client = new Client();
var i=1179;
 var call = function call() {
     i++;
     client.get("https://getthirukkural.appspot.com/api/2.0/kural/" + i + "?appid=oodfby73pxvct&format=json", function (data, response) {
         // parsed response body as js object
         //console.log(JSON.stringify(data));
         // raw response
         //console.log(response);

         var db = new mongoOp();
         db.Number = data.KuralSet.Kural[0].Number;
         db.Line1 = data.KuralSet.Kural[0].Line1;
         db.Line2 = data.KuralSet.Kural[0].Line2;
         db.Translation = data.KuralSet.Kural[0].Translation;


         db.save(function (err) {

             if (err) {
                 console.error(err);
                 setInterval(call,1000);

             }
             else {
                 console.log("kural " + i + "downloaded successfully");
             }
         });

     });
 }

setInterval(call,1000);


