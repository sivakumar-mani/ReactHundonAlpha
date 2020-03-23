import React from 'react';
import '../styles/left-content.scss'
import data from "../data/leftcontent-page2";
import Profile from '../images/profile-icon.png'

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
                    <div class="row no-border">
                                    <div class="col-md-3">
                                        <img className="member_bg" src={Profile} alt=""/>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="members-items">
                                            <a href="#">Paternal Grandfather</a>
                                            <a href="#">Adopted</a>
                                        </div>
                                        <div class="members-items">
                                           <input className="members-items--input-name" type="text" placeholder="Ted Mochie"/>
                                        </div>
                                        <div class="members-items">
                                           <input className="members-items--input-age" type="text" placeholder="78"/>
                                           <select>
                                               <option>Years</option>
                                               <option>2020</option>
                                           </select>
                                        </div>
                                        <div class="members-items">
                                           <select>
                                               <option>Male</option>
                                               <option>Female</option>
                                           </select>
                                           <select>
                                               <option>Living</option>
                                               <option>Living</option>
                                           </select>
                                        </div>     
                                    </div>
                                </div>
                
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
