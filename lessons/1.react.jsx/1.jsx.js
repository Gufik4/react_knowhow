import React from 'react';

// JSX - javascript template syntax on steroids using in react
// single JSX element is called "component" or "element"

// small differences between JSX and HTML
// HTML uses attributes with lowercased names, JSX with camelCased names
// HTML has attribute "class", JSX has attribute "className"
// HTML has attribute "style" value with string type, in JSX is object
// HTML has attribute "id", JSX has attribute "ref"
// if you render many same JSX elements basing on array, every component have to have attribute "key"

// very basic JSX element - component names starts from capital letter
const Name = <h1>My name is Przemek</h1>;

// basic JSX element with embedded expression
// to use any js code in JSX you should use "{someExpressionOrFunction}"
const firstName = 'Przemek';
const Name2 = <h1>My name is {firstName}</h1>;
// this will show - <h1>My name is Przemek</h1>

// basic JSX element with embedded function
function nameToUppercase (name) {
  return name.toUppercase();
}
const Name3 = <h1>My name is {nameToUppercase (firstName)}</h1>;
// this will show - <h1>My name is PRZEMEK</h1>

// JSX is able to nesting other JSX elements
const Header1 = <h1>Header1</h1>;
const Header2 = <h2>Header2</h2>;

// component with nesting
const TopHeader = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
    </div>
  );
};

// React JSX component is (mostly) written as function which takes properies and return jsx code
// const ComponentName = (properies)=>{return <JSXCode/>}
const JSXComponent = ({text = 'Lorem ipsum', fontColor = 'red'}) => {
  return (
    <div className="text-center">
      {/* command in JSX you're doing this way */}
      <h1 style={{color: fontColor, fontSize:24}}>{text}</h1>
    </div>
  );
};

// JSX is able to conditional rendering
const ComponentWithLoader = ({imBusy = true, data = ['a', 'b', 'c', 'd']}) => {
  if (imBusy) {
    return <small>Loading</small>;
  }
  return (
    <ul>
      {/* you can map on array to render many, same elements with different data element */}
      {data.map((elem, key) => {
        return <li key={key}>{elem}</li>;
      })}
    </ul>
  );
};

// in JSX you can handle events
// onChange, onClick, onKeyDown
const onChange = event => {
  console.log ('event', event);
  console.log ('input value', event.target.value);
};
const onClick = (event, notRequiredText='TADA !')=>{
    if (notRequiredText.length !== 0){
        alert(notRequiredText)
    }
    else{
        alert('Submit')
    }
}
const onClickLink = (event, notRequiredText='TADA !')=>{
    event.preventDefault() // to not use link as link, but as button

    if (notRequiredText.length !== 0){
        alert(notRequiredText)
    }
    else{
        alert('Submit')
    }
}

const InputsComponent = props => {
  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={(event)=>{
          onClick(event, 'DATA SUBMITTED !!')
      }}>
      Submit
      </button>
      <a href='#' onClick={(event)=>{
        onClickLink(event,'DATA SUBMITTED BY LINK')
      }}>Click</a>
    </div>
  );
};
