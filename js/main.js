const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const links = document.querySelectorAll('.header__link a')

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_opened");

  burger.classList.contains("burger_opened")
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");

  setTimeout(() => menu.classList.toggle("header__menu_show"), 150);
});

links.forEach(link => {
  link.addEventListener('click', () => {
    if (burger.classList.contains("burger_opened")) {
      menu.classList.remove("header__menu_show")
      burger.classList.remove("burger_opened");
    } 
  })
})

const aboutBlock = document.querySelector(".about");
const mainBlock = document.querySelector(".main-block");
const roadmapBlock = document.querySelector(".roadmap");

window.addEventListener("load", () => {
  isPartiallyVisible(mainBlock) && showTree();
});

showRoad()

window.addEventListener(
  "scroll",
  () => {
    isPartiallyVisible(aboutBlock) && showMountain();

    isPartiallyVisible(roadmapBlock) && showRoad();
  },
  false
);

function showTree() {
  const tree = document.querySelector(".main-block__tree");
  const ground = document.querySelector(".main-block__ground");

  setTimeout(() => tree.classList.add("main-block__tree_show"), 350);
  ground.classList.add("main-block__ground_show");
}

function showMountain() {
  const mountain = document.querySelector(".about__image");
  mountain.classList.add("about__image_show");
}

function showRoad() {
  const roads = document.querySelectorAll(".roadmap__item");
  let ms = 0;

  roads.forEach((road) => {
    ms += 400;

    setTimeout(() => {
      road.classList.add("roadmap__item_show");
    }, ms);
  });
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom + 450;
  var height = elementBoundary.height;

  return top + height >= 0 && height + window.innerHeight >= bottom;
}

// function isPartiallyVisible(el) {
//   var elementBoundary = el.getBoundingClientRect();

//   var top = $(elementBoundary).offset().top;
//   var bottom = $(elementBoundary).offset().bottom + 150;
//   var height = $(elementBoundary).height;

//   return top + height >= 0 && height + window.innerHeight >= bottom;
// }

$(window).scroll(function() {
  if ($(this).scrollTop() > 0 ) {
    console.log($(this).scrollTop());
  }
});
const trees = document.querySelector(".gallery__trees");

let bgPosition = 10;
setInterval(() => {
  trees.style.backgroundPositionX = `${(bgPosition -= 13)}px`;
}, 200);

const logos = document.querySelectorAll('.company__logo')

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const block = document.querySelector(`.${link.getAttribute("data-link")}`);

//     block.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });

$(links).on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});



logos.forEach(logo => {
   logo.addEventListener('click', (e) => {
      e.preventDefault();

      mainBlock.scrollIntoView({
         behavior: "smooth",
         block: "start",
       });
   })
})