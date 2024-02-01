export function SmoothHorizontalScrolling(e, time, amount, start) {
    var eAmt = amount / 100;
    var curTime = 0;
    var scrollCounter = 0;
    const Y = window.scrollY;
    while (curTime <= time){
        window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start, Y);
        curTime += time / 100;
        scrollCounter++;
    }
    window.scrollTo(0, Y);
}

function SHS_B(e, SC, eAmt, start, Y) {
    e.scrollLeft = eAmt * SC * start;
}

export function randomRgbaColor(opacity){
    const r = Math.round(Math.random()*256);
    const g = Math.round(Math.random()*256);
    const b = Math.round(Math.random()*256);
    let color = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    return color;
}