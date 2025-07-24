const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");
var resumeTabNav = function (resumeTabClick){
    resumeTabContents.forEach((resumeTabContent) => {
    resumeTabContent.style.display = "none";
    resumeTabContent.classList.remove("active");
});
    resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) =>{
    resumePortfolioTabBtn.classList.remove("active");
});

    resumeTabContents [resumeTabClick].style.display = "flex";
    setTimeout(() => {
    resumeTabContents [resumeTabClick].classList.add("active");
    }, 100);
    resumePortfolioTabBtns [resumeTabClick].classList.add("active");
}
resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
    resumePortfolioTabBtn.addEventListener("click", () => {
    resumeTabNav(i);
    });
});