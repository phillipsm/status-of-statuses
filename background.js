chrome.webRequest.onResponseStarted.addListener(
  function(info) {
    //alert(info.statusCode);
	//alert('just something. anything.');

  },
  // filters
  {
     urls: [
       "*://*/*"
     ]
  }
);