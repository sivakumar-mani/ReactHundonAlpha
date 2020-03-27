import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams'; 
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 0,
      highlightItem: 0,
      arrowsDirection: primitives.common.GroupByType.Parents,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      items: [
        {
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "VP, Public Sector",
          image: "photos/a.png"
        },
        {
          id: 1,
          parent: 0,
          title: "Robert Canon",
          description: "Adviser Partner",
          image: "photos/z.png",
          itemType: primitives.orgdiagram.ItemType.AdviserPartner,
          adviserPlacementType: primitives.orgdiagram.AdviserPlacementType.Right,
          groupTitle: "Partner"
        },
        {
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Adviser Partner item",
          image: "photos/y.png",
          itemType: primitives.orgdiagram.ItemType.AdviserPartner,
          adviserPlacementType: primitives.orgdiagram.AdviserPlacementType.Left,
          groupTitle: "Partner"
        },
        {
          id: 3,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "photos/b.png"
        },
        {
          id: 4,
          parent: 3,
          title: "Robert Canon 2",
          description: "Adviser Partner item",
          image: "photos/z.png",
          itemType: primitives.orgdiagram.ItemType.AdviserPartner,
          adviserPlacementType: primitives.orgdiagram.AdviserPlacementType.Right,
          groupTitle: "Partner"
        },
        {
          id: 5,
          parent: 3,
          title: "Ted Lucas 2",
          description: "VP, Human Resources",
          image: "photos/b.png"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
