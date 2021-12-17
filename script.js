const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// sticky nav

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshhold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

// form date picker

// making arrival date selection start on current day
const todayDate = new Date();
const dd = todayDate.getDate();
const mm = todayDate.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
const yyyy = todayDate.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("departure").setAttribute("min", today);
console.log(today);
