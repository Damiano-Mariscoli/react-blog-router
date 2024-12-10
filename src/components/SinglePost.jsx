import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function SinglePosts() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  post.tags = [];
  useEffect(() => {}, []);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h1>{post.title}</h1>
              <img
                className="w-50"
                src={`http://localhost:3000/images/${post.image}`}
                alt=""
              />
              <p>{post.content}</p>
              <ul>
                {post.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button onClick={() => navigate(-1)}>
          torna alla pagina precedente
        </button>
      </div>
    </>
  );
}
