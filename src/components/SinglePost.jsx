import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePosts() {
  const { id } = useParams();
  useEffect(() => {}, []);
  const navigate = useNavigate();
  return (
    <>
      <div>
        {console.log(id)}
        <h1>ID Post: {id}</h1>
        <button onClick={() => navigate(-1)}>
          torna alla pagina precedente
        </button>
      </div>
    </>
  );
}
