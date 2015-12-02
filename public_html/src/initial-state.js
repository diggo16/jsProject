
var messages = ["hello","world"];	// the initial object
var times = ["16:00 04/10-15", "16:59 04/11-15"];
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