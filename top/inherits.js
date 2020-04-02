const util = require('util');

//Parent
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log('Step ' + this.name);
};

//Children
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.jump = function() {
    console.log('Jump ' + this.name);
};

util.inherits(Rabbit, Animal);

const rabbit = new Rabbit('us rabbit');
rabbit.walk();
rabbit.jump();

