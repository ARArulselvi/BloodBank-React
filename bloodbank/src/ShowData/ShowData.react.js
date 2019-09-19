import React from 'react';
import AddData from '../AddData/AddData.react';



class ShowData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showComp:"false"
        }
    }


    handleChange=()=>{
        this.setState({showComp:"true"})
    }


    render(){
    return (
        <div >
            <button onClick={this.handleChange}>Add</button>
            {this.state.showComp==="true" && <AddData></AddData>}
            <table>
                <thead>
                    <th>ProductId</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>Rating</th>
                </thead>
                
                <tbody>
               
                    {
                        this.props.products.map((eachProduct,index)=>{
                            return  <tr key={index}>
                            <td>{eachProduct.productId}</td>
                            <td>{eachProduct.productName}</td>
                            <td>{eachProduct.imageRef}</td>
                            <td>{eachProduct.price}</td>
                            <td>{eachProduct.rating}</td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </tr>
                        })
                    }

                    {/* return(props.products.map(eachproduct=>{
                        <DataRow data="{eachproduct}"></DataRow>
                    })) */}
                </tbody>
            </table>
        </div>
    );

}
}
export default ShowData;