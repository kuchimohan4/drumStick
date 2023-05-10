
for(let i of document.querySelectorAll('.drum'))
    i.addEventListener('click', function(){
        buttonAnimation(this.innerHTML);
        makesound(this.innerHTML);

    });


document.addEventListener('keypress',function(event){
    buttonAnimation(event.key);
    makesound(event.key);
})
    

function makesound(key){
        let audio1=new Audio("sounds/crash.mp3");
        let audio2=new Audio("sounds/kick-bass.mp3");
        let audio3=new Audio("sounds/snare.mp3");
        let audio4=new Audio("sounds/tom-1.mp3");
        let audio5=new Audio("sounds/tom-2.mp3");
        let audio6=new Audio("sounds/tom-3.mp3");
        let audio7=new Audio("sounds/tom-4.mp3");
        switch (key) {
            case 'w':
                audio1.play();
                break;
            case 'a':
                audio2.play();
                break;  
            case 's':
                audio3.play();
                break;
            case 'd':
                audio4.play();
                break;
            case 'j':
                 audio5.play();
                break;            
            case 'k':
                audio6.play();
                break; 
            case 'l':
                audio7.play();
                break; 
            default:
                break;
        } 

 };


 function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add('pressed')
    setTimeout(function(){
        activebutton.classList.remove('pressed') 
    },200);

 }
    
    