module.exports = {
	/*
	*	A method that sends "MESSAGE_ADD" and parameters to messagelistreducer.
	*	Parameters: String text. The message that shall be added.
	*				String author. The name of the author.
	*/
	addmessage: function(text,author){

		var MyDate = new Date();

		var MyDateString = ('0' + MyDate.getHours()).slice(-2) + ":"
					     + ('0' + MyDate.getMinutes()).slice(-2) + " "
					 	 + ('0' + MyDate.getDate()).slice(-2) + '/'
		             	 + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
		            	 + MyDate.getFullYear().toString().substring(2,4);
        var time = MyDateString;

        return {type: 'MESSAGE_ADD', text:text,time:time,author:author};
    },
	changeSettings: function(username) {
		return {type: 'SETTINGS_CHANGE', author: username};
	}
};