import { v4 as uuidv4 } from "uuid";


export function renderElapsedString(timeInMiliseconds, runningState) {
    let timeSeconds
    if (runningState === null){
        timeSeconds = timeInMiliseconds;
    }
    else{
        timeSeconds = timeInMiliseconds + (Date.now() - runningState);
    }

    let sec = Math.floor(timeSeconds/1000) 
    let min = Math.floor(sec/60)
    let hrs = Math.floor(min/60)

    sec = sec % 60;
    min = min % 60;
    hrs = hrs % 24;

    return `${padTo2Digits(hrs)}: ${padTo2Digits(min)}:${padTo2Digits(sec)}`
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function newTimer(timer) {
    const {title, project} = timer
    return {
        title: title,
        project: project,
        id: uuidv4(),
        elapsed: 0,
        runningSince: null,
    };
}

