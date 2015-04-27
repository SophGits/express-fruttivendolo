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

exports.bought = function(req, res){
  var name = req.param('name');
  if(typeof items[name] === 'undefined'){
    res.status(404).json({status: 'error'});
  } else {
    items[name].triggerBuy();
    res.json({status: 'done'});
  }
}

exports.list = function(req, res){
  res.render('list', {title: "All foods", items: items});
}





// can ignore or keep for reference:
var nut1 = foodItem({
    "name": "almond",
    "type": "nut",
    "origin": "bush",
    "colour": "brown"
})
var nut2 = foodItem({
    "name": "pecan",
    "type": "nut",
    "origin": "bush",
    "colour": "brown"
})

exports.nut1 = function(req, res){
  res.json(nut1.getInformation());
}

exports.nut2 = function(req, res){
  res.json(nut2.getInformation());
}