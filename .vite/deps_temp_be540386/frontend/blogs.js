// BlogSection.js
import React, { useEffect, useState } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Latest Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.coverImage} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>{blog.brief}</p>
            <a href={`https://your-hashnode-username.hashnode.dev/${blog.slug}`} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <p>{new Date(blog.dateAdded).toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
