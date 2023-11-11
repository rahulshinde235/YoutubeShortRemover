document.getElementById("hideShortsButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    function hideShorts() {
      const shortsSection = document.getElementsByTagName(
        "ytd-rich-section-renderer"
      );
      for (var i = 0; i < shortsSection.length; i++) {
        shortsSection[i].style.display = "none";
      }
    }

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: hideShorts,
    });
  });
});

document.getElementById("showShortsButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    function showShorts() {
      const shortsSection = document.getElementsByTagName(
        "ytd-rich-section-renderer"
      );
      for (var i = 0; i < shortsSection.length; i++) {
        shortsSection[i].style.display = "block";
      }
    }

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: showShorts,
    });
  });
});
