
document.addEventListener('DOMContentLoaded', () => {
//Control the opening and closing of the navbar on mobile and screen lower than 1280px
let nav__menu_hamburger_icon = document.getElementById("nav__menu_hamburger_icon");

nav__menu_hamburger_icon.addEventListener("click", () => {
    let nav__menu_options_mobile = document.getElementById("nav__menu_options_mobile");
    let nav__menu_hamburger_icon =  document.getElementById("nav__menu_hamburger_icon");

    nav__menu_hamburger_icon.classList.toggle("hamburger_icon_to_x");
    nav__menu_options_mobile.classList.toggle("nav__menu_options_mobile_open");
});

//Controle the display of the plan
let content__topPlanPeriodMonth = document.getElementById("content__top-plan-period-month");

let content__topPlanPeriodAnnual = document.getElementById("content__top-plan-period-annual");
let content__topCardsMonthTitle = document.getElementById("content__top-cards-month-title");
let annualPriceElementList = document.querySelectorAll(".annual_price");
let monthPriceElementList = document.querySelectorAll(".month_price");

content__topPlanPeriodMonth.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    console.log("teste")

    content__topPlanPeriodMonth.classList.add("plan-focus");
    content__topCardsMonthTitle.classList.add("hide_title");

    content__topPlanPeriodAnnual.classList.remove("plan-focus");

    //working on prices
    monthPriceElementList.forEach((element) => {
        element.classList.remove("hide_price");
    });
    
    annualPriceElementList.forEach((element) => {
        element.classList.add("hide_price");
    });
});

content__topPlanPeriodAnnual.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    console.log("teste")

    content__topPlanPeriodAnnual.classList.add("plan-focus");
    content__topPlanPeriodMonth.classList.remove("plan-focus");
    content__topCardsMonthTitle.classList.remove("hide_title");

    //working on prices
    annualPriceElementList.forEach((element) => {
        element.classList.remove("hide_price");
    });

    monthPriceElementList.forEach((element) => {
        element.classList.add("hide_price");
    });
});



//Manage the infinite carrossel
let content__bottomCarrosselListLeft = document.getElementById("content__bottom-carrossel-list-left");
let content__bottomCarrosselListRight = document.getElementById("content__bottom-carrossel-list-right");
let content__bottomCarrosselItemList = document.querySelectorAll(".content__bottom-carrossel-item");
let content__bottomCarrosselItemListRight = document.querySelectorAll(".content__bottom-carrossel-item");

content__bottomCarrosselItemList.forEach(card =>{
    let newHtmlItem = card.cloneNode(true);
    content__bottomCarrosselListLeft.appendChild(newHtmlItem);
});

content__bottomCarrosselItemListRight.forEach(card =>{
    let newHtmlItem = card.cloneNode(true);
    content__bottomCarrosselListRight.prepend(newHtmlItem);
});

content__bottomCarrosselListLeft.style.animation = "infiniteCarrosselLeft 1600s linear infinite";
content__bottomCarrosselListRight.style.animation = "infiniteCarrosselRight 1600s linear infinite";





});
