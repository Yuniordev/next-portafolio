import {skill, experience, projects} from '../profile'
import Link from 'next/link'

const Experiencia = () => (
    <div className="col-md-8">
    <div className="card skill-color bg-ligth shadow">
      <div className="card-body">
        <h1>Experience</h1>

        <ul>
          {experience.map(({ title, from, to, description }, index) => (
            <li key={index}>
              <h3>{title}</h3>
              <h5>
                {from} - {to}
              </h5>
              <p>{description}</p>
            </li>
          ))}
        </ul>
        <Link href="/experience">
          <a className="btn btn-primary">Contratame</a>
        </Link>
      </div>
    </div>
  </div>
)

export default Experiencia;