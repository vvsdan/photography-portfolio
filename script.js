"use strict";

/////////////////////////////////////////
//NAV BAR ACTIVE CLASS
/////////////////////////////////////////
document.querySelectorAll(".active").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

/////////////////////////////////////////
//HAMBURGER MENU CLASS
/////////////////////////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/////////////////////////////////////////
//STICKY BAR
/////////////////////////////////////////
const navbar = document.querySelector("navbar");
const sticky = navbar.offsetTop;

function stickyNavBar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/////////////////////////////////////////
//API CALL
/////////////////////////////////////////

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=zVBg6cytk0hiCclMmbb6sPnDJVkKLgTvqgNYhoTm"
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const spaceImage = data.hdurl;
    const imgEl = document.getElementById("spaceImage");
    imgEl.src = spaceImage;
    imgEl.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}
