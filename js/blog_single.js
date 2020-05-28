// console.log('[BLOG]')

const displayBlog = () => {

}

window.onload = () => {
    let blog = JSON.parse(sessionStorage.getItem('current_blog'));

    console.log('[CURRENT BLOG]:: ', blog);
    // let elem = document.createElement('div');

    //     elem =
    //         `
    // <div class='col-lg-8 ftco-animate fadeInup ftco-animated'>
    //     <p>
    //         <img src=${blog._embedded['wp:featuredmedia'][0].source_url} class='img-fluid' />
    //     </p>

    //     <h2 class='mb-3' style="color: black">
    //         ${blog.title.rendered}
    //     </h2>

    //     <p>
    //     ${blog.content.rendered}
    //     </p>
    // </div>
    // `

    // document.getElementById('blog').innerHTML = elem;
    document.getElementById('blog-title').textContent = blog.title.rendered
    document.getElementById('blog-img').innerHTML += `
    <img src=${blog._embedded['wp:featuredmedia'][0].source_url} alt="" class="img-fluid" />
    
    `

    document.getElementById('blog-content').innerHTML += `
    <p>
     ${blog.content.rendered}
      </p>
    `
}

