import { Sidebar } from "primereact/sidebar";
import { darker } from "../utils/utils";
import { SideMenuItem } from "./SideMenuItem";

export const SideMenu = (props) => {
  const styles = {
    sidebar: {
      backgroundColor: darker,
    },
  };

  return (
    <Sidebar
      visible={props.visible}
      onHide={() => props.setVisible(false)}
      style={styles.sidebar}
    >
      <SideMenuItem
        title={"Início"}
        goto={"home"}
        setVisible={props.setVisible}
      />
      <SideMenuItem
        title={"Sobre mim"}
        goto={"info"}
        setVisible={props.setVisible}
      />
      <SideMenuItem
        title={"Projetos"}
        goto={"projetos"}
        setVisible={props.setVisible}
      />
      <SideMenuItem
        title={"Links"}
        goto={"links"}
        setVisible={props.setVisible}
      />
    </Sidebar>
  );
};
