import React from 'react';
import Link from 'app/components/Link';

var Nav = React.createClass({
  render: function () {
    console.log(this.props.name);
    if(this.props.name == 'index'){
      return(
        <div>
          <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a>
                  <Link
                    route="index"
                    access="Home"
                    id="index"
                    >
                    Home
                  </Link></a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link
                    id="Skills"
                    access="Skills"
                    href="/skills"
                  >
                    Skills
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link
                    id="Projects"
                    access="Projects"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )
    }

    else if (this.props.name == 'Skills') {
      return(
        <div>
          <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a>
                  <Link
                    route="index"
                    access="Home"
                    id="index"
                    >
                    Home
                  </Link></a>
              </li>
              <li className="nav-item active">
                <a href="#">
                  <Link
                    id="Skills"
                    access="Skills"
                    href="/skills"
                  >
                    Skills
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link
                    id="Projects"
                    access="Projects"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )
    }
    else if (this.props.name == 'Projects') {
      return(
        <div>
          <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a>
                  <Link
                    route="index"
                    access="Home"
                    id="index"
                    >
                    Home
                  </Link></a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link
                    id="Skills"
                    access="Skills"
                    href="/skills"
                  >
                    Skills
                  </Link>
                </a>
              </li>
              <li className="nav-item active">
                <a href="#">
                  <Link
                    id="Projects"
                    access="Projects"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )
    }

  }
});



export default Nav;
