// js/main.js

var element = document.querySelector('#cb2');

console.log(element);

element.addEventListener('click', function(event) {
  console.log(event);
  console.log('il y a eu un click sur ' + event.target.id);

  if (event.target.checked) {
    console.log('coché');
  } else {
    console.log('décoché');
  }
});

var elements = document.querySelectorAll('.my-cb');

console.log(elements);
console.log(elements.length);

for (var i = 0; i < elements.length; i++) {
  var checked = elements[i].checked ? 'coché' : 'décoché';
  console.log('boucle for: l\'élément ' + elements[i].id + ' est ' + checked);
}

elements.forEach(function(item, index, list) {
  var checked = item.checked ? 'coché' : 'décoché';
  console.log('méthode forEach(): l\'élément ' + item.id + ' est ' + checked);
});
