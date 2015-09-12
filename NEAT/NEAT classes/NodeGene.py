__author__ = 'DavidS'



class NodeGene:
    def __init__(self, id, bias , response, activationType , nodeType ):
        self.id = id
        self.bias = bias
        self.response = response
        self.activationType = activationType
        self.nodeType = nodeType

    def Mutate_Bias(self):
        self.bias = 1

    def MutateResponse(self):
        self.response = response