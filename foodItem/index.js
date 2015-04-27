var FoodItem = function () {
  this.data = {
    name: null,
    type: null,
    origin: null,
    colour: null,
    buyTime: null,
    eatTime: null
  };

  this.fill = function (info) {
    for(var prop in this.data) {
      if(this.data[prop] !== 'undefined') {
        this.data[prop] = info[prop];
      }
    }
  };

  this.formatDate = function(date){
    // var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // var day = date.getDate();
    // var monthIndex = date.getMonth();
    // var year = date.getFullYear();
    // return day, monthNames[monthIndex], year;
    return date;
  };

  this.triggerBuy = function() {
    this.data.buyTime =  this.formatDate(Date.now());
  };

  this.triggerEat = function() {
    this.data.eatTime = Date.now();
  };

  this.getInformation = function() {
    return this.data;
  };
};

module.exports = function (info) {
  var instance = new FoodItem();

  instance.fill(info);

  return instance;
};