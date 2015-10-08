

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
  return this.inputs.slice();
};

NeuralNetwork.prototype._GetOutputs = function() {
  return this.outputs.slice();
};

NeuralNetwork.prototype._GetConnections = function() {
  return this.connections.slice();
};

NeuralNetwork.prototype._AddConnection = function(inputId,outputId){
  this.connections.append(new Synapse(inputId,outputId));
};

NeuralNetwork.prototype.Init = function(numOfInputs,numOfOutputs,callBack){
var i = 0;
  for(i = 0 ;i  < numOfInputs; i++)
  {
      this.inputs.push(i++,new Neuron([], true));
  }
  for(i = 0 ;i  < numOfOutputs; i++)
  {
      this.outputs.push(i++,new Neuron([], false));
  }
  this.callBack = callBack;
  this.OnUpdate();
};

NeuralNetwork.prototype.Fire = function(inputs){

var results = [];
  this.Reset();
  this.inputs.forEach(function(element,index,array)
  {
      element.setOutput(inputs[index]);
  });

  this.outputs.forEach(function(element,index,array){
      results.append(element.Incomming());
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
    Nodes.push({id: element.getId(), output:element._GetOutput(), type:"Input"});
  });
  this.hiddens.forEach(function(element,index,array){
    Nodes.push({id: element.getId(), output:element._GetOutput(), type:"Hidden"});
  });
  this.outputs.forEach(function(element,index,array){
    Nodes.push({id: element.getId(), output:element._GetOutput(), type:"Output"});
  });

  //TODO Add Connections for Update

  this.callBack({NetworkNodes: Nodes, NetworkConnections: Connections});

};

/***********************************************/
var Neuron = function(id,inputCons, isInput) {
this.id = id;
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
Neuron.prototype._GetOuput = function() {
  return this.Output;
};
Neuron.prototype.GetId = function() {
  return this.id;
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
Synapse.prototype.toLog = function() {
  return {inputId: this.inputNode.getId(), outputId: this.outputNode.getId()};
};

Synapse.prototype.Output = function() {
  return inputNode.Incomming();
};
