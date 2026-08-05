export const cityData = [
  {
    id: 1,
    name: "Leawood",
    state: "Kansas",
    population: 33902,
    driveTime: "9 minutes",
    coordinates: [39.0277, -94.6086],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "6\" min. compacted subgrade 95% of standard max. density"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Concrete Slab",
        subgrade: "6\" compacted to 95% density"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Concrete Slab",
        subgrade: "6\" compacted to 95% density"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Concrete Slab",
        subgrade: "6\" compacted to 95% density"
      },
      commercial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted to 95% density"
      },
      industrial: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted to 95% density"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "8\" Solid Slab",
        subgrade: "6\" compacted to 95% density"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab",
        subgrade: "6\" compacted to 95% density"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 950400, maintenance30yr: 2037000 },
        concrete: { initial: 2280960, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739100 }
      }
    },
    reference: "APWA Standard"
  },
  {
    id: 2,
    name: "Overland Park",
    state: "Kansas",
    population: 197238,
    driveTime: "12 minutes",
    coordinates: [38.9848, -94.6697],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "10\" Subgrade Type AA (MR-3-3 Compaction)"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "7\" Slab + 4\" Rock Base",
        subgrade: "10\" Subgrade Type AA (MR-3-3 Compaction)"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Slab + 4\" Rock Base",
        subgrade: "8\" Treated Subgrade Type AA (MR-3-3 Compaction)"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Slab + 4\" Rock Base",
        subgrade: "8\" Treated Subgrade Type AA (MR-3-3 Compaction)"
      },
      commercial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "8\" Slab + 4\" Rock Base",
        subgrade: "8\" Treated Subgrade Type AA (MR-3-3 Compaction)"
      },
      industrial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "8\" Slab + 4\" Rock Base",
        subgrade: "8\" Treated Subgrade Type AA (MR-3-3 Compaction)"
      }
    },
    arterial: {
      minor: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "10\" Solid Slab (Treated Subgrade)",
        subgrade: "8\" Treated Subgrade Type AA (MR-3-3 Compaction)"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "10\" Solid Slab (Treated Subgrade)",
        subgrade: "8\" Treated Subgrade Type AA (MR-3-3 Compaction)"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1848000, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 950400, maintenance30yr: 2037000 },
        concrete: { initial: 2661120, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4878720, maintenance30yr: 739100 }
      }
    },
    reference: "Overland Park, KS Municipal Code"
  },
  {
    id: 3,
    name: "Lenexa",
    state: "Kansas",
    population: 57434,
    driveTime: "14 minutes",
    coordinates: [38.9547, -94.7608],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "6\" compacted subgrade to 95% density"
      },
      local: {
        asphalt: "8\" (4\" Base + 2\" Int + 2\" Surface)",
        concrete: "6\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade to 95% density"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade to 95% density"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade to 95% density"
      },
      commercial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade to 95% density"
      },
      industrial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade to 95% density"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "10\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade to 95% density"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "10\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade to 95% density"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 950400, maintenance30yr: 2037000 },
        concrete: { initial: 2566080, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4878720, maintenance30yr: 739100 }
      }
    },
    reference: "Lenexa, KS Municipal Code (Mill and Overlay)"
  },
  {
    id: 4,
    name: "Merriam",
    state: "Kansas",
    population: 11098,
    driveTime: "15 minutes",
    coordinates: [39.0378, -94.6808],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "6\" compacted subgrade 95% density"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade 95% density"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade 95% density"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade 95% density"
      },
      commercial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade 95% density"
      },
      industrial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "6\" compacted subgrade 95% density"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "8\" Solid Slab",
        subgrade: "6\" compacted subgrade 95% density"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab",
        subgrade: "6\" compacted subgrade 95% density"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 950400, maintenance30yr: 2037000 },
        concrete: { initial: 2280960, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739100 }
      }
    },
    reference: "APWA Standard / Merriam, KS"
  },
  {
    id: 5,
    name: "Shawnee",
    state: "Kansas",
    population: 69198,
    driveTime: "16 minutes",
    coordinates: [38.9804, -94.8122],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "Compacted to 95% of Standard Max Density (ASTM D698)"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Concrete Slab",
        subgrade: "Compacted to 95% of Standard Max Density (ASTM D698)"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "Compacted to 95% of Standard Max Density (ASTM D698)"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "Project Specific"
      },
      commercial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "Project Specific"
      },
      industrial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "8\" Solid Concrete Slab",
        subgrade: "Project Specific"
      }
    },
    arterial: {
      minor: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab + 6\" Rock Base",
        subgrade: "Project Specific"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab + 6\" Rock Base",
        subgrade: "State Criteria"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 1045440, maintenance30yr: 2037000 },
        concrete: { initial: 2566080, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4656960, maintenance30yr: 739100 }
      }
    },
    reference: "Shawnee, KS Municipal Code"
  },
  {
    id: 6,
    name: "Olathe",
    state: "Kansas",
    population: 143014,
    driveTime: "19 minutes",
    coordinates: [38.8953, -94.8185],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "9\" Compacted Subgrade 95% density"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Slab + 9\" Subgrade",
        subgrade: "9\" Treated Subgrade or 6\" Modified AB-3 rock base"
      },
      collector: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Treated Subgrade or 6\" Modified AB-3 rock base"
      }
    },
    collector: {
      residential: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Treated Subgrade or 6\" Modified AB-3 rock base"
      },
      commercial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Treated Subgrade or 6\" Modified AB-3 rock base"
      },
      industrial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Treated Subgrade or 6\" Modified AB-3 rock base"
      }
    },
    arterial: {
      minor: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Slab + 6\" Rock Base",
        subgrade: "Yes Triaxial Grogrid"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Slab + 6\" Rock Base",
        subgrade: "Yes Triaxial Grogrid"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 1045440, maintenance30yr: 2037000 },
        concrete: { initial: 2280960, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739100 }
      }
    },
    reference: "Olathe, KS Municipal Code"
  },
  {
    id: 7,
    name: "Gardner",
    state: "Kansas",
    population: 5678,
    driveTime: "29 minutes",
    coordinates: [38.8034, -94.5344],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "9\" Compacted Subgrade 95% density"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Slab + 9\" Subgrade",
        subgrade: "9\" Compacted Subgrade 95% density"
      },
      collector: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Compacted Subgrade 95% density"
      }
    },
    collector: {
      residential: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Compacted Subgrade 95% density"
      },
      commercial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Compacted Subgrade 95% density"
      },
      industrial: {
        asphalt: "10\" (8\" Base + 2\" Surface)",
        concrete: "7\" Slab + 9\" Subgrade",
        subgrade: "9\" Compacted Subgrade 95% density"
      }
    },
    arterial: {
      minor: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Slab + 9\" Subgrade",
        subgrade: "fly=standard; Portland Cemenr or 6\" modied AB-3 rcok base sub"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Slab + 9\" Subgrade",
        subgrade: "Not specified"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 950400, maintenance30yr: 2037000 },
        concrete: { initial: 2280960, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739100 }
      }
    },
    reference: "Gardner, KS Municipal Code"
  },
  {
    id: 8,
    name: "Grandview",
    state: "Missouri",
    population: 26209,
    driveTime: "15 minutes",
    coordinates: [39.0165, -94.4866],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "Top 6\" Compacted 95% density"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Slab",
        subgrade: "Top 6\" Compacted 95% density"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "8 inches"
      }
    },
    collector: {
      residential: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "8 inches"
      },
      commercial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "8 inches"
      },
      industrial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "8 inches"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "8\" Solid Slab",
        subgrade: "8 inches"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab",
        subgrade: "8 inches"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 845856, maintenance30yr: 2037000 },
        concrete: { initial: 2280960, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739100 }
      }
    },
    reference: "Grandview, MO Municipal Code"
  },
  {
    id: 9,
    name: "Raytown",
    state: "Missouri",
    population: 30012,
    driveTime: "21 minutes",
    coordinates: [39.0047, -94.4777],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "6\" Compacted subgrade 95% density"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Slab",
        subgrade: "6\" Compacted subgrade 95% density"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "6\" Compacted subgrade 95% density"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "6\" Compacted subgrade 95% density"
      },
      commercial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "6\" Compacted subgrade 95% density"
      },
      industrial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "6\" Compacted subgrade 95% density"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "8\" Solid Slab",
        subgrade: "6\" Compacted subgrade 95% density"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab",
        subgrade: "6\" Compacted subgrade 95% density"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 950400, maintenance30yr: 2037000 },
        concrete: { initial: 2280960, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739100 }
      }
    },
    reference: "Raytown, MO Municipal Code"
  },
  {
    id: 10,
    name: "Blue Springs",
    state: "Missouri",
    population: 61246,
    driveTime: "23 minutes",
    coordinates: [38.9839, -94.2867],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "Compacted to 95% density MoDOT Type 5 agg for untreated base"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Slab",
        subgrade: "Compacted to 95% density MoDOT Type 5 agg for untreated base"
      },
      collector: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      }
    },
    collector: {
      residential: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      },
      commercial: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      },
      industrial: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\" (9\" Base + 2\" Surface)",
        concrete: "8\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 845856, maintenance30yr: 2037000 },
        concrete: { initial: 1900800, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739100 }
      }
    },
    reference: "Blue Springs, MO Municipal Code"
  },
  {
    id: 11,
    name: "Lee's Summit",
    state: "Missouri",
    population: 106419,
    driveTime: "17 minutes",
    coordinates: [38.9124, -94.3858],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "8\" agg. Base for asphalt/ 6\" agg. Base for concrete compacted stable subgrade"
      },
      local: {
        asphalt: "6\" (4\" Base + 2\" Surface) + 8\" Rock Base",
        concrete: "6\" Solid Slab + 6\" Rock Base",
        subgrade: "8\" deep (local) to 9\" deep (collectors/ commericial)"
      },
      collector: {
        asphalt: "8\" (6\" Base + 2\" Surface) + 8\" Rock Base",
        concrete: "6.5\" Solid Slab + 6\" Rock Base",
        subgrade: "8\" deep (local) to 9\" deep (collectors/ commericial)"
      }
    },
    collector: {
      residential: {
        asphalt: "8\" (6\" Base + 2\" Surface) + 8\" Rock Base",
        concrete: "6.5\" Solid Slab + 6\" Rock Base",
        subgrade: "8\" deep (local) to 9\" deep (collectors/ commericial)"
      },
      commercial: {
        asphalt: "11\" (9\" Base + 2\" Surface) + 8\" Rock Base",
        concrete: "8\" Solid Slab + 6\" Rock Base",
        subgrade: "Project Specific"
      },
      industrial: {
        asphalt: "11\" (9\" Base + 2\" Surface) + 8\" Rock Base",
        concrete: "8\" Solid Slab + 6\" Rock Base",
        subgrade: "Project Specific"
      }
    },
    arterial: {
      minor: {
        asphalt: "Project Specific",
        concrete: "Project Specific",
        subgrade: "Project Specific"
      },
      major: {
        asphalt: "Project Specific",
        concrete: "Project Specific",
        subgrade: "Project Specific"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 665280, maintenance30yr: 1584000 },
        concrete: { initial: 1589280, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 1035936, maintenance30yr: 2037000 },
        concrete: { initial: 2233440, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 2173248, maintenance30yr: 3168000 },
        concrete: { initial: 4656960, maintenance30yr: 739000 }
      }
    },
    reference: "Lee's Summit, MO Municipal Code"
  },
  {
    id: 12,
    name: "Kansas City",
    state: "Missouri",
    population: 521220,
    driveTime: "20 minutes",
    coordinates: [39.0997, -94.5786],
    residential: {
      access: {
        asphalt: "N/A",
        concrete: "N/A",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface) + 6\" Rock Base",
        concrete: "6\" Solid Slab + 6\" Rock Base",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface) + 6\" Rock base",
        concrete: "7\" Solid Slab + 6\" Rock Base",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface) + 6\" Rock base",
        concrete: "7\" Solid Slab + 6\" Rock Base",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      },
      commercial: {
        asphalt: "9\" (7\" Base + 2\" Surface) + 6\" Rock base",
        concrete: "7\" Solid Slab + 6\" Rock Base",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      },
      industrial: {
        asphalt: "9\" (7\" Base + 2\" Surface) + 6\" Rock base",
        concrete: "7\" Solid Slab + 6\" Rock Base",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\" (9\" Base+ 2\" Surface) + 6\" Rock Base",
        concrete: "8\" Solid Slab + 6\" Rock Base",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      },
      major: {
        asphalt: "12\" (10\" Base+ 2\" Surface) + 6\" Rock Base",
        concrete: "9\" Solid Slab + 6\" Rock Base",
        subgrade: "6\" Compacted subgrade 95% density + 6\" untreated"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 768768, maintenance30yr: 1584000 },
        concrete: { initial: 1589280, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 1092960, maintenance30yr: 2037000 },
        concrete: { initial: 2423520, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739000 }
      }
    },
    reference: "Kansas City, MO Municipal Code"
  },
  {
    id: 13,
    name: "Independence",
    state: "Missouri",
    population: 123011,
    driveTime: "24 minutes",
    coordinates: [38.9872, -94.3628],
    residential: {
      access: {
        asphalt: "6\" min. Type 1 asphaltic concrete base course",
        concrete: "6\" min. portland cement concrete pavement",
        subgrade: "Compacted to 95% density MoDOT Type 5 agg for untreated base"
      },
      local: {
        asphalt: "8\" (6\" Base + 2\" Surface)",
        concrete: "6\" Solid Slab",
        subgrade: "Compacted to 95% density MoDOT Type 5 agg for untreated base"
      },
      collector: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      }
    },
    collector: {
      residential: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      },
      commercial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      },
      industrial: {
        asphalt: "9\" (7\" Base + 2\" Surface)",
        concrete: "7\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      }
    },
    arterial: {
      minor: {
        asphalt: "11\"(9\" Base + 2\" Surface)",
        concrete: "8\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      },
      major: {
        asphalt: "12\" (10\" Base + 2\" Surface)",
        concrete: "9\" Solid Slab",
        subgrade: "APWA parameters by refrence"
      }
    },
    costs: {
      residential: {
        asphalt: { initial: 657888, maintenance30yr: 1584000 },
        concrete: { initial: 1478400, maintenance30yr: 369600 }
      },
      collector: {
        asphalt: { initial: 950400, maintenance30yr: 2037000 },
        concrete: { initial: 2280960, maintenance30yr: 475200 }
      },
      arterial: {
        asphalt: { initial: 1951488, maintenance30yr: 3168000 },
        concrete: { initial: 4435200, maintenance30yr: 739000 }
      }
    },
    reference: "Independence, MO Municipal Code"
  }
];

export const dataSources = [
  { name: "APWA Standards", url: "https://www.apwa.net" },
  { name: "KDOT - Kansas Department of Transportation", url: "https://www.ksdot.org" },
  { name: "MoDOT - Missouri Department of Transportation", url: "https://www.modot.org" },
  { name: "Overland Park Engineering", url: "https://www.overland-park.com" },
  { name: "Lenexa Public Works", url: "https://www.lenexa.gov" },
  { name: "Olathe Engineering Department", url: "https://www.olathe.gov" },
  { name: "Kansas City Engineering", url: "https://www.kcmo.gov" }
];
