import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'light',
    };
  };

  return (
    <>
      <div data-spy="scroll" data-target="#navbar" className="static-layout">
        <nav id="header-navbar" className="navbar navbar-expand-lg py-4">
          <div className="container">
            <Link
              className="navbar-brand d-flex align-items-center text-white"
              to="/"
            >
              {/* <h3 className="font-weight-bolder mb-0">NHUB</h3> */}
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/nhubNigeria/v1678914860/Union_tnkbgd.png"
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
            <div className="collapse navbar-collapse " id="navbar-nav-header">
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

                <a className="btn btn-outline-primary btn-lg" href="https://sketchfab.com/3d-models/nhub-nigeria-a9c20eb02674490c8c44a0aa1b748a39" target='_blank' rel='noreferrer'>
                  TAKE A TOUR ROUND THE HUB
                </a>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="jumbotron jumbotron-single d-flex align-items-center"
          style={{
            backgroundImage: `url(${props.bg})`,
          }}
        >
          <div className="container text-center header-text">
            <h1 className="display-2 mb-4">{props.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
