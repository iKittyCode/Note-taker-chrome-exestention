var mybutton = document.getElementById('mybutton')
var myinput = document.getElementById('notes')
mybutton.onclick = function () {
    let params = {
        active:true,
        currentWindow:true
        }
    chrome.tabs.query(params,gotTab)
    function gotTab(tabs) {
    var notes = { notes:myinput.value}
    chrome.tabs.sendMessage(tabs[0].id, notes)
    }
    }