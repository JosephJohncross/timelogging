export function renderElapsedString(timeInMiliseconds) {
    let sec = Math.floor(timeInMiliseconds/1000) 
    let min = Math.floor(sec/60)
    let hrs = Math.floor(min/60)

    sec = sec % 60;
    min = min % 60;
    hrs = hrs % 24;

    return `${padTo2Digits(hrs)}: ${padTo2Digits(min)}:${padTo2Digits(hrs)}`
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}