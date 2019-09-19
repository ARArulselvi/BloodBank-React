import React from 'react';
import ReactDOM from 'react-dom';
import ShowCity from '../ShowCity/ShowCity.react';


class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'Rani',
            city:'Chennai'
        }
        console.log("constructor *****");
    }

    componentDidMount(){
        console.log("Did mount is called=====");

        // const elementToAdd=<h2>Added by method</h2>;
        // ReactDOM.render(elementToAdd,document.getElementById('divi'));
         const element=ReactDOM.findDOMNode(this);
        console.log(element);
    }

    change=()=>{
        console.log("Change fired");
        this.setState({name:this.state.name+'ji'});
        this.setState({city:"bangalore"});
    }

    componentDidUpdate(){
        console.log("Did upadte called @@@@@@");
    }

    // if this method returns false render method will not be called
    shouldComponentUpdate(){
        return true;
    }
    render() {
        console.log("Render is called########");
     //   this.setState({name:this.state.name+'di'});  ==> setState should not be called inside render because it causes infinite loop
        return (
            <div id="divi" >
                    <h2>{this.state.name}</h2>
                    <ShowCity city={this.state.city}></ShowCity>
                    <button onClick={this.change}>Update</button>
            </div>
        );
    }
}

export default Lifecycle;