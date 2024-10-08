/* -------------------------- Typing animation ------------------------- */
var typed = new Typed(".typing", {
    strings: ["UI/UX Designer", "Frontend Developer"],
    typeSpeed: 65,
    backSpeed: 65,
    loop: true
});

/* -------------------------- Aside ------------------------- */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;

for(let i = 0; i < totalNavList; i ++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j = 0; j < totalNavList; j ++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for(let i = 0; i < totalSection; i ++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for(let i = 0; i < totalSection; i ++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}


function updateNav(element) {
    for(let i = 0; i < totalNavList; i ++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    });

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    for(let i = 0; i < totalSection; i ++) {
        allSection[i].classList.toggle("open");
    }
}

/* -------------------------- Certificate PopUp ------------------------- */
document.querySelectorAll(".certification-item").forEach(item => {
    item.onclick = () => {
      document.querySelector(".popup-img").style.display = 'block';
      document.querySelector(".popup-img img").src = item.querySelector("img").getAttribute('src');
    }
});
  
document.querySelector(".popup-img span").onclick = () => {
    document.querySelector(".popup-img").style.display = 'none';
}

/* -------------------------- "Show more" & "Show less" button ------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.portfolio-item');
    const showMoreBtn = document.getElementById('show-more-btn');
    let itemsToShow = 6;

    projects.forEach((project, index) => {
        if (index >= itemsToShow) {
            project.classList.add('hidden');
        }
    });

    showMoreBtn.addEventListener('click', function () {
        const hiddenProjects = document.querySelectorAll('.portfolio-item.hidden');

        if (hiddenProjects.length > 0) {
            hiddenProjects.forEach((project, index) => {
                if (index < itemsToShow) {
                    project.classList.remove('hidden');
                }
            });

            if (document.querySelectorAll('.portfolio-item.hidden').length === 0) {
                showMoreBtn.textContent = 'Show less';
            }
        } else {
            projects.forEach((project, index) => {
                if (index >= itemsToShow) {
                    project.classList.add('hidden');
                }
            });

            showMoreBtn.textContent = 'Show more';
        }
    });
});