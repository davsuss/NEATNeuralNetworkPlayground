(function(){




  var GenomeApp = angular.module('appGenome',[])

  var GenomeStorage = {
    initInputs: 2,
    initOutputs: 2
  }
  GenomeApp.controller('GenomeController', function() {
    var vm = this;
    this.product = GenomeStorage;
    vm.init = function()
    {
        vm.nodes  = [{x:300,y:300}];

        vm.Graph = new NodeGraph(vm.nodes,[],".DirectedGraph");
        vm.Graph.restart();
          vm.nodes.push({x:100,y:100});
        vm.Graph.restart();

    };

    vm.addNode = function(){
      vm.nodes.push({x:5,y:5});
      vm.Graph.restart();
    }

  });




var app = angular.module('appMain',['appGenome']);

var modelStorage = {
  Title: ''
};


})();
