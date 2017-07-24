// popup.js
document.addEventListener('DOMContentLoaded', function(dcle) {
    var dButton = document.getElementById('button');
    
    dButton.addEventListener('click', function(ce) {
        // 使用 Chrome API開啟視窗
        chrome.windows.create({'url': 'https://github.com/yuanyu90221'})
    })
});