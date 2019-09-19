import React from 'react';

const clear=()=>{
    console.log('clear invoke');

    return ()=>{
        console.log('inner function');
    }
}

const Search = () => {

    return (
        <div >
            <button className="fa fa-search" onClick={(event)=>{console.log(event)}}>Search</button>

            <button className="fa fa-crosshairs" onClick={clear}>Clear</button>
            <button onClick={clear()}>Clear</button>   
        </div>
    );

}

export default Search;