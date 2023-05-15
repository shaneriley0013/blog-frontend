export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="row">
        {props.posts.map(post => (
          <div key={post.id} className="col-sm-6 mb-3 mb-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <img src={post.image || "https://t3.ftcdn.net/jpg/02/62/89/56/360_F_262895694_ZTEujfCykcG2vJoA0UVgZIPK1dTMlc9B.jpg"} />
                <p><button className="btn btn-primary" onClick={() => {props.onShowPost(post)}}>More info</button></p>
              </div>
            </div>
          </div>
        ))}
        
        
      </div>      
      

    </div>
  );
}