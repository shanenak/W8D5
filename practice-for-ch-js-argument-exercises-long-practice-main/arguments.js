// // with rest operator
function sumOther(...args) {
    let total = 0
    for (let index = 0; index < args.length; index++) {
        total += args[index]        
    }
    return total
}

// // without rest operator
// function sum() {
//     let total = 0
//     for (let index = 0; index < arguments.length; index++) {
//         total += arguments[index]        
//     }
//     return total
// }

// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)


// // with arguments
// Function.prototype.myBind = function(context) {
//     let that = this;
//     const bindArgs = Array.from(arguments).slice(1)
//     return function() {
//         const callArgs = Array.from(arguments)
//         that.apply(context, bindArgs.concat(callArgs))
//     }
// }

// // with ... rest operator
// Function.prototype.myBind = function(context, ...bindArgs) {
//     let that = this;
//     return function(...callArgs) {
//         that.call(context, ...bindArgs, ...callArgs)
//     }
// }


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// true

function curriedSum(numArgs) {
    const nums = [];
    return function _curriedSum(num) {
        nums.push(num);
        console.log(nums)
        if (nums.length === numArgs) {
            
            return nums.reduce((acc, el)=> {
                return acc + el
            }
            )
        } else {
            return _curriedSum;
        }
    }
    // return _curriedSum;
};

// let sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)) // => 56

///// with apply
// Function.prototype.curry = function(numArgs) {
//     let that = this;
//     let args = [];
//     return function _curriedSum(arg) {
//         args.push(arg);
//         if (args.length === numArgs) {
//             return that.apply(null, args)
//         } else {
//             return _curriedSum
//         }
//     }
// }

///// with rest 
Function.prototype.curry = function(numArgs) {
    let that = this; // function sumThree
    let args = [];
    return function _curriedSum(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that(...args)
        } else {
            return _curriedSum
        }
    }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let sumThreeCurried = sumThree.curry(3);
console.log(sumThreeCurried(10)(2)(3))

