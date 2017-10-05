// portée des variables dans le scope global et dans le scope d'une fonction

var baz = 'toto';
var lorem = 'lorem';

function foo() {
  var baz = 'baz';
  console.log(baz); // baz

  console.log(lorem); // lorem
  lorem = 'ipsum';
  console.log(lorem); // ipsum
}

console.log(lorem); // lorem

foo();

console.log(baz); // toto
console.log(lorem); // ipsum

// portée des variables dans le scope global et dans le scope d'une structure de contrôle
var a = 0;
console.log(a); // 0

if (true) {
  var a = 1;
  console.log(a); // 1
}

console.log(a); // 1
