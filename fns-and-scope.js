//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
    if (name === 'Tyler') {
        return true;
    } else {
        return false;
    }
};

console.log(isTyler('Luke'));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
    var userName = prompt("what is your user name");
    console.log(userName);
    return userName;
};

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
    var theName = getName();
    alert("Welcome, " + theName);
};


//Next problem




//What is the difference between arguments and parameters?

var paramFunk = function(x,y) {
    console.log('x and y are parameters');
    console.log(x + ' and ' + y + ' are arguments');
};

console.log(paramFunk(10, 12));

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

var howToCheck = null;
var allFalseVals = function() {
    console.log('Falsy values are: 0, false, null, undefined, NaN, and an empty string');
    if (!howToCheck) {
        console.log('See, falsy!');
    } else {
        console.log('oops... truthy');
    }
};

allFalseVals();

//Next Problem



//Create a function called myName that returns your name

var myName = function() {
    return 'Luke';
};


//Now save the function definition of myName into a new variable called newMyName

newMyName = myName;

//Now alert the result of invoking newMyName

console.log(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
    return function() {
        return 'luke';
    }
};

//Now save the result of invoking outerFn into a variable called innerFn.

innerFn = outerFn();

//Now invoke innerFn.

console.log(innerFn());