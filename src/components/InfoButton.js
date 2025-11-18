import { desktop, green, white } from "../utils/utils";

export const InfoButton = (props) => {
  const styles = {
    button: {
      padding: props.size === 3 ? "2px" : "10px",
      borderRadius: "8px",
      border: 0,
      backgroundColor: green,
      color: white,
      width: props.size !== undefined ? (desktop ? "25vw" : "80vw") : (desktop ? "50vw" : "80vw"),
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
