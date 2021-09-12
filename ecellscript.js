let rocket = document.getElementById("rocket");
let panels = document.querySelectorAll(".event");
let exp = document.querySelectorAll(".exp");
let register = document.querySelectorAll(".r");
let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let planet1 = document.getElementById("p1");
let planet2 = document.getElementById("p2");
let planet3 = document.getElementById("p3");
let planet4 = document.getElementById("p4");
console.log(panels);

window.addEventListener('scroll', function(){
    let val = window.scrollY;
    rocket.style.top = 200 + val*-0.2 + '%';
    planet1.style.top = 800 + val*-0.2 + '%';
    planet2.style.top = 100 + val*-0.2 + '%';
    planet3.style.top =   val*-0.2 + '%';
    planet4.style.top = 600 + val*-0.2 + '%';
    star1.style.top = val*0.1 + '%';
    star2.style.top = val*0.09 + '%';
    star3.style.top = val*0.08 + '%';
  

});

for(let i =0; i<3;i++){

panels[i].addEventListener('click',function(){
    exp[i].style.display = 'initial';
})
register[i].addEventListener('click',function(){
    alert("successfully registered for the event!");
    panels[i].style.backgroundColor = 'green';
    register[i].innerHTML = "Registered!";
    exp[i].style.display = 'none';
})
}