const Posts = [
  { title: "First Post", body: "This is the first post" },
  { title: "Second Post", body: "This is the Second post" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    Posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(newPost, callback) {
  setTimeout(() => {
    Posts.push(newPost);
    callback();
  }, 2000);
}

createPost({ title: "Third Post", body: "This is the Third post" }, getPosts);
