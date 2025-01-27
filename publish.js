/*
Since this site is made with Obsidian, we use this publish.js file to customize the site.
https://help.obsidian.md/Obsidian+Publish/Customize+your+site
*/

const site = "https://dataengineering.wiki";

// Each folder contains a note with the same name as the folder, add a redirect to the note when the folder is clicked.
// Expand arrow should not be affected.
var navContainer = document.querySelector('.site-body-left-column').querySelector('.nav-view-outer').querySelector('.tree-item').querySelector('.tree-item-children');
let folders = ["Community", "Concepts", "FAQ", "Guides", "Tools", "Tutorials"];
for (const item of folders) {

    var element = navContainer.querySelector(`[data-path="${item}"] div.tree-item-inner`);
    element.setAttribute('data-link', `${site}/${item}/${item}`);
    element.addEventListener('click', function (e) {
        window.location.href = e.target.getAttribute('data-link');
        return false;
    });
};
