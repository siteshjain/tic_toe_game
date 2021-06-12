const options=document.querySelector('.options');
const gameOverElement=document.querySelector(".gameover");
const computerBtn=options.querySelector('.computer');
const friendBtn=options.querySelector('.friend');
const xBtn=options.querySelector('.x');
const oBtn=options.querySelector('.o');
const playBtn=options.querySelector('.play');

let OPPONENT;
const player=new Object;


const switchActive=(off,on)=>{
    off.classList.remove("active");
    on.classList.add("active");
}

computerBtn.addEventListener("click",function(){
    OPPONENT="computer";

    switchActive(friendBtn,computerBtn);

})
friendBtn.addEventListener("click",function(){
    OPPONENT="friend";

    switchActive(computerBtn,friendBtn);
    
})
xBtn.addEventListener("click",function(){
    player.man="X"
    player.computer="O"
    player.friend="O"

    switchActive(oBtn,xBtn);
    
})
oBtn.addEventListener("click",function(){
    player.man="O"
    player.computer="X"
    player.friend="X"

    switchActive(xBtn,oBtn);
    
})
playBtn.addEventListener("click",function(){
    if(!OPPONENT){
        computerBtn.style.backgroundColor="red";
        friendBtn.style.backgroundColor="red";
        return 
    }
    if(!player.man){
        xBtn.style.backgroundColor="red";
        oBtn.style.backgroundColor="red";
        return 
    }
    init(player,OPPONENT);
    options.classList.add('hide');
    
})

