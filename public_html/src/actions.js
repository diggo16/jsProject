module.exports = {
	addmessage: function(text){
        return {type: 'MESSAGE_CHANGE', text};
    }
};