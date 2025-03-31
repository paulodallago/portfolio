import img from "../resources/bg.jpg";
import pfp from "../resources/pfp.png";
import { space } from "../utils/utils";

export const Card = () => {
  const styles = {
    card: {
      marginTop: "11vh",
      width: "90vw",
      borderRadius: "1vw",
      backgroundImage: "url(" + img + ")",
      backgroundSize: "cover",
      display: "flex",
      padding: "1vh 0",
    },
    pfp: {
      margin: "1vh",
    },
  };
  return (
    <div style={styles.card}>
      <div style={{ width: "65%", margin: "auto" }}>
        <h1>Paulo Henrique Dal Lago</h1>
        <p>
          Estou cursando Ciência da Computação e sou formado como Técnico em
          Informática pelo IFSul. Tenho interesse em desenvolvimento e busco uma
          oportunidade para desenvolver minhas habilidades nessa área. Ainda
          assim, estou aberto a aprender e aprimorar conhecimentos em outras
          áreas da computação.
        </p>
      </div>
      <img src={pfp} alt="profile" width="25%" style={styles.pfp} />
    </div>
  );
};
