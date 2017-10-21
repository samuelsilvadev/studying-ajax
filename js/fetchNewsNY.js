
const headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8'
});
const myInit = { 
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default' 
            };

function getNews(adress, city){
    get(keys.newYorkTimes.url(adress, city), myInit)
        .then(response => response.json()
        .then(json => console.log(json)));
}