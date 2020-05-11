export const api = () => {
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        return 'http://ferociterbackend.local/wp-json/wp/v2'
    }
}

//** GET ALL POSTS */ 
export const getBlogs = () => {
    fetch(`http://ferociterbackend.local/wp-json/wp/v2/posts`).then((res) => {
        console.log('[THE RESPONSE FROM THE API CALL]:: ', res)

    }).catch((err) => {
        console.log('[BLOGS ERROR]:: ', err);
    })

}