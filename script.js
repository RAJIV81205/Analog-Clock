setInterval(() => {
    d = new Date() ;
    hrs = d.getHours();
    mins = d.getMinutes();
    secs = d.getSeconds();

    hrotation = 30*hrs +  mins/2;
    mrotation = 6*mins;
    srotation = 6*secs;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    console.log(hrotation , mrotation , srotation)

    if (hrs<10){
        document.getElementById("hr").innerText = 0 +`${hrs}`;

    }
    else{
        document.getElementById("hr").innerText = `${hrs}`;
    }

    if(mins<10){
        document.getElementById("min").innerText = 0+`${mins}`;
    }
    else{
        document.getElementById("min").innerText = `${mins}`;
    }
    if(secs<10){
        document.getElementById("sec").innerText = 0+`${secs}`;
    }
    else{
        document.getElementById("sec").innerText = `${secs}`;
    }


}, 1000)









