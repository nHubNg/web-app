import { Link, NavLink } from 'react-router-dom';
import obj_triangle from '../../../img/obj_triangle.png';
import logo from '../../../img/hub/Union.png';

const HomeHeader = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'light',
    };
  };

  return (
    <div>
      <div data-spy="scroll" data-target="#navbar" className="static-layout">
        <nav id="header-navbar" className="navbar navbar-expand-lg py-4">
          <div className="container">
            <Link
              className="navbar-brand d-flex align-items-center text-white"
              to="/"
            >
              <img src={logo} alt="" width="70px" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-nav-header"
              aria-controls="navbar-nav-header"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="lnr lnr-menu"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-nav-header">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink style={navLinkStyle} className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/OurCourses"
                  >
                    Our Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/Programs"
                  >
                    Programs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/CoWorkingSpace"
                  >
                    Co-Working Space
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </li>

                <a className="btn btn-outline-primary btn-lg" href="/">
                  TAKE A TOUR ROUND THE HUB
                </a>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron d-flex align-items-center">
          <div className="container text-center">
            <h1 className="display-1 mb-4">NHUB</h1>
          </div>
          <div className="rectangle-1"></div>
          <div className="rectangle-2"></div>
          <div className="rectangle-transparent-1"></div>
          <div className="rectangle-transparent-2"></div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="triangle triangle-1">
            <img src={obj_triangle} alt="" />
          </div>
          <div className="triangle triangle-2">
            <img src={obj_triangle} alt="" />
          </div>
          <div className="triangle triangle-3">
            <img src={obj_triangle} alt="" />
          </div>
          <div className="triangle triangle-4">
            <img src={obj_triangle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
