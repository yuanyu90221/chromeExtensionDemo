var toggle = false;

var blockList = [];

chrome.runtime.onMessageExternal.addListener(function( message, sender, sendResponse) {
    console.log(sender);
    if (blockList.indexOf(sender.url) != -1) {
        return ;
    }

    if (message.name !== '切換頁面按鈕') {
        return ;
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs[0].id);
        if(!toggle) {
            chrome.pageAction.show(tabs[0].id);
        }
        else {
            chrome.pageAction.hide(tabs[0].id);
        }
        toggle = !toggle;
    });

    sendResponse("來自extension 1的訊息")
});