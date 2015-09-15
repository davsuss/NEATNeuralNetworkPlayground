__author__ = 'DavidS'
from NeuralNetwork import Node


class NodeGene:
    def __init__(self, id, bias , response, nodeType ):
        self.id = id
        self.bias = bias
        self.response = response
        self.nodeType = nodeType



    def getId(self):
        return self.id

    def Mutate_Bias(self):
        self.bias = 1

    def MutateResponse(self):
        self.response = response

    def Type(self):
        return self.nodeType

    def makeNode(self):
        return Node(self.bias)