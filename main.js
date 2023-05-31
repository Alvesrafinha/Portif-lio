const toggleBtn = document.getElementById("change")
const body = document.body
const nav = document.getElementById("navbar")

toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
    nav.classList.toggle("dark-mode-nav")
})

const change = document.getElementById('change')

change.addEventListener('changer', () => {
    document.body.classList.toggle('dark')
})