var timer=60;
var score=0;
var hitrn=0;
var timerinterval
function increaseScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent=score;
}
function getNewHit(){
    hitrn =  Math.floor(Math.random()*11);
    document.querySelector("#hitVal").textContent=hitrn;
}
function makeBubble(){
    var clutter = "";

for (var i = 1; i <= 126; i++) {
    var x = Math.floor(Math.random()*11);
    clutter += ` <div class="bubble">${x}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer()
{
    timerinterval = setInterval(function (){
    if(timer>0){
        timer--;
        document.querySelector("#Timer").textContent=timer;
    }
    else{
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1`
        clearInterval(timerinterval);
    }
    },1000)
}
document.querySelector("#pbtm")
.addEventListener("click",function(event){
    console.log(Number(event.target.textContent)); //Number is used for typcasting without number it will give string as output
    var clickNum = Number(event.target.textContent);
    if(clickNum==hitrn)
    {
        increaseScore();
        makeBubble();
        getNewHit()
    }

});

document.querySelector(".Restart").addEventListener("click", function () {
    makeBubble();
    clearInterval(timerinterval);
    
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    timer = 60;
    runTimer();
    getNewHit();
});

document.querySelector(".Start").addEventListener("click",function(){
        clearInterval(timerinterval);
        runTimer();
        getNewHit();
})

makeBubble();
