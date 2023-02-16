import { Link, NavLink } from 'react-router-dom';
import obj_triangle from '../../../img/obj_triangle.png';

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
            <a
              className="navbar-brand d-flex align-items-center text-white"
              href="/"
            >
              <h3 className="font-weight-bolder mb-0">NHUB</h3>
            </a>
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
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </li>

                <a className="btn btn-outline-primary btn-lg" href="/">
                  TAKE A TOUR ROUND THE HUB
                </a>

                <li className="nav-item">
                  <Link id="side-search-open" className="nav-link" to="/">
                    <span className="lnr lnr-magnifier"></span>
                  </Link>
                </li>
                <li className="nav-item only-desktop">
                  <Link className="nav-link" id="side-nav-open" to="/">
                    <span className="lnr lnr-menu"></span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <button className="btn btn-primary btn-shadow btn-lg">
            TAKE A TOUR ROUND THE HUB
             </button> */}
          </div>
        </nav>

        <div id="side-nav" className="sidenav">
          <a href="/" id="side-nav-close">
            X
          </a>

          <div className="sidenav-content">
            <p>Kuncen WB1, Wirobrajan 10010, DIY</p>
            <p>
              <span className="fs-16 primary-color">(+68) 120034509</span>
            </p>
            <p>info@yourdomain.com</p>
          </div>
        </div>
        <div id="side-search" className="sidenav">
          <a href="/" id="side-search-close">
            X
          </a>

          <div className="sidenav-content">
            <form action="">
              <div className="input-group md-form form-sm form-2 pl-0">
                <input
                  className="form-control my-0 py-1 red-border"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text red lighten-3"
                    id="basic-text1"
                  >
                    <span className="lnr lnr-magnifier"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="jumbotron d-flex align-items-center">
          <div className="container text-center">
            <h1 className="display-1 mb-4">
              NH
              <br />
              UB
            </h1>
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
