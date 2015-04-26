/* GET home page. */

var items = require('../data');

var foodItem = require('../foodItem');

for(var item in items) {
  items[item] = foodItem(items[item]);
}

exports.foodItem = function(req, res){
  var name = req.param('name');
  if(typeof items[name] === 'undefined'){
    res.status(404).json({status: 'error'});
  } else {
    res.json(items[name].getInformation());
  }
}