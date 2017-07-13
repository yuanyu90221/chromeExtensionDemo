var menuItem = {
    "id": "speak",
    "title": "Speak",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

// 監聽 右鍵選單
chrome.contextMenus.onClicked.addListener(function(clickData){
    if( clickData.menuItemId == 'speak' && clickData.selectionText ){
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7});
    }
});