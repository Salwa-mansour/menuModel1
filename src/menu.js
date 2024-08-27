function animation(name ,initClass,PerformClass){
    return{
        name,
        initClass,
        PerformClass
    }
}

const fade = animation('fade','fade-init','animation-fade');
const sideSwap = animation('side-swap','side-swap-init','animation-side-swap');
const dropDown = animation('drop-down','drop-down-init','animation-drop-down')
function menu(container,animation =fade,btn =""){
    let isOpen = false;
    container.classList.add(`${animation.initClass}`)
    btn.addEventListener("click",()=>{
      
        if(isOpen){
            reset();
        }else{
            show();
        }
        isOpen = !isOpen
    })


    function show(){
        container.classList.add(`${animation.PerformClass}`)
        // container.classList.remove(`${animation.initClass}`)
    }
    function reset(){
        container.classList.remove(`${animation.PerformClass}`)
        // container.classList.add(`${animation.initClass}`)
     
    }

}

export {
    fade,
    sideSwap,
    dropDown,
    menu
}