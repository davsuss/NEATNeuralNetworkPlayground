__author__ = 'DavidS'
from NeuralNetwork import Connection
from BasicNeat import ConnectionGene
class Network:
    def __init__(self, InputNodes, OutputNodes,Connections):
         self.inputs = InputNodes
         self.outputs = OutputNodes
         self.connections = Connections

    def __init__(self, genome):
         self.inputs = []
         self.outputs = []
         self.connections = []

         for node in genome.getNodes():
             if node.Type() == "Sensor":
                self.inputs.append(node.makeNode())
             elif node.Type() == "Output":
                self.outputs.append(node.makeNode())
             else:
                self.hidden.append(node.makeNode())

         Nodes = self.inputs + self.hidden + self.outputs


         for conn in genome.getConnections():
                self.connections.append(Connection(Nodes[conn.getInNode()],Nodes[conn.getOutNode()],1))
