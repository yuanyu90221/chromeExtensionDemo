//
var toggleBg = false;

chrome.commands.onCommand.addListener(function(command){
    console.log('Command:', command);

    if (command === 'switch-fb-bg') {
        resultCode = (toggleBg)? 'document.body.style.backgroundColor="red"'
                                :'document.body.style.backgroundColor="black"';
        chrome.tabs.executeScript({
            code: resultCode
        });
        toggleBg = !toggleBg;
    }
});