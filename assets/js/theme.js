// Theme: the site always opens in dark mode; the navbar button toggles dark <-> light for the current visit.
(function () {
  var theme = "dark";
  try { localStorage.removeItem("theme-setting"); } catch (e) {} // drop choices saved by the older version

  function apply() {
    document.documentElement.setAttribute("data-theme", theme);
    var icon = document.getElementById("theme-icon");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
      icon.parentElement.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    }
  }

  apply();
  document.addEventListener("DOMContentLoaded", function () {
    apply();
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        apply();
      });
    }
  });
})();
