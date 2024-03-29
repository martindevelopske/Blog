// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import "../styling/blogs.css";

// Main component
const Blogs = () => {
  // State and dispatch setup
  const dispatch = useDispatch();
  const searchInput = useSelector(selectUserInput);
  const apiToken = "a2819074f5390f5f39ed76b10780aa39";
  const blogsapi = `https://gnews.io/api/v4/search?q=${searchInput}&token=${apiToken}&lang=en&country=us&max=10`;
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch data useEffect
  useEffect(() => {
    axios
      .get(blogsapi)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [searchInput, dispatch, blogsapi]);

  // Return JSX
  return (
    <div className="blog__page">
      <h1 className="blog__page__header">Blogs</h1>
      {loading ? (
        <BeatLoader loading={loading} size={40} />
      ) : (
        <div className="blogs">
          {blogs?.articles?.map((blog, index) => (
            <a
              className="blog"
              target="_blank"
              href={blog.url}
              key={index}
              rel="noreferrer"
            >
              <img src={blog.image} alt="blog thumbnail" />
              <div>
                <h3 className="sourceName">
                  <span>{blog.source.name}</span>
                  <p>{blog.publishedAt}</p>
                </h3>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
              </div>
            </a>
          ))}
          {blogs?.totalArticles === 0 && (
            <h3 className="no__blogs">
              No articles available 😞. Please search for something else to
              read.
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
