import { InfoButton } from "./InfoButton";
import img from "../resources/bg.jpg";

export const Project = (props) => {
  const styles = {
    container: {
      width: "90vw",
      margin: "5vh auto",
      display: "flex",
    },
    text: {
      width: "65%",
      marginRight: props.position == "left" ? "5%" : 0,
      marginLeft: props.position == "right" ? "5%" : 0,
    },
    img: {
      maxWidth: "25%",
    },
  };
  return (
    <div style={styles.container}>
      {props.position == "right" ? (
        <img src={props.image} alt="profile" style={styles.img} />
      ) : null}
      <div style={styles.text}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <InfoButton text="Ver no GitHub" size={3} path={props.link} />
      </div>
      {props.position == "left" ? (
        <img src={props.image} alt="profile" style={styles.img} />
      ) : null}
    </div>
  );
};
