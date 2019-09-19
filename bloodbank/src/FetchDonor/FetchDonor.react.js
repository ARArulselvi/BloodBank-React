import React from 'react';
import Datagrid from '../Datagrid/Datagrid.react';



class FetchDonor extends React.Component {
    constructor(props) {  //called pre-render
        super(props);
        this.state ={donorList:[]}
    }

    //Lifecycle method which is called post-render

    componentDidMount(){
        let url="http://localhost:3000/bloodDonors";
        fetch(url).then(resp=>resp.json()).then(donorList=>this.setState({donorList}));
    }

    render() {
        return (
            <div >
                <Datagrid donorList={this.state.donorList}></Datagrid>
            </div>
        );
    }
}

export default FetchDonor;