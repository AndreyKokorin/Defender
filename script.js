const automobile = document.querySelector(".defender");
const startbutton = document.querySelector(".clickButton");
const fingers = document.querySelector(".fingers");
let counterAdvanteges = 0; 
let starttouch;
let countPhoto = 1;
let imageCache = {};


for (let i = 1; i <= 37; i++) {
    const img = new Image();
    img.src = `img/Slider${i}.png`;
    imageCache[i] = img;
  }

moveListener = (event) => {
    let movetach;
    if (event.clientX !== undefined) {
        movetach = event.clientX;
      } else if (event.touches.length > 0) {
        movetach = event.touches[0].clientX;
      }
    let howMoved = Math.abs(movetach - starttouch);

    if(howMoved > 5){
        if(movetach > starttouch){
            countPhoto != 37 ? countPhoto++ : countPhoto = 1;
            automobile.innerHTML = `<img src="${imageCache[countPhoto].src}" alt="" draggable="false" class="image">`;
            starttouch = movetach;
            showAdvantages(countPhoto);
        }
        else if(movetach < starttouch){
            countPhoto > 1 ? countPhoto-- :  countPhoto = 37;
            automobile.innerHTML = `<img src="${imageCache[countPhoto].src}" alt="" draggable="false" class="image">`;
            starttouch = movetach;
            showAdvantages(countPhoto);
        }
    }

    fingers.classList.add("dnone")


}

function showAdvantages(frame){
    switch(frame){
        case 4: 
        case 8: 
        case 10: 
        case 17: 
        case 23: 
        case 28: 
        case 30:
        case 34:
            const showblock = document.querySelector(`.advantages${frame}`);
            showblock.classList.remove("dnone");
            automobile.removeEventListener("mousemove", moveListener);
            automobile.removeEventListener("mouseup", mouseUpFunc);
            automobile.removeEventListener("mousedown", mouseDownFunc);
            automobile.removeEventListener("touchmove", moveListener);
            automobile.removeEventListener("touchend", mouseUpFunc);
            automobile.removeEventListener("touchstart", mouseDownFunc);
            setTimeout(() => {
                showblock.classList.add("opacity0");
                showblock.remove();
                automobile.addEventListener("mousemove", moveListener);
            automobile.addEventListener("mouseup", mouseUpFunc);
            automobile.addEventListener("mousedown", mouseDownFunc);
            automobile.addEventListener("touchmove", moveListener);
            automobile.addEventListener("touchend", mouseUpFunc);
            automobile.addEventListener("touchstart", mouseDownFunc);
                counterAdvanteges++;
                if(frame === 34){
                    const buttonMore = document.querySelector(".buttonMore");
                    buttonMore.classList.remove("dnone");
                }
            }, 5000)
        break;
        
    }

}



function mouseDownFunc(event){
    if (event.clientX !== undefined) {
        starttouch = event.clientX;
      } else if (event.touches.length > 0) {
        starttouch = event.touches[0].clientX;
      }
    automobile.addEventListener("mousemove", moveListener);
    automobile.addEventListener("touchmove", moveListener);
    console.log("Добавлена mousemove")
}

function mouseUpFunc(event){
    automobile.removeEventListener("mousemove", moveListener);
    automobile.removeEventListener("touchmove", moveListener);
    console.log("Удолена")
}


startbutton.addEventListener("click", (event) => {
    automobile.addEventListener("mouseup", mouseUpFunc);
    automobile.addEventListener("mousedown", mouseDownFunc);
    automobile.addEventListener("touchend", mouseUpFunc);
    automobile.addEventListener("touchstart", mouseDownFunc);
    startbutton.classList.add("dnone");
    fingers.classList.remove("dnone")
})
