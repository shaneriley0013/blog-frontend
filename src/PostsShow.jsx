import axios from "axios"


export function PostsShow(props) {
  const handleSubmit = (event) => {
    console.log("testing");
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
  }

  const handleClick = () => {
    console.log('handling click')
    axios.delete(`http://localhost:3000/posts/${props.post.id}.json`).then(response => {
      console.log(response.data);
    })
  }



  return (
    <div>
      <p><b>title:</b>{props.post.title}</p>
      <p><b>body:</b>{props.post.body}</p>
      <p>{<img src={props.post.image}></img>}</p>

      <form onSubmit={handleSubmit}>
        <p>Title: <input name="title" type="text" defaultValue={props.post.title} /></p>
        <p>Body: <input name="body" type="text" defaultValue={props.post.body} /></p>
        <p>Image: <input name="image" type="text" defaultValue={props.post.image} /></p>
        <button type="input">Update Post</button>
      </form>
      <br />
      <br />
      <button onClick={handleClick}>Delete Post</button>
      
    </div>
  )
}

