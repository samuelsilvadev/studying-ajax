
let searchImage = null;

addEventListener('load', () => {
	searchImage = new SearchImage(
		document.querySelector('#txtAdress'),
		document.querySelector('#txtCity')
	);
});

document.querySelector('#frmSearchAdress')
	.addEventListener('submit', e => {
	e.preventDefault();
	console.log(searchImage.adress.value);
	console.log(searchImage.city.value);
	console.log(keys.streeView.url());
	document.querySelector('img').src = keys.streeView.url(searchImage.adress.value, searchImage.city.value);
})