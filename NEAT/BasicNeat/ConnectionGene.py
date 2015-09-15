__author__ = 'DavidS'

class ConnectionGene:
    def __init__(self, weight, inNodeint , outNodeint, enabled, innovationNumber):
        self.weight = weight
        self.inNode = inNodeint
        self.outNode = outNodeint
        self.enabled = enabled
        self.innovationNumber = innovationNumber


    def MutateWeight(self):
        self.weight = 1

    def Split(self):
        self.weight = 1
        ##splitting##


    def getInNode(self):
        return self.inNode
    def getOutNode(self):
        return self.outNode

    def __str__(self):
        return "InNode: (%s) OutNode (%s) InnovNumber (%d)" % (self.inNode,self.outNode,self.innovationNumber)