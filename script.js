"use strict"

!(function () {
  const thumbsdowns = Array.from(
    document.querySelectorAll('button[value*="THUMBS_DOWN"]>g-emoji')
  )
  const confuses = Array.from(
    document.querySelectorAll('button[value*="CONFUSED"]>g-emoji')
  )
  const buttons = [...thumbsdowns, ...confuses]
  chrome.storage.local.get(
    ["isSpinEnabled", "isWiggleEnabled", "isRainbowEnabled"],
    (v) => {
      console.log(v)
      buttons.forEach((btn) => {
        const animes = []
        if (v.isRainbowEnabled) animes.push("rainbow 1s linear infinite")
        if (v.isWiggleEnabled && v.isRainbowEnabled) {
          animes.push("spin-wiggle 0.35s cubic-bezier(0, 0.5, 0.5, 1) infinite")
        } else {
          if (v.isSpinEnabled)
            animes.push("spin 0.25s cubic-bezier(0, 0.5, 0.5, 1) infinite")
          if (v.isWiggleEnabled)
            animes.push("wiggle 0.4s cubic-bezier(0, 0.5, 0.5, 1) infinite")
        }
        btn.style.animation = animes.join(",")
      })
    }
  )
})()
