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
            cardWithModal.classList.remove("hidden");

                setTimeout(() => {
                                    cardWithModal.style.opacity = "1";
                                    cardWithModal.style.transition = ".5s ease";
                            }, 1);

                }
            else{
                cardWithModal.classList.add("hidden");

                setTimeout(() => {
                                    cardWithModal.style.opacity = "0";
                                    cardWithModal.style.transition = ".5s ease";
                            }, 1);

                }
            });
            // Add active class to the clicked tab button.
            portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");


        });
    });
});


// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");
portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
        const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
        const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
        const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
        const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

        portfolioCard.addEventListener("click", () => {
                portfolioBackdrop.style.display = "flex";

                setTimeout(() => {
                    portfolioBackdrop.classList.add("active");
                                }, 200);
                setTimeout(() => {
                    portfolioModal.classList.add("active");
                                }, 200);
                });


        modalCloseBtn.addEventListener("click", () => {
                setTimeout(() => {portfolioBackdrop.style.display = "none";
                            }, 500);
                setTimeout(() => {portfolioBackdrop.classList.remove("active");
                portfolioModal.classList.remove("active");
                            }, 100);
                    });

            });