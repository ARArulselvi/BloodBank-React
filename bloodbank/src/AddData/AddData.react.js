import React from 'react';



class AddData extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newProduct:{
            productId:0,
            productName:"",
            price:0,
            rating:0
        }
    }
    }


    handleSubmit=(event)=>{
        event.preventDefault();
        let url="http://localhost:8080/products";
        // axios.post(url,this.state.newProduct);
       
        fetch(url,{ 
            method:"POST",
            body:JSON.stringify(this.state.newProduct),
            headers:{
                "Content-Type":"application/json"
            }}).then(resp=>console.log("resource created"));
        console.log("submit called");
      
    }


    handleChange=(event)=>{
        let name=event.target.name;
    let value=event.target.value;

    this.setState(prevState=>({newProduct:{...prevState.newProduct,[name]:value}}));
    }

    render() {
        return (
            <div >
                <h2>Add Product</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Id</label>
                    <input type="text" name="productId" onChange={this.handleChange}/>
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="productName" onChange={this.handleChange}/>
                    <label htmlFor="">Price</label>
                    <input type="text" name="price" onChange={this.handleChange}/>
                    <label htmlFor="">Rating</label>
                    <input type="text" name="rating" onChange={this.handleChange}/>
                   
                    <input type="text" type="submit"/>
                </form>
            </div>
        );
    }
}

export default AddData;