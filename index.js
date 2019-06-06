document.addEventListener("DOMContentLoaded", () => {

    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.menu-holder');
    let currentPage = document.getElementById('current-page');
    let footerList = document.querySelector('.footer-menu-list');
    let mainBody = document.querySelector('.main-body');

    //initial page to load
    loadPage('Resume');

    burger.addEventListener('click', () => {
        document.querySelector('.menu-holder').classList.toggle('active');
    })

    mobileMenu.addEventListener('click', (e) => {

        e.preventDefault();

        //get page name that was clicked
        let page = e.target.innerText;
        loadPage(page);
        document.querySelector('.menu-holder').classList.toggle('active');
    })


    function loadPage(page) {
        currentPage.innerText = page
        footerList.innerHTML = toggleFooterList(page);
        mainBody.innerHTML = togglePage(page)
    }

    function toggleFooterList(page) {
        if (page === 'About Me') {
            return aboutFooter();
        }
        if (page === 'Resume') {
            return resumeFooter();
        }
        if (page === 'Projects') {
            return projectsFooter();
        }
        if (page === 'Blog') {
            return blogFooter();
        }
    }

    function togglePage(page) {
        if (page === "About Me") {
            return aboutHTML();

        } if (page === "Resume") {
            return resumeHTML()
        } if (page === 'Projects') {
            return projectsHTML();
        }
        if (page === 'Blog') {
            return blogHTML();
        }
    }
})

