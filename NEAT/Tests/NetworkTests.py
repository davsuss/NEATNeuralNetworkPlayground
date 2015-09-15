import unittest
from NeuralNetwork import Node
from NeuralNetwork import Connection
from NeuralNetwork import ConstantConnection
from NeuralNetwork import Config
class NetworkTests(unittest.TestCase):

  def testSingleNodeNetwork(self):
      outputNode = Node(0)
      inputCon = ConstantConnection(outputNode,1)
      assert(outputNode.getOutput() == 1)

  def testTwoNodeNetwork(self):
    inputNode = Node(0)
    outputNode = Node(0)
    inputCon = ConstantConnection(inputNode,1)
    outputCon = Connection(inputNode,outputNode,1)
    assert(outputNode.getOutput() == 1)

    inputNode.reset()
    outputNode.reset()

    inputCon.setInput(0)
    assert(outputNode.getOutput() == 0)

  def testSimpleHiddenNetwork(self):
      ## Testing a 3 Node System
      ## SYSINPUT -> INPUTNODE -> HIDDENNODE -> OUTPUTNODE
    inputNode = Node(0)
    hiddenNode = Node(0)
    outputNode = Node(0)
    inputCon = ConstantConnection(inputNode,value = 1)
    hiddenCon = Connection(inputNode,hiddenNode,.5)
    outputCon = Connection(hiddenNode,outputNode,1)

    assert(outputNode.getOutput() == 1)

    inputCon.setInput(0)

    inputNode.reset()
    hiddenNode.reset()
    outputNode.reset()

    assert(outputNode.getOutput() == 0)

if __name__ == '__main__':
    unittest.main()
