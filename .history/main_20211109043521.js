// Progressive loading
const observer = lozad('.lozad', {
    rootMargin: '700px 0px'
  });
  observer.observe();

// Foot에 현재 연도 표기
const year = document.querySelector('#currentYear');
let now = new Date();
let currentYear = now.getFullYear();
year.innerText = currentYear;

// 포트폴리오 메뉴 작은 버전
const customOffset = document.getElementById('portfolio__custom').getBoundingClientRect().top;
const readymadeOffset = document.getElementById('portfolio__readymade').getBoundingClientRect().top;
const processOffset = document.getElementById('portfolio__education-process').getBoundingClientRect().top;
console.log(customOffset);
console.log(readymadeOffset);
console.log(processOffset);
// const body = document.getElementsByTagName('body');
console.log(document.documentElement.scrollTop);

// const a = document.getElementById('portfolio__custom').getBoundingClientRect().top;
// console.log(a);
window.addEventListener('scroll', console.log(pageYOffset));
// console.log(pageYOffset);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > customOffset || document.documentElement.scrollTop > customOffset) {
    document.getElementById("menu_custom").style.top = "0";
  } else {
    document.getElementById("menu_custom").style.top = "-80px";
    if (document.body.scrollTop > 16500 || document.documentElement.scrollTop > 16500) {
      document.getElementById("menu_readymade").style.top = "0";
    } else {
      document.getElementById("menu_readymade").style.top = "-80px";
      if (document.body.scrollTop > 25000 || document.documentElement.scrollTop > 25000) {
        document.getElementById("menu_education-process").style.top = "0";
      } else {
        document.getElementById("menu_education-process").style.top = "-80px";
      }
    }
  }
  
  
  // else if (document.body.scrollTop > readymadeOffset || document.documentElement.scrollTop > readymadeOffset) {
  //   document.getElementById("menu_custom").style.top = "-80px";
  //   document.getElementById("menu_readymade").style.top = "0";
  // } else if (document.body.scrollTop > processOffset || document.documentElement.scrollTop > processOffset) {
  //   document.getElementById("menu_education-process").style.top = "0";
  // } else {
  // }
  // if (document.documentElement.scrollTop > readymadeOffset) {
  //   document.getElementById("menu_readymade").style.top = "0";
  // } else {
  //   document.getElementById("menu_readymade").style.top = "-80px";
  // }
  // if (document.body.scrollTop > processOffset || document.documentElement.scrollTop > processOffset) {
  //   document.getElementById("menu_education-process").style.top = "0";
  // } else {
  //   document.getElementById("menu_education-process").style.top = "-80px";
  // }
}