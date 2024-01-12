function alertFunction() {
    alert("YAY! YO");
}
const btn = document.querySelector('#btn')
  
// METHOD 3
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
  console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

//yo