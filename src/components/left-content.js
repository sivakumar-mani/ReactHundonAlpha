import React from 'react';
import '../styles/left-content.scss'
import data from "../data/leftcontent-data";

function LeftContent() {
    return (

        <div class="left-side-panel">
            <div class="container">
                <div class="row">
                    <div class="heading-column1">
                        <h3>Family Medical Condition</h3>
                    </div>
                    <div class="heading-column2">
                        <i className="fa fa-edit"></i>
                    </div>
                </div>
                {
                    data.familymedicalcondition.map((items, i) => {
                        return (
                            <div class="row">
                                <div class="column1">
                                    <p>{items.name}</p>
                                </div>
                                <div class="column2">
                                    <p>{items.description}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default LeftContent;
