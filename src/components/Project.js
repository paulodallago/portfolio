import { margin } from "polished";
import { desktop } from "../utils/utils";
import { InfoButton } from "./InfoButton";

export const Project = (props) => {
  const styles = {
    container: {
      width: "90vw",
      margin: desktop ? "5vh auto" : "0 auto",
      display: "flex",
      flexDirection: desktop ? "row" : (props.position === "left" ? "column-reverse" : "column"),
      alignItems: desktop ? "" : "center"
    },
    text: {
      width: desktop ? "65%" : "80%",
      marginRight: props.position === "left" ? "5%" : 0,
      marginLeft: props.position === "right" ? "5%" : 0,
      margin: desktop ? "" : "0 auto"
    },
    img: {
      maxWidth: desktop ? "25%" : "60%",
      margin: desktop ? "" : "0 auto"
    },
  };
  return (
    <div style={styles.container}>
      {props.position === "right" ? (
        <img src={props.image} alt="profile" style={styles.img} />
      ) : null}
      <div style={styles.text}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <InfoButton text="Ver no GitHub" size={3} path={props.link} />
      </div>
      {props.position === "left" ? (
        <img src={props.image} alt="profile" style={styles.img} />
      ) : null}
    </div>
  );
};
