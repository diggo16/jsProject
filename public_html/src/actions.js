module.exports = {
	/*
	*	A method that sends "MESSAGE_ADD" and text parameter to messagelistreducer.
	*	Parameter: String text. The message that shall be added.
	*/
	addmessage: function(text){
        return {type: 'MESSAGE_ADD', text};
    }
};