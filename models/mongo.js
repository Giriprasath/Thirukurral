/**
 * Created by ggnanasekar on 9/22/2016.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/paypal');

var mongoSchema =   mongoose.Schema;

var kuralSchema = {
                        "Number": Number ,
                        "Line1":String,
                        "Line2":String,
                        "Translation":String
                };

module.exports = mongoose.model('kural',kuralSchema);
