
var messages = ["hello","world"];	// the initial object
// Initialize the states
module.exports = function(){
    return {
        message: {
            body: messages
        }
    }
};