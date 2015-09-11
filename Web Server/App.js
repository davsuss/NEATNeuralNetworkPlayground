
/*Configs*/
var width = 500,
    height = 500,
    colors = d3.scale.category10()
    

/*Creating the Container*/
var svg = d3.select('body')
          .append('svg')
          .attr('oncontextmenu', 'return false;')
          .attr('width', width)
          .attr('height', height)
          

/*Example Nodes + Links*/

var nodes = [
             {id: 1, x: width/3, y: height/2},
             {id: 2,x: 2*width/3, y: height/2}
             ]


var links = [{source: nodes[0],target: nodes[1]}
            ]

var force = d3.layout.force()
    .size([width, height])
    .nodes(nodes)
    .links(links);


var link = svg.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link');

// Now it's the nodes turn. Each node is drawn as a circle.

var node = svg.selectAll('.node')
    .data(nodes)
    .enter().append('circle')
    .attr('class', 'node');

// We're about to tell the force layout to start its
// calculations. We do, however, want to know when those
// calculations are complete, so before we kick things off
// we'll define a function that we want the layout to call
// once the calculations are done.

force.on('end', function() {

    // When this function executes, the force layout
    // calculations have concluded. The layout will
    // have set various properties in our nodes and
    // links objects that we can use to position them
    // within the SVG container.

    // First let's reposition the nodes. As the force
    // layout runs it updates the `x` and `y` properties
    // that define where the node should be centered.
    // To move the node, we set the appropriate SVG
    // attributes to their new values. We also have to
    // give the node a non-zero radius so that it's visible
    // in the container.

    node.attr('r', width/25)
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });

    // We also need to update positions of the links.
    // For those elements, the force layout sets the
    // `source` and `target` properties, specifying
    // `x` and `y` values in each case.

    link.attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });
});



force.linkDistance(width/2);

force.start();