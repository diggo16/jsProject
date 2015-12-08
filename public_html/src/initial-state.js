
var messages = [];	// the initial object
var times = [];
var authors = [];

function getData()
{
	messages = ["hello", "world"];
	times = ["16:00 04/10-15", "16:59 04/11-15"];
	authors = ["Daniel", "David"];
}

// Initialize the states
module.exports = function(){
	getData();
    return {
        message: {
            body: messages,
			time: times,
			author: authors
        },
		settings: {
			author: "Anonymous"
		}
    }
};