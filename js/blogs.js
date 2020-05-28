
// new Vue({
//   el: '#blogsection',
//   data: {
//     blogs: [{ _title: 'Test' }]
//   },
//   created() {
//     // let that = this
//     axios.get('http://ferociterbackend.local/wp-json/wp/v2/posts').then(res => {
//       console.log('[AXIOS RESPONSE]:: ', res.data);
//       const { data } = res;
//       let new_data = []

//       data.forEach((ds) => {
//         ds._title = ds.title.rendered;
//         new_data.push(ds);

//         document.getElementById('my-blogs').getElementsByClassName('row d-flex').innerHTML =
//           `
//             <div class="col-md-4 d-flex ftco-animate">
//             <div class="blog-entry">
//               <a
//                 href="blog-single.html"
//                 class="block-20"
//                 style="background-image: url('images/image_3.jpg');"
//               >
//               </a>
//               <div class="text p-4 float-right d-block">
//                 <div class="topper d-flex align-items-center">
//                   <div class="one py-2 pl-3 pr-1 align-self-stretch">
//                     <span class="day">10</span>
//                   </div>
//                   <div class="two pl-0 pr-3 py-2 align-self-stretch">
//                     <span class="yr">2019</span>
//                     <span class="mos">August</span>
//                   </div>
//                 </div>
//                 <h3 class="heading mt-2">
//                   <a href="#">${ds.title.rendered}</a>
//                 </h3>
//                 <p>
//                   A small river named Duden flows by their place and supplies it
//                   with the necessary regelialia.
//                 </p>
//               </div>
//             </div
//             `
//       })



//       this.blogs = new_data

//       console.log("[BLOG DATA]:: ", this.blogs)
//     }).catch((err) => {
//       console.log('[AXIOS ERROR]:: ', err);
//     })
//   }
// })

// const test = new Vue({
//   el: '#vapp',
//   data: {
//     display: 'Vue Test',
//   },

// });



let blogs = [];


const getBlogs = () => {
  axios.get('http://ferociterbackend.local/wp-json/wp/v2/posts?_embed').then(res => {
    console.log('[AXIOS RESPONSE]:: ', res.data);
    const { data } = res;
    let new_data = []

    this.blogs = data

    data.forEach((ds, i) => {
      ds._title = ds.title.rendered;
      new_data.push(ds);
      console.log('[FEATURED IMAGE]:: ');

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

      document.getElementById('my-blogs').innerHTML += blog_elem
    })




  }).catch((err) => {
    console.log('[AXIOS ERROR]:: ', err);
  })
}


btnClicked = (i) => {
  sessionStorage.setItem('current_blog', JSON.stringify(this.blogs[i]))
}

window.onload = () => {
  getBlogs();
}

