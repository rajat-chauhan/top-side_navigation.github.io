const openBtn = document.querySelector(".openSideNavBtn");
const closeBtn = document.querySelector(".closeSideNavBtn");

const wrap = document.querySelectorAll(".side-nav");

openBtn.addEventListener("click", function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.add("visible");
    }
})

closeBtn.addEventListener("click", function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.remove("visible");
    }
})


// const wrap = document.querySelector(".side-nav");

// openBtn.addEventListener("click", function () {
//     wrap.classList.add("visible");
// })

// closeBtn.addEventListener("click", function () {
//     wrap.classList.remove("visible");
// })