function updateClock(){
    let time = new Date();

    // Format time
    let hour = String(time.getHours()-12).padStart(2,'0');
    let min = String(time.getMinutes()).padStart(2,'0');
    let sec = String(time.getSeconds()).padStart(2,'0');
    document.getElementById('time').textContent = `${hour}:${min}:${sec}`;

    // Format date
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[time.getDay()];
    let date = time.getDate();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[time.getMonth()];
    let year = time.getFullYear();
    document.getElementById('date').textContent = `${day}, ${month} ${date}, ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
