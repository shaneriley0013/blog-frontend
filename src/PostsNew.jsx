export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}
