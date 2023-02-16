import { Link } from 'react-router-dom';

const Works = ({ image, name, title, description }) => {
  return (
    <>
      {/* <!-- Blog Item --> */}
      <div className="col-md-4 blog-item-wrapper" data-aos="fade-up">
        <div className="blog-item">
          <div className="blog-img">
            {/* change to Link component for routing */}
            <Link to="/outSourcing">
              <img src={image} alt="" />
            </Link>
          </div>
          <div className="blog-text">
            <div className="blog-tag">
              <Link to="/outSourcing">
                <h6>
                  <small>{name}</small>
                </h6>
              </Link>
            </div>
            <div className="blog-title">
              <Link to="/outSourcing">
                <h4>{title}</h4>
              </Link>
            </div>

            <div className="blog-desc">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Blog Item --> */}
    </>
  );
};

export default Works;
