// Challenge
// Implement an alarm clock/timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments.
// Ex. node timer1.js 10 3 5 15 9 => Will beep at 3 seconds, 5 seconds, 9 seconds, 10 seconds and 15 seconds.


// Edge Cases
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// process.stdout.write('\x07');  => Beep sound

let countdown = process.argv.slice(2);

let timer = function(arg) {
  setTimeout(() => {
    process.stdout.write('\x07');  
  }, arg * 1000)
}

countdown.forEach(timer);

// Used forEach instead
// for (let i = 0; i < countdown.length; i++) {
  // timer(countdown[i]);
// }





