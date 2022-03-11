const url = "https://jsonplaceholder.typicode.com/posts/1";
function getdata() {
    fetch(url)
        .then((res) => { return res.json })
        .then((data) => { console.log(data) })
        .catch((err) => { console.log(err) })

}
// -----------------------------------------------------------------------------------
async function getData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    data = await data.json()
    console.log(data);
}
getData();

