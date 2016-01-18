var Bee = function() {

  Grub.call(this);
  //this = new Grub;
  //call the Grub Super Class
  //set the prototpye
  //set the constructor

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
// Enables Bee to access eat method on Grub prototype
Bee.prototype = Object.create(Grub.prototype);
// Sets constructur of Bee prototype to Bee in case we want to add specific methods to bees
Bee.prototype.constructor = Bee;
