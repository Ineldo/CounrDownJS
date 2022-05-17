const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minutesEl= document.getElementById('minutes');
const secondsEl= document.getElementById('seconds');

const newYears = '1 Jan 2022'

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const Totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(Totalseconds / 3600/24);
    const hours = Math.floor(Totalseconds /360) %24;
    const minutes = Math.floor(Totalseconds /60) % 60;
    const seconds = Math.floor(Totalseconds)%60;

    daysEl.innerHTML= formatTime(days);
    hoursEl.innerHTML= formatTime(hours);
    minutesEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);
}
function formatTime(time){
     return time < 10 ?(`0${time}`): time;
}
//initial Call
countDown();
setInterval(countDown, 1000);
/* o que nprende:
    - pega elemento na div pa se ID ku .getElementByID
    -faze calculo de contagem regressiva pa data
    - faze troca de dados dento de <p> ku innerHTML
 */