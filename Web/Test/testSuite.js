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
      var row = $("<tr><td>{0}</td><td>{1}/{2}</td><td>{3}</td></tr>".format(result.name,result.passed,result.total,result.runtime));

     $("{0} > tbody".format('#' + this.tableId)).append(row);

};
