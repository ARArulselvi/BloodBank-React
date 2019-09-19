import React from 'react';
import ShowDonor from '../ShowDonor/ShowDonor.react';
import Search from '../Search/Search.react';
import Blog from '../Blog/Blog.react';
import FetchDonor from '../FetchDonor/FetchDonor.react';
import AddDonor from '../AddDonor/AddDonor.react';
import Lifecycle from '../Lifecycle/Lifecycle.react';
import opos from '../opos.jpg';
import ShowContent from '../ShowContent/ShowContent.react';

const request={
    bloodGroup:'opos',
    requiredUnit:12,
    location:'chennai',
    imgRef: opos
  };

const Content = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <ShowContent request={request}></ShowContent>
            {/* <h3>{props.request.location}</h3>
            <ul>
            <li>{props.request.bloodGroup}</li>
            <li><span><img src={props.request.imgRef} alt='opos'/></span></li>
            <li>{props.request.requiredUnit}</li>
            </ul>
            <ShowDonor title={'Star Donors'}></ShowDonor>
            {/* <AddDonor></AddDonor> */}
            
            {/* <Search/>
            {/* <Blog></Blog> */}

            {/* <Lifecycle></Lifecycle> */} 
        </div>
    );

}

export default Content;