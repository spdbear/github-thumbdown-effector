'use strict'

!(function () {
  const init = () => {
    const thumbsdowns = Array.from(
      document.querySelectorAll(
        'g-emoji[alias="thumbs down"]:not([style]), g-emoji[alias="-1"]:not([style])'
      )
    )
    const emojis = thumbsdowns
    chrome.storage.local.get(
      ['isSpinEnabled', 'isWiggleEnabled', 'isRainbowEnabled'],
      (v) => {
        emojis.forEach((btn) => {
          const animes = []
          if (v.isRainbowEnabled) animes.push('rainbow 1s linear infinite')
          if (v.isSpinEnabled && v.isWiggleEnabled) {
            animes.push(
              'spin-wiggle 0.35s cubic-bezier(0, 0.5, 0.5, 1) infinite'
            )
          } else {
            if (v.isSpinEnabled)
              animes.push('spin 0.25s cubic-bezier(0, 0.5, 0.5, 1) infinite')
            if (v.isWiggleEnabled)
              animes.push('wiggle 0.4s cubic-bezier(0, 0.5, 0.5, 1) infinite')
          }
          btn.style.animation = animes.join(',')
        })
      }
    )
  }
  setInterval(init, 1000)
})()
