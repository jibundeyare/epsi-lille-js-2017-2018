// une closure est une fonction définie dans une fonction

function foo() {
  return function() {
    console.log('closure');
  };
}

var fn = foo();
fn();

// cas d'utilisation d'une closure pour encapsuler des données

function newUser() {
  // cette variable ne sera pas rendue publique
  var _name;

  // cette fonction ne sera pas rendue publique
  var _addStars = function(name) {
    return '***' + name + '***';
  };

  // cette fonction sera rendue publique
  var setName = function(name) {
    name = _addStars(name);
    _name = name;
  };

  // cette fonction sera rendue publique
  var getName = function() {
    return _name;
  };

  // l'objet renvoyé permet de définir les attributs et méthodes publiques
  return {
    setName: setName,
    getName: getName
  };
}

var u = newUser();
u.setName('toto');
console.log(u.getName());

// console.log(u._name); // u._name n'est pas accessible
// console.log(u._addStars('titi')); // u._addStars() n'est pas accessible
