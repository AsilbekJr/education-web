const navLink = document.querySelectorAll('.nav-link');
const toggle = document.querySelector('.toggle');
const titleInfo = document.querySelectorAll('.title_info');
const textInfo = document.querySelectorAll('.text_info');
const secItem = document.querySelectorAll('.select-item');
const infoItem = document.querySelectorAll('.info-item');
const infoItems = document.querySelector('.info-items');
const dots = document.querySelectorAll('.dot');
/* toggle.addEventListener('click',() => {
    document.querySelector('.hide-nav-item').classList.add('active')
}) */
for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click',() => {
       navLink.forEach(nav => nav.classList.remove('active'));
       navLink[i].classList.add('active');
       if(navLink[i].classList.contains('toggle')){
        document.querySelector('.hide-nav-item').classList.add('active');
       }
       else{
        document.querySelector('.hide-nav-item').classList.remove('active');
       }
    })
}

for(let e = 0; e < secItem.length; e++){
    secItem[e].addEventListener('click', () => {
        if(infoItem[e].id === "best"){
           infoItems.style.transform = "translateX(0)"
        }
        else if(infoItem[e].id === "top"){
            infoItems.style.transform = "translateX(-33.33%)"
        }
        else if(infoItem[e].id === "quality"){
            infoItems.style.transform = "translateX(-66.66%)"
        }
        secItem.forEach(item => {
            item.classList.remove('active')
        });
        secItem[e].classList.add('active')
    })
}

for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', () => {
        dots.forEach( dot => {
            dot.classList.remove('active');
        })
        dots[i].classList.add('active')
    })
}

 const container = document.querySelector('.cards');
const controls = document.querySelector('.nav-dots')
const allBox = container.children;
const containerWidth = container.offsetWidth;
const margin = 30;
let items = 0;
let totalItems = 0;
let jumbSlideWidth = 0;



const responsive = [
    {breakPoint:{width:0, item:1}},
    {breakPoint:{width:400, item:1}},
    {breakPoint:{width:600,item:2}},
    {breakPoint:{width:1000,item:5}}
]
function load(){
    for(let i = 0; i<responsive.length; i++){
        if(window.innerWidth > responsive[i].breakPoint.width){
            items = responsive[i].breakPoint.item
        }
    }
    start()
}


function start(){
    let totlalItemWidth = 0;
    for(let i = 0; i < allBox.length; i++){
        allBox[i].style.width = (containerWidth / items - margin) +'px';
        allBox[i].style.margin = (margin / 2) +'px';
        totlalItemWidth +=containerWidth / items;
        totalItems ++;
    }
    // console.log(totlalItemWidth);
    container.style.width = totlalItemWidth + 'px';
let allSlides = Math.ceil(totalItems / items);
let ul = document.createElement("ul");

for(let i = 1; i <= allSlides; i++){
    let li = document.createElement("li");
    li.id = i;
    li.setAttribute("onclick","controlSlides(this)");
    ul.appendChild(li);
    if(i == 1){
       li.className = 'active'; 
    }
}
controls.appendChild(ul)
}

function controlSlides(ele){
  const ul = controls.children;

  const li = ul[0].children;
  let active;


  for(let i = 0; i < li.length; i++){
      if(li[i].className == "active"){
          active = i;
          li[i].className = "";
      }
  }
ele.className = "active"
let numb = (ele.id - 1) - active;
jumbSlideWidth = jumbSlideWidth +(containerWidth * numb);
container.style.marginLeft =- jumbSlideWidth + 'px';
}

window.sc = load();


/* Countdown */
const countdown = () => {
    const countDate = new Date("March 23,2022 00:00:00").getTime();
    const now = new Date().getTime();
    
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/ hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};
setInterval(countdown,1000);



/* video section */


const vid = document.getElementById('vid');
const btn = document.querySelector('#demo');
btn.innerHTML = "<img src = 'img/play.png'/>";

function Play(){
  if(vid.paused){
      vid.play();
      btn.innerHTML = "<img src = 'img/pause.png'/>";
  }
  else{
      vid.pause();
      btn.innerHTML = "<img src = 'img/play.png'/>";
  }
}


/* footer */
let year = document.querySelector('.year');


let date = new Date();
let thisYear = date.getFullYear();
 year.textContent = thisYear;
 