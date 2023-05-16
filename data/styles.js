var styles = [ 
  {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-size" : 30,
      "shape" : "ellipse",
      "background-opacity" : 0.8627450980392157,
      "color" : "rgb(102,102,102)",
      "border-opacity" : 1.0,
      "border-width" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "border-color" : "rgb(217,217,217)",
      "width" : 65.0,
      "background-color" : "rgb(189,189,189)",
      "height" : 65.0,
      "text-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Type = 'Drug']",
    "css" : {
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "node[Type = 'Target']",
    "css" : {
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "node[shape = 'diamond']",
    "css" : {
      "border-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node[shape = 'diamond']",
    "css" : {
      "border-width" : 8.0
    }
  }, {
    "selector" : "node[shape = 'ellipse']",
    "css" : {
      "border-width" : 0.0
    }
  }, {
    "selector" : "node[Type = 'Drug']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[Type = 'Target']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[fam = 'Catalytic receptor']",
    "css" : {
      "background-color" : "rgb(55,126,184)"
    }
  }, {
    "selector" : "node[fam = 'Other IC']",
    "css" : {
      "background-color" : "rgb(166,86,40)"
    }
  }, {
    "selector" : "node[fam = 'VGIC']",
    "css" : {
      "background-color" : "rgb(204,235,197)"
    }
  }, {
    "selector" : "node[fam = 'Enzyme']",
    "css" : {
      "background-color" : "rgb(77,175,74)"
    }
  }, {
    "selector" : "node[fam = 'LGIC']",
    "css" : {
      "background-color" : "rgb(255,127,0)"
    }
  }, {
    "selector" : "node[fam = 'Other protein']",
    "css" : {
      "background-color" : "rgb(247,129,191)"
    }
  }, {
    "selector" : "node[fam = 'GPCR']",
    "css" : {
      "background-color" : "rgb(152,78,163)"
    }
  }, {
    "selector" : "node[fam = 'NHR']",
    "css" : {
      "background-color" : "rgb(255,255,51)"
    }
  }, {
    "selector" : "node[fam = 'Transporter']",
    "css" : {
      "background-color" : "rgb(166,206,227)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-color" : "rgb(204,204,204)",
      "width" : 18.0,
      "text-opacity" : 1.0,
      "source-arrow-color" : "rgb(204,204,204)",
      "opacity" : 0.9411764705882353,
      "line-style" : "solid",
      "source-arrow-shape" : "none",
      "target-arrow-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Ripple",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-size" : 8,
      "shape" : "ellipse",
      "background-opacity" : 1.0,
      "color" : "rgb(19,58,96)",
      "border-opacity" : 1.0,
      "border-width" : 20.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "border-color" : "rgb(51,153,255)",
      "width" : 50.0,
      "background-color" : "rgb(255,255,255)",
      "height" : 50.0,
      "text-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,204)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-color" : "rgb(51,153,255)",
      "width" : 3.0,
      "text-opacity" : 1.0,
      "source-arrow-color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "line-style" : "solid",
      "source-arrow-shape" : "none",
      "target-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Solid",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-size" : 14,
      "shape" : "ellipse",
      "background-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "border-opacity" : 1.0,
      "border-width" : 0.0,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "border-color" : "rgb(0,0,0)",
      "width" : 40.0,
      "background-color" : "rgb(102,102,102)",
      "height" : 40.0,
      "text-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "target-arrow-shape" : "none",
      "line-color" : "rgb(204,204,204)",
      "width" : 12.0,
      "text-opacity" : 1.0,
      "source-arrow-color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "line-style" : "solid",
      "source-arrow-shape" : "none",
      "target-arrow-color" : "rgb(0,0,0)",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}]