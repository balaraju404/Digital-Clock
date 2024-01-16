function currentTime() {
    var date = new Date();
    // console.log(date)

    var day = date.getDay();
    var dd = date.getDate();
    var mo = date.getMonth();
    var yy = date.getFullYear();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var ss = date.getSeconds();
    var am_pm = "AM"

    // day=6
    var bgImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"]
    bgImg = bgImg[day]

    document.body.style.backgroundImage = `url(./img/${bgImg})`;

    var days = ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"]
    day = days[day]

    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    mo = month[mo]

    if (hr > 12) {
        am_pm = "PM"
    }

    if (hr > 12) {
        hr = hr - 12
    }
    if (hr < 10) {
        hr = `0${hr}`
    }
    if (mn < 10) {
        mn = `0${mn}`
    }

    if (ss < 10) {
        ss = `0${ss}`
    }
    document.getElementById("day").innerHTML = `${day}`
    document.getElementById("time").innerHTML = `${hr} : ${mn} : ${am_pm}`;
    document.getElementById("date").innerHTML = `${dd}  ${mo} ${yy}`;
    document.getElementById("seconds").innerHTML = `${ss}`;



    // console.log(day, dd, mo, yy, hr, mn, ss, am_pm)
    presentTime = hr + " " + mn + " " + am_pm;

    setTimeout(currentTime, 1000)
}
currentTime();

document.querySelector("span").addEventListener("click", function () {
    document.querySelector("#alarmContainer").style.display = `none`;
})
document.querySelector("i").addEventListener("click", function () {
    document.querySelector("#alarmContainer").style.display = `flex`;
})

var hourValue = 0;
var minutesValue = 0;
var am_pmValue = "AM";
for (i = 0; i < 12; i++) {
    var button = document.createElement("button")
    button.value = i + 1
    button.innerHTML = i + 1
    var hours = document.querySelector("#hours")
    hours.appendChild(button)
    button.addEventListener("click", function () {
        hourValue = this.value
        if (hourValue<10){
            hourValue="0"+hourValue;
        }
        // alarm()
    })
}

for (i = 0; i < 60; i++) {
    var button = document.createElement("button")
    button.value = i + 1
    button.innerHTML = i
    var minutes = document.querySelector("#minutes")
    minutes.appendChild(button)
    button.addEventListener("click", function () {
        minutesValue = this.value - 1
        if (minutesValue<10){
            minutesValue="0"+minutesValue;
        }
        // alarm()
    })
}

function fun(value) {
    am_pmValue = value
    alarm()
}

var aud=new Audio();
aud.src=`./alarm.wav`

function alarm() {
    alarmTime = `${hourValue} ${minutesValue} ${am_pmValue}`
    // console.log(alarmTime)
    // console.log(presentTime)
    if(alarmTime==presentTime){
        aud.play()
        console.log("Alarm")
    }

    setTimeout(alarm,1000)
}

