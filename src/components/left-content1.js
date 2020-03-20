import React from 'react';
import '../styles/left-content.scss'
import data from "../data/leftcontent-page2";

function LeftContent1() {
    return (

        <div class="left-side-panel ">
            <div class="container">
                <div class="LHS-page2">
                    <div class="row no-border">
                        <div class="action-items">
                            <a href="#">Remove Members</a>
                            <a href="#">Done</a>
                            <a href="#"><i className="fa fa-edit"></i></a>
                        </div>
                    </div>
                </div>
                <div class="LHS-page2">
                    {
                        data.medicalcondition.map((headings, i) => {
                            return (
                                <div class="row no-border">
                                    <div class="col-md-9">
                                        <h5>{headings.header1}</h5>
                                    </div>
                                    <div class="col-md-3">
                                        <h5>{headings.header2}</h5>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
                <div class="LHS-page2">
                    {
                        data.medicallist.map((items, i) => {
                            return (
                                <div class="row no-border" >
                                    <div class="col-md-9">
                                        <p>{items.name}</p>
                                        <a href="">{items.type}</a>
                                        <a href="">{items.dose}</a>
                                        <a href="">{items.part}</a>
                                    </div>
                                    <div class="col-md-3">
                                        <p className="onset-alignment">{items.onset}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default LeftContent1;
