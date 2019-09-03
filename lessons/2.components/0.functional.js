import React from 'react';

const initialProps = {
  data: 'value',
};

// most of your react app should be build with functional, stateless components
// state of data is passed down from parent component as props
// you should write functional components if it will be used to show data or handle simple events
const FunctionalComponent = (props = initialProps) => {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
};

// you can build modular, reusable, clean components
const onClickHandler = (ev, value) => {
  console.log ('you clicked in', value);
};

const ListItem = ({value, onClick}) => {
  return (
    <li>
      <a
        onClick={event => {
          onClick (event, value);
        }}
      >
        {value}
      </a>
    </li>
  );
};

// you can pass down eventHandlers
const List = ({
  data = ['a', 'b', 'c', 'd'],
  onListItemClick = onClickHandler,
}) => {
  return (
    <ul>
      {data.map ((element, key) => {
        return <ListItem key={key} value={element} onClick={onListItemClick} />;
      })}
    </ul>
  );
};
