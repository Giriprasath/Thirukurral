/**
 * Created by ggnanasekar on 9/23/2016.
 */
var Client =  require('node-rest-client').Client;
var client = new Client();
var mongoOp     =   require("./models/mongo");

var kuralNumber = 0;
var fbpublisher = function() {
    kuralNumber++;
    mongoOp.find({"Number": kuralNumber}, function (err, data) {

        if(err)
        {
            console.error(err);
        }
        else
        {
            var msg = "குறள் : "+ data[0].Number + "\n" + data[0].Line1 + "\n" + data[0].Line2 + "\nDescription : " + data[0].Translation;
            var args = {
                parameters: {
                    access_token: "EAACEdEose0cBAJw2XzejEwYTXv47ZAZArBwL5UWoApccovhwjQjg3FuoRrb3UR3VPai9ESPbRSMI1q1ToX6abameeI6iUw9b9j5Ij68zFZClc24bMwN6eECvQORFvSZCnpfHpUIZBdVpiZCiDwrdoiC43O0KaDLeqJOmgdfTGdWgZDZD",
                    message: msg
                },

                headers: {"Content-Type": "application/json"}
            };

            client.post("https://graph.facebook.com/1109473529128403/feed", args, function (data, response) {

                if (data) {
                    console.log("error" + data);
                }
                else {
                    console.log("data" + response);
                }
            });
        }

    });


}
fbpublisher();
setInterval(fbpublisher,10000 );