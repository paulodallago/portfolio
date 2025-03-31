import { green, white } from "../utils/utils";

export const InfoButton = (props) => {
  const styles = {
    button: {
      padding: props.size == 3 ? "2px" : "10px",
      borderRadius: "8px",
      border: 0,
      backgroundColor: green,
      color: white,
      width: props.size != undefined ? "25vw" : "50vw",
      marginBottom: "1vh",
    },
  };
  return (
    <button
      style={styles.button}
      onClick={() => {
        window.open(props.path, "_blank");
      }}
    >
      {props.text}
    </button>
  );
};
