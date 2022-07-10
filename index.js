// ac - s
analogClock = setInterval(()=>{
    const secondsHand = document.querySelector('.acl-seconds');
    const minutesHand = document.querySelector('.acl-minutes');
    const hoursHand = document.querySelector('.acl-hours');

    const time = new Date();
    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hour = time.getHours();

    const degS = ((sec/60)*360);
    const degM = ((min/60)*360) + ((sec/60)*6);
    const degH = ((hour/12)*360) + ((min/60)*30);

    secondsHand.style.transform = `rotate(${degS}deg)`;
    minutesHand.style.transform = `rotate(${degM}deg)`;
    hoursHand.style.transform = `rotate(${degH}deg)`;
}, 1000);
// ac - e
