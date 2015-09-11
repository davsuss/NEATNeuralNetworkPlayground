__author__ = 'DavidS'



class NodeGene:
    def __init__(self, innovationId, bias , response, activationType , nodeType ):
        self.innovationId = innovationId
        self.bias = bias
        self.response = response
        self.activationType = activationType
        self.nodeType = nodeType

        id = property(lambda self: self._id)
        type = property(lambda self: self._type)
        bias = property(lambda self: self._bias)
        response = property(lambda self: self._response)
        activation_type = property(lambda self: self._activation_type)


    def Mutate_Bias(self):
        self.bias = 1

    def MutateResponse(self):
        self.response = response