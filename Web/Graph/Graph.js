
//Made from rkirsling's example.
//http://bl.ocks.org/rkirsling/5001347 //

var Graph = function(width, height) {
this.width = width;
this.height = height;
this.nodes = [];
this.links = [];

}

Graph.prototype.Generate = function(details){

w = this.width;

  this.nodes = [
      { x:   this.width/3, y: this.height/2 },
      { x: 2*this.width/3, y: this.height/2 }
  ];

  this.links = [
      { source: 0, target: 1 }
  ];

  var svg = d3.select('.Graph').append('svg')
      .attr('width', 500)
      .attr('height', 500);

  var force = d3.layout.force()
    .size([this.width, this.height])
    .nodes(this.nodes)
    .links(this.links);

  force.linkDistance(this.width/2);

  var link = svg.selectAll('.link')
    .data(this.links)
    .enter().append('line')
    .attr('class', 'link');

  var node = svg.selectAll('.node')
      .data(this.nodes)
      .enter().append('circle')
      .attr('class', 'node');

  force.on('end', function() {

        node.attr('r', w/25)
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });

        link.attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });

  });

    force.start();

}
