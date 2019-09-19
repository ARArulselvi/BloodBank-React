import React from 'react';



class AddDonor extends React.Component {
    constructor(props) {
        super(props);
    

    this.state={
        newDonor:{
            "id":0,
            "donorName":"",
            "bloodGroup":"",
            "phoneNum":"",
            "lastDonated":""
        }
    }
}

handleSubmit=(event)=>{
    event.preventDefault();
    let url="http://localhost:3000/bloodDonors";
    fetch(url,{
        method:"POST",
        body:JSON.stringify(this.state.newDonor),
        headers:{
            "Content-Type":"application/json"
        }}).then(resp=>console.log("resource created"));
    console.log("submit called");
    console.log(this.state.newDonor);
}

handleChange=(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    this.setState(prevState=>({newDonor:{...prevState.newDonor,[name]:value}}));
}
    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Id</label>
                    <input type="text" name="id" onChange={this.handleChange}/>
                    <label htmlFor="">Donor Name</label>
                    <input type="text" name="donorName" onChange={this.handleChange}/>
                    <label htmlFor="">Blood Group</label>
                    <input type="text" name="bloodGroup" onChange={this.handleChange}/>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" name="phoneNum" onChange={this.handleChange}/>
                    <label htmlFor="">last Donated</label>
                    <input type="date" name="lastDonated" onChange={this.handleChange}/>
                    <input type="text" type="submit"/>
                </form>
            </div>
        );
    }
}

export default AddDonor;