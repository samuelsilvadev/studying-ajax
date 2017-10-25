
const headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Credentials': 'true'
});

const myConfs = { 
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default' 
            };

function getNews(adress, city){
   return get(keys.newYorkTimes.url(adress, city), myConfs)
        .then(response => response.json()
            .then(json => json));
}