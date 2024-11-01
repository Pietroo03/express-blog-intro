

axios.get("http://127.0.0.1:3000/posts")
    .then(response =>  {
        const posts = response.data.data
        console.log(posts);
    })


