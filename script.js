const target=new Date('2026-07-01T19:15:00');
function update(){
const d=target-new Date();
if(d<0)return;
const days=Math.floor(d/86400000);
const hrs=Math.floor(d%86400000/3600000);
const mins=Math.floor(d%3600000/60000);
const secs=Math.floor(d%60000/1000);
document.getElementById('countdown').innerHTML=`${days} Days ${hrs} Hours ${mins} Minutes ${secs} Seconds`;
}
setInterval(update,1000);update();