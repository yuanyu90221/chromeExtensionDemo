var menuItem = {
    "id": "wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']');
}
// 監聽 右鍵選單
chrome.contextMenus.onClicked.addListener(function(clickData){
    if( clickData.menuItemId == 'wikit' && clickData.selectionText ){
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth / 2,
            "height": screen.availWidth /2
        };
        chrome.windows.create(createData, function(){
            
        });
    }
});