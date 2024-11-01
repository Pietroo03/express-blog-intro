const rowEl = document.querySelector('.row')

axios.get("http://127.0.0.1:3000/posts")
    .then(response =>  {
        const posts = response.data.data
        console.log(posts);
        let markup = create_markup(posts)
        rowEl.innerHTML = markup


    })




function create_markup(posts) {
    let postElement = ''
    posts.forEach(post => {
        const {titolo, contenuto, immagine, tags} = post
        console.log(post);
        const markup = `
        <div class="post col-12 col-md-5 m-3">
            <div class="immagine">
                <img src="${immagine}" alt="">
            </div>
            <h3 class="title pt-3">
                 ${titolo}
            </h3>
            <div class="description">
                ${contenuto}
            </div>
            <div class="tags py-2">
                ${tags}
            </div>
         </div>
        `

        postElement += markup
    });

    console.log(postElement);
    return postElement
}