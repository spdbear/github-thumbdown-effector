"use strict"

!(function () {
  const buttons = document.querySelectorAll(
    'button[value*="THUMBS_DOWN"]>g-emoji'
  )
  chrome.storage.local.get(
    [
      "isSpinEnabled",
      "isWiggleEnabled",
      "isRainbowEnabled",
      "isThinkingEnabled",
    ],
    (v) => {
      console.log(v)
      buttons.forEach((btn) => {
        const animes = []
        if (v.isSpinEnabled)
          animes.push(
            "animation: spin 0.25s cubic-bezier(0, 0.5, 0.5, 1) infinite"
          )
        if (v.isWiggleEnabled)
          animes.push("wiggle 0.4s cubic-bezier(0, 0.5, 0.5, 1) infinite")
        if (v.isRainbowEnabled) animes.push("rainbow 1s linear infinite")
        if (v.isThinkingEnabled) btn.textContent = "🤔"
        btn.style.animation = animes.join(",")
      })
    }
  )
})()
