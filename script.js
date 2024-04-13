function updateClock() {
    var now = new Date(); 
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.toDateString();

    var meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes; 
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    var dateTimeString = '<div class="date">' + date + '</div>' + timeString;    document.getElementById("clock").innerHTML = dateTimeString;
}

setInterval(updateClock, 1000);
updateClock(); 
