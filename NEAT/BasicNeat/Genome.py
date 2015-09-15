__author__ = 'DavidS'
import random
from NeuralNetwork import Config
from BasicNeat import ConnectionGene
## from Paper (K. O. Stanley and R. Miikkulainen)
##Each genome includes a list of connection
##genes, each of which refers to two node genes being connected ##

##Handles mutations for the genomes



class Genome:

    def __init__(self,connectionGenes, nodeGenes):
        self.connectionGenes = connectionGenes
        self.nodeGenes = nodeGenes

    def getConnections(self):
        return self.connectionGenes

    def getNodes(self):
        return self.nodeGenes

    def getDistance(self,other):
        ## Used to determine when the next generation starts ##
        ## if the distance is too large, they are thought to be of a new gen ##
        ## K. O. Stanley and R. Miikkulainen pg 110

        ExcessGenes = 0
        DisjointGenes = 0
        GeneTotal = 0
        ##Avg amoung matching genes
        AverageWeightDifferences = 0

        ##Excess - all genes over max


        ##Disjoint - all missing genes



        return ((ExcessGenes*Config.ExcessGenesCoefficent) / GeneTotal) + \
               ((DisjointGenes*Config.DisjointGenesCoefficent) / GeneTotal) + \
               AverageWeightDifferences * Config.WeightDiffernceCoefficent


    def mutate(self):
        r = random.random

        ## We are tasked to randomly mutate this specimen
        ## NEAT has 3 possible results
        ## - Adding a Node -> Split an existing Connection
        ## - Adding a Connection -> Adding a connection between existing nodes
        ## - Changing bias / weights -> Editing existing nodes/connections

        if r() < Config.AddConProbability:
            self.addConnectionMutate()
        if r() < Config.AddNodeProbability:
            self.addNodeMutate()
        else:
            for connection in self.connectionGenes:
                connection.mutate()
            for node in self.nodeGenes:
                node.mutate()

    def addNodeMutate(self):
        r = random.random
        ##Split a connection into two separate connections
        con = random.choice(self.connectionGenes)
        con.split()

    def addConnectionMutate(self):
        NonSensorIndex = 0
        InputNodeIndex = 0
        OutputNodeIndex = 0

        i = 0
        for node in self.nodeGenes:
            if node.Type() != "SENSOR":
                NonSensorIndex = i
                break
            i += 1
        if NonSensorIndex > 1:
            InputNode = self.nodeGenes[random.randrange(0,NonSensorIndex - 1)]
        else:
            InputNode = self.nodeGenes[0]


        OutputNode = self.nodeGenes[random.randrange(NonSensorIndex,len(self.nodeGenes))]
        result = ConnectionGene.ConnectionGene(1,InputNode,OutputNode,1,1)
        self.connectionGenes.append(result)

    def MergeGenome(self,genome):
        pass