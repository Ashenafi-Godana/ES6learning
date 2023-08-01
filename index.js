/* Var, Let, Const key words */
// In most programming languages a variable should be accessed only in the block it was defined which is called its scope 

// When a variable is defined with var keyword it's accessible inside a function it's defined
// When a variable is defined with the let keyword it's accessible inside the block it's defined
// Var -> function
// let -> block
// Both the let and const keyword are block scoped which means they are only accessible inside the block they are defined

function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

const n = 10;
n = 20;