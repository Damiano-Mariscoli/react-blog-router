import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row g-5">
        {posts.map((post) => (
          <div key={post.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src={`http://localhost:3000/images/${post.image}`}
                className="card-img-top mh-100"
                alt={post.title}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
              </div>
              <div className="card-footer">
                <Link to={`/posts/${post.id}`}>Home Page</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
