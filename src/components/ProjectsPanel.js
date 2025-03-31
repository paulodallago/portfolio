import { Project } from "./Project";

export const ProjectsPanel = () => {
  return (
    <div id="projetos">
      <h1>Meus projetos</h1>
      <Project
        position="left"
        title={"cs_ts_orm_api"}
        text={
          "Usando um estudo de caso baseado no jogo eletrônico Counter Strike, desenvolvi uma API que automatiza a criação e manutenção de itens em um banco de dados SQL, além de incluir testes de funcionalidade. O projeto foi desenvolvido utilizando as tecnologias TypeScript e Node.js, e os testes foram realizados com Jest."
        }
        image={require("../resources/projects/csts.png")}
        link={"https://github.com/paulodallago/cs_ts_orm_api"}
      />
      <Project
        position="right"
        title={"linguagensApi & aluraStickers"}
        text={
          "Essas aplicações foram desenvolvidas como parte do curso “Imersão Java” e são capazes de consumir e enviar dados a uma API, e usá-los para a criação de stickers personalizados."
        }
        image={require("../resources/projects/alura.png")}
        link={"https://github.com/paulodallago/linguagens-api"}
      />
      <Project
        position="left"
        title={"FirebaseAuth"}
        text={
          "Usando a ferramenta Firestore do Google, desenvolvi uma aplicação com interface gráfica para manipulação de objetos no banco de dados da ferramenta. Além disso, a aplicação ainda conta com outras funcionalidades fornecidas pelo Firestore, como autenticação usando uma conta Google e verificação de e-mail."
        }
        image={require("../resources/projects/bd.png")}
        link={"https://github.com/paulodallago/FirebaseAuth"}
      />
      <Project
        position="right"
        title={"CadastroCS"}
        text={
          "Também usando o estudo de caso do Counter Strike, essa aplicação foi desenvolvida para cadastro e validação de dados, utilizando armazenamento local de dados, o framework Vue, Vuelidate e a biblioteca Bootstrap."
        }
        image={require("../resources/projects/cadastro.png")}
        link={"https://github.com/paulodallago/CadastroCS"}
      />
      <Project
        position="left"
        title={"Portfólio"}
        text={
          "Este próprio portfólio, além de ser uma demonstração do meu perfil, foi um processo de aprendizado. Durante o desenvolvimento, adquiri conhecimentos em técnicas para torná-lo responsivo e compatível com diversos navegadores e tamanhos de tela."
        }
        image={require("../resources/projects/portfolio.png")}
        link={"https://github.com/paulodallago/portfolio"}
      />
    </div>
  );
};
