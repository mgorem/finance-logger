var myName = 'mgorem';
console.log(myName);
// Compiling typescript to browser readable JavaScript- tsc sandbox.ts
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// Command for automatically compiling once a change is made and file is saved:
// tsc sandbox.ts -w
