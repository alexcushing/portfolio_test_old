import React from 'react';

import Link from 'app/components/Link';
import Nav from 'app/components/navBar';

const Skills = () => {
  return (
  <div>
    <Nav name="Skills" />
    <div className="panel panel-default limitWidth homeBox">
      <div className="mainSkills">
        <div className="expert">
          <h2>Expert</h2>
          <ul>
            <li>
              C/C++
            </li>
              <li>
                Python
              </li>
            <li>
              JavaScript
            </li>
            <li>
              JQuery
            </li>
            <li>
              CSS3 / SASS / SCSS
            </li>
            <li>
              HTML5
            </li>
            <li>
              Bootstrap
            </li>
          </ul>
        </div>
        <div className="proficient">
          <h2>Proficient</h2>
          <ul>
              <li>
                Django
              </li>
            <li>
              Jade / Pug
            </li>
            <li>
              MongoDB
            </li>
          </ul>
        </div>
        <div className="competent">
          <h2>Competent</h2>
          <ul>
            <li>
              ReactJS
            </li>
              <li>
                NodeJS
              </li>
            <li>
              SQL
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>);
}

export default Skills;
