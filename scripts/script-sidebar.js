const btn_menu = document.querySelector(".btn-menu");

const header_btn_menu = document.querySelector(".header-btn-menu");

const sidebar_container = document.querySelector(".sidebar-container");

btn_menu.addEventListener("click", function () {

    sidebar_container.classList.toggle("expand");

});

header_btn_menu.addEventListener("click", function () {



    sidebar_container.classList.toggle("expand");

});