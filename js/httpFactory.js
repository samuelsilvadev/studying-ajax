
function get(url){
    return fetch(url)
            .then(response => response)
            .catch(err => err);
}