import "./styles.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import React, { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; //const or state as we are not changing it in the application
  useEffect(() => {
    async function fetchPosts() {
      //anither func as we cant put async to useEffect func directly
      setLoading(true); //as in middle of fetching data
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  function paginate(number) {
    setCurrentPage(number);
  }

  // Get current Posts
  const indexOfLastPost = currentPage * postsPerPage; //index of last post in the specific page
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPage);
  return (
    <div className="container">
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalposts={posts.length}
        currentPage={currentPage}
      />
      {/*currentPage change,how many buttons  */}
    </div>
  );
}
//fetchData is not an async function as , no promise returned , no need for async await / .then

//jo input me vo , apis call paint on screen
//1 form
//no form
