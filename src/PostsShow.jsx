export function PostsShow(props) {
  // console.log(props.post)
  return (
    <div>
      <p><b>title:</b>{props.post.title}</p>
      <p><b>body:</b>{props.post.body}</p>
      <p>{<img src={props.post.image}></img>}</p>
      
    </div>
  )
}

