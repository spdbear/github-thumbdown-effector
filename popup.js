"use strict"

!(function () {
  const spin = document.getElementById("spin")
  const wiggle = document.getElementById("wiggle")
  const rainbow = document.getElementById("rainbow")

  window.onload = () => {
    chrome.storage.local.get(
      ["isSpinEnabled", "isWiggleEnabled", "isRainbowEnabled"],
      (v) => {
        if (v.isSpinEnabled) spin.checked = true
        if (v.isWiggleEnabled) wiggle.checked = true
        if (v.isRainbowEnabled) rainbow.checked = true
      }
    )
  }

  const setSpinSetting = () => {
    chrome.storage.local.set({
      isSpinEnabled: spin.checked,
    })
  }
  spin.addEventListener("change", setSpinSetting, false)

  const setWiggleSetting = () => {
    chrome.storage.local.set({
      isWiggleEnabled: wiggle.checked,
    })
  }
  wiggle.addEventListener("change", setWiggleSetting, false)

  const setRainbowSetting = () => {
    chrome.storage.local.set({
      isRainbowEnabled: rainbow.checked,
    })
  }
  rainbow.addEventListener("change", setRainbowSetting, false)
})()
