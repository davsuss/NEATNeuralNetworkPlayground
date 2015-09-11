__author__ = 'DavidS'


## from Paper (STANLEY)
##Each genome includes a list of connection
##genes, each of which refers to two node genes being connected ##

##Handles mutations for the genomes



class Genome:

    def __init__(self,connectionGenes, nodeGenes):
        self.connectionGenes = connectionGenes
        self.nodeGenes = nodeGenes
