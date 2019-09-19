import React from 'react';



const Footer = () => {

    return (
        <div className="row" >
            <div className="col-sm-6" >
            <h2>Partner Links</h2>
            <ul>
                <li>Appollo</li>
                <li>Malar</li>
                <li>Govt.</li>
            </ul>
            </div>
            <div  className="col-sm-6">
            <h4>Contact us</h4>
            <a href="http://www.facebook.com">
            <span className="fa fa-facebook-official fa-3x"></span>
            </a>
           </div>
            
        </div>
        
    );

}

export default Footer;