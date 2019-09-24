'use strict';

var app = {
  title: 'Indecesion App',
  subTitle: 'Section'
};

var appRoot = document.getElementById('root');

var newEle = React.createElement(
  'p',
  { onClick: changeText },
  'New text'
);
var addNew = void 0;

var addNewEle = function addNewEle() {
  addNew = newEle;
  renderTemplate();
};

var changeText = function changeText() {
  console.log('adada');
  addNew = React.createElement(
    'p',
    { onClick: changeText },
    'New text new '
  );
  renderTemplate();
};

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'span',
      null,
      app.subTitle,
      ' ',
      addNew,
      ' '
    ),
    [1, 34, 56],
    React.createElement(
      'button',
      { onClick: addNewEle },
      'Add new'
    )
  );

  ReactDOM.render(template, root);
};

renderTemplate();
