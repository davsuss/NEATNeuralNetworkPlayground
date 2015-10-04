
var NeuralNetworkUnitTests = function() {

};

NeuralNetworkUnitTests.prototype.Test = function(){
  QUnit.module( "NeuralNetworkTests" );
  QUnit.test( "testInit",this.testInit);
};

NeuralNetworkUnitTests.prototype.testInit = function(assert){
  var CallbackCalled = false;
  var testVarible = new NeuralNetwork();
  testVarible.Init(2,3,function(){CallbackCalled = true;});

  assert.equal(testVarible._GetInputs().length, 2);
  assert.equal(testVarible._GetOutputs().length, 3);
  assert.equal(CallbackCalled, true);
};
