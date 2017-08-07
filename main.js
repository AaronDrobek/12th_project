let data = {
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://avatars3.githubusercontent.com/u/583231?v=4&s=460",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was octocat named octocat, super cool stuff",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}


let name  = document.querySelector('.name');
let bio   = document.querySelector('.bio');
let about = document.querySelector('.about');
let cat   = document.querySelector('.cat');

let template;

template = `<h1>${data.login}</h1>`

name.innerHTML += template;

template = `<h2>The Basics</h2>`

bio.innerHTML += template;

template = `<ul><li>Name:${data.login}</li><li>Github URL:${data.url}</li><li>Email:${data.email}</li><li>Compant:${data.company}</li><li>Website:${data.blog}</li></ul>`

bio.innerHTML += template;

template = `<h2>The Story</h2>`

about.innerHTML += template;

template = `<p>${data.bio}</p>`

about.innerHTML += template;

template  = `<img  src= ${data.avatar_url}>`

cat.innerHTML += template;




function reqListener () {

  let data = JSON.parse(this.responseText);
  // let info = `Hi, my name is ${data.name} and I am from ${data.location}.`;
  // console.log(info);
  console.log(data);
  // console.log(data.bio);



}
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/AaronDrobek");
req.addEventListener("load", reqListener);
req.send();

// console.log(bio);


// for (var i = 0; i < 10; i++) {
//   characterList.innerHTML += `<li> ${data.results[i].name}</li>`;
// }
