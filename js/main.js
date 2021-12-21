const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const links = document.querySelectorAll(".header__link a");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_opened");

  burger.classList.contains("burger_opened")
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");

  setTimeout(() => menu.classList.toggle("header__menu_show"), 150);
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (burger.classList.contains("burger_opened")) {
      menu.classList.remove("header__menu_show");
      burger.classList.remove("burger_opened");
      document.body.style.overflowY = "auto";
    }
  });
});

const aboutBlock = document.querySelector(".about");
const mainBlock = document.querySelector(".main-block");
const roadmapBlock = document.querySelector(".roadmap");

window.addEventListener("load", () => {
  isPartiallyVisible(mainBlock) && showTree();
});

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

  tree.classList.add("main-block__tree_show");
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
 
    setTimeout(() => {
      road.classList.add("roadmap__item_way");
    }, (ms + 600));
  });
}

function isPartiallyVisible(el) {
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $(el).offset().top;
	var eh = $(el).outerHeight();
	var dh = $(document).height();   

  return wt + wh >= et || wh + wt == dh || eh + et < wh;
}
const trees = document.querySelector(".gallery__trees");

let bgPosition = 10;
setInterval(() => {
  trees.style.backgroundPositionX = `${(bgPosition -= 13)}px`;
}, 200);

const logos = document.querySelectorAll('.company__logo')

$(links).on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});

$(logos).on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});
