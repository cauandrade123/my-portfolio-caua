import './App.css'
import Typical from 'react-typical'
import cr7 from '../src/assets/images/cr7.webp'
function App() {

  

  return (
  <main className='div-principal'>
      <div className="content">
        <header>
            <div className="caua">
                <h3> &lt;Cauã Andrade  Condé/&gt;</h3>
            </div>
            <div className="lista">
                <li>Sobre Mim</li>
                <li>Projetos</li>
                <li>Tecnologias</li>
            </div>
        </header>
        <section className="myself">
            <div className="texto-animado">
                <Typical className='animacao'
                        steps={[
                        '<Cauã Andrade Condé/>', 2000,
                        "Desenvolvedor Full-stack", 10500,
                        ]}
                        loop={Infinity} 
                /> 

                <div className="links-midias">
                    <div className="botao-sobremim">
                        <button  className='butao-sobremim'>Baixar Currículo</button>
                    </div>
                    <div className="botoes">
                      <img className='icones' src="../src/assets/images/linkedin.png" alt="" />
                      <img className='icones' src="../src/assets/images/github.png" alt="" />
                      <img className='icones' src="../src/assets/images/whatsapp.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="foto">
                <img className='foto-caua' src={cr7} alt="Foto Cauã" />
            </div>
        </section>
        <section className="aboutme">
            <div className="cabecalho-sobremim">
              <h1>Quem sou eu?</h1>
            </div>
            <div className="content-sobremim">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quia laudantium! Vitae unde cum quaerat eos adipisci dolores quos reprehenderit. Inventore vitae expedita nisi vel id maiores mollitia, eligendi eaque.</p>

              <div className="icon-web-dev">
                  <img className='icon-webdev' src={cr7} alt="icon-web-dev" />
              </div>      
            </div>
        </section>
        <section className="stacks">
             <h1>Tecnologias dominadas</h1>
                        <div className="cartoes">
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="../src/assets/images/icons8-javascript-48.png" alt="foto javascript" />
                                <h4>Javascript</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="../src/assets/images/icons8-nó-js-48.png" alt="foto Node" />
                                <h4>Node</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="../src/assets/images/icons8-nativo-de-reagir-48.png" alt="foto javascript" />
                                <h4>React</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="../src/assets/images/icons8-html-48.png" alt="foto html" />
                                <h4>Html</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="../src/assets/images/icons8-css-48.png" alt="foto css" />
                                <h4>CSS</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="../src/assets/images/icons8-atrevimento-48.png" alt="foto sass" />
                                <h4>SCSS</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="../src/assets/images/icons8-mysql-48.png" alt="foto mysql" />
                                <h4>MYSQL</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="" alt="foto sql server" />
                                <h4>Sql Server</h4>
                            </div>
                            <div className="cards-tecnologias">
                                <img className='image-icon-techs' src="" alt="foto git" />
                                <h4>Git</h4>
                            </div>
                        </div>      
        </section>
        <section className="meus-projetos">
            <div className="cabecalho-meusprojetos">
                    <h1>Meus Projetos</h1>
            </div>
            <div className="projetos">
                <h5>Clinica Médica</h5>
            </div>
        </section>
      </div>     
  </main>
  )
}

export default App
