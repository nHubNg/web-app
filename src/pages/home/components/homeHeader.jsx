import { Link, NavLink } from 'react-router-dom';
import obj_triangle from '../../../img/obj_triangle.png';

const HomeHeader = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bolder' : 'light',
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
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914860/nhubNigeria/Union_tnkbgd.png"
                alt=""
                width="70px"
              />
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
                    to="/ourcourses"
                  >
                    Our Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/programs"
                  >
                    Programs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/coworkingspace"
                  >
                    Co-Working Space
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={navLinkStyle}
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>

                <a
                  className="btn btn-outline-primary btn-lg"
                  href="https://sketchfab.com/3d-models/nhub-nigeria-a9c20eb02674490c8c44a0aa1b748a39"
                  target="_blank"
                  rel="noreferrer"
                >
                  TAKE A TOUR
                </a>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h1 className="display-1 mb-4">nHub</h1>
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
