__author__ = 'DavidS'

class ConnectionGene:
    def __init__(self, weight, inNode , outNode, enabled, innovationNumber):
        self.weight = weight
        self.inNode = inNode
        self.outNode = outNode
        self.enabled = enabled
        self.innovationNumber = innovationNumber


    def MutateWeight(self):
        self.weight = 1

    def Split(self):
        self.weight = 1
        ##splitting##


