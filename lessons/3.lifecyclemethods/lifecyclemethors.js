import React from 'react';

// GO TO IMAGE IN THIS DIRECTORY

class LifeCycleOfReactComponent extends React.Component{
    // step 0
    constuctor(props){
        // this will invoke after component was called
        // here you can bind(this) method with "this" inside
        super(props) // Google it by yourself - Object Oriented Programming ;)
        this.state = {
            'data':'value'
        }
        // Don't call this.setState() here!
        // Don't use props as default state values
        // Avoid to coping props into state

    }

    // step 1
    static getDerivedStateFromProps(props, state){
        // static - dont have access to "this"
        // before render() method
        // use if state depends of changes in props
        // probably you could never use it
    }

    // step 2
    render(){
        // show component jsx with initial state/props data
        const {state,props} = this
        return (<div>TA DA !!</div>)
    }

    // step 3
    componentDidMount(){
        // this will invoke after render
        // you can call this.setState here
        // use if you have ajax, fetched data, when-user-can-see changes
        this.setState({
            'data':'value1'
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // this will invoke after components updates
        // this will not call for initial render
        // use to compare props or state with previous props or previous state
        
    }

    shouldComponentUpdate(nextProps, nextState, prevProps, prevState){
        // if this method returns true then component will rerender
        // probably you could never use it

    }

}