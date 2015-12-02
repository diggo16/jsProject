
var messages = ["hello","world"];	// the initial object
var times = ["2015-11-01", "2015-11-03"];
var authors = ["Daniel", "David"];
// Initialize the states
module.exports = function(){
    return {
        message: {
            body: messages,
			time: times,
			author: authors
        }
    }
};