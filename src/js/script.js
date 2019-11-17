window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors =[
        "#e53935",
        "#8e24aa",
        "#303f9f",
        "#0097a7",
        "#c0ca33",
        "#ef6c00"
    ];
    //itero sobre los pads
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime =0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    //create bubbles
    const createBubbles = (index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };    
});