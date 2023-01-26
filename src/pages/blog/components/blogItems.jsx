const BlogItems = ({image, name}) => {
  return (
    <>
      {/* <!-- Blog Item --> */}
      <div className="col-md-4 blog-item-wrapper" data-aos="fade-up">
        <div className="blog-item">
          <div className="blog-img">
          {/* change to Link component for routing */}
            <a href="single.html">
              <img src={image} alt="" />
            </a>
          </div>
          <div className="blog-text">
            <div className="blog-tag">
              <a href="/">
                <h6>
                  <small>{name}</small>
                </h6>
              </a>
            </div>
            <div className="blog-title">
              <a href="single.html">
                <h4>Amazing Blog Title</h4>
              </a>
            </div>
            <div className="blog-meta">
              <p className="blog-date">30 May 2016</p> /
              <p className="blog-comment">
                <a href="/">23 Comments</a>
              </p>
            </div>
            <div className="blog-desc">
              <p>
                Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do
                eiu smod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="blog-author">
              <p>by John Doe</p>
            </div>
            <div className="blog-share-wrapper">
              <a className="blog-share" href="google.com">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a className="blog-share" href="google.com">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Blog Item --> */}
    </>
  );
};

export default BlogItems;
