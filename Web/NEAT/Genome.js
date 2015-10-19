



/**/
var Genome = function(){
    this.AddConnChance = 0;
    this.AddNodeChance = 0;
    this.mutateChance = 0;
    this.currentNodeId = 0;
    this.currentInnovationId = 0;
    this.InputNodes = [];
    this.OutputNodes = [];
    this.HiddenNodes = [];
    this.Connections = [];
};
Genome.prototype.init = function(numofInputs,numofOutputs) {
  for(i = 0 ;i  < numOfInputs; i++)
  {
      this.InputNodes.push(i++,new NodeGene("INPUT", this.currentNodeId++));
  }
  for(i = 0 ;i  < numofOutputs; i++)
  {
      this.OutputNodes.push(i++,new NodeGene("OUTPUT", this.currentNodeId++));
  }
};

Genome.prototype.load = function(file){

};


Genome.prototype.onUpdate = function(callback){
  var details = {};


  callback(details);
};
Genome.prototype.onEvent = function(callback){
  callback(details)
}


Genome.prototype.mutate = function(){

    var randResult = 0;

    if(randResult > this.AddConnChance)
    {
        this.addConnectionMutate();
    }
    if(randResult > this.AddNodeChance)
    {
        this.addNodeMutate();
    }
  };
Genome.prototype.addConnectionMutate = function(){
    var randResult = Math.random();





};
Genome.prototype.addNodeMutate = function(){
  var randResult = Math.random();

  var index = Math.floor(randResult * this.Connections.length);

  var connection = this.Connections[index];

  connection.enabled = false;

  var newNode = new NeuronGene("Hidden",this.currentNodeId++);
  var newConn1 = new SynapseGene(0,true,connection.inputNodeId,newNode.NodeId,1);
  var newConn2 = new SynapseGene(0,true,newNode.NodeId,connection.outputNodeId,1);

  this.Connections.append(newConn1);
  this.Connections.append(newConn2);
  this.HiddenNodes.append(newNode);
};
/**
--------------------------------------------------------------------------
NEURON Genes
Basic Identifiers for Nodes
-NodeId is a number which identifies the node, used for the synapse

**/
var NeuronGene = function(nodeType, nodeId) {
  this.nodeType = nodeType
  this.nodeId = nodeId
};

/**
SYNAPSE GENES

**/
var SynapseGene = function(innovationId,enabled,inputNodeId,outputNodeId,weight) {
  this.innovationId = 0;
  this.enabled = false;
  this.inputNodeId = 0;
  this.outputNodeId = 0;
  this.weight = 0;
};
