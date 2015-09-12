import unittest
import Connection
import Node
class NetworkTests(unittest.TestCase):

  def testTwoNodeNetwork(self):
    inputNode = Node.Node(0,0)
    outputNode = Node.Node(0,0)

    inputCon = Connection.ConstantConnection(inputNode,value = 1)
    outputCon = Connection.Connection(inputNode,outputNode,1)

    assert(outputNode.getOutput() == 1)

    inputNode.reset()
    outputNode.reset()

    inputCon.setInput(0)

    assert(outputNode.getOutput() == 0)

  def testSimpleHiddenNetwork(self):
      ## Testing a 3 Node System
      ## SYSINPUT -> INPUTNODE -> HIDDENNODE -> OUTPUTNODE
    inputNode = Node.Node(0,0)
    hiddenNode = Node.Node(0,1)
    outputNode = Node.Node(0,2)
    inputCon = Connection.ConstantConnection(value = 1)
    hiddenCon = Connection.Connection(inputNode,hiddenNode,.25)
    outputCon = Connection.Connection(hiddenNode,outputNode,1)

    assert(outputNode.getOutput() == 0)


if __name__ == '__main__':
    unittest.main()