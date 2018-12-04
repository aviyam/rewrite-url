
function replaceURL(url, strReplace){ 
    let re = /([i][l]\/)(.*?)(\.)/g;
    return url.replace(re, strReplace);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    var newURL = replaceURL(tab.url, 'il/misc/smartphone-article/.');
    chrome.tabs.update(tab.id, {url: newURL});
});