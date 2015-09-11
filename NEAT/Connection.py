__author__ = 'DavidS'



class Connection:
   def __init__(self,inputNode, outputNode, weight):
        self.input = inputNode
        self.output = outputNode
        self.weight = weight

    def incomming(self):
        return self.input.output()*self.weight

