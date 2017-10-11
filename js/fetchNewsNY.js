function getNews(){
    console.log(keys.newYorkTimes.url());
    get(keys.newYorkTimes.url())
        .then(response => response.json().then(json => console.log(json.docs)));
}