$(".navbar-item").on("click",(function(){$(".navbar-item").removeClass("active"),$(this).addClass("active")})),$(window).on("scroll",(function(){$(this).scrollTop()>150?$(".navbar-part").addClass("navbar-fixed"):$(".navbar-part").removeClass("navbar-fixed")})),$(".navbar-toggle").on("click",(function(){$(".navbar-slide").addClass("active"),$(".body").addClass("active"),$(".navbar-cross").on("click",(function(){$(".navbar-slide").removeClass("active"),$(".body").removeClass("active")}))}));const btn=document.querySelector(".gear-btn"),theme=document.querySelector("#theme-link");function filter(e){for(hide=document.getElementsByClassName("cate-active"),i=0;i<hide.length;i++)hide[i].style.display="none";let t=document.getElementsByClassName(e);for(i=0;i<hide.length;i++)t[i].style.display="block"}btn.addEventListener("click",(function(){"assets/css/light-theme.css"==theme.getAttribute("href")?theme.href="assets/css/dark-theme.css":theme.href="assets/css/light-theme.css"})),$(window).on("scroll",(function(){$(this).scrollTop()>1e3?$(".back2top-btn").show():$(".back2top-btn").hide()})),$(".cate-btn").on("click",(function(){$(".cate-btn").removeClass("active"),$(this).addClass("active")})),jQuery(document).ready((function(e){var t=e(".faq-ans").hide();t.first().show(),e(".faq-que").click((function(){var s=e(this);t.slideUp(),s.next().slideDown()}))}));