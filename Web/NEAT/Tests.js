



var NeuralNetworkUnitTests = function() {

};

NeuralNetworkUnitTests.prototype.Test = function(){
  QUnit.module( "NeuralNetworkTests" );
  QUnit.test( "testInit",this.testInit);
};

NeuralNetworkUnitTests.prototype.testInit = function(assert){
  var CallbackCalled = false;
  var testVarible = new NeuralNetwork();
  testVarible.OnUpdate(function(){CallbackCalled = true;});
  testVarible.Init(2,3);

  assert.Equal(testVarible._GetInputs().length, 2);
  assert.Equal(testVarible._GetOutputs().length, 3);
  assert.isTrue(CallbackCalled);
};
