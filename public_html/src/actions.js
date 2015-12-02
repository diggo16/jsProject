module.exports = {
	/*
	*	A method that sends "MESSAGE_ADD" and parameters to messagelistreducer.
	*	Parameters: String text. The message that shall be added.
	*				String author. The name of the author.
	*/
	addmessage: function(text, author){
		var date = new Date();
		var year = date.getFullYear().toString();
		year = year[2] + year[3];
		var month = date.getMonth();
		month++;
		var day = date.getDay();
		day++;
		if(day < 10)
		{
			day = day.toString();
			day = "0" + day;
		}
		var hours = date.getHours();
		if(hours < 10)
		{
			hours = hours.toString();
			hours = "0" + hours;
		}
		var minutes = date.getMinutes();
		if(minutes < 10)
		{
			minutes = minutes.toString();
			minutes = "0" + minutes;
		}
		var hyphen = "-";
		time =  hours + ":" + minutes  + " " + day + "/" + month + hyphen + year;
		
		params = [text,time,author]
        return {type: 'MESSAGE_ADD', params};
    }
};