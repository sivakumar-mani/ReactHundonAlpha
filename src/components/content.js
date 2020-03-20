import React from 'react';
import LeftContent from './left-content';
import LeftContent1 from './left-content1';
import Tree from './Tree/Tree';

import { Switch, Route } from "react-router-dom";


function Content() {
  var familyTree = {
    firstfamily: {
      id: "firstfamily",
      name: "Grandpa",
      partners: ["grandma1"],
      children: { grandma1: ["Uncle", "father"] },
      image: "../../../images/profile-icon.png"
    },
    grandma1: { id: "Grandma1", name: "Grandma 1", },
    uncle: {
      id: "Uncle",
      name: "Uncle",
      partners: ["aunt"],
      children: {}
    },
    aunt: { id: "aunt", name: "Aunt Sandra", },
    father: {
      id: "father",
      name: "father",
      partners: ["mother"],
      children: { mother: ["me"] }
    },
    mother: { id: "mother", name: "mother", },
    son: { id: "son", name: "me", },
  };

  return (
    <div class="container-fluid">
      {/* left side content Area */}
      <div class="row">
        <div class="panel-left col-md-3">

          <Switch>

            <Route path="/page2">
              <LeftContent1 />
            </Route>
            <Route path="/">
              <LeftContent />
            </Route>
          </Switch>

        </div>
        {/* Right side content Area */}
        <div class="panel-right col-md-8">
          <div class="row">
            <Tree root='firstfamily' datalist={JSON.parse(JSON.stringify(familyTree))} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;