
let searchImage = null;

const elements = {
	txtAdress : document.querySelector('#txtAdress'),
	txtCity : document.querySelector('#txtCity'),
	frmSearchAdress : document.querySelector('#frmSearchAdress'),
	imgNewCity : document.querySelector('img')
}

addEventListener('load', () => {
	searchImage = new SearchImage(
		elements.txtAdress,
		elements.txtCity
	);
});

elements.frmSearchAdress.addEventListener('submit', e => {
	e.preventDefault();
	elements.imgNewCity.src = keys.streeView.url(searchImage.adress.value, searchImage.city.value);
	getNews(searchImage.adress.value, searchImage.city.value);
});