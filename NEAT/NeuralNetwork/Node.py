__author__ = 'DavidS'

from Config import Config

class Node:

    def __init__(self, bias,layerId):

        self.hasFired = False
        self.output = 1
        self.inputs = []

    def addInputLink(self, link):
        self.inputs.append(link)

    def hasFired(self):
        return self.hasFired

    def reset(self):
        self.hasFired = False

    def getOutput(self):
        if self.hasFired:
            return self.output
        else:
            return self.fire()
    def fire(self):
        ##Calculate Output#
        result = 0

        for i in self.inputs:
            result += i.incoming()

        return self.activationFunction(result)

    def activationFunction(self, value):
        if Config.Activation == "THRESHOLD":
            if value > Config.ACTIVATION_THRESHOLD:
                return 1
            else:
                return 0
        else:
            raise AttributeError