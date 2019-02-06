function idProp(obj, element) {
	if (!element)
		return;
	if (element.id && element.id.length > 0) {
		obj[element.id] = element;
		element.container = obj;
	}

	if (element.hasChildNodes()) {
		for (let i = 0; i < element.childNodes.length; i++) {
			idProp(obj, element.childNodes[i]);
		}
		
	}
}
function httpRequest(url, onComplete, obj, body) {
	let http = new XMLHttpRequest();
	http.onreadystatechange = function () {
		if (this.status == 4) {
			onComplete(this.readyState == 200, this.responseText,obj);
		}

	};
	if (body) {
		http.open("POST", url, true);
		http.setRequestHeader("Content-Type", "application/json");
		http.send(body);

	} else {
	
		http.open("GET", url, true);
		http.send();
	}
}
