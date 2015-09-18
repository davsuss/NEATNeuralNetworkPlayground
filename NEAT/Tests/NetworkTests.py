import unittest
from NeuralNetwork import Node
from NeuralNetwork import Connection
from NeuralNetwork import ConstantConnection
from NeuralNetwork import Network
from NeuralNetwork import Config
from BasicNeat import ConnectionGene
from BasicNeat import NodeGene
from BasicNeat import Genome


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


  def testCreateNetwork(self):
        ##Generating Phenotype
        inputNode = NodeGene(0,1,1,"SENSOR")
        outputNode = NodeGene(1,1,1,"OUTPUT")
        conn = ConnectionGene(1,0,1,True,1)

        connections = [conn]
        nodes = [inputNode,outputNode]


        genes = Genome(connections,nodes)


        network = Network(genes)

        assert(network.fire([1]) == [1])

if __name__ == '__main__':
    unittest.main()
