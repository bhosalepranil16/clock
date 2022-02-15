console.log('in chat.js');

{
    var displayTime = function() {
        var date,hrs,min,sec;
        date = new Date();
        hrs = formated(date.getHours());
        min = formated(date.getMinutes());
        sec = formated(date.getSeconds());
        document.querySelector('.clock-body').textContent = hrs + ' : ' + min + ' : ' + sec;
        setTimeout(displayTime,1000);
        
    }
    var displayDate = function(){
        var date,months,year,month,day,d,type;
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        date = new Date();
        day = formated(date.getDate());
        month = months[date.getMonth()];
        year = date.getFullYear();
        if(date.getDate() === 1)
            type = 'st';
        else if(date.getDate() === 2)
            type = 'nd';
        else if(date.getDate() === 3)
            type = 'rd';
        else
            type = 'th';
        document.querySelector('.date-body').textContent = day + type +' ' + month + ' ' + year; 
        d = date.getDay();
        document.querySelector('#day-' + d).classList.add('hi');
    }
    var formated = function(el) {
        if(el < 10)
            return '0' + el;
        else
            return el;
    }
    displayTime();
    displayDate();
    var counter = function() {
        var arr = [0,0,0];
        
    }
}

