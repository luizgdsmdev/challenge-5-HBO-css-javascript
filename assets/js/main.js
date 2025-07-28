
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

content__topPlanPeriodMonth.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    console.log("teste")

    content__topPlanPeriodMonth.classList.toggle("plan-focus");
    content__topPlanPeriodAnnual.classList.toggle("plan-focus");
});

content__topPlanPeriodAnnual.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    console.log("teste")

    content__topPlanPeriodMonth.classList.toggle("plan-focus");
    content__topPlanPeriodAnnual.classList.toggle("plan-focus");
});
