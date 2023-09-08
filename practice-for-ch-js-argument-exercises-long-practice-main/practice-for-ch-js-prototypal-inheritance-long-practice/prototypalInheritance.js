// Function.prototype.inherits = function (superClass) {
//     function Surrogate(){}
//     Surrogate.prototype = superClass.prototype;
//     this.prototype = new Surrogate();
//     // console.log(this)
//     this.prototype.constructor = this;
// }
Function.prototype.inherits = function (superClass) {
    this.prototype = Object.create(superClass.prototype);
    this.prototype.constructor = this;
}

function MovingObject (_name, size, target) {
    this.name = _name;
    this.size = size;
    this.target = target;
}

MovingObject.prototype.isArriving = function () {
    console.log(`${this.name} is arriving at ${this.target}!`)
}


// MovingObject.prototype.name = function () {
//     console.log(this.name);
// }

// class Ship extends MovingObject {
//     constructor 
// }
// ES6 ^

function Ship (_name, size, target) {
    // this.name = _name;
    // this.size = size;
    // this.target = target;
    MovingObject.call(this, _name, size, target)
}
// function Ship () {
//     super(_name, size, target)
// }
Ship.inherits(MovingObject);


function Asteroid () {}
Asteroid.inherits(MovingObject);

const betty = new Ship("betty", "small", "san fran")
const clarence = new MovingObject("whatever", "whatever but twice", "revetahw")
console.log(betty.isArriving())



