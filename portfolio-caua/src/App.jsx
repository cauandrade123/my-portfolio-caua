import './App.css'
import Typical from 'react-typical'
import cr7 from '../src/assets/images/cr7.webp'
function App() {

  

  return (
  <main className='div-principal'>
      <div className="content">
        <header>
            <div className="caua">
                <h1>Cauã Andrade  Condé</h1>
            </div>
            <div className="lista">
                <li>Sobre Mim</li>
                <li>Projetos</li>
                <li>Tecnologias</li>
            </div>
        </header>
        <section className="myself">
            <Typical className='animacao'
                    steps={[
                      '<Cauã Andrade Condé/>', 2000,
                      "Dev-fullstack", 10500,
                    ]}
                    loop={2} 
            /> 

            <img src={cr7} alt="Foto Cauã" />
        </section>
        <section className="aboutme">
            <div className="cabecalho-sobremim">
              <h1>Quem sou eu?</h1>
            </div>
            <div className="content-sobremim">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quia laudantium! Vitae unde cum quaerat eos adipisci dolores quos reprehenderit. Inventore vitae expedita nisi vel id maiores mollitia, eligendi eaque.</p>

              <div className="icones">
                  <img src="" alt="Linkedin" />
                  <img src="" alt="Currículo" />
                  <img src="" alt="Github" />
              </div>      
            </div>
        </section>
        <section className="stacks">
            <h1>Tecnologias dominadas</h1>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>Javascript</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto Node" />
                <h4>Node</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>React</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>Html</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>CSSt</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>SCSS</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>MYSQL</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>Sql Server</h4>
            </div>
            <div className="cards-tecnologias">
                <img src="" alt="foto javascript" />
                <h4>Git</h4>
            </div>
        </section>
        <section className="meus-projetos">

        </section>
      </div>     
  </main>
  )
}

export default App
