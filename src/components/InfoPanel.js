import { lg, space } from "../utils/utils";
import { InfoButton } from "./InfoButton";
import { Language } from "./Language";

export const InfoPanel = () => {
  const styles = {
    panel: {
      backgroundColor: lg,
      marginTop: space,
    },
    about: {
      paddingTop: "1vh",
      padding: "1vh",
      width: "70vw",
      margin: "0 auto",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    spacedButton: {
      marginTop: "5vh",
      paddingBottom: "2vh",
    },
  };
  return (
    <div style={styles.panel}>
      <div style={styles.about} id="info">
        <h1>Sobre mim</h1>
        <p>
          Minha jornada na área da tecnologia teve início em 2020, quando
          ingressei no Ensino Médio Integrado ao Técnico em Informática no
          IFSul, em Passo Fundo. Durante os três anos do curso, estudei
          programação, bancos de dados, sistemas operacionais, redes de
          computadores e hardware. Atualmente, estou cursando o primeiro
          semestre do Bacharelado em Ciência da Computação, também no IFSul,
          durante o turno da manhã.
        </p>
        <p>
          Ao longo dos meus estudos, desenvolvi uma variedade de projetos,
          incluindo a criação de APIs para manipulação e gerenciamento de bancos
          de dados SQL e Google Firebase. Realizei operações como listagem,
          inserção e edição de dados em aplicações web. Utilizei diversas
          tecnologias, tais como JavaScript, Node.js, TypeScript, jQuery,
          Bootstrap, Vue e Vuelidate, além do Jest para testes de
          funcionalidade. Todos esses projetos estão disponíveis no GitHub.
        </p>
        <p>
          Em minha carreira profissional, já atuei como técnico de informática
          prestando assistência e realizando a manutenção de equipamentos e
          máquinas, e atualmente sou estagiário em desenvolvimento na Alfasig
          Experience.
        </p>
      </div>
      <div style={styles.list}>
        <h1>Oficinas e Cursos</h1>
        <InfoButton
          text="Introdução ao React.js - Semana Acadêmica do IFSul Passo Fundo"
          path={require("../resources/certificates/Semana Acadêmica.pdf")}
        />
        <InfoButton
          text="Introdução ao Python - Semana Acadêmica do IFSul Passo Fundo"
          path={require("../resources/certificates/Semana Acadêmica.pdf")}
        />
        <InfoButton text="Imersão Java - Alura" />
        <InfoButton
          text="Introdução à Cibersegurança - Cisco NetAcad"
          path={require("../resources/certificates/Cybersecurity.pdf")}
        />
        <InfoButton
          text="Aplicação de Modelos de Deep Learning"
          path={require("../resources/certificates/Congresso.pdf")}
        />
        <InfoButton
          text="JavaScript - DevMedia"
          path={require("../resources/certificates/JS DevMedia.pdf")}
        />
        <InfoButton
          text="React - DevMedia"
          path={require("../resources/certificates/React DevMedia.pdf")}
        />
        <InfoButton
          text="PCAP: Programming Essentials in Python - Python Institute"
          path={require("../resources/certificates/Python Institute.pdf")}
        />
      </div>
      <div style={styles.list}>
        <h1>Idiomas</h1>
        <InfoButton
          text="Inglês | Avançado C1"
          path={require("../resources/certificates/Inglês.pdf")}
          size={2}
        />
        <InfoButton
          text="Francês | Intermediário B1"
          path={require("../resources/certificates/Francês.pdf")}
          size={2}
        />
      </div>
      <div>
        <h1>Linguagens</h1>
        <Language
          value={70}
          color="#ccba44"
          img={require("../resources/lang/js.png")}
        />
        <Language
          value={60}
          color="#ff5500"
          img={require("../resources/lang/java.png")}
        />
        <Language
          value={55}
          color="#8f181d"
          img={require("../resources/lang/delphi.png")}
        />
        <Language
          value={50}
          color="#004581"
          img={require("../resources/lang/cpp.png")}
        />
        <Language
          value={50}
          color="#1f64a8"
          img={require("../resources/lang/sql.png")}
        />
        <Language
          value={40}
          color="#006db6"
          img={require("../resources/lang/ts.png")}
        />
      </div>
      <div style={styles.spacedButton}>
        <InfoButton
          text="Ver meu currículo"
          path={require("../resources/certificates/Currículo.pdf")}
        />
      </div>
    </div>
  );
};
