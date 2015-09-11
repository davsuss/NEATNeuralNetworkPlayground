__author__ = 'DavidS'



class Node:

    def __init__(self, inputs, bias,layerId):

        self.hasFired = False
        self.output = 1

    def addinputLink(self, link):
        inputs += link;


    def getOutput(self, link):
        assert(self.hasFired)
        return self.output

    def Fire(self):
        ##Calculate Output#
        result = 0

        for i in inputs:
            result += i.getOutput()

