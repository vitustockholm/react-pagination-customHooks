import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';
import Pagination from '../hooks/usePaginated';
import axios from 'axios';
//
const PostPage = () => {
  //
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log('currentPagefrom jsonpalce', currentPage);

  return (
    <div className='container'>
      <h3 className='text-primary'>Page: [{currentPage}]</h3>{' '}
      <h3>
        from index [{indexOfFirstPost + 1}] to [{indexOfLastPost}] index
      </h3>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default PostPage;
