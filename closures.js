//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

inner = outer();

//Once you do that, invoke inner.

console.log(inner());

//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

console.log(callFriend()('435-215-9248'));



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.

*/

var count = function() {
    var countUp = 0;
    return function makeCounter() {
        return countUp += 1;
    }
}();



console.log('Counter is at: ', count()); // 1
console.log('Counter is at: ', count()); // 2
console.log('Counter is at: ', count()); // 3
console.log('Counter is at: ', count()); // 4


//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

var func = function(paramFunc) {
    return function newFunc() {
        return paramFunc();
    }
};

console.log(func(function(){return 'Only executed once'})());



//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/



var fnCounter = function (anonFunc, N) {
    for (var i = 0; i < N; i++) {
        anonFunc();
        }
    return 'STOP';
};

fnCounter(function(){console.log('this will run 3 times')}, 3);

/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the function is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here  -- I think you have to pass i to the setTimeout function so it looks at the value of i BEFORE waiting, not after.  Waiting after i will probably always be 6.



 Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here -- right


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

var counter = function() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function timer(i){
            console.log(i);
        }, i*1000, i);
    }
};

counter();



//Next Problem


var funcArray = [function() {return 0;}, function() {return 1;}, function() {return 2;}, function() {return 3}, function() {return 4;}, function() {return 5;}];

console.log(funcArray[0]()); //0
console.log(funcArray[1]()); //1
console.log(funcArray[2]()); //2
console.log(funcArray[3]()); //3
console.log(funcArray[4]()); //4
console.log(funcArray[5]()); //5




