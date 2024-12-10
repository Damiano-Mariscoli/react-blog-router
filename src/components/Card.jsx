import axios from "axios";
import { useEffect, useState } from "react";

export default function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="d-flex container">
      {posts.map((post) => (
        <div key={post.id} className="card" style={{ width: "18rem" }}>
          <img
            src={`http://localhost:3000/images/${post.image}`}
            className="card-img-top"
            alt={post.title}
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
