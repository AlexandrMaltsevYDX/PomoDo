const menu_toggle = document.querySelector('.app-sidebar_togler');
const sidebar = document.querySelector('.app-sidebar');


menu_toggle.addEventListener('click', () => {
    // menu_toggle.classList.toggle('is__active');
    sidebar.classList.toggle('is__active');
});


const tabs = document.querySelectorAll('navigation_item');

tabs[1].





// window.onload = () => {
//     const tab_switchers = document.querySelectorAll('navigation_item');

//     for (let i = 0; i < tab_switchers.length; i++) {
//         const tab_switcher = tab_switchers[i];
//         const page_id = tab_switcher.dataset.tab;

//         tab_switcher.addEventListener('click', () => {
//             document.querySelector('.navigation .navigation_item.is__active').classList.remove('is__active');
//             tab_switcher.parentNode.classList.add('is__active');

//             // SwitchPage(page_id);
//         });
//     }
// }

// function SwitchPage (page_id) {
//     console.log(page_id);

//     const current_page = document.querySelector('.pages .page.is-active');
//     current_page.classList.remove('is-active');

//     const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
//     next_page.classList.add('is-active');
// }