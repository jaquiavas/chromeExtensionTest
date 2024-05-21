chrome.runtime.sendMessage({greeting: "hello"}, function(response){
    console.log(response.farewell);
})

chrome.storage.local.set({ name: 'xander' }).then(() => {
    console.log("Value is set");
  });
  
  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value is " + result.name);
  });