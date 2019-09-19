import React from 'react';
import PropTypes from 'prop-types';


const Datagrid = (props) => {

    return (
        <div >
            <table className='table table-striped'>
                {props.children}
               <tbody>
                   {
                       props.donorList.map((eachDonor,index)=>{
                            return <tr key={index}>
                                <td>{eachDonor.donorName}</td>
                                <td>{eachDonor.bloodGroup}</td>
                                <td>{eachDonor.phoneNum}</td>
                            </tr>
                       })
                   }
               </tbody>
            </table>
        </div>
    );

}
let Donor= PropTypes.shape({
    donorName:PropTypes.string.isRequired,
    bloodGroup:PropTypes.oneOf(['apos','abpos','opos']),
    phoneNum:PropTypes.number.isRequired
});

Datagrid.propTypes={
    donorList:PropTypes.arrayOf(Donor).isRequired
};
export default Datagrid;