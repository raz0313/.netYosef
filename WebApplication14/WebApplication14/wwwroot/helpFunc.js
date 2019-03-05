class Message {
	constructor(elementId) {
		this.divMessage = document.getElementById(elementId);
	}

	show(text, color = 'black') {
		divMessage.innerHTML = text;
		divMessage.style.color = color;
	}

	setElementId(elementId) {
		this.divMessage = document.getElementById(elementId);
	}
}


class TableGenerator {
	constructor(fields, elementId) {
		this.fields = fields;
		this.divBody = document.getElementById(elementId); 
	}
	setElementId(elementId) {
		this.divBody = document.getElementById(elementId); 
	}

	tableRender() {
		removeAllChildNodes(divBody);
		let fields =  this.fields;
		let table = document.createElement("table");
		let trHeders = document.createElement("tr");
		let isEditFalse = false;
		for (let i = 0; i < fields.length; i++) {
			let th = document.createElement("th");
			th.innerHTML = fields[i].title;
			trHeders.appendChild(th);
		}
		table.appendChild(trHeders);
		divBody.appendChild(table);

		sendHttpRequest("api/suppliers/get", function (success, response) {
			if (success) {
				let data = JSON.parse(response);
				let tr = document.createElement("tr");
				for (let i = 0; i < data.length; i++) {
					let row = data[i];
					trRender(row, fields, tr, isEditFalse);
					table.appendChild(tr);
				}
			}
		});
		
	}

	
	
}

function trRender(row, fields, tr, isEdit) {
	removeAllChildNodes(tr);
	for (let i = 0; i < fields.length; i++) {
		let td = document.createElement("td");
		
		if (isEdit) {
			if (fields[i].classMame == "key") {
				td.innerHTML = row[fields[i].fieldName];
			} else {
				let input = document.createElement("input");
				input.type = fields[i].fieldType;
				input.value = row[fields[i].fieldName];
				td.appendChild(input);

			}
		} else {
			td.innerHTML = row[fields[i].fieldName];

		}
		tr.appendChild(td);
	}

}
function removeAllChildNodes(node) {
	while (node.hasChildNodes()) {
		node.removeChild(node.firstChild);
	}
}





function sendHttpRequest(url, onComplete, body = null) {
	let httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4) {
			onComplete(this.status == 200, this.responseText);
		}
	};
	if (body) {
		httpRequest.open('POST', url, true);
		httpRequest.setRequestHeader("Content-type", "application/json");
		httpRequest.send(JSON.stringify(body));
	} else {
		httpRequest.open('GET', url, true);
		httpRequest.send();
	}
}