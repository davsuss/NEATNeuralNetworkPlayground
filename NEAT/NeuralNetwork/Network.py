__author__ = 'DavidS'
from NeuralNetwork import Connection
from NeuralNetwork import ConstantConnection
from BasicNeat import ConnectionGene
class Network:
    def __init__(self, InputNodes, OutputNodes,Connections):
         self.inputNodes = InputNodes
         self.outputNodes = OutputNodes
         self.connections = Connections
         self.inputs = []

    def fire(self, inputs):
        assert(len(inputs) == len(self.inputs))
        i = 0
        for inputValue in inputs:
            self.inputs[i].setInput(inputValue)
            i += 1

        self.outputs = []

        for x in self.outputNodes:
            self.outputs.append(x.getOutput())

        return self.outputs

    def getInputs(self):
        return self.inputs
    def getOutputs(self):
        return self.outputs
    def __init__(self, genome):
         self.inputNodes = []
         self.outputs = []
         self.outputNodes = []
         self.hiddenNodes = []
         self.connections = []
         self.inputs = []
         for node in genome.getNodes():
             if node.Type() == "SENSOR":
                self.inputNodes.append(node.makeNode())
             elif node.Type() == "OUTPUT":
                self.outputNodes.append(node.makeNode())
             else:
                self.hiddenNodes.append(node.makeNode())

         Nodes = self.inputNodes + self.hiddenNodes + self.outputNodes


        ##Create Input Connections
         for node in self.inputNodes:
             self.inputs.append(ConstantConnection(node,1))


         ##Create Internal Connections
         for conn in genome.getConnections():
                self.connections.append(Connection(Nodes[conn.getInNode()],Nodes[conn.getOutNode()],1))
