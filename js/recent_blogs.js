let blogs = [];

const getRecentBlogs = () => {
    axios.get('http://ferociterbackend.local/wp-json/wp/v2/posts?_embed&per_page=3').then((recent_blogs) => {
        const { data } = recent_blogs
        console.log('[RECENT BLOGS]:: ', data);
        this.blogs = data;

        data.forEach((ds, i) => {
            let blog_elem = document.createElement('div');

            blog_elem = `
            <div onclick='btnClicked(${i})' class="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div class="blog-entry">
              <a
                href="blog-single.html"
                class="block-20"
                style="background-image: url(${ds._embedded['wp:featuredmedia'][0].source_url});"
              >
              </a>
              <div class="text p-4 float-right d-block">
                <div class="topper d-flex align-items-center">
                  <div class="one py-2 pl-3 pr-1 align-self-stretch">
                    <span class="day">${new Date(ds.date).getDate()}</span>
                  </div>
                  <div class="two pl-0 pr-3 py-2 align-self-stretch">
                    <span class="yr">${new Date(ds.date).getFullYear()}</span>
                    <span class="mos">${new Date(ds.date).toLocaleString('default', { month: 'long' })}</span>
                  </div>
                </div>
                <h3 class="heading mt-2">
                  <a href="#">${ds.title.rendered}</a>
                </h3>
                <p>
                  ${ds.excerpt.rendered}
                </p>
              </div>
            </div
            `
            // blog_elem.addEventListener('click', function (i) {
            //     btnClicked(i)

            // })
            document.getElementById('recent_blogs').innerHTML += blog_elem




        });
    }).catch((err) => {
        console.log('[ERROR]:: ', err);
    })
}

btnClicked = (i) => {
    sessionStorage.setItem('current_blog', JSON.stringify(this.blogs[i]))
}


//** WINDOW ON LOAD EXECUTE EVENT */ 
window.onload = () => {
    getRecentBlogs();
}