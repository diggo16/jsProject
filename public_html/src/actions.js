module.exports = {
    /*
     *	A method that sends "MESSAGE_ADD" and parameters to messagelistreducer.
     *	Parameters: String text. The message that shall be added.
     *				String author. The name of the author.
     */
    addmessage: function (text, author) {

        var now = new Date();
        var time = [now.getHours(), now.getMinutes()];
        var dates = [now.getFullYear(), now.getMonth() + 1, now.getDay()];

        [time, dates].forEach(function (array) {
            array.forEach(function (value, index) {
                if (value < 10) {
                    array[index] = "0" + value;
                }
            })
        });

        var timeString = time.join(":");
        var dateString = dates.join("-");

        return {type: 'MESSAGE_ADD', text: text, time: dateString + " " + timeString, author: author};
    },
    changeSettings: function (username) {
        return {type: 'SETTINGS_CHANGE', author: username};
    }
};