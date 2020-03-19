import React from 'react';
import '../styles/subHeader.scss'
import BackArrow from '../images/back.svg'


function SubHeader() {
    return (
        <div class="container-fluid">
            <div class="subheader">
                <a href="#0" >
                    <h1 class="subheader--heading">                    
                        <img src={BackArrow} alt="" />
                        Family Tree
                    </h1>
                </a>
                <div class="actions">
                    <a href="#0"><i className="fa fa-cloud-download actions--icons" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fa fa-upload actions--icons" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fa fa-print actions--icons" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
