const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const txt = document.querySelector(".txt");
function time(){
     let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    if(hrs >12){
        hrs = hrs-12;
        txt.innerHTML = "PM"
    }
    hr.innerHTML = hrs<10?"0"+hrs:hrs;
    min.innerHTML = mins<10?"0"+mins:mins;
    sec.innerHTML = secs<10?"0"+secs:secs;
    
}
setInterval(time,1000)

