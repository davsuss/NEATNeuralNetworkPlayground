
var  NodeGraph = function(NodesReference, LinksReference, className) {
    var vm = this;
     vm.force = d3.layout.force()
     .size([500, 500])
     .nodes(NodesReference) // initialize with a single node
     .links(LinksReference)
     .linkDistance(30)
     .charge(-60)
     .on("tick", function() {
  vm.link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  vm.node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

     var svg = d3.select("body").select(className)
    .attr("width", 500)
    .attr("height", 500)

svg.append("rect")
   .attr("width", 500)
    .attr("height", 500);


      vm.nodes =  vm.force.nodes(),
      vm.links =  vm.force.links(),
      vm.node = svg.selectAll(".node"),
      vm.link = svg.selectAll(".link");

      vm.restart = function() {


          vm.link = vm.link.data(vm.links);

          vm.link.enter().insert("line", ".node")
              .attr("class", "link");

          vm.node = vm.node.data(vm.nodes);

          vm.node.enter().insert("circle", ".cursor")
              .attr("class", "node")
              .attr("r", 5)

           vm.force.start();
      }


}
