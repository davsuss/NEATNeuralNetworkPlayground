

/***********************************************/
var NeuralNetwork = function() {

  this.inputs = [];
  this.outputs = [];
  this.hiddens = [];
  this.connections = [];

};

NeuralNetwork.prototype.Generate = function(genome){

};

NeuralNetwork.prototype._GetInputs = function(){
  return this.inputs;
};

NeuralNetwork.prototype._GetOutputs = function() {
  return this.outputs;
};

NeuralNetwork.prototype.Init = function(numOfInputs,numOfOutputs,callBack){

  for(i = 0 ;i  < numOfInputs; i++)
  {
      this.inputs.push(new Neuron([], true));
  }
  for(i = 0 ;i  < numOfOutputs; i++)
  {
      this.outputs.push(new Neuron([], false));
  }
  this.callBack = callBack;
  this.OnUpdate();
};

NeuralNetwork.prototype.Fire = function(inputs){

  this.inputs.forEach(function(element,index,array)
  {
  tempOutput += element.Output();
  });

this.OnUpdate();

};

NeuralNetwork.prototype.Reset = function(){
  this.inputs.forEach(function(element,index,array){
    element.Reset();
  });
  this.hiddens.forEach(function(element,index,array){
    element.Reset();
  });
  this.outputs.forEach(function(element,index,array){
    element.Reset();
  });
};

NeuralNetwork.prototype.OnUpdate = function(){
  var Nodes = [];
  var Connections = [];

  this.inputs.forEach(function(element,index,array){
    Nodes.push({id: 0, output: 1, type:"Input"});
  });
  this.hiddens.forEach(function(element,index,array){
    Nodes.push({id: 0, output: 1, type:"Hidden"});
  });
  this.outputs.forEach(function(element,index,array){
    Nodes.push({id: 0, output: 1, type:"Output"});
  });

  this.callBack({NetworkNodes: Nodes, NetworkConnections: Connections});

};

/***********************************************/
var Neuron = function(inputCons, isInput) {
this.Fired = false;
this.Output = 0;
this.inputs = inputCons;
};
Neuron.prototype.setOutput = function(output){
  this.Output = 1;
  this.isInput = true;
};

Neuron.prototype.Reset = function(){
this.Fired = false;
};
Neuron.prototype.Incomming = function() {

    if(this.Fired || this.isInput)
    { return this.Output; }
    var tempOutput = 0;

    this.inputs.forEach(function(element,index,array)
    {
    tempOutput += element.Output();
    });

    if(tempOutput > 1)
    {
      this.Output = 1;
    }
    else {
      this.Output = 0;
    }

    return this.Output;
};

/***********************************************/
var Synapse = function(inputNode, outputNode) {
    this.inputNode = inputNode;
    this.outputNode = outputNode;
};

Synapse.prototype.Output = function() {
  return inputNode.Incomming();
};
