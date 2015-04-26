var FoodItem = function () {
  this.data = {
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

  this.triggerBuy = function () {
    this.data.buyTime = Date.now();
  };

  this.triggerEat = function () {
    this.data.eatTime = Date.now();
  };

  this.getInformation = function () {
    return this.data;
  };
};

module.exports = function (info) {
  var instance = new FoodItem();

  instance.fill(info);

  return instance;
};