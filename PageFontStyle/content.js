// send message to eventPage.js
chrome.runtime.sendMessage({todo: "showPageAction"});
// accept message from popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse ){
    if(request.todo == 'changeColor'){
        var addColor = '#' + request.clickedColor;
        $('.api').css('color',addColor);
    }
});