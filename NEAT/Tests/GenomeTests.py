__author__ = 'DavidS'
import NeuralNetwork
import BasicNeat
import unittest

class GenomeTests(unittest.TestCase):
    def testMutateAddConnection(self):

        ##Setting to test Iteration
        NeuralNetwork.Config.ACTIVATION_THRESHOLD = 1


        ##Creating a Genome with 2 Nodes
        connectionGenes = []

        nodeGenes = []
        Sensor = BasicNeat.NodeGene(1,1,1,"SENSOR")
        Hidden = BasicNeat.NodeGene(2,1,1,"HIDDEN")

        nodeGenes.append(Sensor)
        nodeGenes.append(Hidden)

        genes = BasicNeat.Genome([],nodeGenes)

        genes.addConnectionMutate()

        connections = genes.getConnections()
        assert(len(connections) == 1)
        assert(connections[0].getInNode() == Sensor)
        assert(connections[0].getOutNode() == Hidden)


    def testMutateAddNode(self):
        pass



if __name__ == '__main__':
    unittest.main()
