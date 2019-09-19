import React from 'react';
import ShowData from '../ShowData/ShowData.react';



class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state ={productList:[]}
    }

    componentDidMount(){
        let url="http://localhost:8080/products";
        fetch(url).then(resp=>resp.json()).then(productList=>this.setState({productList}));
    }

    render() {
        return (
            <div >
                <ShowData products={this.state.productList}></ShowData>
                {/* <h5>{this.productList}</h5> */}
            </div>
        );
    }
}

export default FetchData;