
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handling submit');
    const params = new FormData(event.target);
    console.log(params) 
    props.onCreatePost(params)
    event.target.reset()
    }
  




  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}
