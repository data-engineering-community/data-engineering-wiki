/*
Since this site is made with Obsidian, we use this publish.js file to customize the site.
https://help.obsidian.md/Obsidian+Publish/Customize+your+site
*/

const site = "https://dataengineering.wiki";

// Customize navigation order

let navOrderAsc = ["Index", "Learning Resources"]; // These go on top
let navOrderDsc = []; // These go at the bottom

// Items not mentioned go in between in alphabetical order

var siteLeft = document.querySelector('.site-body-left-column');
var siteNav = siteLeft.querySelector('.nav-view-outer');
var navContainer = siteNav.querySelector('.tree-item').querySelector('.tree-item-children');

for (const item of navOrderAsc.reverse()) {
    navItem = navContainer.querySelector(`[data-path="${item}.md"]`);
    if (navItem == null) continue;
    moveItem = navItem.parentElement;
    navContainer.prepend(moveItem);
};

for (const item of navOrderDsc.reverse()) {
    navItem = navContainer.querySelector(`[data-path="${item}.md"]`);
    if (navItem == null) continue;
    moveItem = navItem.parentElement;
    navContainer.append(moveItem);
};


// Each folder contains a note with the same name as the folder, add a redirect to the note when the folder is clicked.
// Expand arrow should not be affected.
let folders = ["Concepts", "FAQ", "Guides", "Tools", "Tutorials"];
for (const item of folders) {

    var element = navContainer.querySelector(`[data-path="${item}"] div.tree-item-inner`);
    element.setAttribute('data-link', `${site}/${item}/${item}`);
    element.addEventListener('click', function (e) {
        window.location.href = e.target.getAttribute('data-link');
        return false;
    });
};
