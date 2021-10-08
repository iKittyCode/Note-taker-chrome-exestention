var a = document.createElement("a");
a.download = "demo.txt";

chrome.runtime.onMessage.addListener(gotMessage)


function gotMessage(message, sender, sendResponse) {
console.log(message["notes"])
console.log("hello")

a.href = window.URL.createObjectURL(new Blob(["CONTENT"], {type: "text/plain"}));
a.click();
}