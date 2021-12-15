'use strict'

!(function () {
  const spin = document.getElementById('spin')
  const wiggle = document.getElementById('wiggle')
  const rainbow = document.getElementById('rainbow')
  const preview = document.getElementById('preview')

  const updatePreview = () => {
    const animes = []
    if (rainbow.checked) animes.push('rainbow 1s linear infinite')
    if (spin.checked && wiggle.checked) {
      animes.push('spin-wiggle 0.35s cubic-bezier(0, 0.5, 0.5, 1) infinite')
    } else {
      if (spin.checked)
        animes.push('spin 0.25s cubic-bezier(0, 0.5, 0.5, 1) infinite')
      if (wiggle.checked)
        animes.push('wiggle 0.4s cubic-bezier(0, 0.5, 0.5, 1) infinite')
    }
    console.log(animes)
    preview.style.animation = animes.join(',')
  }

  window.onload = () => {
    chrome.storage.local.get(
      ['isSpinEnabled', 'isWiggleEnabled', 'isRainbowEnabled'],
      (v) => {
        if (v.isSpinEnabled) spin.checked = true
        if (v.isWiggleEnabled) wiggle.checked = true
        if (v.isRainbowEnabled) rainbow.checked = true
        updatePreview()
      }
    )
  }

  const setSpinSetting = () => {
    chrome.storage.local.set({
      isSpinEnabled: spin.checked,
    })
    updatePreview()
  }
  spin.addEventListener('change', setSpinSetting, false)

  const setWiggleSetting = () => {
    chrome.storage.local.set({
      isWiggleEnabled: wiggle.checked,
    })
    updatePreview()
  }
  wiggle.addEventListener('change', setWiggleSetting, false)

  const setRainbowSetting = () => {
    chrome.storage.local.set({
      isRainbowEnabled: rainbow.checked,
    })
    updatePreview()
  }
  rainbow.addEventListener('change', setRainbowSetting, false)
})()
