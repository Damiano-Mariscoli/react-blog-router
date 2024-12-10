import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function SinglePosts() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h1 className="card-title">{post.title}</h1>
              <img
                className="card-img"
                src={`http://localhost:3000/images/${post.image}`}
                alt=""
              />
              <p className="card-text">{post.content}</p>
              <ul>
                {post.tags &&
                  post.tags.map((tag, index) => <li key={index}>{tag}</li>)}
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
