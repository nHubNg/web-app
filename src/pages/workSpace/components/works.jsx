import { Link } from 'react-router-dom';

const Works = ({image, name, title}) => {
    return (
      <>
        {/* <!-- Blog Item --> */}
        <div className="col-md-4 blog-item-wrapper" data-aos="fade-up">
          <div className="blog-item">
            <div className="blog-img">
            {/* change to Link component for routing */}
              <Link  to="/singleBlog">
                <img src={image} alt="" />
              </Link>
            </div>
            <div className="blog-text">
              <div className="blog-tag">
                <Link  to="/singleBlog">
                  <h6>
                    <small>{name}</small>
                  </h6>
                </Link>
              </div>
              <div className="blog-title">
                <Link  to="/singleBlog">
                  <h4>{title}</h4>
                </Link>
              </div>
              
              <div className="blog-desc">
                <p>
                  Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do
                  eiu smod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
             
            </div>
          </div>
        </div>
        {/* <!-- End of Blog Item --> */}
      </>
    );
  };
  
  export default Works;
  