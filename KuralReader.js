/**
 * Created by ggnanasekar on 9/21/2016.
 */

var reader = require('pdfreader');

var kuralreader = new reader.PdfReader();

kuralreader.parseFileItems("resources/kural.pdf",function(err,data)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
});