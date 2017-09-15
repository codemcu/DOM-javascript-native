(function () {
  // functions
  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  // body
  let body = document.body;

  // navbar elements
  let nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-inverse navbar-fixed-top');
  let div = document.createElement('div');
  div.setAttribute('class', 'navbar-header');
  let a = document.createElement('a');
  setAttributes(a, { 'class': 'navbar-brand', 'href': '#' })
  a.innerHTML = "codemcu";

  // container elements
  let divContainer = document.createElement('div');
  let divRow = document.createElement('div');
  divContainer.setAttribute('class', 'container');
  divRow.setAttribute('class', 'row');
  let divColMds = document.createElement('div');
  divColMds.setAttribute('class', 'col-md-4');
  let h2 = document.createElement('h2');
  h2.innerHTML = "Heading"
  let pCol = document.createElement('p');
  pCol.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum, sem sed mollis dignissim, elit risus aliquet ante, dapibus hendrerit risus odio ac dui";
  let aCol = document.createElement('a');
  setAttributes(aCol, { 'class': 'btn btn-primary', 'href': '#', 'role': 'button' })
  aCol.innerHTML = "details";

  let divColMdsContainer = divRow.appendChild(divColMds);
  divColMdsContainer.appendChild(h2);
  divColMdsContainer.appendChild(pCol);
  let pColButton = divColMdsContainer.appendChild(pCol.cloneNode(false));
  pColButton.appendChild(aCol);
  
  divRow.appendChild(divColMds.cloneNode(true));
  divRow.appendChild(divColMds.cloneNode(true));

  // jumbotron elements
  let divJumbotron = document.createElement('div');
  divJumbotron.setAttribute('class', 'jumbotron');
  let jumbotronContainer = divJumbotron.appendChild(divContainer.cloneNode(false));
  let h1 = document.createElement('h1');
  h1.innerHTML = 'DOM - JavaScript nativo';
  let p = document.createElement('p');
  p.innerHTML = 'Para crear los elementos de la página he utilizado propiedades y métodos del DOM para acceder, modificar y eliminar elementos'
  jumbotronContainer.appendChild(h1)
  jumbotronContainer.appendChild(p)

  // nav
  body.appendChild(nav);
  let navContainer = nav.appendChild(divContainer.cloneNode(false));
  let navContent = navContainer.appendChild(div);
  navContent.appendChild(a);

  // junbotron
  body.appendChild(divJumbotron);

  // container
  body.appendChild(divContainer);
  divContainer.appendChild(divRow);
})();