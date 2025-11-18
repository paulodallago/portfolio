import { useState } from "react";
import { lg } from "../utils/utils";
import { FaBars } from "react-icons/fa6";
import { SideMenu } from "./SideMenu";

const styles = {
  header: {
    backgroundColor: lg,
    padding: "2vh",
    fontSize: "xx-large",
    fontWeight: "300",
    position: "fixed",
    top: "0",
    width: "100%",
    height: "5vh",
    zIndex: "10",
  },
  menu: {
    float: "inline-start",
  },
};

export const Header = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  return (
    <div style={styles.header} className="header">
      <SideMenu visible={sideMenuVisible} setVisible={setSideMenuVisible} />
      <FaBars style={styles.menu} onClick={() => setSideMenuVisible(true)} />
      Paulo Dal Lago
    </div>
  );
};
