
var NeuralNetworkUnitTests = function() {

};

NeuralNetworkUnitTests.prototype.Test = function(){
  QUnit.module( "NeuralNetworkTests" );
  QUnit.test( "testInit",this.testInit);
};

/*
*/
NeuralNetworkUnitTests.prototype.testInit = function(assert){
  var CallbackCalled = false;
  var testVarible = new NeuralNetwork();
  testVarible.Init(2,3,function(){CallbackCalled = true;});

  assert.equal(testVarible._GetInputs().length, 2);
  assert.equal(testVarible._GetOutputs().length, 3);
  assert.equal(CallbackCalled, true);
};

/*
Test Cases:
  For Each Network:
  -Output Correct?
  -OnUpdate Correct?
  -Reset + Refire?

  O Simple Network( 1 Input node + 1 Output Node)
  O Hidden Network(1 Input Node + 1 Hidden Node + 1 Output Node)
  O Complex Network(2 Input Nodes + 2 Hidden Nodes + 2 Output Nodes)
*/
NeuralNetworkUnitTests.prototype.testFire = function(assert){


  var testVarible = new NeuralNetwork();
  var testOutput = false;
  var output = [];

  /*Working on outputing a simple Network*/

  testVarible.Init(2,3,function()
  {
      if(testOutput)
      {
          //Verify Outptus
      }
  });






}
