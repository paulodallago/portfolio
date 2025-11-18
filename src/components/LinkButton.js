import { green, desktop } from "../utils/utils";

export const LinkButton = (props) => {
  const styles = {
    linkButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      marginRight: "1vw",
      fontSize: desktop ? "xxx-large" : "medium",
    },
    link: {
      color: green,
      textDecoration: "none",
      fontSize: desktop ? "x-large" : "medium",
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
