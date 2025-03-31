import { margin } from "polished";
import { green } from "../utils/utils";

export const LinkButton = (props) => {
  const styles = {
    linkButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      marginRight: "1vw",
      fontSize: "xxx-large",
    },
    link: {
      color: green,
      textDecoration: "none",
      fontSize: "x-large",
      margin: "auto 0",
    },
  };

  return (
    <div style={styles.linkButton} className="button">
      <div style={styles.icon}>{props.children}</div>
      <a target={props.target} href={props.href} style={styles.link}>
        {props.text}
      </a>
    </div>
  );
};
