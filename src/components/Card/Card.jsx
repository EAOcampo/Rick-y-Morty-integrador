import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  return (
    <div className={style.container} key={id}>
      <div className={style.containerBtn}>
        <button className={style.btn} onClick={onClose}>
          X
        </button>
      </div>
      <div className={style.medio}>
        <Link to={`/detail/${props.id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
        <h2 className={style.status}>
          {status} - {species}
        </h2>
        {/* <h2>{species}</h2> */}
        <h2 className={style.subtittle}>Genero</h2>
        <h2 className={style.gender}>{gender}</h2>
        <h2 className={style.subtittle}>Origin</h2>
        <h2 className={style.origin}>{origin}</h2>
      </div>
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
