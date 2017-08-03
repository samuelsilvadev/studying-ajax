
addEventListener('load', () => {
	fetch(keys.streeView.url())
		.then(resp => {
			console.log(resp);
		})
		.catch(err => {
			console.log(err);	
		});
});