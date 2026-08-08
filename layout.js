/*
=========================================================
Website : Anurag
Shared Layout
Date : 08 August 2026 (IST)
=========================================================
*/


/*=========================================================
PAGE TITLE
=========================================================*/

const pageTitle =
document.body.dataset.title || "Anurag";



/*=========================================================
WEBSITE PAGES

Add new pages only here.
=========================================================*/

const pages = [

    {
        file:"index.html",
        text:"Anurag Home"
    },

    {
        file:"yoga.html",
        text:"Yoga"
    },

    {
        file:"chess.html",
        text:"Chess"
    },

    {
        file:"meditation.html",
        text:"Meditation"
    },

    {
        file:"news.html",
        text:"News"
    },

    {
        file:"blog.html",
        text:"Blog"
    },

    {
        file:"contact.html",
        text:"Contact"
    }

];



/*=========================================================
CURRENT PAGE
=========================================================*/

const currentPage =
window.location.pathname.split("/").pop() || "index.html";



/*=========================================================
BUILD NAVIGATION
=========================================================*/

let navigation = "";

pages.forEach((page,index)=>{

    const active =
        page.file===currentPage
        ? "active"
        : "";

    navigation +=

`<a href="${page.file}"
class="${active}">

${page.text}

</a>`;

    if(index < pages.length-1){

        navigation += "<span>·</span>";

    }

});



/*=========================================================
HEADER
=========================================================*/

const header =

`

<header>

<h1>

${pageTitle}

</h1>

<nav class="nav">

${navigation}

</nav>

</header>

`;



document
.getElementById("site-header")
.innerHTML = header;



/*=========================================================
FOOTER
=========================================================*/

const year =
new Date().getFullYear();



const footer =

`

<footer>

<div class="footer-links">

<a
href="https://www.instagram.com/yogaanuragpage"
target="_blank">

Instagram

</a>

<span>·</span>

<a
href="https://www.youtube.com/@yogaanurag"
target="_blank">

YouTube

</a>

<span>·</span>

<a
href="https://wa.me/916283266268"
target="_blank">

WhatsApp

</a>

<span>·</span>

<a
href="tel:+916283266268">

Call

</a>

<span>·</span>

<a href="#top">

Top ↑

</a>

</div>


<p class="footer-copy">

© ${year} Anurag

</p>

</footer>

`;



document
.getElementById("site-footer")
.innerHTML = footer;
