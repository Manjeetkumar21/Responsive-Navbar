const toggleBtn = document.querySelector('.nav-toggle')
const navBar = document.querySelector('.right')

toggleBtn.addEventListener("click", function(){
    navBar.classList.toggle('active')
})