var app = {
  title: 'Indecesion App',
  subTitle: 'Section',
};

var appRoot = document.getElementById ('root');

let newEle = <p onClick={changeText}>New text</p>;
let addNew;

const addNewEle = () => {
  addNew = newEle;
  renderTemplate ();
};

const changeText = () => {
  console.log ('adada');
  addNew = <p onClick={changeText}>New text new </p>;
  renderTemplate ();
};

const renderTemplate = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>

      <span>{app.subTitle} {addNew} </span>
      {[1, 34, 56]}
      <button onClick={addNewEle}>Add new</button>
    </div>
  );

  ReactDOM.render (template, root);
};

renderTemplate ();
