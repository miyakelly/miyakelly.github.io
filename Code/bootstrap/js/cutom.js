let dateEl = document.querySelector("#date");
let today = new Date();
let dateFormatted = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
dateEl.textContent = 'Today is ' + dateFormatted;