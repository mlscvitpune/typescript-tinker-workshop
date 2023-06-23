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

function createPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Posts.push(newPost);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error : Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Third Post", body: "This is the Third post" })
//   .then(getPosts)
//   .catch((err) => {
//     console.log(err);
//   });

async function display() {
  await createPost({ title: "Third Post", body: "This is the Third post" });
  getPosts();
}

display();
