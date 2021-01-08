
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeegres = (seconds / 60) * 360 + 90;
    const minutesDeegres = (minutes / 60) * 360 + 90;
    const hoursDeegres = (hours / 12) * 360 + 90;
    console.log(hours + ' ' + minutes + ' ' + seconds);
    secondHand.style.transform = `rotate(${secondsDeegres}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeegres}deg)`;
    hourHand.style.transform = `rotate(${hoursDeegres}deg)`;
}

setInterval(setDate, 1000);