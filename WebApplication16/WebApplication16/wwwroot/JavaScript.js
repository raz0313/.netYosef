var div;
var div1;
var Headr = [];
function init() {
	div = document.getElementById("divPage");
	div1 = document.getElementById("divPage1");
	let arrOne = [];
	let arrTwo = [];
	 Headr = ["index", "number", "fix"];

	tableRender(div, arrOne, Headr);
	tableRender(div1, arrTwo, Headr);
	
}

function tableRender(div,arr, Headr) {
	removeAllChildNode(div);
	let table = document.createElement("table");
	//Heder tr
	let trHeader = document.createElement("tr");

	for (let i = 0; i < Headr.length; i++) {
		let th = document.createElement("th");
		th.innerHTML = Headr[i];
		trHeader.appendChild(th);
	}
	table.appendChild(trHeader);
	for (let i = 0; i < arr.length; i++) {
		let arrs = arr[i];
		let tr = document.createElement("tr");
		renderTR(Headr, tr, arrs, false, i);
		table.appendChild(tr);
	}

	let trAdd = document.createElement("tr");
	renderTrAdd(Headr, trAdd, arr, div);
	table.appendChild(trAdd);



	div.appendChild(table);
}

function renderTrAdd(Headr, tr, arr , div ) {
	removeAllChildNode(tr);
	for (let i = 0; i < Headr.length; i++) {
		let td = document.createElement("td");
		if (Headr[i] === "index") {
		} else if (Headr[i] === "fix") {
			let btnAdd = document.createElement("button");
			btnAdd.innerHTML = "ADD";
			btnAdd.onclick = function () {
				let num = input.value;
				arr[arr.length] = num;
				tableRender(div ,arr, Headr);

			};
			td.appendChild(btnAdd);

		} else {
			var input = document.createElement("input");
			input.type = "number";
			td.appendChild(input);

		}
		tr.appendChild(td);
	}
		
	}
	
	

function renderTR(headr, tr, arr, isEdit, index) {
	removeAllChildNode(tr);
	for (let i = 0; i < headr.length; i++) {
		let td = document.createElement("td");
		if (isEdit) {
			if (headr[i] == "index") {

			} else if (headr[i] == "fix") {
				let btnSave = document.createElement("button");
				btnSave.innerHTML = "save";
				td.appendChild(btnSave);
				btnSave.onclick = function () {
					arr = inputFix.value;
					renderTR(headr, tr, arr, false, index);
				};
			} else {
				var inputFix = document.createElement("input");
				inputFix.type = "number";
				inputFix.value = arr;
				td.appendChild(inputFix);

			}
		} else {
			if (headr[i] == "index") {
				td.innerHTML = index;

			} else if (headr[i] == "fix") {
				let btnFix = document.createElement("button");
				btnFix.innerHTML = "to fix number";
				btnFix.onclick = function () { renderTR(headr, tr, arr, true, index); };
				td.appendChild(btnFix);

			} else {
				td.innerHTML = arr;


			}
		}
		tr.appendChild(td);
	}
	

}
function removeAllChildNode(node) {
	while (node.hasChildNodes()) {
		node.removeChild(node.firstChild);
	}

}