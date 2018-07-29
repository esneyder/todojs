const sendButton = document.getElementById('send')
const dataInput = document.getElementById('dataUser')
const ul = document.querySelector('ul')
const liList = document.querySelectorAll('li')

function dataInputLength(){
	return dataInput.value.length
}
function listDataLength(){
	return liList.length
}
function createListData() {
	let li = document.createElement('li')
	li.appendChild(document.createTextNode(dataInput.value))
	ul.appendChild(li)
	dataInput.value="";

	function crossOut() {
		 li.classList.toggle("done")
	}
	li.addEventListener('click',crossOut)
	let btnDelete = document.createElement('button')
	btnDelete.appendChild(document.createTextNode('X'))
	li.appendChild(btnDelete)
	btnDelete.addEventListener('click',deleteListItem)

	function deleteListItem() {
		li.classList.add('delete')
	}
}
function addListAfterclick() {
	if(dataInputLength()>0 && dataInputLength() < 28){
		createListData()
	} else  if(dataInputLength()>28){
        alert('Debe ingresar valores entre 1 y 28 caracteres')
	}
}
function addListAferKeypress(e) {
	if(dataInputLength()>0 && dataInputLength()< 28 & e.which===13){
		createListData()
	}else if (dataInputLength()>28 && e.which===13) {
		alert('debe ingresar item menos de 28 caracteres')
	}
}
sendButton.addEventListener('click',addListAfterclick)
dataInput.addEventListener('keypress',addListAferKeypress)