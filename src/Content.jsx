import { useState, useEffect } from "react";
import axios from "axios";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";






export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = (myPost) => {
    setIsPostsShowVisible(true);
    setCurrentPost(myPost)
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  }

  const handleCreatePost = (params) => {
    console.log(params)
    axios.post('http://localhost:3000/posts.json',params).then(response => {
      console.log(response.data);
      setPosts([...posts, response.data])
    })
    console.log('handling create post')
  }

  const handleUpdatePost = (postId, params) => {
    console.log('handling update post...');
    axios.patch(`http://localhost:3000/posts/${postId}.json`, params).then(response => {
      console.log(response.data);
      setPosts(
        posts.map(post => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      )
      setIsPostsShowVisible(false);

    })
  }

  const handleDestroyPost = (postId) => {
    console.log('hanlding destroy recipe')
    axios.delete(`http://localhost:3000/posts/${postId}.json`).then(response => {
      console.log(response.data);
      setPosts(posts.filter(post => post.id != postId))
    })
  }


  return (
    <div className="container">
      <Login />
      <LogoutLink />
      <Signup />
      <PostsNew onCreatePost={handleCreatePost} />
      <br />
      <br />
      <br />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost}/>
      </Modal>
    </div>

  );
}
