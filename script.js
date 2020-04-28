
  let scrollCounret = true;

window.addEventListener("scroll", function () {
    let insistencePage = pageYOffset;
    console.log(insistencePage);
    let menu = document.getElementById("menu");
    if (insistencePage >= 50) {
        let header = document.getElementsByTagName("header")[0];
        header.classList.add("fixed-header");

        let headerNav = document.getElementById("header-nav");
        headerNav.classList.add("fixed-nav-header");

        let headerContainer = this.document.getElementById("conteiner-header");
        headerContainer.classList.add("fixed-header-container");

        menu.style.top = "6.8rem";
    }
    if (insistencePage <= 50) {
        menu.style.top = "5.5rem";
    }
    if (insistencePage <= 50) {
        let header = document.getElementsByTagName("header")[0];
        header.classList.remove("fixed-header");

        let headerNav = document.getElementById("header-nav");
        headerNav.classList.remove("fixed-nav-header");

        let headerContainer = this.document.getElementById("conteiner-header");
        headerContainer.classList.remove("fixed-header-container");

    }
    if (insistencePage >= 500) {
        let factsHeader = document.getElementById("facts-header-inner");
        factsHeader.classList.add("facts-header-inner-shov");
    }
  
    if (insistencePage >= 700 && scrollCounret != false) {
        scrollCounret = false;
        let counterYesr = this.document.getElementById("counter-yesr");
        let counterProjects = this.document.getElementById("counter-projects");
        let counterEngineers = this.document.getElementById("counter-engineers");   
        let counterAwards = this.document.getElementById("counter-awards");
        let counterAssurance = this.document.getElementById("counter-assurance");
        let counterEmployees= this.document.getElementById("counter-employees");

        let intervalYear = this.setInterval(function countYear() {
            let valueCounterYesr = Number(counterYesr.textContent);
            if (valueCounterYesr != 13) {
                counterYesr.textContent = ++valueCounterYesr;
            }
            else {
                clearInterval(intervalYear);
            
            }
        }, 70);


        let intervalProjects = this.setInterval( function countProjects(){
            let valueCounterProjects= Number(counterProjects.textContent);
            if (valueCounterProjects != 99) {
                counterProjects.textContent = ++valueCounterProjects;
            }
            else {
                counterProjects.textContent += "+";
                clearInterval(intervalProjects);
            }
        }, 10);

        let intervalEngineers = this.setInterval( function countEngineers(){
            let valueCounterEngineers = Number(counterEngineers.textContent);
            if (valueCounterEngineers !=15) {
                counterEngineers.textContent = ++valueCounterEngineers;
            }
            else {
                clearInterval(intervalEngineers);
            
            }
        }, 70);

        let intervalAwards = this.setInterval( function countAwards(){
            let valueCounterAwards = Number(counterAwards.textContent);
            if (valueCounterAwards != 26) {
                counterAwards.textContent = ++valueCounterAwards;
            }
            else {
                clearInterval(intervalAwards);
            
            }
        }, 40);

        let intervalAssurance = this.setInterval( function countAssurance(){
            let valueCounterAssurance = Number(counterAssurance.textContent);
            if (valueCounterAssurance != 100) {
                counterAssurance.textContent = ++valueCounterAssurance;
            }
            else {
                counterAssurance.textContent += "%";
                clearInterval(intervalAssurance);
         
            }
        }, 10);

        let intervalEmployees = this.setInterval( function countEmployees(){
            let valueCounterEmployees = Number(counterEmployees.textContent);
            if (valueCounterEmployees != 250) {
                counterEmployees.textContent = ++valueCounterEmployees;
            }
            else {
                counterEmployees.textContent;
                clearInterval(intervalEmployees);
         
            }
        }, 1);

    }
    if (insistencePage >= 1500) {
        let offerHeader = this.document.getElementById("header-offer");
        offerHeader.classList.add("facts-header-inner-shov");
    }
    if (insistencePage >= 2400) {
        let portfolioHeader = this.document.getElementById("header-section-inner");
        portfolioHeader.classList.add("protfolio-header-inner-shov");
    }

    if (insistencePage >= 3800) {
        let boxAdvantagesItems = document.getElementsByClassName("box-advantages");
        this.setInterval(function () {

            boxAdvantagesItems[0].classList.add("anim-box-advantages");

        }, 0)
        this.setInterval(function () {

            boxAdvantagesItems[1].classList.add("anim-box-advantages");

        }, 500)
        this.setInterval(function () {

            boxAdvantagesItems[2].classList.add("anim-box-advantages");

        }, 1000)
    }
})


function AddAnimBoxAdvantagesItem(item) {
    item.classList.add("anim-box-advantages");
}

let elemetsDoxOffer = document.getElementsByClassName("box-offer");

for (let index = 0; index < elemetsDoxOffer.length; index++) {
    elemetsDoxOffer[index].addEventListener("mouseenter", function (event) {

        let iconOffrer = event.target.getElementsByClassName("icon-offrer")[0];
        iconOffrer.classList.add("completed-icon-offrer");

        let headerOffrer = event.target.querySelector(".box-offer h4 ");
        headerOffrer.classList.add("completed-heaser-offer");
    });

    elemetsDoxOffer[index].addEventListener("mouseout", function (event) {
        let iconOffrer = event.target.getElementsByClassName("icon-offrer")[0];
        let headerOffrer = event.target.querySelector(".box-offer h4 ");
        if (iconOffrer != undefined) {
            if (event.relatedTarget != iconOffrer && event.relatedTarget != headerOffrer) {
                if (iconOffrer.classList.contains("completed-icon-offrer")) {
                    iconOffrer.classList.remove("completed-icon-offrer");
                }
                if (headerOffrer.classList.contains("completed-heaser-offer")) {
                    headerOffrer.classList.remove("completed-heaser-offer");
                }
            }
        }
    })
}

let elementProtfollioItems = document.getElementsByClassName("box-portfolio-item-inner");

for (let index = 0; index < elementProtfollioItems.length; index++) {
    elementProtfollioItems[index].addEventListener("mouseenter", function (event) {
        let borderPortfolioItem = event.target.getElementsByClassName("description-item")[0];
        borderPortfolioItem.style.borderColor = "#ff7f63";
    });

    elementProtfollioItems[index].addEventListener("mouseout", function (event) {
        let borderPortfolioItem = event.currentTarget.getElementsByClassName("description-item")[0];
        if (borderPortfolioItem != undefined) {

            for (let index = 0; index < event.currentTarget.childNodes.length; index++) {
                if (event.currentTarget.childNodes[index] == event.relatedTarget) {
                    return;
                }
                for (let indexchildNodes = 0; indexchildNodes < event.currentTarget.childNodes[index].childNodes.length; indexchildNodes++) {
                    if (event.currentTarget.childNodes[index].childNodes[indexchildNodes] == event.relatedTarget) {
                        return;
                    }

                }

            }
            borderPortfolioItem.style.borderColor = "#fff"
        }
    })
}


// Menu

let munuBurger = document.getElementById("burgger");

munuBurger.addEventListener("click", function (event) {

    let menu = document.getElementById("menu");
    let navMenu = document.getElementById("nav-menu");

  
    menu.classList.toggle("menu-open");
    if (pageYOffset >= 50) {
        menu.style.top = "6.8rem";
    }
    else {
        menu.style.top = "5.5rem";
    }

    munuBurger.classList.toggle("arrow");
    navMenu.classList.toggle("nav-menu-open");
})

window.addEventListener("resize", function (event) {
    let menu = document.getElementById("menu");
    let navMenu = document.getElementById("nav-menu")
    if (window.innerWidth >= 1100) {
        menu.classList.remove("menu-open");
        navMenu.classList.remove("nav-menu");
    }
});


//слайдер 

let firstImgSlider = document.getElementById("first-imgSlider");

firstImgSlider.addEventListener("click", function(){
   
    let firstSlider = document.getElementById("first-slider");
    let lastSlider = document.getElementById("last-slider");

    lastSlider.classList.add("hidden-last-slider");
    firstSlider.classList.add("show-first-slider");

    lastSlider.classList.remove("show-first-slider");
    firstSlider.classList.remove("hidden-first-slider");


})


let lastImgSlider = document.getElementById("last-imgSlider");

lastImgSlider.addEventListener("click", function(){

    let firstSlider= document.getElementById("first-slider");
    let lastSlider = document.getElementById("last-slider");

    firstSlider.classList.add("hidden-first-slider");
    firstSlider.classList.remove("show-first-slider")

    lastSlider.classList.add("show-last-slider");
    lastSlider.classList.remove("hidden-last-slider");


})