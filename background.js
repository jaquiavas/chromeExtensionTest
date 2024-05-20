console.log('From the background script')
console.log(this)

chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: 'https://jaquiavas.github.io/XanderSchroederWeb/'
    })
})