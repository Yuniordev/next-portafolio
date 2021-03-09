import {skill, experience, projects} from '../profile'

const Skills = () => (
    <div className="col-md-4 mb-2 ">
        <div className="skill-color card bg-ligth shadow">
          <div className="card-body">
            <h1>Skill</h1>

            {skill.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
)

export default Skills;