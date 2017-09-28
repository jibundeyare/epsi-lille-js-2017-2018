// fonction à appeler quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function(event) {
  // sélection de l'élément #btn1
  var btn = document.querySelector('#btn1');

  // fonction à appeler quand l'élément #btn1 détecte un click
  btn.addEventListener('click', function(event) {
    console.log('click sur #btn1');
    // empêche le comportement par défaut (annule un click par exemple)
    event.preventDefault();
  });

  // sélection de l'élément #btn2
  var btn2 = document.querySelector('#btn2');

  // fonction à appeler quand l'élément #btn2 détecte un click
  btn2.addEventListener('click', function(event) {
    console.log('click sur #btn2');
    // empêche le comportement par défaut (annule un click par exemple)
    event.preventDefault();
    // empêche la propagation de l'évènement aux éléments contenants
    event.stopPropagation();
  });

  // sélection de l'élément #my-div
  var myDiv = document.querySelector('#my-div');

  // fonction à appeler quand l'élément #btn2 détecte un click
  myDiv.addEventListener('click', function(event) {
    console.log('click sur #my-div');
  });

  // sélection de l'élément #cb2
  var element = document.querySelector('#cb2');

  console.log(element);

  // fonction à appeler quand l'élément #cb2 détecte un click
  element.addEventListener('click', function(event) {
    console.log(event);
    // affichage d'une propriété de l'objet qui a détecté le click
    console.log('il y a eu un click sur ' + event.target.id);

    // utilisation d'une propriété de l'objet qui a détecté le click
    if (event.target.checked) {
      console.log('coché');
    } else {
      console.log('décoché');
    }
  });

  // sélection de tous les éléments .my-cb
  var elements = document.querySelectorAll('.my-cb');

  console.log(elements);
  // affichage du nombre d'objet dans la NodeList
  console.log(elements.length);

  // parcours de la NodeList
  for (var i = 0; i < elements.length; i++) {
    // utilisation d'une propriété de l'objet qui a détecté le click
    var checked = elements[i].checked ? 'coché' : 'décoché';
    // affichage d'une propriété de l'objet qui a détecté le click
    console.log('boucle for: l\'élément ' + elements[i].id + ' est ' + checked);
  }

  elements.forEach(function(item, index, list) {
    // utilisation d'une propriété de l'objet qui a détecté le click
    var checked = item.checked ? 'coché' : 'décoché';
    // affichage d'une propriété de l'objet qui a détecté le click
    console.log('méthode forEach(): l\'élément ' + item.id + ' est ' + checked);
  });
});

// fonction à appeler quand la page est entièrement chargée
window.addEventListener('load', function(event) {
  console.log('la page est entièrement chargée');
});
