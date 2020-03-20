var familyTree =  {
    firstfamily: {
      id: "firstfamily",
      name: "Grandpa",
      partners: ["grandma1"],
      children: { grandma1: ["Uncle", "father"]},
      image:"../../../images/profile-icon.png"
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
  }

    