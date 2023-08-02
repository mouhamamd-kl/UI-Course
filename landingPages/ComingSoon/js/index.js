var countDownDate = new Date();
countDownDate = new Date(countDownDate.getFullYear() + 1, countDownDate.getMonth() - 6, 1);
var x = setInterval(function () {
    var now = new Date();
    var diff=countDownDate-now;
    var months = Math.floor(diff/(1000*60*60*24*30));
    var days = Math.floor(diff%(1000*60*60*24*30)/(1000*60*60*24));
    var hours = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(diff%(1000*60*60)/(1000*60));
    var seconds=Math.floor(diff%(1000*60)/(1000));
    document.getElementById("months").innerText=months.toString();
    document.getElementById("days").innerText=days.toString();
    document.getElementById("hours").innerText=hours.toString();
    document.getElementById("minutes").innerText=minutes.toString();
    document.getElementById("seconds").innerText=seconds.toString();
}, 1000);

// function getyearDiff(d1, d2) {
//     if (d1 > d2) {
//         var diff = d1.getFullYear() - d2.getFullYear();
//         return diff;
//     }
//     var diff = d2.getFullYear() - d1.getFullYear();
//     return diff;
// }
// function getMonthDiff(d1, d2) {
//     var diff = getyearDiff(d1,d2)*12;
//     return diff;
// }
// function getDaysDiff(d1, d2) {
//     var diff = getMonthDiff(d1,d2)*30;
//     return diff;
// }
// function getHours(d1, d2) {
//     var diff = getDaysDiff(d1,d2)*24;
//     return diff;
// }
// function getMinutes(d1,d2){
// var diff=getDaysDiff(d1,d2)*60;
// return diff;
// }
// function getSeconds(d1,d2) {  
//     var diff=getMinutes(d1,d2)*60;
//     return diff;
// }
