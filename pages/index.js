import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Link from 'next/link'
import Experiencia from '../components/Experiencia';



const Index = () => (
  <Layout>
    {/**header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="home-perfil card card-body bg-dark text-light shadow">
          <div className="row">
            <div className="col-md-4">
              <img
                src="ryan-ray-profile2.jpg"
                alt="profile"
                className="perfil-hover img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h1>Yunior Castillo</h1>
              <h5>Fullstack JavaScript Developer</h5>
              <p>
                Soy programador web y diseñador web freelancer, ubicado en
                Ciudad de Cartagena/Colombia. Actualmente creo, diseño,
                actualizo y mantengo páginas y portales web avanzados tanto en
                el lado del servidor (Back-end) como en el lado del cliente
                (Front-end, UX/UI). Continuamente aprendiendo y adquiriendo
                nuevas habilidades en función a las actuales y futuras demandas
                y tendencias tecnológicas en el campo del diseño y desarrollo de
                aplicaciones web en general. Apasionado con el trabajo que
                realizo, ofreciendo en cada proyecto total atención, dedicación,
                personalización y calidad al cliente.
              </p>
              <Link href="/experience">
                <a className="btn btn-primary">Contratame</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**second secction*/}
    <div className="row py-3">
      <Experiencia />
     

      <Skills />
    </div>

    {/**portafolio */}
    
  </Layout>
);





export default Index;
