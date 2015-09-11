__author__ = 'DavidS'

class ConnectionGene:
    def __init__(self, weight, inNode , outNode):
        self.weight = weight
        self.inNode = inNode
        self.outNode = outNode



    def MutateWeight(self):
        self.weight = 1

    def Split(self):
        self.weight = 1
        ##splitting##


