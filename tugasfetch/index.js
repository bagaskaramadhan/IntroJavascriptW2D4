// buat folder
// npm init
// npm i node-fetch
//https://jsonplaceholder.typicode.com/users
//ke node-fetch dan ambil json

const iNodeFetch = require('node-fetch') //panggil module node-fetch

iNodeFetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => json.filter(e=>console.log(e.name))); //memfilter dan mencetak element name yang ada di json