var hello = document.querySelector('#hello');
var helloTemplate = document.querySelector('#hello-template').innerHTML;
var compiledHelloTemplate = _.template(helloTemplate);
var html = compiledHelloTemplate({name: 'Toto'});
hello.innerHTML = html;
