import React from 'react';
import Datagrid from '../Datagrid/Datagrid.react';
import PropTypes from 'prop-types';


let donorList=[
    {donorName:"ramesh", phoneNum:7896541233, bloodGroup:"opos", donationCount:45},
    {donorName:"suresh", phoneNum:1236547889, bloodGroup:"apos", donationCount:40},
    {donorName:"ganesh", phoneNum:4656317798, bloodGroup:"abpos", donationCount:50}
];
const ShowDonor = (props) => {

    return (
        <div >
            <h1>{props.title}</h1>
            <Datagrid donorList={donorList}>
            <thead>
                <tr>
                    <th>Donor Name</th>
                    <th>Blood group</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            </Datagrid>
        </div>
    );

}

ShowDonor.propTypes={
    title:PropTypes.string.isRequired
};

export default ShowDonor;