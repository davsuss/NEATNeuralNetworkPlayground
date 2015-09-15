__author__ = 'DavidS'


class GenericConnection:
    def incoming(self):
        raise NotImplementedError

class ConstantConnection(GenericConnection):
    def __init__(self,outputNode,value):
        self.value = value
        self.outputNode = outputNode
        self.outputNode.addInputLink(self)
    def incoming(self):
        return self.value
    def setInput(self, value):
        self.value = value

class Connection(GenericConnection):
    def __init__(self,inputNode, outputNode, weight):
        self.input = inputNode
        self.output = outputNode
        self.weight = weight
        self.output.addInputLink(self)

    def incoming(self):
      return self.input.getOutput()*self.weight
