// const resumeTabs = document.querySelector(".resume-tabs");
// const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
// const resumeTabContents = document.querySelectorAll(".resume-tab-content");
// var resumeTabNav = function (resumeTabClick){
//     resumeTabContents.forEach((resumeTabContent) => {
//     resumeTabContent.style.display = "none";
//     resumeTabContent.classList.remove("active");
// });
//     resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) =>{
//     resumePortfolioTabBtn.classList.remove("active");
// });

//     resumeTabContents [resumeTabClick].style.display = "flex";
//     setTimeout(() => {
//     resumeTabContents [resumeTabClick].classList.add("active");
//     }, 100);
//     resumePortfolioTabBtns [resumeTabClick].classList.add("active");
// }
// resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
//     resumePortfolioTabBtn.addEventListener("click", () => {
//     resumeTabNav(i);
//     });
// });




// Service modal open/close function
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");
serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
serviceCard.addEventListener("click", () => {
    serviceBackDrop.style.display = "flex";
setTimeout(() => {
                serviceBackDrop.classList.add("active");
                }, 100);

setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
    });
modalCloseBtn.addEventListener("click", () => {
setTimeout(() => {
                serviceBackDrop.style.display = "none";
        }, 500);
setTimeout(() => {
                serviceBackDrop.classList.remove("active");
                serviceModal.classList.remove("active");
        }, 100);
    });

});


// Portfolio modals, tabs and cards //

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");
portfolioTabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {

        const filter = tabBtn.getAttribute("data-filter");
        cardsWithModals.forEach((cardWithModal) => {
            if(filter === "all" || cardWithModal.classList.contains (filter)) {
            cardWithModal.style.opacity = "1";
                }
            else{
                cardWithModal.style.opacity = "0";
                }
            });

        });
    });
});