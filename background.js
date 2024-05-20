console.log('From the background script')
console.log(this)

chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: 'https://jaquiavas.github.io/XanderSchroederWeb/'
    })
})


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request)
    console.log(sender)
    console.log(sendResponse)
    sendResponse({farewell: 'goodbye'})
})