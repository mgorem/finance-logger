const myName = 'mgorem';
console.log(myName);

// Compiling typescript to browser readable JavaScript- tsc sandbox.ts

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input)
});

// Command for automatically compiling once a change is made and file is saved:
// tsc sandbox.ts -w

// Declaring what type of variable we expect to be passed to a function as an argument

const circ = (diameter:number) =>{
    return diameter * Math.PI;
}
console.log(circ(7));