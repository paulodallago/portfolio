import { lg } from "../utils/utils";
import { LinkButton } from "./LinkButton";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

export const LinkPanel = () => {
  const styles = {
    panel: {
      backgroundColor: lg,
      display: "flex",
      justifyContent: "center",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };
  return (
    <div style={styles.panel} id="links">
      <div>
        <h1 style={{ textAlign: "center" }}>Links</h1>
        <div style={styles.list}>
          <LinkButton target="_blank" text="paulohdallago@gmail.com">
            <FaEnvelope />
          </LinkButton>
          <LinkButton
            target="_blank"
            href={"https://wa.me/5554981202518"}
            text="(54) 98120-2518"
          >
            <FaWhatsapp />
          </LinkButton>
          <LinkButton
            target="_blank"
            href={"https://github.com/paulodallago"}
            text="paulodallago"
          >
            <FaGithub />
          </LinkButton>
          <LinkButton
            target="_blank"
            href={"https://www.linkedin.com/in/paulo-henrique-dal-lago/"}
            text="Paulo Henrique Dal Lago"
          >
            <FaLinkedin />
          </LinkButton>
          <LinkButton
            target="_blank"
            href={"https://instagram.com/phdallago?igshid=OTk0YzhjMDVlZA=="}
            text="@phdallago"
          >
            <FaInstagram />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
