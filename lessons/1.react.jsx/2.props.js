import React from 'react';

// data in react flows down (from parent to child), but can also to be passed up (from child to parent)
// properties/props is all data passed to component passed as parameters of function
const initialValue = 'DATA';
const onChange = event => {
  console.log ('onChange event', event);
};

// you can pass every type of data - from numbers, throught objects and functions to other components
const initialProps = {
  value: initialValue,
  onChange: onChange,
};

// you can use default values of properies
const InputsComponent = (props = initialProps) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
};

// you can deconstruct props to make more readable code
const InputsComponent = ({value, onChange}) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

// you can pass all props directly to another component
// and they will be used by component if names are matched to convention
// effect will be same
const InputsComponent = props => {
  return (
    <div>
      <input type="text" {...props} />
    </div>
  );
};
