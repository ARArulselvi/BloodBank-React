import React from 'react';



class ShowProfile extends React.Component {

    url="https://api.github.com/users/vatsank";
    constructor(props) {
        super(props);
        this.state={
            profile:{},
            loaded:false
        }
    }

    componentDidMount(){

        fetch(this.url).then(data=>data.json()).then(profile=>{this.setState({profile,loaded:true})});
    }

    render() {
        if(!this.state.loaded){
            return (
                <div className="showprofile_wrapper">
                    <h1>Loading..</h1>
                </div>
            );
        } else{
            return (
                <div >
                   <p>{this.state.profile.name}</p>
                   <img src={this.state.profile.avatar_url} alt="Profile pic"></img>
                </div>
            );
        }
   }
}

export default ShowProfile;