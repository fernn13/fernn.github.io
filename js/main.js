// toggle & Nav //
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        burger.classList.toggle("toggle-burger");
        navLists.classList.toggle("nav-active");
    })
};

navSlide();

let text = document.getElementById('text');
let shape1 = document.getElementById('shape1');
let shape2 = document.getElementById('shape2');
let shape3 = document.getElementById('shape3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    shape1.style.left = value * -1.2 + 'px';
    shape1.style.marginTop = value * -1.2 + 'px';
    shape2.style.right = value * -1 + 'px';
    shape2.style.marginBottom = value * 1 + 'px';
});

//form daftar//
const scriptURL = 'https://script.google.com/macros/s/AKfycbydhFAs-AR0Qwz5DaLVTim2ksO-kV9bNQzra6-1b8aj34yVUTeNMMuTaVmXInqUkqYzAw/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        success.innerHTML="Successfully Submit"

        setTimeout(function()
        {
            success.innerHTML="";
        }, 5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})