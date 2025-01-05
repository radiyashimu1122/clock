function updateClock() {
 const timeElement = document.getElementById('time');
 const dateElement = document.getElementById('date');
 const now = new Date();


 const hours = String(now.getHours()).padStart(2, '0');
 const minutes = String(now.getMinutes()).padStart(2, '0');
 const seconds = String(now.getSeconds()).padStart(2, '0');
 timeElement.textContent = `${hours}:${minutes}:${seconds}`;


 const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 const day = daysOfWeek[now.getDay()];
 const date = now.getDate();
 const month = monthsOfYear[now.getMonth()];
 const year = now.getFullYear();

 dateElement.textContent = `${day}, ${month} ${date}, ${year}`;
}


setInterval(updateClock, 1000);


updateClock();
