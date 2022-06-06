const d = document,
  ls = localStorage;
export default function darkTheme(btn, classDark) {
  const $darkTheme = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  console.log($selectors);

  let moon = "🌙",
    sun = "☀️";
  const lightMode = () => {
      $selectors.forEach((el) => el.classList.add(classDark));
      $darkTheme.textContent = sun;
      ls.setItem("theme", "light");
    },
    darkMode = () => {
      $selectors.forEach((el) => el.classList.remove(classDark));
      $darkTheme.textContent = moon;
      ls.setItem("theme", "dark");
    };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // console.log($darkTheme.textContent);
      if ($darkTheme.textContent === moon) {
        lightMode();
      } else {
        darkMode();
      }
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(ls.getItem());
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
