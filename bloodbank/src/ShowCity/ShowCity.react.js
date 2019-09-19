import React from 'react';



const ShowCity = (props) => {

    console.log("child render is called");
    return (
        <div >
            <h3>{props.city}</h3>
        </div>
    );

}

export default ShowCity;