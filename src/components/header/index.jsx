import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bg from '../../img/bg.jpg';

const Header = (props) => {
    const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'light',
    };
  };

  return (
    <>
      <div data-spy="scroll" data-target="#navbar" className="static-layout">
        <div id="side-nav" className="sidenav" data-target="#navbar">
          <a href="/" id="side-nav-close">
            &times;
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
            &times;
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
        </div>{' '}
        <nav id="header-navbar" className="navbar navbar-expand-lg py-4">
          <div className="container">
            <Link
              className="navbar-brand d-flex align-items-center text-white"
              to="/"
            >
              <h3 className="font-weight-bolder mb-0">NHUB</h3>
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
                    to="/WorkSpace"
                  >
                    Work Space
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
                  <NavLink style={navLinkStyle} className="nav-link" to="/Blog">
                    Blog
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
          </div>
        </nav>
        <div
          className="jumbotron jumbotron-single d-flex align-items-center"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="container text-center">
            <h1 className="display-2 mb-4">{props.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
