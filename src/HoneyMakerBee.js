var HoneyMakerBee = function() {
  // Call Bee Super Class - inherits color and food 
  //automatically inherits food from grub, since Bee inheritied it from grub
  Bee.call(this);

  // Properties Specific to HoneyBees
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;



};
// Inherits eat from Bee or Grub or it doesn't matter b/c Bee inherited 
//eat from grub?
//HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
};

