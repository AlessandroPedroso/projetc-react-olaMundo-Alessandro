import BotaoPrincipal from "../BotaoPrincipal";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`../../../src/assets/posts/${post.id}/capa.png`}
          alt="imagem da capa"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
