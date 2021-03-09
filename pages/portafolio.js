import Layout from '../components/Layout'
import Link from 'next/link'
import {projects} from '../profile'

const Github = () => (
  <Layout>
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark shadow ">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>

            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 py-2" key={i}>
                <div className="cardhover card h-100  shadow">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt="port"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#">Conoce mas</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">Mas projectos </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Github;