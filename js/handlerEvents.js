
let searchImage = null;

const elements = {
	txtAdress : document.querySelector('#txtAdress'),
	txtCity : document.querySelector('#txtCity'),
	frmSearchAdress : document.querySelector('#frmSearchAdress'),
	imgNewCity : document.querySelector('img'),
	articleItens: document.querySelector('.articles__itens')
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
	getNews(searchImage.adress.value, searchImage.city.value).then(succ => buildArticles(succ));
});

function buildArticles(articles){
	
	const everyArticles = articles.response.docs.map(element => {
		
		return`	<div class="col s4 m4">
					<div class="card blue-grey darken-1">
						<div class="card-content white-text">
							<span class="card-title">${element.headline.main}</span>
								<p>${element.snippet}</p>
						</div>
						<div class="card-action">
							<a target="_blank" href="${element.web_url}">Url</a>									
						</div>
					</div>
				</div>`;		
	}).join('');

	elements.articleItens.innerHTML = everyArticles;
}
