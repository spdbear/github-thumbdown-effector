"use strict";

!(function () {
  // Cボタンでコメントトグル
  const buttons = document.querySelectorAll(
    'button[value*="THUMBS_DOWN"]>g-emoji'
  );
  buttons.forEach((btn) => {
    btn.classList.add("anime-spin");
    btn.classList.add("anime-rainbow");
    btn.classList.add("anime-wiggle");
    // btn.textContent = "🤔";
  });
})();
