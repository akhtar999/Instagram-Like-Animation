var imgContainer = document.querySelector("#container")
var icon = document.querySelector("i")

imgContainer.addEventListener("dblclick", ()=>{
    icon.style.transform="translate(-50%,-50%) scale(1)"
    icon.style.opacity="0.8"
    setTimeout(()=>{
        // icon.style.transform="translate(-50%,-50%) scale(0)"
        icon.style.opacity="0"
    },1000)

    setTimeout(()=>{
        icon.style.transform="translate(-50%,-50%) scale(0)"
    },2000)
})

// setTimeout(()=>{
//     console.log("hello");
// }, 3000)