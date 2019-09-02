// import React and Component from 'react'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// this is basic react React app
// is shows h1 with "hello world!" text wrapped with div.container
const ReactApp = (props)=>{
    return (
        <div className='container'>
            <h1>Hello World!</h1>
        </div>
    )
}

ReactDOM.render(<ReactApp/>, document.getElementById('root'))
// this line means
// take DOM element with id "root" and render react app in this #root
// div with id "root" is standard base DOM element in react