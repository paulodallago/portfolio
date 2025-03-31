import { margin, padding } from "polished";

export const SideMenuItem = (props) => {
  const handleClick = () => {
    props.setVisible(false);
  };

  const styles = {
    box: {
      borderBottom: "1px solid white",
      width: "90%",
      paddingBottom: "1vw",
      margin: "1vw auto",
    },
    text: {
      color: "white",
      textDecoration: "none",
    },
  };
  return (
    <div style={styles.box}>
      <a href={"#" + props.goto} style={styles.text} onClick={handleClick}>
        {props.title}
      </a>
    </div>
  );
};
