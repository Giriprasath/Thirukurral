/**
 * Created by ggnanasekar on 9/22/2016.
 */

var mongoOp     =   require("./models/mongo");



/*mongoOp.find({"Number": 1330},function (err,data) {

    var i=0;
    if(err)
    {
        console.error("hai"+ err);
    }
    else {
            console.log("குறள் : ", data[i].Number);
            console.log(data[i].Line1);
            console.log(data[i].Line2);
            console.log(data[i].Translation);

    }
});*/


mongoOp.find({},function (err,data) {


    if(err)
    {
        console.error("hai"+ err);
    }
    else {
        console.log(JSON.stringify(data));

    }
});


