function search(text) {
    if(event.keyCode == 13) {
    	window.location.href = "https://www.reddit.com/search/?q="+text.value;
    	return false;
    }
}