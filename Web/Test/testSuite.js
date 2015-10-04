/*NameSpace Protection */
var testSuite = testSuite || {};

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

var testSuite = function (tableResultId){
    this.tableId = tableResultId;
    var self = this;
    /*Should Change to promote backwards compatibility*/
    QUnit.testDone((details) => self.AddResult(details));

};


testSuite.prototype.AddResult = function(result){
    //  console.log(this.tableId);
      var row = $("<tr><td>{0}</td><td>{1}</td><td>{2}</td></tr>".format(result.name,Boolean(result.failed),result.runtime));

     $("{0} > tbody".format('#' + this.tableId)).append(row);

};
