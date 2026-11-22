// Light / dark theme: follows the OS by default; the navbar button cycles system -> dark -> light.
(function () {
  var KEY = "theme-setting";
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function apply() {
    var setting = localStorage.getItem(KEY) || "system";
    var theme = setting === "system" ? (media.matches ? "dark" : "light") : setting;
    document.documentElement.setAttribute("data-theme", theme);
    var icon = document.getElementById("theme-icon");
    if (icon) {
      icon.className =
        setting === "dark" ? "fa-solid fa-moon" :
        setting === "light" ? "fa-solid fa-sun" : "fa-solid fa-circle-half-stroke";
      icon.parentElement.title = "Theme: " + setting;
    }
  }

  apply();
  media.addEventListener("change", apply);
  document.addEventListener("DOMContentLoaded", function () {
    apply();
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var order = ["system", "dark", "light"];
        var cur = localStorage.getItem(KEY) || "system";
        localStorage.setItem(KEY, order[(order.indexOf(cur) + 1) % order.length]);
        apply();
      });
    }
  });
})();
